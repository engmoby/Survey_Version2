
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
        public QuestionController(IQuestionFacade questionFacade)
        {
            _questionFacade = questionFacade; 
        }

        [Route("api/Questions/GetAllQuestionsByUserId", Name = "GetAllQuestionsByUserId")]
        [HttpGet]
        public IHttpActionResult GetAllQuestionsByUserId(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto questionObj = _questionFacade.GetAllQuestionsByUserId(page, pagesize,UserId, TenantId);
            var data = Mapper.Map<List<QuestionModel>>(questionObj.Data);
            return PagedResponse("GetAllQuestionsByUserId", page, pagesize, questionObj.TotalCount, data, questionObj.IsParentTranslated);
        }



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
            var reurnQuestion = _questionFacade.CreateQuestion(Mapper.Map<QuestionDto>(questionModel),UserId, TenantId);

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
    }

}