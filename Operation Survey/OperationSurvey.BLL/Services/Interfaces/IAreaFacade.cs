using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IAreaFacade
    { 
        AreaDto GetArea(long userId); 
        AreaDto CreateArea(AreaDto userDto); 
        AreaDto EditArea(AreaDto userDto);
        PagedResultsDto GetAllAreas(int page, int pageSize); 
    }
}
