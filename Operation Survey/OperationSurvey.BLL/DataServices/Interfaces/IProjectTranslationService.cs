using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IProjectTranslationService : IService<ProjectTranslation>
    {
        PagedResultsDto GetAllProjects();
        PagedResultsDto GetAllProjectsTranslation(string language);
        PagedResultsDto GetProjectTranslationByProjectId(string language, long projectId);
        ProjectDto ProjectTranslationByProjectId(string language, long projectId);
        bool CheckNameExist(string objName, string language, long recordId, long tenantId);
    }
}
