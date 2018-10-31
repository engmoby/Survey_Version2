using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IServiceService : IService<DAL.Entities.Model.Service>
    {
         PagedResultsDto GetAllServices(long projectId, int page, int pageSize, int tenantId);
    }
}
