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
    public class CategoryService : Service<Category>, ICategoryService
    {
        public CategoryService(IRepositoryAsync<Category> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllCategorys(int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted); 
            var obj = _repository.Query(x => !x.IsDeleted).Include(p => p.CategoryTranslations).Select().OrderBy(x => x.CategoryId).ToList();
            results.Data = Mapper.Map<List<Category>, List<CategoryDto>>(obj);
            return results;
        }

    }
}