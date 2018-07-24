using System.Collections.Generic;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IRolePermissionService : IService<RolePermission>
    {
        List<RolePermissionDto> GetRolePermissionById(long roleId, int tenantId);
    }
}
