using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IProjectService : IService<Project>
    {
         PagedResultsDto GetAllProjects(int page, int pageSize, int tenantId);
    }
}
