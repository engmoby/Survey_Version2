
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
    public class DepartmentController : BaseApiController
    { 
        private readonly IDepartmentFacade _departmentFacade;
        public DepartmentController(IDepartmentFacade departmentFacade)
        {
            _departmentFacade = departmentFacade; 
        }

        [Route("api/Departments/GetAllDepartments", Name = "GetAllDepartments")]
        [HttpGet]
        public IHttpActionResult GetAllDepartments(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto departmentObj = _departmentFacade.GetAllDepartments(page, pagesize, TenantId);
            var data = Mapper.Map<List<DepartmentModel>>(departmentObj.Data);
            return PagedResponse("GetAllDepartments", page, pagesize, departmentObj.TotalCount, data, departmentObj.IsParentTranslated);
        }


        [Route("api/Departments", Name = "CreateDepartment")]
        [HttpPost]
        public IHttpActionResult CreateDepartment([FromBody] DepartmentModel departmentModel)
        {
            var reurnDepartment = _departmentFacade.CreateDepartment(Mapper.Map<DepartmentDto>(departmentModel), UserId, TenantId);

            return Ok(reurnDepartment);
        }


        [Route("api/Departments/EditDepartment", Name = "EditDepartment")]
        [HttpPost]
        public IHttpActionResult EditDepartment([FromBody] DepartmentModel departmentModel)
        {
            var reurnDepartment = _departmentFacade.EditDepartment(Mapper.Map<DepartmentDto>(departmentModel), UserId, TenantId);

            return Ok(reurnDepartment);
        }


        [Route("api/Departments/GetDepartmentById", Name = "GetDepartmentById")]
        [HttpGet]
        public IHttpActionResult GetDepartmentById(long departmentId)
        {
            var reurnDepartment = _departmentFacade.GetDepartment(departmentId, TenantId);
            return Ok(reurnDepartment);
        }
    }

}