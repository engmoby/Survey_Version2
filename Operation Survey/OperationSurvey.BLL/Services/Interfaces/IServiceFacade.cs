using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IServiceFacade
    { 
        ServiceDto GetService(long userId, int tenantId); 
        ServiceDto CreateService(ServiceDto userDto, int userId, int tenantId);
        ServiceDto EditService(ServiceDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllServices(long projectId, int page, int pageSize, int tenantId);
        ServiceDto GetAllServiceByUserId(long userId);
    }
}
