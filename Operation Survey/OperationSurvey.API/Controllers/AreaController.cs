
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
    public class AreaController : BaseApiController
    { 
        private readonly IAreaFacade _areaFacade;
        public AreaController(IAreaFacade areaFacade)
        {
            _areaFacade = areaFacade; 
        }

        [Route("api/Areas/GetAllAreas", Name = "GetAllAreas")]
        [HttpGet]
        public IHttpActionResult GetAllAreas(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto areaObj = _areaFacade.GetAllAreas(page, pagesize);
            var data = Mapper.Map<List<AreaModel>>(areaObj.Data);
            return PagedResponse("GetAllAreas", page, pagesize, areaObj.TotalCount, data, areaObj.IsParentTranslated);
        }


        [Route("api/Areas", Name = "CreateArea")]
        [HttpPost]
        public IHttpActionResult CreateArea([FromBody] AreaModel areaModel)
        {
            var reurnArea = _areaFacade.CreateArea(Mapper.Map<AreaDto>(areaModel));

            return Ok(reurnArea);
        }


        [Route("api/Areas/EditArea", Name = "EditArea")]
        [HttpPost]
        public IHttpActionResult EditArea([FromBody] AreaModel areaModel)
        {
            var reurnArea = _areaFacade.EditArea(Mapper.Map<AreaDto>(areaModel));

            return Ok(reurnArea);
        }


        [Route("api/Areas/GetAreaById", Name = "GetAreaById")]
        [HttpGet]
        public IHttpActionResult GetAreaById(long areaId)
        {
            var reurnArea = _areaFacade.GetArea(areaId);
            return Ok(reurnArea);
        }
    }

}