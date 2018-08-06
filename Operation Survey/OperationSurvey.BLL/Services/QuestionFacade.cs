using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using AutoMapper;
using Microsoft.Practices.ObjectBuilder2;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using OperationSurvey.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.Services
{
    public class QuestionFacade : BaseFacade, IQuestionFacade
    {
        private readonly IQuestionService _questionService;
        private readonly IUserFacade _userFacade;
        private readonly ICategoryFacade _categoryFacade;
        private readonly IQuestionTranslationService _questionTranslationService;
        private readonly IQuestionDetailsService _questionDetailsService;
        private readonly IQuestionDetailsTranslationService _questionDetailsTranslationService;

        public QuestionFacade(IQuestionService questionService, IUnitOfWorkAsync unitOfWork, IQuestionTranslationService typeTranslationService, IUserFacade userFacade, ICategoryFacade categoryFacade, IQuestionDetailsTranslationService questionDetailsTranslationService, IQuestionDetailsService questionDetailsService) : base(unitOfWork)
        {
            _questionService = questionService;
            _questionTranslationService = typeTranslationService;
            _userFacade = userFacade;
            _categoryFacade = categoryFacade;
            _questionDetailsTranslationService = questionDetailsTranslationService;
            _questionDetailsService = questionDetailsService;
        }

        public QuestionFacade(IQuestionService questionService, IQuestionTranslationService typeTranslationService, IUserFacade userFacade, ICategoryFacade categoryFacade, IQuestionDetailsTranslationService questionDetailsTranslationService, IQuestionDetailsService questionDetailsService)
        {
            _questionService = questionService;
            _questionTranslationService = typeTranslationService;
            _userFacade = userFacade;
            _categoryFacade = categoryFacade;
            _questionDetailsTranslationService = questionDetailsTranslationService;
            _questionDetailsService = questionDetailsService;
        }

        public QuestionDto GetQuestion(long questionId, int tenantId)
        {
            var retque = _questionService.Query(x => x.QuestionId == questionId && x.TenantId == tenantId).Select()
                .FirstOrDefault();
            return Mapper.Map<QuestionDto>(retque);
        }

        public QuestionDto CreateQuestion(QuestionDto questionDto, int userId, int tenantId)
        {
            if (GetQuestion(questionDto.QuestionId, tenantId) != null)
            {
                return EditQuestion(questionDto, userId, tenantId);
            }

            var questionObj = Mapper.Map<Question>(questionDto);
            foreach (var questionName in questionDto.TitleDictionary)
            {
                questionObj.QuestionTranslations.Add(new QuestionTranslation
                {
                    Title = questionName.Value,
                    Language = questionName.Key,
                    TenantId = tenantId
                });
            }

            questionObj.CreationTime = Strings.CurrentDateTime;
            questionObj.CreatorUserId = userId;
            questionObj.TenantId = tenantId;

            questionObj.QuestionDetailses
                .ForEach(x => _questionDetailsTranslationService.InsertRange(x.QuestionDetailsTranslations));


            questionObj.QuestionDetailses
                .ForEach(x => _questionDetailsService.Insert(x));


            _questionTranslationService.InsertRange(questionObj.QuestionTranslations);
            _questionService.Insert(questionObj);
            SaveChanges();
            return questionDto;
        }

        public QuestionDto EditQuestion(QuestionDto questionDto, int userId, int tenantId)
        {
            var questionObj = _questionService.Query(x => x.QuestionId == questionDto.QuestionId && x.TenantId == tenantId).Select().FirstOrDefault();
            if (questionObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var questionName in questionDto.TitleDictionary)
            {
                var questionTranslation = questionObj.QuestionTranslations.FirstOrDefault(x => x.Language.ToLower() == questionName.Key.ToLower()
                && x.QuestionId == questionDto.QuestionId);
                if (questionTranslation == null)
                {
                    questionObj.QuestionTranslations.Add(new QuestionTranslation
                    {
                        Title = questionName.Value,
                        Language = questionName.Key
                    });
                }
                else
                    questionTranslation.Title = questionName.Value;
            }
            var detailsObj = Mapper.Map<QuestionDetails>(null);

            //if (questionDto.QuestionDetailses.Count < questionObj.QuestionDetailses.Count)
            //{

            var deletedetails = new QuestionDetails[questionObj.QuestionDetailses.Count];

            questionObj.QuestionDetailses.CopyTo(deletedetails, 0);

            foreach (var roleObjRolePermission in deletedetails)
            {
                var checkIfExist = questionDto.QuestionDetailses.FirstOrDefault(x => x.QuestionDetailsId == roleObjRolePermission.QuestionDetailsId);
                if (checkIfExist == null)
                {
                    _questionDetailsService.Delete(roleObjRolePermission);

                }
            }


            // _questionDetailsService.Delete(questionObj.QuestionDetailses);
            //var list = questionObj.QuestionDetailses;
            //var objjj = new QuestionDetails();
            //foreach (var questionObjQuestionDetailse in questionObj.QuestionDetailses)
            //{
            //    var checkIfExist = questionDto.QuestionDetailses.FirstOrDefault(x => x.QuestionDetailsId == questionObjQuestionDetailse.QuestionDetailsId);
            //    if (checkIfExist == null)
            //    {
            //        objjj = questionObjQuestionDetailse;
            //        list.Remove(objjj);
            //    }

            //}
            // }

            foreach (var questionDtoQuestionDetailse in questionDto.QuestionDetailses)
            {
                detailsObj = Mapper.Map<QuestionDetails>(questionDtoQuestionDetailse);
                var checkDetailsExist = questionObj.QuestionDetailses.Where(x => x.QuestionDetailsId == detailsObj.QuestionDetailsId);
                if (!checkDetailsExist.Any())
                    questionObj.QuestionDetailses.Add(detailsObj);
                else
                {
                    foreach (var questionName in questionDtoQuestionDetailse.TitleDictionary)
                    {
                        var getQuestionDetails = _questionDetailsService.Query(x => x.QuestionDetailsId == questionDtoQuestionDetailse.QuestionDetailsId).Select().FirstOrDefault();

                        if (getQuestionDetails != null)
                        {
                            var detailsTranslation = getQuestionDetails.QuestionDetailsTranslations
                                .FirstOrDefault(x => x.Language.ToLower() == questionName.Key.ToLower() && x.QuestionDetailsId == getQuestionDetails.QuestionDetailsId);
                            if (detailsTranslation == null)
                            {
                                getQuestionDetails.QuestionDetailsTranslations.Add(new QuestionDetailsTranslation
                                {
                                    Title = questionName.Value,
                                    Language = questionName.Key
                                });
                            }
                            else
                                detailsTranslation.Title = questionName.Value;
                        }
                    }
                    //  questionObj.QuestionDetailses.Add(detailsObj);

                    questionObj.QuestionDetailses.ForEach(x => _questionDetailsService.Update(x));
                }
                //foreach (var VARIABLE in questionDtoQuestionDetailse.TitleDictionary)
                //{
                //    questionObj.QuestionDetailses.QuestionTranslations.Add(new QuestionTranslation
                //    {
                //        Title = questionName.Value,
                //        Language = questionName.Key,
                //        TenantId = tenantId
                //    });
                //}
                //questionObj.QuestionDetailses.Add(new QuestionDetails
                //{
                //    QuestionDetailsTranslations = questionDtoQuestionDetailse.TitleDictionary
                //});
            }

            //questionObj.QuestionDetailses
            //    .ForEach(x => _questionDetailsTranslationService.InsertRange(x.QuestionDetailsTranslations));


            //questionObj.QuestionDetailses
            //    .ForEach(x => _questionDetailsService.Insert(x));

            questionObj.LastModificationTime = Strings.CurrentDateTime;
            questionObj.LastModifierUserId = userId;
            questionObj.IsDeleted = questionDto.IsDeleted;
            questionObj.IsStatic = questionDto.IsStatic;
            _questionService.Update(questionObj);
            SaveChanges();
            return questionDto;

        }

        public PagedResultsDto GetAllQuestions(int page, int pageSize, int tenantId)
        {
            return _questionService.GetAllQuestions(page, pageSize, tenantId);
        }
        public PagedResultsDto GetAllQuestionsByUserId(int page, int pageSize, int userId, int tenantId)
        {
            var questionList = _questionService.GetAllQuestions(tenantId);
            var userRoles = _userFacade.GetUser(userId).UserRoles;
            var categoryRoles = new List<CategoryRoleDto>();
            ArrayList categoryIds = new ArrayList();
            var returnQuestionList = new List<QuestionDto>();
            foreach (var quesObj in questionList)
            {
                var checkExist = _categoryFacade.GetCategory(quesObj.CategoryId, tenantId).CategoryRoles;
                if (!categoryRoles.Contains(checkExist.FirstOrDefault()))
                    categoryRoles.AddRange(checkExist);
            }

            foreach (var categoryRoleDto in categoryRoles)
            {
                var checkUserRoles = userRoles.Where(x => x.RoleId == categoryRoleDto.RoleId);
                if (checkUserRoles.Any())
                //if (userRoles.Any(x => x.Role.RoleId == categoryRoleDto.RoleId))
                {
                    var id = categoryRoleDto.CategoryId;
                    if (!categoryIds.Contains(id))
                        categoryIds.Add(id);
                }
            }
            foreach (long categoryId in categoryIds)
            {
                var checkExist = questionList.Where(x => x.CategoryId == categoryId).ToList();
                if (!returnQuestionList.Contains(checkExist.FirstOrDefault()))
                    returnQuestionList.AddRange(checkExist);

            }

            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = returnQuestionList.Select(x => x).Count();
            results.Data = returnQuestionList.OrderBy(x => x.QuestionId).ToList();
            return results;
        }
    }
}
