using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IPermissionFacade
    { 
        PermissionDto GetPermission(long userId); 
        PermissionDto CreatePermission(PermissionDto userDto); 
        PermissionDto EditPermission(PermissionDto userDto);
        PagedResultsDto GetAllPermissions(int page, int pageSize); 
    }
}
