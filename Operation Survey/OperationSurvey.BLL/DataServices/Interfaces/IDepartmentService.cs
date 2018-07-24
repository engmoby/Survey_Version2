using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IDepartmentService : IService<Department>
    {
         PagedResultsDto GetAllDepartments(int page, int pageSize, int tenantId);
    }
}
