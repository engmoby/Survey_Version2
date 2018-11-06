using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IAssetTranslationService : IService<AssetTranslation>
    {
        PagedResultsDto GetAllAssets();
        PagedResultsDto GetAllAssetsTranslation(string language);
        PagedResultsDto GetAssetTranslationByAssetId(string language, long AssetId);
        AssetDto AssetTranslationByAssetId(string language, long AssetId);
        bool CheckNameExist(string objName, string language, long recordId, long tenantId);
    }
}
