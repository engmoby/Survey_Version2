using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices
{
    public class ProjectTranslationService : Service<ProjectTranslation>, IProjectTranslationService
    {
        public ProjectTranslationService(IRepositoryAsync<ProjectTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllProjects()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Project.IsDeleted ).Select(x => x.Project).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Project.IsDeleted).Select().ToList();
            var Projects = _repository.Query(x => !x.Project.IsDeleted ).Select(x => x.Project)
                .OrderBy(x => x.ProjectId).ToList();
            results.Data = Mapper.Map<List<Project>, List<ProjectDto>>(Projects);
            return results;
        }
        public PagedResultsDto GetAllProjectsTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Project).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Projects = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Project)
                .OrderBy(x => x.ProjectId).ToList();
            results.Data = Mapper.Map<List<Project>, List<ProjectDto>>(Projects, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Project Project in src)
                        {
                            Project.ProjectTranslations = Project.ProjectTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetProjectTranslationByProjectId(string language,long ProjectId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.ProjectId == ProjectId).Select(x => x.Project).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Projects = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower() && x.ProjectId == ProjectId).Select(x => x.Project)
                .OrderBy(x => x.ProjectId).ToList();
            results.Data = Mapper.Map<List<Project>, List<ProjectDto>>(Projects, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Project Project in src)
                        {
                            Project.ProjectTranslations = Project.ProjectTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public ProjectDto ProjectTranslationByProjectId(string language, long ProjectId)
        {
            var aaax = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Projects = _repository.Query(x => !x.Project.IsDeleted && x.Language.ToLower() == language.ToLower() && x.ProjectId == ProjectId).Select(x => x.Project)
                .OrderBy(x => x.ProjectId).FirstOrDefault();
            var results = Mapper.Map<Project, ProjectDto>(Projects, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.ProjectTranslations = src.ProjectTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }

        public bool CheckNameExist(string objName, string language, long recordId, long tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.ProjectId != recordId && x.Project.TenantId == tenantId && !x.Project.IsDeleted);

        }
    }
}