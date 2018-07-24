
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IPermissionTranslationService : IService<PermissionTranslation>
    {
        PagedResultsDto GetAllPermissions();
        PagedResultsDto GetAllPermissionsTranslation(string language);
        PagedResultsDto GetPermissionTranslationByPermissionId(string language, long PermissionId);
        PermissionDto PermissionTranslationByPermissionId(string language, long PermissionId);
    }
}
