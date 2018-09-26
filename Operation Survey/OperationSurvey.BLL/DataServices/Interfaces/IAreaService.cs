using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IAreaService : IService<Area>
    {
         PagedResultsDto GetAllAreas(long cityId,int page, int pageSize, int tenantId);
    }
}
