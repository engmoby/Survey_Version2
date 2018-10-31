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
    public class ProjectService : Service<Project>, IProjectService
    {
        private readonly ICategoryService _categoryService;
        public ProjectService(IRepositoryAsync<Project> repository, ICategoryService categoryService) : base(repository)
        {
            _repository = repository;
            _categoryService = categoryService;
        }

        public PagedResultsDto GetAllProjects(int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null)).OrderBy(x => x.ProjectId);

            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            results.Data = Mapper.Map<List<Project>, List<ProjectDto>>(query.OrderBy(x => x.ProjectId).Skip((page - 1) * pageSize).Take(pageSize).ToList());


            return results;
        }

    }
}