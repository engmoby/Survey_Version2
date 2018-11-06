
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
    public class AssetController : BaseApiController
    { 
        private readonly IAssetFacade _assetFacade;
        public AssetController(IAssetFacade assetFacade)
        {
            _assetFacade = assetFacade; 
        }

        [Route("api/Assets/GetAllAssets", Name = "GetAllAssets")]
        [HttpGet]
        public IHttpActionResult GetAllAssets(long projectId,int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto assetObj = _assetFacade.GetAllAssets(projectId, page, pagesize, TenantId);
            var data = Mapper.Map<List<AssetModel>>(assetObj.Data);
            return PagedResponse("GetAllAssets", page, pagesize, assetObj.TotalCount, data, assetObj.IsParentTranslated);
        }


        [Route("api/Assets", Name = "CreateAsset")]
        [HttpPost]
        public IHttpActionResult CreateAsset([FromBody] AssetModel assetModel)
        {
            var reurnAsset = _assetFacade.CreateAsset(Mapper.Map<AssetDto>(assetModel), UserId, TenantId); 
            return Ok(reurnAsset);
        }


        [Route("api/Assets/EditAsset", Name = "EditAsset")]
        [HttpPost]
        public IHttpActionResult EditAsset([FromBody] AssetModel assetModel)
        {
            var reurnAsset = _assetFacade.EditAsset(Mapper.Map<AssetDto>(assetModel), UserId, TenantId);

            return Ok(reurnAsset);
        }


        [Route("api/Assets/GetAssetById", Name = "GetAssetById")]
        [HttpGet]
        public IHttpActionResult GetAssetById(long assetId)
        {
            var reurnAsset = _assetFacade.GetAsset(assetId, TenantId);
            return Ok(reurnAsset);
        }
    }

}