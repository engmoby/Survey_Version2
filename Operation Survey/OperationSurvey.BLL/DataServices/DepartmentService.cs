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
    public class DepartmentService : Service<Department>, IDepartmentService
    {
        public DepartmentService(IRepositoryAsync<Department> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllDepartments(int page, int pageSize)
        {
            var query = Queryable().Where(x => !x.IsDeleted).OrderBy(x => x.DepartmentId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            results.Data = Mapper.Map<List<Department>, List<DepartmentDto>>(query.OrderBy(x => x.DepartmentId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

             
             
            //results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted); 
            //var products = _repository.Query(x => !x.IsDeleted).Include(p => p.DepartmentTranslations).Select().OrderBy(x => x.DepartmentId).ToList();
            //results.Data = Mapper.Map<List<Department>, List<DepartmentDto>>(products);
            return results;
        }

    }
}