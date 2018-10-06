using System;
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
        private readonly IUserService _userService;
        private readonly IAnswerDetailsService _answerDetailsService;

        public QuestionFacade(IQuestionService questionService, IUnitOfWorkAsync unitOfWork, IQuestionTranslationService typeTranslationService, IUserFacade userFacade, ICategoryFacade categoryFacade, IQuestionDetailsTranslationService questionDetailsTranslationService, IQuestionDetailsService questionDetailsService, IUserService userService, IAnswerDetailsService answerDetailsService) : base(unitOfWork)
        {
            _questionService = questionService;
            _questionTranslationService = typeTranslationService;
            _userFacade = userFacade;
            _categoryFacade = categoryFacade;
            _questionDetailsTranslationService = questionDetailsTranslationService;
            _questionDetailsService = questionDetailsService;
            _userService = userService;
            _answerDetailsService = answerDetailsService;
        }

        public QuestionFacade(IQuestionService questionService, IQuestionTranslationService typeTranslationService, IUserFacade userFacade, ICategoryFacade categoryFacade, IQuestionDetailsTranslationService questionDetailsTranslationService, IQuestionDetailsService questionDetailsService, IUserService userService, IAnswerDetailsService answerDetailsService)
        {
            _questionService = questionService;
            _questionTranslationService = typeTranslationService;
            _userFacade = userFacade;
            _categoryFacade = categoryFacade;
            _questionDetailsTranslationService = questionDetailsTranslationService;
            _questionDetailsService = questionDetailsService;
            _userService = userService;
            _answerDetailsService = answerDetailsService;
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
        public PagedResultsDto GetAllQuestionsByUserId(int page, int pageSize, int userId, int tenantId, long departmentId , long categoryIdFilter,long catgoryTypeId)
        {
            var user = _userService.Find(userId);
            PagedResultsDto results = new PagedResultsDto();
            if (user.IsStatic)
            {
                results = new PagedResultsDto();
                results.TotalCount = _questionService.Query(x=>x.TenantId == tenantId && !x.IsDeleted).Select().Count();
                results.Data = Mapper.Map<List<QuestionDto>>(_questionService
                    .Query(x => x.TenantId == tenantId && !x.IsDeleted
                                && (departmentId <= 0 || x.Category.DepartmentId == departmentId)
                                && (categoryIdFilter <= 0 || x.CategoryId == categoryIdFilter)
                    && (catgoryTypeId <= 0 || x.Category.CategoryTypeCategories.Select(c=>c.CategoryTypeId).Contains(catgoryTypeId))).Select().OrderBy(x => x.QuestionId).ToList());
            }
            else
            {
                var questionList = _questionService.GetAllQuestions(tenantId,departmentId,categoryIdFilter,catgoryTypeId);
                var userRoles = user.UserRoles;
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

                results = new PagedResultsDto();
                results.TotalCount = returnQuestionList.Select(x => x).Count();
                results.Data = returnQuestionList.OrderBy(x => x.QuestionId).ToList();
            }
            return results;
        }

        public QuestionDashBoard GetQuestionDashBoard(long questionId, long countryId, long regionId, long cityId, long areaId, long branchId, string from , string to,long AnsweredBy)
        {
            var question =_questionService.Find(questionId);
            QuestionDashBoard questionDashBoard = new QuestionDashBoard();
            DateTime fromDateTime = !String.IsNullOrEmpty(from) ? DateTime.Parse(from) : DateTime.MinValue;
            DateTime toDateTime = !String.IsNullOrEmpty(to) ? DateTime.Parse(to) : DateTime.MaxValue;

            questionDashBoard.QuestionId = questionId;
            var answers = question.Answers.Where(x => x.CreationTime >= fromDateTime
                                                      && x.CreationTime <= toDateTime
                                                      && (countryId <= 0 ||
                                                          x.Branch.Area.City.Region.CountryId == countryId)
                                                      && (regionId <= 0 || x.Branch.Area.City.RegionId == regionId)
                                                      && (cityId <= 0 || x.Branch.Area.CityId == cityId)
                                                      && (areaId <= 0 || x.Branch.AreaId == areaId)
                                                      && (branchId <= 0 || x.BranchId == branchId)
                                                      && (AnsweredBy <=0 || x.CreatorUserId == AnsweredBy)).ToList();
            if (question.QuestionTypeId == Enums.QuestionType.LikeDislike)
            {
                questionDashBoard.LikeCount = answers.Count(x => x.AnswerDetails.Any(a => a.Value == 1));
                questionDashBoard.DisLikeCount = answers.Count(x => x.AnswerDetails.Any(a => a.Value == 0));
            }
            else if (question.QuestionTypeId == Enums.QuestionType.Rate)
            {
                questionDashBoard.OneStartCount = answers.Count(x => x.AnswerDetails.Any(a => a.Value == 1));
                questionDashBoard.TwoStartCount = answers.Count(x => x.AnswerDetails.Any(a => a.Value == 2));
                questionDashBoard.ThreeStartCount = answers.Count(x => x.AnswerDetails.Any(a => a.Value == 3));
                questionDashBoard.FourStartCount = answers.Count(x => x.AnswerDetails.Any(a => a.Value == 4));
                questionDashBoard.FiveStartCount = answers.Count(x => x.AnswerDetails.Any(a => a.Value == 5));
                questionDashBoard.Average =
                    (questionDashBoard.OneStartCount + (questionDashBoard.TwoStartCount * 2) +
                     (questionDashBoard.ThreeStartCount * 3) +
                     (questionDashBoard.FourStartCount * 4) + (questionDashBoard.FiveStartCount * 5))
                    / (questionDashBoard.OneStartCount + questionDashBoard.TwoStartCount +
                       questionDashBoard.ThreeStartCount + questionDashBoard.FourStartCount +questionDashBoard.FiveStartCount);

            }
            else if (question.QuestionTypeId == Enums.QuestionType.Checkbox)
            {
                questionDashBoard.OptionsCount = _answerDetailsService.Query(x => x.Answer.QuestionId == questionId &&
                                                                                  x.Answer.CreationTime >= fromDateTime
                                                                                  && x.Answer.CreationTime <= toDateTime
                                                                                  && (countryId <= 0 || x.Answer.Branch.Area.City.Region.CountryId == countryId)
                                                                                  && (regionId <= 0 || x.Answer.Branch.Area.City.RegionId == regionId)
                                                                                  && (cityId <= 0 || x.Answer.Branch.Area.CityId == cityId)
                                                                                  && (areaId <= 0 || x.Answer.Branch.AreaId == areaId)
                                                                                  && (branchId <= 0 || x.Answer.BranchId == branchId)
                                                                                  && (AnsweredBy <= 0 || x.Answer.CreatorUserId == AnsweredBy))
                    .Select()
                    .GroupBy(x => x.QuestionDetailsId, (k, v) => new {key = k, answers = v.ToList()}).ToDictionary(k=>k.key.Value,v=>v.answers.Count);
            }
            return questionDashBoard;
        }
    }
}
