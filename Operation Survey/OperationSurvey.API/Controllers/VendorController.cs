
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
    public class VendorController : BaseApiController
    { 
        private readonly IVendorFacade _vendorFacade;
        public VendorController(IVendorFacade VendorFacade)
        {
            _vendorFacade = VendorFacade; 
        }

        [Route("api/Vendors/GetAllVendors", Name = "GetAllVendors")]
        [HttpGet]
        public IHttpActionResult GetAllVendors(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto vendorObj = _vendorFacade.GetAllVendors(page, pagesize, TenantId);
            var data = Mapper.Map<List<VendorModel>>(vendorObj.Data);
            return PagedResponse("GetAllVendors", page, pagesize, vendorObj.TotalCount, data, vendorObj.IsParentTranslated);
        }


        [Route("api/Vendors", Name = "CreateVendor")]
        [HttpPost]
        public IHttpActionResult CreateVendor([FromBody] VendorModel vendorModel)
        {
            var reurnVendor = _vendorFacade.CreateVendor(Mapper.Map<VendorDto>(vendorModel), UserId, TenantId);

            return Ok(reurnVendor);
        }


        [Route("api/Vendors/EditVendor", Name = "EditVendor")]
        [HttpPost]
        public IHttpActionResult EditVendor([FromBody] VendorModel vendorModel)
        {
            var reurnVendor = _vendorFacade.EditVendor(Mapper.Map<VendorDto>(vendorModel), UserId, TenantId);

            return Ok(reurnVendor);
        }


        [Route("api/Vendors/GetVendorById", Name = "GetVendorById")]
        [HttpGet]
        public IHttpActionResult GetVendorById(long vendorId)
        {
            var reurnVendor = _vendorFacade.GetVendor(vendorId, TenantId);
            return Ok(reurnVendor);
        }
    }

}