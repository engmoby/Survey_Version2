using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.DataServices
{
    public class CountryService:Service<Country>,ICountryService
    {
        public CountryService(IRepositoryAsync<Country> repository):base(repository)
        {
            
        }
        public PagedResultsDto GetAllCountries(int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null)).OrderBy(x => x.CountryId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var modelReturn = pageSize > 0
                ? query.OrderBy(x => x.CountryId).Skip((page - 1) * pageSize).Take(pageSize).ToList()
                : query.Where(x => x.Regions.Count > 0 && x.Regions.Any(r=>r.Cities.Any(c => c.Areas.Count > 0 && c.Areas.Any(a => a.Branches.Count > 0)))).OrderBy(x => x.CountryId).ToList();
            results.Data = Mapper.Map<List<Country>, List<CountryDto>>(modelReturn);
            return results;
        }
    }
}
