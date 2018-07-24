using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IDepartmentFacade
    { 
        DepartmentDto GetDepartment(long userId); 
        DepartmentDto CreateDepartment(DepartmentDto userDto); 
        DepartmentDto EditDepartment(DepartmentDto userDto);
        PagedResultsDto GetAllDepartments(int page, int pageSize); 
    }
}
