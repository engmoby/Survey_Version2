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
    public class UsersController : BaseApiController
    {
        private readonly IUserService _userService; 
        private readonly IUserFacade _userFacade; 
        private readonly IAreaFacade _areaFacade; 
        private readonly IDepartmentFacade _departmentFacade;
        private IRegionFacade _regionFacade;
        private ICityFacade _cityFacade;

        public UsersController(IUserFacade userFacade, IUserService userService, IAreaFacade areaFacade, IDepartmentFacade departmentFacade, IRegionFacade regionFacade, ICityFacade cityFacade)
        {
            _userFacade = userFacade;
            _userService = userService;
            _areaFacade = areaFacade;
            _departmentFacade = departmentFacade;
            _regionFacade = regionFacade;
            _cityFacade = cityFacade;
        } 
        [Route("api/Users", Name = "RegisterUser")]
        [HttpPost]
        public IHttpActionResult RegisterUser([FromBody] UserModel userModel)
        {
            var reurnUser = _userFacade.RegisterUser(Mapper.Map<UserDto>(userModel), UserId, TenantId); 
            return Ok(reurnUser);
        } 
        [Route("api/Users/EditRegisterUser", Name = "EditRegisterUser")]
        [HttpPost]
        public IHttpActionResult EditRegisterUser([FromBody] UserModel userModel)
        {
            var reurnUser = _userFacade.EditUserInfo(Mapper.Map<UserDto>(userModel), UserId, TenantId);
 
            return Ok(reurnUser);
        }

        [Route("api/Users/GetAllUsers", Name = "GetAllUsers")]
        [HttpGet]
        public IHttpActionResult GetAllUsers(int page = Page, int pagesize = PageSize)
        {
            var getAllDataForuser = _userService.GetAllUsers(page, pagesize, TenantId);
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
            var reurnUser = _userFacade.GetUser(userId, TenantId);
            return Ok(reurnUser);
        }
        

        [Route("api/Users/GetMaxAndConUsers", Name = "GetMaxAndConUsers")]
        [HttpGet]
        public IHttpActionResult GetMaxAndConUsers()
        {
            UserConsumedModel maxCon = Mapper.Map<UserConsumedModel>(_userFacade.GetMaxAndConsumedUsers(TenantId));

            return Ok(maxCon);

        }

        [Route("api/Users/Register", Name = "Register")]
        [HttpPost]
        public IHttpActionResult Register([FromBody] AdminModel adminModel)
        {
            //if (Request.Headers.Authorization.Scheme == "X-Auth-Token" &&
            //    Request.Headers.Authorization.Parameter == "asdasdas")

            _userFacade.AddNewGlobalUser(Mapper.Map<AdminDto>(adminModel));
            return Ok();
            //return Unauthorized();
        }

        [Route("api/Users/", Name = "UpdateGlobalUser")]
        [HttpPut]
        public IHttpActionResult UpdateGlobalUser([FromBody] AdminModel adminModel)
        {
            //if (Request.Headers.Authorization.Scheme == "X-Auth-Token" &&
            //    Request.Headers.Authorization.Parameter == "asdasdas")

            _userFacade.UpdateGlobalUser(Mapper.Map<AdminDto>(adminModel));
            return Ok();
            //return Unauthorized();
        }
        [Route("api/Users/Package", Name = "UpdatePackage")]
        [HttpPut]
        public IHttpActionResult UpdatePackage([FromBody] AdminModel adminModel)
        {
            //if (Request.Headers.Authorization.Scheme == "X-Auth-Token" &&
            //    Request.Headers.Authorization.Parameter == "asdasdas")

            _userFacade.UpdateAdminPackage(Mapper.Map<AdminDto>(adminModel));
            return Ok();
            //return Unauthorized();
        }

        [Route("api/Users/Departments", Name = "GetAllDepartmentsByUserId")]
        [HttpGet]
        public IHttpActionResult GetAllDepartmentsByUserId()
        {
            var data = Mapper.Map<DepartmentModel>(_departmentFacade.GetAllDepartmentByUserId(UserId));
            return Ok(data);
        }

        [Route("api/Users/Area", Name = "GetAllAreasByUserId")]
        [HttpGet]
        public IHttpActionResult GetAllAreasByUserId()
        {
            var data = Mapper.Map<AreaModel>(_areaFacade.GetAllAreasByUserId(UserId));
            return Ok(data);
        }

        [Route("api/Users/{userId:long}/Regions/", Name = "GetAllRegionsForUser")]
        [HttpGet]
        public IHttpActionResult GetAllRegionsForUser(long userId)
        {
            var regionModel = _regionFacade.GetAllRegionsForUser(userId);
            var data = Mapper.Map<List<RegionModel>>(regionModel.Data);
            return Ok(data);
        }
        [Route("api/Users/{userId:long}/Cities/", Name = "GetAllCitiesForUser")]
        [HttpGet]
        public IHttpActionResult GetAllCitiesForUser(long userId)
        {
            var cityModel = _cityFacade.GetAllCitiesForUser(userId);
            var data = Mapper.Map<List<CityModel>>(cityModel.Data);
            return Ok(data);
        }
        [Route("api/Users/{userId:long}/Areas/", Name = "GetAllAreasForUser")]
        [HttpGet]
        public IHttpActionResult GetAllAreasForUser(long userId)
        {
            var areaObj = _areaFacade.GetAllAreasForUser(userId);
            var data = Mapper.Map<List<AreaModel>>(areaObj.Data);
            return Ok(data);
        }

        [Route("api/Users/", Name = "GetAllUsersByType")]
        [HttpGet]
        public IHttpActionResult GetAllUsersByType(string type = "")
        {
            var results = _userFacade.GetAllUsersByType(TenantId, type);
            return PagedResponse("GetAllUsersByType", Page, PageSize, results.TotalCount, results.Data, results.IsParentTranslated);
        }
    }

}