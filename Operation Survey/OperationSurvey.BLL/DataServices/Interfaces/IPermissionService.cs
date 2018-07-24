using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IPermissionService : IService<Permission>
    {
         PagedResultsDto GetAllPermissions(int page, int pageSize);
    }
}
