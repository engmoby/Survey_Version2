using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IRoleFacade
    { 
        RoleDto GetRole(long userId, int tenantId);
        RoleDto CreateRole(RoleDto userDto, int userId, int tenantId);
        RoleDto EditRole(RoleDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllRoles(int page, int pageSize, int tenantId);
    }
}
