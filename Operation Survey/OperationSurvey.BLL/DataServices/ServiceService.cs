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
    public class ServiceService : Service<DAL.Entities.Model.Service>, IServiceService
    {
        private readonly ICategoryService _categoryService;
        public ServiceService(IRepositoryAsync<DAL.Entities.Model.Service> repository, ICategoryService categoryService) : base(repository)
        {
            _repository = repository;
            _categoryService = categoryService;
        }

        public PagedResultsDto GetAllServices(long projectId, int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => x.ProjectId == projectId && !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null)).OrderBy(x => x.ServiceId);

            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count(); results.Data = Mapper.Map<List<DAL.Entities.Model.Service>, List<ServiceDto>>(query.OrderBy(x => x.ServiceId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

            return results;
        }

    }
}