using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IAreaFacade
    { 
        AreaDto GetArea(long userId, int tenantId); 
        AreaDto CreateArea(AreaDto userDto, int userId, int tenantId); 
        AreaDto EditArea(AreaDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllAreas(int page, int pageSize, int tenantId);
        AreaDto GetAllAreasByUserId(long userId);
    }
}
