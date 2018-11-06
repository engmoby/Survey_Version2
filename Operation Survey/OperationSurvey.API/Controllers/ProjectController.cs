
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
    public class ProjectController : BaseApiController
    { 
        private readonly IProjectFacade _projectFacade;
        public ProjectController(IProjectFacade ProjectFacade)
        {
            _projectFacade = ProjectFacade; 
        }

        [Route("api/Projects/GetAllProjects", Name = "GetAllProjects")]
        [HttpGet]
        public IHttpActionResult GetAllProjects(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto projectObj = _projectFacade.GetAllProjects(page, pagesize, TenantId);
            var data = Mapper.Map<List<ProjectModel>>(projectObj.Data);
            return PagedResponse("GetAllProjects", page, pagesize, projectObj.TotalCount, data, projectObj.IsParentTranslated);
        }


        [Route("api/Projects", Name = "CreateProject")]
        [HttpPost]
        public IHttpActionResult CreateProject([FromBody] ProjectModel projectModel)
        {
            var reurnProject = _projectFacade.CreateProject(Mapper.Map<ProjectDto>(projectModel), UserId, TenantId);

            return Ok(reurnProject);
        }


        [Route("api/Projects/EditProject", Name = "EditProject")]
        [HttpPost]
        public IHttpActionResult EditProject([FromBody] ProjectModel projectModel)
        {
            var reurnProject = _projectFacade.EditProject(Mapper.Map<ProjectDto>(projectModel), UserId, TenantId);

            return Ok(reurnProject);
        }


        [Route("api/Projects/GetProjectById", Name = "GetProjectById")]
        [HttpGet]
        public IHttpActionResult GetProjectById(long projectId)
        {
            var reurnProject = _projectFacade.GetProject(projectId, TenantId);
            return Ok(reurnProject);
        }
    }

}