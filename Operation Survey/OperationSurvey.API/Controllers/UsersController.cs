using System.Web.Http;
using AutoMapper;
using OperationSurvey.API.Infrastructure;
using OperationSurvey.API.Models;
using OperationSurvey.API.Providers;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using Newtonsoft.Json;
using OperationSurvey.BLL.DataServices.Interfaces;

namespace OperationSurvey.API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly IUserService _userService; 
        private readonly IUserFacade _userFacade; 
        public UsersController(IUserFacade userFacade, IUserService userService  )
        {
            _userFacade = userFacade;
            _userService = userService; 
        } 
        [Route("api/Users", Name = "RegisterUser")]
        [HttpPost]
        public IHttpActionResult RegisterUser([FromBody] UserModel userModel)
        {
            var reurnUser = _userFacade.RegisterUser(Mapper.Map<UserDto>(userModel)); 
            return Ok(reurnUser);
        } 
        [Route("api/Users/EditRegisterUser", Name = "EditRegisterUser")]
        [HttpPost]
        public IHttpActionResult EditRegisterUser([FromBody] UserModel userModel)
        {
            var reurnUser = _userFacade.EditUserInfo(Mapper.Map<UserDto>(userModel));
 
            return Ok(reurnUser);
        }

        [Route("api/Users/GetAllUsers", Name = "GetAllUsers")]
        [HttpGet]
        public IHttpActionResult GetAllUsers(int page = Page, int pagesize = PageSize)
        {
            var getAllDataForuser = _userService.GetAllUsers(page, pagesize);
            var userList = Mapper.Map<List<UserModel>>(getAllDataForuser.Data); 
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = getAllDataForuser.TotalCount;
            results.Data = Mapper.Map<List<UserModel>, List<UserDto>>(userList); 
            return PagedResponse("GetAllUsers", Page, PageSize, results.TotalCount, userList, results.IsParentTranslated); 
        }
         
        [Route("api/Users/GetUserById", Name = "GetUserById")]
        [HttpGet]
        public IHttpActionResult GetUserById(long userId)
        {
            var reurnUser = _userFacade.GetUser(userId);
            return Ok(reurnUser);
        }
    }

}