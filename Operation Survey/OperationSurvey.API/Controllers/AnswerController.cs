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
    public class AnswerController : BaseApiController
    { 
        private readonly IAnswerFacade _AnswerFacade;
        public AnswerController(IAnswerFacade AnswerFacade)
        {
            _AnswerFacade = AnswerFacade; 
        }

        [Route("api/Answers/GetAllAnswers", Name = "GetAllAnswers")]
        [HttpGet]
        public IHttpActionResult GetAllAnswers(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto answerObj = _AnswerFacade.GetAllAnswers(page, pagesize, TenantId);
            var data = Mapper.Map<List<AnswerModel>>(answerObj.Data);
            return PagedResponse("GetAllAnswers", page, pagesize, answerObj.TotalCount, data, answerObj.IsParentTranslated);
        }


        [Route("api/Answers", Name = "CreateAnswer")]
        [HttpPost]
        public IHttpActionResult CreateAnswer([FromBody] AnswerModel answerModel)
        {
            var reurnAnswer = _AnswerFacade.CreateAnswer(Mapper.Map<AnswerDto>(answerModel),UserId, TenantId);

            return Ok(reurnAnswer);
        }


        [Route("api/Answers/EditAnswer", Name = "EditAnswer")]
        [HttpPost]
        public IHttpActionResult EditAnswer([FromBody] AnswerModel answerModel)
        {
            var reurnAnswer = _AnswerFacade.EditAnswer(Mapper.Map<AnswerDto>(answerModel), UserId, TenantId);

            return Ok(reurnAnswer);
        }


        [Route("api/Answers/GetAnswerById", Name = "GetAnswerById")]
        [HttpGet]
        public IHttpActionResult GetAnswerById(long answerId)
        {
            var reurnAnswer = _AnswerFacade.GetAnswer(answerId, TenantId);
            return Ok(reurnAnswer);
        }
    }

}