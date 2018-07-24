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
    public class CategoryController : BaseApiController
    { 
        private readonly ICategoryFacade _categoryFacade;
        public CategoryController(ICategoryFacade categoryFacade)
        {
            _categoryFacade = categoryFacade; 
        }

        [Route("api/Category/GetAllCategories", Name = "GetAllCategories")]
        [HttpGet]
        public IHttpActionResult GetAllCategories(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto CategoryObj = _categoryFacade.GetAllCategorys(page, pagesize);
            var data = Mapper.Map<List<CategoryModel>>(CategoryObj.Data);
            return PagedResponse("GetAllCategories", page, pagesize, CategoryObj.TotalCount, data, CategoryObj.IsParentTranslated);
        }


        [Route("api/Category", Name = "CreateCategory")]
        [HttpPost]
        public IHttpActionResult CreateCategory([FromBody] CategoryModel CategoryModel)
        {
            var reurnCategory = _categoryFacade.CreateCategory(Mapper.Map<CategoryDto>(CategoryModel));

            return Ok(reurnCategory);
        }


        [Route("api/Category/EditCategory", Name = "EditCategory")]
        [HttpPost]
        public IHttpActionResult EditCategory([FromBody] CategoryModel categoryModel)
        {
            var reurnCategory = _categoryFacade.EditCategory(Mapper.Map<CategoryDto>(categoryModel));

            return Ok(reurnCategory);
        }


        [Route("api/Category/GetCategoryById", Name = "GetCategoryById")]
        [HttpGet]
        public IHttpActionResult GetCategoryById(long CategoryId)
        {
            var reurnCategory = _categoryFacade.GetCategory(CategoryId);
            return Ok(reurnCategory);
        }
    }

}