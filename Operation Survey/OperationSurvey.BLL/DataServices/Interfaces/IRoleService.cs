using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IRoleService : IService<Role>
    {
         PagedResultsDto GetAllRoles(int page, int pageSize);
    }
}
