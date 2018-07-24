using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IUserTypeTranslationService : IService<UserTypeTranslation>
    {
        PagedResultsDto GetAllUserTypes();
        PagedResultsDto GetAllUserTypesTranslation(string language);
        PagedResultsDto GetUserTypeTranslationByUserTypeId(string language, long userTypeId);
        UserTypeDto UserTypeTranslationByUserTypeId(string language, long userTypeId);
        bool CheckNameExist(string objName, string language, long recordId, long tenantId);

    }
}
