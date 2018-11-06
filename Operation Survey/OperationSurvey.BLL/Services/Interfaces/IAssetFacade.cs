using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IAssetFacade
    { 
        AssetDto GetAsset(long userId, int tenantId); 
        AssetDto CreateAsset(AssetDto userDto, int userId, int tenantId);
        AssetDto EditAsset(AssetDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllAssets(long assetId, int page, int pageSize, int tenantId);
        AssetDto GetAllAssetByUserId(long userId);
    }
}
