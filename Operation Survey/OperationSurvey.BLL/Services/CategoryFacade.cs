using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.Services
{
    public class CategoryFacade : BaseFacade, ICategoryFacade
    {
        private readonly ICategoryService _categoryService;
        private readonly ICategoryTranslationService _typeTranslationService;

        public CategoryFacade(ICategoryService categoryService, IUnitOfWorkAsync unitOfWork, ICategoryTranslationService typeTranslationService) : base(unitOfWork)
        {
            _categoryService = categoryService;
            _typeTranslationService = typeTranslationService;
        }

        public CategoryFacade(ICategoryService CategoryService, ICategoryTranslationService typeTranslationService)
        {
            _categoryService = CategoryService;
            _typeTranslationService = typeTranslationService;
        }

        public CategoryDto GetCategory(long CategoryId)
        {
            return Mapper.Map<CategoryDto>(_categoryService.Find(CategoryId));
        }

        public CategoryDto CreateCategory(CategoryDto CategoryDto)
        {
            if (GetCategory(CategoryDto.CategoryId) != null)
            {
                return EditCategory(CategoryDto);
            }

            var categoryObj = Mapper.Map<Category>(CategoryDto);
            foreach (var categoryName in CategoryDto.TitleDictionary)
            {
                categoryObj.CategoryTranslations.Add(new CategoryTranslation
                {
                    Title = categoryName.Value,
                    Language = categoryName.Key
                });
            }
            _typeTranslationService.InsertRange(categoryObj.CategoryTranslations);
            _categoryService.Insert(categoryObj);
            SaveChanges();
            return CategoryDto;
        }

        public CategoryDto EditCategory(CategoryDto CategoryDto)
        {
            var CategoryObj = _categoryService.Find(CategoryDto.CategoryId);
            if (CategoryObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var CategoryName in CategoryDto.TitleDictionary)
            {
                var CategoryTranslation = CategoryObj.CategoryTranslations.FirstOrDefault(x => x.Language.ToLower() == CategoryName.Key.ToLower() && x.CategoryId == CategoryDto.CategoryId);
                if (CategoryTranslation == null)
                {
                    CategoryObj.CategoryTranslations.Add(new CategoryTranslation
                    {
                        Title = CategoryName.Value,
                        Language = CategoryName.Key
                    });
                }
                else
                    CategoryTranslation.Title = CategoryName.Value;
            }
            //CategoryObj.IsDeleted = CategoryDto.IsDeleted;
            //CategoryObj.IsStatic = CategoryDto.IsStatic;
            _categoryService.Update(CategoryObj);
            SaveChanges();
            return CategoryDto;

        }

        public PagedResultsDto GetAllCategorys(int page, int pageSize)
        {
            return _categoryService.GetAllCategorys(page, pageSize);
        }

    }
}
