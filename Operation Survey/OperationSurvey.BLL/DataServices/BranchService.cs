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
    public class BranchService : Service<Branch>, IBranchService
    {
        public BranchService(IRepositoryAsync<Branch> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllBranchs(int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted); 
            var obj = _repository.Query(x => !x.IsDeleted).Include(p => p.BranchTranslations).Select().OrderBy(x => x.BranchId).ToList();
            results.Data = Mapper.Map<List<Branch>, List<BranchDto>>(obj);
            return results;
        }

    }
}