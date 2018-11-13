
using System.Web.Http;
using AutoMapper;
using OperationSurvey.API.Infrastructure;
using OperationSurvey.API.Models;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using System.Collections.Generic;
using OperationSurvey.BLL.DataServices.Interfaces;

namespace OperationSurvey.API.Controllers
{
    public class QuestionController : BaseApiController
    {
        private readonly IQuestionFacade _questionFacade;
        private readonly IAnswerFacade _answerFacade;

        public QuestionController(IQuestionFacade questionFacade, IAnswerFacade answerFacade)
        {
            _questionFacade = questionFacade;
            _answerFacade = answerFacade;
        }

        [Route("api/Questions/GetAllQuestionsByUserId", Name = "GetAllQuestionsByUserId")]
        [HttpGet]
        public IHttpActionResult GetAllQuestionsByUserId(int page = Page, int pagesize = PageSize, long departmentId = 0, long categoryId = 0, long catgoryTypeId = 0, string pageName = "")
        {
            PagedResultsDto questionObj = _questionFacade.GetAllQuestionsByUserId(page, pagesize, UserId, TenantId, departmentId, categoryId, catgoryTypeId, pageName);
            var data = Mapper.Map<List<QuestionModel>>(questionObj.Data);
            return PagedResponse("GetAllQuestionsByUserId", page, pagesize, questionObj.TotalCount, data, questionObj.IsParentTranslated);
        }

        //[Route("api/Questions/CheckUserAnswersByUserId", Name = "GetAllQuestionsByUserId")]
        //[HttpGet]
        //public IHttpActionResult GetAllQuestionsByUserId(int page = Page, int pagesize = PageSize, long departmentId = 0, long categoryId = 0, long catgoryTypeId = 0, string pageName = "")
        //{
        //    PagedResultsDto questionObj = _questionFacade.GetAllQuestionsByUserId(page, pagesize, UserId, TenantId, departmentId, categoryId, catgoryTypeId, pageName);
        //    var data = Mapper.Map<List<QuestionModel>>(questionObj.Data);
        //    return PagedResponse("GetAllQuestionsByUserId", page, pagesize, questionObj.TotalCount, data, questionObj.IsParentTranslated);
        //}
        [Route("api/Questions/GetAllQuestions", Name = "GetAllQuestions")]
        [HttpGet]
        public IHttpActionResult GetAllQuestions(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto questionObj = _questionFacade.GetAllQuestions(page, pagesize, TenantId);

            var data = Mapper.Map<List<QuestionModel>>(questionObj.Data);
            return PagedResponse("GetAllQuestions", page, pagesize, questionObj.TotalCount, data, questionObj.IsParentTranslated);
        }


        [Route("api/Questions", Name = "CreateQuestion")]
        [HttpPost]
        public IHttpActionResult CreateQuestion([FromBody] QuestionModel questionModel)
        {
            var reurnQuestion = _questionFacade.CreateQuestion(Mapper.Map<QuestionDto>(questionModel), UserId, TenantId);
             

            return Ok(reurnQuestion);
        }


        [Route("api/Questions/EditQuestion", Name = "EditQuestion")]
        [HttpPost]
        public IHttpActionResult EditQuestion([FromBody] QuestionModel questionModel)
        {
            var reurnQuestion = _questionFacade.EditQuestion(Mapper.Map<QuestionDto>(questionModel), UserId, TenantId);

            return Ok(reurnQuestion);
        }


        [Route("api/Questions/GetQuestionById", Name = "GetQuestionById")]
        [HttpGet]
        public IHttpActionResult GetQuestionById(long questionId)
        {
            var reurnQuestion = _questionFacade.GetQuestion(questionId, TenantId);
            return Ok(reurnQuestion);
        }

        [Route("api/Questions/{questionId:long}/answers", Name = "GetAnswers")]
        [HttpGet]
        //[ResponseType(typeof(List<RequestModel>))]
        public IHttpActionResult GetAnswers(long questionId, int page = Page, int pagesize = PageSize, long countryId = 0, long regionId = 0,
            long cityId = 0, long areaId = 0, long branchId = 0, string from = "", string to = "")
        {
            PagedResultsDto answers = _answerFacade.GetAnswers(page, pagesize, questionId, countryId, regionId, cityId, areaId, branchId, from, to);
            var data = Mapper.Map<List<AnswerModel>>(answers.Data);

            return PagedResponse("GetAnswers", page, pagesize, answers.TotalCount, data, false);
        }

        [Route("api/Questions/{questionId:long}/GetAnswersByProjectId", Name = "GetAnswersByProjectId")]
        [HttpGet]
        //[ResponseType(typeof(List<RequestModel>))]
        public IHttpActionResult GetAnswersByProjectId(long questionId, long projectId, int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto answers = _answerFacade.GetAnswerByProjectId(page, pagesize, projectId, questionId);
            var data = Mapper.Map<List<AnswerModel>>(answers.Data); 
            return PagedResponse("GetAnswersByProjectId", page, pagesize, answers.TotalCount, data, false);
        }


        [Route("api/Questions/{questionId:long}/dashboard", Name = "GetQuestionDashBoard")]
        [HttpGet]
        public IHttpActionResult GetQuestionDashBoard(long questionId, long countryId = 0, long regionId = 0, long cityId = 0, long areaId = 0, long branchId = 0, string from = "", string to = "", long AnsweredBy = 0)
        {
            return Ok(_questionFacade.GetQuestionDashBoard(questionId, countryId, regionId, cityId, areaId, branchId, from, to, AnsweredBy));
        }
    }

}