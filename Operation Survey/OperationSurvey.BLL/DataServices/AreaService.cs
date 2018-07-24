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
    public class AreaService : Service<Area>, IAreaService
    {
        public AreaService(IRepositoryAsync<Area> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllAreas(int page, int pageSize)
        {
            var query = Queryable().Where(x => !x.IsDeleted).OrderBy(x => x.AreaId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
           // results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted);
            results.Data = Mapper.Map<List<Area>, List<AreaDto>>(query.OrderBy(x => x.AreaId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

            //var products = _repository.Query(x => !x.IsDeleted).Include(p => p.AreaTranslations).Select().OrderBy(x => x.AreaId).ToList();
            //results.Data = Mapper.Map<List<Area>, List<AreaDto>>(products);
            return results;
        }

    }
}