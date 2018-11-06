using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IAssetService : IService<Asset>
    {
         PagedResultsDto GetAllAssets(long projectId, int page, int pageSize, int tenantId);
    }
}
