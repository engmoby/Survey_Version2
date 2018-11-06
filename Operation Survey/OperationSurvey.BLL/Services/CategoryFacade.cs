using System.Collections.Generic;
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
        private readonly ICategoryTypeCategoryService _categoryTypeCategoryService;

        public CategoryFacade(ICategoryService categoryService, IUnitOfWorkAsync unitOfWork, ICategoryTranslationService typeTranslationService, ICategoryRoleService categoryRoleService, ICategoryTypeCategoryService categoryTypeCategoryService) : base(unitOfWork)
        {
            _categoryService = categoryService;
            _typeTranslationService = typeTranslationService;
            _categoryRoleService = categoryRoleService;
            _categoryTypeCategoryService = categoryTypeCategoryService;
        }

        public CategoryFacade(ICategoryService categoryService, ICategoryTranslationService typeTranslationService, ICategoryRoleService categoryRoleService, ICategoryTypeCategoryService categoryTypeCategoryService)
        {
            _categoryService = categoryService;
            _typeTranslationService = typeTranslationService;
            _categoryRoleService = categoryRoleService;
            _categoryTypeCategoryService = categoryTypeCategoryService;
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
                category.CategoryTypes = Mapper.Map<List<CategoryTypeDto>>(query.CategoryTypeCategories.Select(x => x.CategoryType).ToList());
            }

            return category;
        }

        public CategoryDto CreateCategory(CategoryDto categoryDto, int userId, int tenantId)
        {
            if (GetCategory(categoryDto.CategoryId, tenantId) != null)
            {
                return EditCategory(categoryDto, userId, tenantId);
            }
            ValidateCategory(categoryDto, tenantId);
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

            foreach (var type in categoryDto.CategoryTypes)
            {

                categoryObj.CategoryTypeCategories.Add(new CategoryTypeCategory
                {
                    CategoryTypeId = type.CategoryTypeId,
                });
            }
            _categoryTypeCategoryService.InsertRange(categoryObj.CategoryTypeCategories);
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
            ValidateCategory(categoryDto, tenantId);
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

            var categoryTypeCategories = new CategoryTypeCategory[categoryObj.CategoryTypeCategories.Count];
            categoryObj.CategoryTypeCategories.CopyTo(categoryTypeCategories, 0);
            foreach (var category in categoryTypeCategories)
            {
                _categoryTypeCategoryService.Delete(category);

            }
            foreach (var type in categoryDto.CategoryTypes)
            {
                categoryObj.CategoryTypeCategories.Add(new CategoryTypeCategory
                {
                    CategoryTypeId = type.CategoryTypeId
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

        private void ValidateCategory(CategoryDto categoryDto, long tenantId)
        {
            foreach (var name in categoryDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, categoryDto.CategoryId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
    }
}
