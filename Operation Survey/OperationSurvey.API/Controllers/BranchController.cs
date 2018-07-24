
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
    public class BranchController : BaseApiController
    { 
        private readonly IBranchFacade _BranchFacade;
        public BranchController(IBranchFacade BranchFacade)
        {
            _BranchFacade = BranchFacade; 
        }

        [Route("api/Branchs/GetAllBranchs", Name = "GetAllBranchs")]
        [HttpGet]
        public IHttpActionResult GetAllBranchs(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto BranchObj = _BranchFacade.GetAllBranchs(page, pagesize);
            var data = Mapper.Map<List<BranchModel>>(BranchObj.Data);
            return PagedResponse("GetAllAreas", page, pagesize, BranchObj.TotalCount, data, BranchObj.IsParentTranslated);
        }


        [Route("api/Branchs", Name = "CreateBranch")]
        [HttpPost]
        public IHttpActionResult CreateBranch([FromBody] BranchModel BranchModel)
        {
            var reurnBranch = _BranchFacade.CreateBranch(Mapper.Map<BranchDto>(BranchModel));

            return Ok(reurnBranch);
        }


        [Route("api/Branchs/EditBranch", Name = "EditBranch")]
        [HttpPost]
        public IHttpActionResult EditBranch([FromBody] BranchModel BranchModel)
        {
            var reurnBranch = _BranchFacade.EditBranch(Mapper.Map<BranchDto>(BranchModel));

            return Ok(reurnBranch);
        }


        [Route("api/Branchs/GetBranchById", Name = "GetBranchById")]
        [HttpGet]
        public IHttpActionResult GetBranchById(long BranchId)
        {
            var reurnBranch = _BranchFacade.GetBranch(BranchId);
            return Ok(reurnBranch);
        }
    }

}