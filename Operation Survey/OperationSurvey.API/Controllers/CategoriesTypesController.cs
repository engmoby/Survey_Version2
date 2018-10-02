using System;
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
    public class CategoriesTypesController : BaseApiController
    {
        private ICategoryTypeFacade _categoryTypeFacade;

        public CategoriesTypesController(ICategoryTypeFacade categoryTypeFacade)
        {
            _categoryTypeFacade = categoryTypeFacade;
        }
        [Route("api/CategoriesTypes/", Name = "GetAllCategoryTypes")]
        [HttpGet]
        public IHttpActionResult GetAllCategoryTypes(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto userTypeObj = _categoryTypeFacade.GetAllCategoryTypes(page, pagesize, TenantId);
            var data = Mapper.Map<List<CategoryTypeModel>>(userTypeObj.Data);
            return PagedResponse("GetAllCategoryTypes", page, pagesize, userTypeObj.TotalCount, data, userTypeObj.IsParentTranslated);
        }

        [Route("api/CategoriesTypes", Name = "CreateCategoryType")]
        [HttpPost]
        public IHttpActionResult CreateCategoryType([FromBody] CategoryTypeModel categoryTypeModel)
        {
            var reurnUserType = _categoryTypeFacade.CreateCategoryType(Mapper.Map<CategoryTypeDto>(categoryTypeModel), UserId, TenantId);

            return Ok(reurnUserType);
        }

        [Route("api/CategoriesTypes/{categoryTypeId:long}", Name = "EditCategoryType")]
        [HttpPut]
        public IHttpActionResult EditCategoryType([FromBody] CategoryTypeModel categoryTypeModel)
        {
            var reurnUserType = _categoryTypeFacade.EditCategoryType(Mapper.Map<CategoryTypeDto>(categoryTypeModel), UserId, TenantId);

            return Ok(reurnUserType);
        }

        [Route("api/CategoriesTypes/{categoryTypeId:long}", Name = "GetCategoryType")]
        [HttpGet]
        public IHttpActionResult GetCategoryType(long categoryTypeId)
        {
            var reurnUserType = _categoryTypeFacade.GetCategoryType(categoryTypeId, TenantId);
            return Ok(reurnUserType);
        }
    }
}
