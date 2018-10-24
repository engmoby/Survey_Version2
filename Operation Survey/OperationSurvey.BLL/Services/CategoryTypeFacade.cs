using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Elmah;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using OperationSurvey.Common.CustomException;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace OperationSurvey.BLL.Services
{
    public class CategoryTypeFacade:BaseFacade,ICategoryTypeFacade
    {
        private ICategoryTypeService _categoryTypeService;
        private ICategoryTypeTranslationService _categoryTypeTranslationService;
        private IQuestionService _questionService;
        public CategoryTypeFacade(IUnitOfWorkAsync unitOfWork, ICategoryTypeService categoryTypeService, ICategoryTypeTranslationService categoryTypeTranslationService, IQuestionService questionService):base(unitOfWork)
        {
            _categoryTypeService = categoryTypeService;
            _categoryTypeTranslationService = categoryTypeTranslationService;
            _questionService = questionService;
        }
        public CategoryTypeDto GetCategoryType (long categoryTypeId, int tenantId)
        {
            return Mapper.Map<CategoryTypeDto>(_categoryTypeService.Query(x => x.CategoryTypeId == categoryTypeId && x.TenantId == tenantId).Select().FirstOrDefault());
        }

        public CategoryTypeDto CreateCategoryType(CategoryTypeDto categoryTypeDto, int userId, int tenantId)
        {
            if (GetCategoryType(categoryTypeDto.CategoryTypeId, tenantId) != null)
            {
                return EditCategoryType(categoryTypeDto, userId, tenantId);
            }
            ValidateMenu(categoryTypeDto, tenantId);
            var userTypeObj = Mapper.Map<CategoryType>(categoryTypeDto);
            foreach (var userTypeName in categoryTypeDto.TitleDictionary)
            {
                //var check = _typeTranslationService.Query(x => x.Title == userTypeName.Value && x.TenantId == tenantId).Select();
                //if (check.Any())
                //    throw new ValidationException(ErrorCodes.RecordIsExist);
                if (string.IsNullOrEmpty(userTypeName.Value))
                    throw new ValidationException(ErrorCodes.NameIsExist);

                userTypeObj.CategoryTypeTranslations.Add(new CategoryTypeTranslation
                {
                    Title = userTypeName.Value,
                    Language = userTypeName.Key
                });
            }

            userTypeObj.CreationTime = Strings.CurrentDateTime;
            userTypeObj.CreatorUserId = userId;
            userTypeObj.TenantId = tenantId;
            _categoryTypeTranslationService.InsertRange(userTypeObj.CategoryTypeTranslations);
            _categoryTypeService.Insert(userTypeObj);
            SaveChanges();
            return categoryTypeDto;
        }

        public CategoryTypeDto EditCategoryType(CategoryTypeDto categoryTypeDto, int userId, int tenantId)
        {
            var userTypeObj = _categoryTypeService.Query(x => x.CategoryTypeId == categoryTypeDto.CategoryTypeId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (userTypeObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateMenu(categoryTypeDto, tenantId);

            foreach (var userTypeName in categoryTypeDto.TitleDictionary)
            {
                //var check = _typeTranslationService.Query(x => x.Title == userTypeName.Value && x.TenantId == tenantId).Select();
                //if (check.Any())
                //    throw new ValidationException(ErrorCodes.RecordIsExist);

                var userTypeTranslation = userTypeObj.CategoryTypeTranslations.FirstOrDefault(x => x.Language.ToLower() == userTypeName.Key.ToLower() && x.CategoryTypeId == categoryTypeDto.CategoryTypeId);
                if (userTypeTranslation == null)
                {
                    userTypeObj.CategoryTypeTranslations.Add(new CategoryTypeTranslation
                    {
                        Title = userTypeName.Value,
                        Language = userTypeName.Key
                    });
                }
                else
                    userTypeTranslation.Title = userTypeName.Value;
            }
            userTypeObj.LastModificationTime = Strings.CurrentDateTime;
            userTypeObj.LastModifierUserId = userId;
            userTypeObj.IsDeleted = categoryTypeDto.IsDeleted;
            userTypeObj.Time = categoryTypeDto.Time;
            userTypeObj.Type = categoryTypeDto.Type;
            userTypeObj.Emails = categoryTypeDto.Emails;
            userTypeObj.Body = categoryTypeDto.Body;
            _categoryTypeService.Update(userTypeObj);
            SaveChanges();
            return categoryTypeDto;

        }

        public PagedResultsDto GetAllCategoryTypes(int page, int pageSize, int tenantId)
        {
            return _categoryTypeService.GetAllCategoryTypes(page, pageSize, tenantId);
        }
        private void ValidateMenu(CategoryTypeDto categoryTypeDto, long tenantId)
        {
            foreach (var name in categoryTypeDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_categoryTypeTranslationService.CheckNameExist(name.Value, name.Key, categoryTypeDto.CategoryTypeId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }

        public void HandleUnaswerdQuestion()
        {
            var categoryTypes = _categoryTypeService.Query(x=>x.Emails != null && x.Time >0 && x.Body != null && x.Type != null).Select().ToList();

            foreach (var categoryType in categoryTypes)
            {
                foreach (var category in categoryType.CategoryTypeCategories)
                {
                    var questions = _questionService.Query(x => x.TenantId == categoryType.TenantId &&
                                                x.CategoryId == category.CategoryId).Select().ToList();
                    foreach (var question in questions)
                    {
                        var lastDateTime = question.Answers.OrderByDescending(x => x.CreationTime)
                            .Select(x => x.CreationTime).FirstOrDefault();
                        if (categoryType.Type.ToLower() == "daily")
                        {
                            lastDateTime = lastDateTime.AddDays(1);
                        }
                        else if (categoryType.Type.ToLower() == "weekly")
                        {
                            lastDateTime = lastDateTime.AddDays(7);
                        }
                        else if (categoryType.Type.ToLower() == "monthly")
                        {
                            lastDateTime = lastDateTime.AddMonths(1);
                        }
                        else if (categoryType.Type.ToLower() == "yearly")
                        {
                            lastDateTime = lastDateTime.AddYears(1);
                        }
                        if ((DateTime.Now - lastDateTime).TotalMinutes > categoryType.Time)
                        {
                            try
                            {
                                SendHtmlFormattedEmail(categoryType.Emails, "Survey", categoryType.Body);
                            }
                            catch (Exception e)
                            {
                                ErrorSignal.FromCurrentContext().Raise(e);
                            }

                        }
                    }
                }
            }
        }

        private void SendHtmlFormattedEmail(string recepientEmail, string subject, string body)
        {
            string FromMail = "gmggroupsoftware@gmail.com";
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("in-v3.mailjet.com");
            mail.From = new MailAddress(FromMail);
            mail.To.Add(recepientEmail);
            mail.Subject = subject;
            mail.IsBodyHtml = true;
            mail.Body = body;
            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("9d7c1de804eabdf8fedf498bffadd546", "93187ce363c3beb198214badc25cdc3c");
            SmtpServer.EnableSsl = false;
            SmtpServer.Send(mail);

        }
    }
}
