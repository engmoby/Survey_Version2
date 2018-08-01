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
    public class QuestionService : Service<Question>, IQuestionService
    {
        public QuestionService(IRepositoryAsync<Question> repository) : base(repository)
        {
            _repository = repository;
        }

        public PagedResultsDto GetAllQuestions(int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null)).OrderBy(x => x.QuestionId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            // results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted);
            results.Data = Mapper.Map<List<Question>, List<QuestionDto>>(query.OrderBy(x => x.QuestionId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

            //var products = _repository.Query(x => !x.IsDeleted).Include(p => p.QuestionTranslations).Select().OrderBy(x => x.QuestionId).ToList();
            //results.Data = Mapper.Map<List<Question>, List<QuestionDto>>(products);
            return results;
        }
        public List<QuestionDto> GetAllQuestions(int tenantId)
        {
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null)).OrderBy(x => x.QuestionId);
            var returnList = Mapper.Map<List<Question>, List<QuestionDto>>(query.OrderBy(x => x.QuestionId).ToList());
            return returnList;
        }
    }
}