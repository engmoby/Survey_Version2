using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using AutoMapper;
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
        private readonly IQuestionTranslationService _typeTranslationService;

        public QuestionFacade(IQuestionService questionService, IUnitOfWorkAsync unitOfWork, IQuestionTranslationService typeTranslationService, IUserFacade userFacade, ICategoryFacade categoryFacade) : base(unitOfWork)
        {
            _questionService = questionService;
            _typeTranslationService = typeTranslationService;
            _userFacade = userFacade;
            _categoryFacade = categoryFacade;
        }

        public QuestionFacade(IQuestionService questionService, IQuestionTranslationService typeTranslationService, IUserFacade userFacade, ICategoryFacade categoryFacade)
        {
            _questionService = questionService;
            _typeTranslationService = typeTranslationService;
            _userFacade = userFacade;
            _categoryFacade = categoryFacade;
        }

        public QuestionDto GetQuestion(long questionId, int tenantId)
        {
            return Mapper.Map<QuestionDto>(_questionService.Query(x => x.QuestionId == questionId && x.TenantId == tenantId).Select().FirstOrDefault());
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
            _typeTranslationService.InsertRange(questionObj.QuestionTranslations);
            _questionService.Insert(questionObj);
            SaveChanges();
            return questionDto;
        }

        public QuestionDto EditQuestion(QuestionDto questionDto, int userId, int tenantId)
        {
            var QuestionObj = _questionService.Query(x => x.QuestionId == questionDto.QuestionId && x.TenantId == tenantId).Select().FirstOrDefault();
            if (QuestionObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var QuestionName in questionDto.TitleDictionary)
            {
                var QuestionTranslation = QuestionObj.QuestionTranslations.FirstOrDefault(x => x.Language.ToLower() == QuestionName.Key.ToLower()
                && x.QuestionId == questionDto.QuestionId);
                if (QuestionTranslation == null)
                {
                    QuestionObj.QuestionTranslations.Add(new QuestionTranslation
                    {
                        Title = QuestionName.Value,
                        Language = QuestionName.Key
                    });
                }
                else
                    QuestionTranslation.Title = QuestionName.Value;
            }

            QuestionObj.LastModificationTime = Strings.CurrentDateTime;
            QuestionObj.LastModifierUserId = userId;
            QuestionObj.IsDeleted = questionDto.IsDeleted;
            QuestionObj.IsStatic = questionDto.IsStatic;
            _questionService.Update(QuestionObj);
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
            results.Data = returnQuestionList.OrderBy(x => x.QuestionId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
            return results;
        }
    }
}
