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
    public class VendorService : Service<Vendor>, IVendorService
    {
        private readonly ICategoryService _categoryService;
        public VendorService(IRepositoryAsync<Vendor> repository, ICategoryService  categoryService) : base(repository)
        {
            _repository = repository;
            _categoryService = categoryService;
        }
        
        public PagedResultsDto GetAllVendors(int page, int pageSize, int tenantId)
        { 
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId== tenantId || x.TenantId == null)).OrderBy(x => x.VendorId);

            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();  results.Data = Mapper.Map<List<Vendor>, List<VendorDto>>(query.OrderBy(x => x.VendorId).Skip((page - 1) * pageSize).Take(pageSize).ToList());
           
            return results;
        }

    }
}