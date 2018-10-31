
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
    public class ServiceController : BaseApiController
    { 
        private readonly IServiceFacade _serviceFacade;
        public ServiceController(IServiceFacade serviceFacade)
        {
            _serviceFacade = serviceFacade; 
        }

        [Route("api/Services/GetAllServices", Name = "GetAllServices")]
        [HttpGet]
        public IHttpActionResult GetAllServices(long projectId, int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto serviceObj = _serviceFacade.GetAllServices(projectId,page, pagesize, TenantId);
            var data = Mapper.Map<List<ServiceModel>>(serviceObj.Data);
            return PagedResponse("GetAllServices", page, pagesize, serviceObj.TotalCount, data, serviceObj.IsParentTranslated);
        }


        [Route("api/Services", Name = "CreateService")]
        [HttpPost]
        public IHttpActionResult CreateService([FromBody] ServiceModel serviceModel)
        {
            var reurnService = _serviceFacade.CreateService(Mapper.Map<ServiceDto>(serviceModel), UserId, TenantId);

            return Ok(reurnService);
        }


        [Route("api/Services/EditService", Name = "EditService")]
        [HttpPost]
        public IHttpActionResult EditService([FromBody] ServiceModel ServiceModel)
        {
            var reurnService = _serviceFacade.EditService(Mapper.Map<ServiceDto>(ServiceModel), UserId, TenantId);

            return Ok(reurnService);
        }


        [Route("api/Services/GetServiceById", Name = "GetServiceById")]
        [HttpGet]
        public IHttpActionResult GetServiceById(long ServiceId)
        {
            var reurnService = _serviceFacade.GetService(ServiceId, TenantId);
            return Ok(reurnService);
        }
    }

}