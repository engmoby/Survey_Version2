using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IBranchService : IService<Branch>
    {
         PagedResultsDto GetAllBranchs(int page, int pageSize, int tenantId);
    }
}
