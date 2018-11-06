using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices
{
    public class CategoryTypeService:Service<CategoryType>,ICategoryTypeService
    {
        public CategoryTypeService(IRepositoryAsync<CategoryType> repository):base(repository)
        {
            
        }

        public PagedResultsDto GetAllCategoryTypes(int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null))
                .OrderBy(x => x.CategoryTypeId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var categoryTypes = pageSize > 0
                ? query.OrderBy(x => x.CategoryTypeId).Skip((page - 1) * pageSize).Take(pageSize).ToList()
                : query.OrderBy(x => x.CategoryTypeId).ToList();
            results.Data = Mapper.Map<List<CategoryType>, List<CategoryTypeDto>>(categoryTypes);

            return results;
        }
    }
}
