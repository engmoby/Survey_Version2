using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IRoleFacade
    { 
        RoleDto GetRole(long userId); 
        RoleDto CreateRole(RoleDto userDto); 
        RoleDto EditRole(RoleDto userDto);
        PagedResultsDto GetAllRoles(int page, int pageSize); 
    }
}
