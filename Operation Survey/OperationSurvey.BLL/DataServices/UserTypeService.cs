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
    public class UserTypeService : Service<UserType>, IUserTypeService
    {
        public UserTypeService(IRepositoryAsync<UserType> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllUserTypes(int page, int pageSize)
        { 
            //results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted); 
            //var obj = _repository.Query(x => !x.IsDeleted).Include(p => p.UserTypeTranslations).Select().OrderBy(x => x.UserTypeId).ToList();
            //results.Data = Mapper.Map<List<UserType>, List<UserTypeDto>>(obj);
           
            var query = Queryable().Where(x => !x.IsDeleted).OrderBy(x => x.UserTypeId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            results.Data = Mapper.Map<List<UserType>, List<UserTypeDto>>(query.OrderBy(x => x.UserTypeId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

            return results;

        }

    }
}