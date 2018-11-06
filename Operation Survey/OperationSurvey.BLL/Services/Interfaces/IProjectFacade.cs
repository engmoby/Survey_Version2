using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IProjectFacade
    { 
        ProjectDto GetProject(long userId, int tenantId); 
        ProjectDto CreateProject(ProjectDto userDto, int userId, int tenantId);
        ProjectDto EditProject(ProjectDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllProjects(int page, int pageSize, int tenantId);
        ProjectDto GetAllProjectByUserId(long userId);
    }
}
