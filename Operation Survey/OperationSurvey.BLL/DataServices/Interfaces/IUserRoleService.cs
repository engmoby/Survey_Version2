using System.Collections.Generic;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IUserRoleService : IService<UserRole>
    {
        List<UserRoleDto> GetUserRoleById(long roleId);
    }
}
