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
        private readonly IAnswerFacade _answerFacade;
        public AnswerController(IAnswerFacade answerFacade)
        {
            _answerFacade = answerFacade; 
        }

        [Route("api/Answers/GetAllAnswers", Name = "GetAllAnswers")]
        [HttpGet]
        public IHttpActionResult GetAllAnswers(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto answerObj = _answerFacade.GetAllAnswers(page, pagesize, TenantId);
            var data = Mapper.Map<List<AnswerModel>>(answerObj.Data);
            return PagedResponse("GetAllAnswers", page, pagesize, answerObj.TotalCount, data, answerObj.IsParentTranslated);
        }


        [Route("api/Answers", Name = "CreateAnswer")]
        [HttpPost]
        public IHttpActionResult CreateAnswer([FromBody] List<AnswerModel> answerModel)
        {
            _answerFacade.CreateAnswer(Mapper.Map<List<AnswerDto>>(answerModel), UserId, TenantId);

            return Ok();
        }


        //[Route("api/Answers", Name = "CreateAnswer")]
        //[HttpPost]
        //public IHttpActionResult CreateAnswer([FromBody] AnswerModel answerModel)
        //{
        //    var reurnAnswer = _answerFacade.CreateAnswer(Mapper.Map<AnswerDto>(answerModel), UserId, TenantId);

        //    return Ok(reurnAnswer);
        //}

        [Route("api/Answers/GetAnswerById", Name = "GetAnswerById")]
        [HttpGet]
        public IHttpActionResult GetAnswerById(long answerId)
        {
            var reurnAnswer = _answerFacade.GetAnswer(answerId, TenantId);
            return Ok(reurnAnswer);
        }

        

    }

}