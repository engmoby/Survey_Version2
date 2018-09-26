﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using OperationSurvey.API.Infrastructure;
using OperationSurvey.API.Models;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;

namespace OperationSurvey.API.Controllers
{
    public class RegionsController : BaseApiController
    {
        private IRegionFacade _regionFacade;

        public RegionsController(IRegionFacade regionFacade)
        {
            _regionFacade = regionFacade;
        }

        [Route("api/Countries/{countryId:long}/Regions", Name = "GetAllRegions")]
        [HttpGet]
        public IHttpActionResult GetAllRegions(long countryId, int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto allRegions = _regionFacade.GetAllRegions(countryId, page, pagesize, TenantId);
            var data = Mapper.Map<List<RegionModel>>(allRegions.Data);
            return PagedResponse("GetAllRegions", page, pagesize, allRegions.TotalCount, data,
                allRegions.IsParentTranslated);
        }


        [Route("api/Regions", Name = "CreateRegion")]
        [HttpPost]
        public IHttpActionResult CreateRegion([FromBody] RegionModel regionModel)
        {
            var region = _regionFacade.CreateRegion(Mapper.Map<RegionDto>(regionModel), UserId, TenantId);

            return Ok(region);
        }


        [Route("api/Regions/EditRegion", Name = "EditRegion")]
        [HttpPost]
        public IHttpActionResult EditRegion([FromBody] RegionModel regionModel)
        {
            var region = _regionFacade.EditRegion(Mapper.Map<RegionDto>(regionModel), UserId, TenantId);

            return Ok(region);
        }

        [Route("api/Regions/{regionId:long}", Name = "GetRegion")]
        [HttpGet]
        public IHttpActionResult GetRegion(long regionId)
        {
            var regionModel = Mapper.Map<RegionModel>(_regionFacade.GetRegion(regionId, TenantId));
            return Ok(regionModel);
        }

        
    }
}