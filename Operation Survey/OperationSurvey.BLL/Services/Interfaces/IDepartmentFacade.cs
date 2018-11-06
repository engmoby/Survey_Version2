using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IDepartmentFacade
    { 
        DepartmentDto GetDepartment(long userId, int tenantId); 
        DepartmentDto CreateDepartment(DepartmentDto userDto, int userId, int tenantId);
        DepartmentDto EditDepartment(DepartmentDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllDepartments(int page, int pageSize, int tenantId);
        DepartmentDto GetAllDepartmentByUserId(long userId);
    }
}
