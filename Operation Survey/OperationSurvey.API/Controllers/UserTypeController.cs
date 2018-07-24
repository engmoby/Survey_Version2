
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
    public class UserTypeController : BaseApiController
    { 
        private readonly IUserTypeFacade _userTypeFacade;
        public UserTypeController(IUserTypeFacade userTypeFacade)
        {
            _userTypeFacade = userTypeFacade; 
        }

        [Route("api/UserTypes/GetAllUserTypes", Name = "GetAllUserTypes")]
        [HttpGet]
        public IHttpActionResult GetAllUserTypes(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto userTypeObj = _userTypeFacade.GetAllUserTypes(page, pagesize);
            var data = Mapper.Map<List<UserTypeModel>>(userTypeObj.Data);
            return PagedResponse("GetAllUserTypes", page, pagesize, userTypeObj.TotalCount, data, userTypeObj.IsParentTranslated);
        }


        [Route("api/UserTypes", Name = "CreateUserType")]
        [HttpPost]
        public IHttpActionResult CreateUserType([FromBody] UserTypeModel userTypeModel)
        {
            var reurnUserType = _userTypeFacade.CreateUserType(Mapper.Map<UserTypeDto>(userTypeModel));

            return Ok(reurnUserType);
        }


        [Route("api/UserTypes/EditUserType", Name = "EditUserType")]
        [HttpPost]
        public IHttpActionResult EditUserType([FromBody] UserTypeModel userTypeModel)
        {
            var reurnUserType = _userTypeFacade.EditUserType(Mapper.Map<UserTypeDto>(userTypeModel));

            return Ok(reurnUserType);
        }


        [Route("api/UserTypes/GetUserTypeById", Name = "GetUserTypeById")]
        [HttpGet]
        public IHttpActionResult GetUserTypeById(long userTypeId)
        {
            var reurnUserType = _userTypeFacade.GetUserType(userTypeId);
            return Ok(reurnUserType);
        }
    }

}