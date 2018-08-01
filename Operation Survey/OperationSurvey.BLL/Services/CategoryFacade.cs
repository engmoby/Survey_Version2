using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using OperationSurvey.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.Services
{
    public class CategoryFacade : BaseFacade, ICategoryFacade
    {
        private readonly ICategoryService _categoryService;
        private readonly ICategoryTranslationService _typeTranslationService;
        private readonly ICategoryRoleService _categoryRoleService;

        public CategoryFacade(ICategoryService categoryService, IUnitOfWorkAsync unitOfWork, ICategoryTranslationService typeTranslationService, ICategoryRoleService categoryRoleService) : base(unitOfWork)
        {
            _categoryService = categoryService;
            _typeTranslationService = typeTranslationService;
            _categoryRoleService = categoryRoleService;
        }

        public CategoryFacade(ICategoryService categoryService, ICategoryTranslationService typeTranslationService, ICategoryRoleService categoryRoleService)
        {
            _categoryService = categoryService;
            _typeTranslationService = typeTranslationService;
            _categoryRoleService = categoryRoleService;
        }

        public CategoryDto GetCategory(long categoryId, int tenantId)
        {
            // return Mapper.Map<CategoryDto>(_categoryService.Query(x => x.CategoryId == categoryId && x.TenantId == tenantId).Select().FirstOrDefault());
            if (categoryId == 0) return null;

            var query = _categoryService.Query(x => x.CategoryId == categoryId && x.TenantId == tenantId).Select()
                .FirstOrDefault();


            var category = new CategoryDto();
            if (query != null)
            {
                category.CategoryId = query.CategoryId;
                category.DepartmentId = query.DepartmentId;
                category.TitleDictionary = query.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(),
                    translation => translation.Title);

                category.CategoryRoles = _categoryRoleService.GetCategoryRoleById(categoryId, tenantId);
            }

            return category;
        }

        public CategoryDto CreateCategory(CategoryDto categoryDto, int userId, int tenantId)
        {
            if (GetCategory(categoryDto.CategoryId, tenantId) != null)
            {
                return EditCategory(categoryDto, userId, tenantId);
            }

            var categoryObj = Mapper.Map<Category>(categoryDto);
            foreach (var categoryName in categoryDto.TitleDictionary)
            {
                categoryObj.CategoryTranslations.Add(new CategoryTranslation
                {
                    Title = categoryName.Value,
                    Language = categoryName.Key,
                    TenantId = tenantId
                });
            }
            foreach (var roleper in categoryDto.CategoryRoles)
            {

                categoryObj.CategoryRoles.Add(new CategoryRole
                {
                    RoleId = roleper.RoleId,
                    TenantId = tenantId
                });
            }
            _categoryRoleService.InsertRange(categoryObj.CategoryRoles);

            categoryObj.CreationTime = Strings.CurrentDateTime;
            categoryObj.CreatorUserId = userId;
            categoryObj.TenantId = tenantId;
            _typeTranslationService.InsertRange(categoryObj.CategoryTranslations);
            _categoryService.Insert(categoryObj);
            SaveChanges();
            return categoryDto;
        }

        public CategoryDto EditCategory(CategoryDto categoryDto, int userId, int tenantId)
        {
            var categoryObj = _categoryService.Find(categoryDto.CategoryId);
            if (categoryObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var categoryName in categoryDto.TitleDictionary)
            {
                var categoryTranslation = categoryObj.CategoryTranslations.FirstOrDefault(x => x.Language.ToLower() == categoryName.Key.ToLower() && x.CategoryId == categoryDto.CategoryId);
                if (categoryTranslation == null)
                {
                    categoryObj.CategoryTranslations.Add(new CategoryTranslation
                    {
                        Title = categoryName.Value,
                        Language = categoryName.Key
                    });
                }
                else
                    categoryTranslation.Title = categoryName.Value;
            }

            var deleteuserRoles = new CategoryRole[categoryObj.CategoryRoles.Count];
            categoryObj.CategoryRoles.CopyTo(deleteuserRoles, 0);
            foreach (var roleObjRoleuserRole in deleteuserRoles)
            {
                _categoryRoleService.Delete(roleObjRoleuserRole);

            }
            foreach (var roleper in categoryDto.CategoryRoles)
            {
                categoryObj.CategoryRoles.Add(new CategoryRole
                {
                    RoleId = roleper.RoleId,
                    TenantId = tenantId
                });
            }


            categoryObj.LastModificationTime = Strings.CurrentDateTime;
            categoryObj.LastModifierUserId = userId;
            categoryObj.IsDeleted = categoryDto.IsDeleted;
            categoryObj.IsStatic = categoryDto.IsStatic;
            _categoryService.Update(categoryObj);
            SaveChanges();
            return categoryDto;

        }

        public PagedResultsDto GetAllCategorys(int page, int pageSize, int tenantId)
        {
            return _categoryService.GetAllCategorys(page, pageSize, tenantId);
        }

    }
}
