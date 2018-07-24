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
    public class PermissionService : Service<Permission>, IPermissionService
    {
        public PermissionService(IRepositoryAsync<Permission> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllPermissions(int page, int pageSize)
        {
            var query = Queryable().Where(x => !x.IsDeleted).OrderBy(x => x.PermissionId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var obj = _repository.Query(x => !x.IsDeleted).Include(p => p.PermissionTranslations).Select().OrderBy(x => x.PermissionId).ToList();
            results.Data = Mapper.Map<List<Permission>, List<PermissionDto>>(query.OrderBy(x => x.PermissionId).Skip((page - 1) * pageSize).Take(pageSize).ToList());
              
            //results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted); 
            //var obj = _repository.Query(x => !x.IsDeleted).Include(p => p.PermissionTranslations).Select().OrderBy(x => x.PermissionId).ToList();
            //results.Data = Mapper.Map<List<Permission>, List<PermissionDto>>(obj);
            return results;
        }

    }
}
