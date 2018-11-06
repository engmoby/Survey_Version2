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
    public class AssetService : Service<Asset>, IAssetService
    {
        private readonly ICategoryService _categoryService;
        public AssetService(IRepositoryAsync<Asset> repository, ICategoryService categoryService) : base(repository)
        {
            _repository = repository;
            _categoryService = categoryService;
        }

        public PagedResultsDto GetAllAssets(long projectId, int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => x.ProjectId == projectId && !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null)).OrderBy(x => x.AssetId);

            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var get = query.OrderBy(x => x.AssetId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
            results.Data = Mapper.Map<List<Asset>, List<AssetDto>>(get);

            return results;
        }

    }
}