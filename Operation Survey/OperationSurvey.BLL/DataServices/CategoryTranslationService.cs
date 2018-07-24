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
    public class CategoryTranslationService : Service<CategoryTranslation>, ICategoryTranslationService
    {
        public CategoryTranslationService(IRepositoryAsync<CategoryTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllCategorys()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Category.IsDeleted ).Select(x => x.Category).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Category.IsDeleted).Select().ToList();
            var categorys = _repository.Query(x => !x.Category.IsDeleted ).Select(x => x.Category)
                .OrderBy(x => x.CategoryId).ToList();
            results.Data = Mapper.Map<List<Category>, List<CategoryDto>>(categorys);
            return results;
        }
        public PagedResultsDto GetAllCategorysTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Category).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Categorys = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Category)
                .OrderBy(x => x.CategoryId).ToList();
            results.Data = Mapper.Map<List<Category>, List<CategoryDto>>(Categorys, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Category Category in src)
                        {
                            Category.CategoryTranslations = Category.CategoryTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetCategoryTranslationByCategoryId(string language,long CategoryId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.CategoryId == CategoryId).Select(x => x.Category).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Categorys = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower() && x.CategoryId == CategoryId).Select(x => x.Category)
                .OrderBy(x => x.CategoryId).ToList();
            results.Data = Mapper.Map<List<Category>, List<CategoryDto>>(Categorys, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Category Category in src)
                        {
                            Category.CategoryTranslations = Category.CategoryTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public CategoryDto CategoryTranslationByCategoryId(string language, long CategoryId)
        {
            var aaax = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Categorys = _repository.Query(x => !x.Category.IsDeleted && x.Language.ToLower() == language.ToLower() && x.CategoryId == CategoryId).Select(x => x.Category)
                .OrderBy(x => x.CategoryId).FirstOrDefault();
            var results = Mapper.Map<Category, CategoryDto>(Categorys, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.CategoryTranslations = src.CategoryTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }


    }
}