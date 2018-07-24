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
    public class RoleService : Service<Role>, IRoleService
    {
        public RoleService(IRepositoryAsync<Role> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllRoles(int page, int pageSize)
        {
            var query = Queryable().Where(x => !x.IsDeleted).OrderBy(x => x.RoleId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var ddd = query.OrderBy(x => x.RoleId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
            results.Data = Mapper.Map<List<Role>, List<RoleDto>>(query.OrderBy(x => x.RoleId).Skip((page - 1) * pageSize).Take(pageSize).ToList());
              
            //results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted); 
            //var obj = _repository.Query(x => !x.IsDeleted).Include(p => p.RoleTranslations).Select().OrderBy(x => x.RoleId).ToList();
            //results.Data = Mapper.Map<List<Role>, List<RoleDto>>(obj);
            return results;
        }

    }
}
