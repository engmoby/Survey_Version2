using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IServiceTranslationService : IService<ServiceTranslation>
    {
        PagedResultsDto GetAllServices();
        PagedResultsDto GetAllServicesTranslation(string language);
        PagedResultsDto GetServiceTranslationByServiceId(string language, long ServiceId);
        ServiceDto ServiceTranslationByServiceId(string language, long ServiceId);
        bool CheckNameExist(string objName, string language, long recordId, long tenantId);
    }
}
