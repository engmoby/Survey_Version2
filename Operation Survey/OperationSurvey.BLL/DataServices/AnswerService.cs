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
    public class AnswerService : Service<Answer>, IAnswerService
    {
        public AnswerService(IRepositoryAsync<Answer> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllAnswers(int page, int pageSize, int tenantId)
        { 
            var query = Queryable().Where(x => x.TenantId == tenantId || x.TenantId == null).OrderBy(x => x.AnswerId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
           // results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted);
            results.Data = Mapper.Map<List<Answer>, List<AnswerDto>>(query.OrderBy(x => x.AnswerId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

            //var products = _repository.Query(x => !x.IsDeleted).Include(p => p.AnswerTranslations).Select().OrderBy(x => x.AnswerId).ToList();
            //results.Data = Mapper.Map<List<Answer>, List<AnswerDto>>(products);
            return results;
        }

    }
}