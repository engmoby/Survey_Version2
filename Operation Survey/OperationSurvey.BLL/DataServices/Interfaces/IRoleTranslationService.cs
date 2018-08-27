
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IRoleTranslationService : IService<RoleTranslation>
    {
        PagedResultsDto GetAllRoles();
        PagedResultsDto GetAllRolesTranslation(string language);
        PagedResultsDto GetRoleTranslationByRoleId(string language, long RoleId);
        RoleDto RoleTranslationByRoleId(string language, long RoleId);
        bool CheckNameExist(string language, string title, long roleId, int tenantId);
    }
}
