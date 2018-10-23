using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using OperationSurvey.Common.CustomException;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace OperationSurvey.BLL.Services
{
    public class CategoryTypeFacade:BaseFacade,ICategoryTypeFacade
    {
        private ICategoryTypeService _categoryTypeService;
        private ICategoryTypeTranslationService _categoryTypeTranslationService;
        public CategoryTypeFacade(IUnitOfWorkAsync unitOfWork, ICategoryTypeService categoryTypeService, ICategoryTypeTranslationService categoryTypeTranslationService):base(unitOfWork)
        {
            _categoryTypeService = categoryTypeService;
            _categoryTypeTranslationService = categoryTypeTranslationService;
        }
        public CategoryTypeDto GetCategoryType (long categoryTypeId, int tenantId)
        {
            return Mapper.Map<CategoryTypeDto>(_categoryTypeService.Query(x => x.CategoryTypeId == categoryTypeId && x.TenantId == tenantId).Select().FirstOrDefault());
        }

        public CategoryTypeDto CreateCategoryType(CategoryTypeDto categoryTypeDto, int userId, int tenantId)
        {
            if (GetCategoryType(categoryTypeDto.CategoryTypeId, tenantId) != null)
            {
                return EditCategoryType(categoryTypeDto, userId, tenantId);
            }
            ValidateMenu(categoryTypeDto, tenantId);
            var userTypeObj = Mapper.Map<CategoryType>(categoryTypeDto);
            foreach (var userTypeName in categoryTypeDto.TitleDictionary)
            {
                //var check = _typeTranslationService.Query(x => x.Title == userTypeName.Value && x.TenantId == tenantId).Select();
                //if (check.Any())
                //    throw new ValidationException(ErrorCodes.RecordIsExist);
                if (string.IsNullOrEmpty(userTypeName.Value))
                    throw new ValidationException(ErrorCodes.NameIsExist);

                userTypeObj.CategoryTypeTranslations.Add(new CategoryTypeTranslation
                {
                    Title = userTypeName.Value,
                    Language = userTypeName.Key
                });
            }

            userTypeObj.CreationTime = Strings.CurrentDateTime;
            userTypeObj.CreatorUserId = userId;
            userTypeObj.TenantId = tenantId;
            _categoryTypeTranslationService.InsertRange(userTypeObj.CategoryTypeTranslations);
            _categoryTypeService.Insert(userTypeObj);
            SaveChanges();
            return categoryTypeDto;
        }

        public CategoryTypeDto EditCategoryType(CategoryTypeDto categoryTypeDto, int userId, int tenantId)
        {
            var userTypeObj = _categoryTypeService.Query(x => x.CategoryTypeId == categoryTypeDto.CategoryTypeId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (userTypeObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateMenu(categoryTypeDto, tenantId);

            foreach (var userTypeName in categoryTypeDto.TitleDictionary)
            {
                //var check = _typeTranslationService.Query(x => x.Title == userTypeName.Value && x.TenantId == tenantId).Select();
                //if (check.Any())
                //    throw new ValidationException(ErrorCodes.RecordIsExist);

                var userTypeTranslation = userTypeObj.CategoryTypeTranslations.FirstOrDefault(x => x.Language.ToLower() == userTypeName.Key.ToLower() && x.CategoryTypeId == categoryTypeDto.CategoryTypeId);
                if (userTypeTranslation == null)
                {
                    userTypeObj.CategoryTypeTranslations.Add(new CategoryTypeTranslation
                    {
                        Title = userTypeName.Value,
                        Language = userTypeName.Key
                    });
                }
                else
                    userTypeTranslation.Title = userTypeName.Value;
            }
            userTypeObj.LastModificationTime = Strings.CurrentDateTime;
            userTypeObj.LastModifierUserId = userId;
            userTypeObj.IsDeleted = categoryTypeDto.IsDeleted;
            userTypeObj.Time = categoryTypeDto.Time;
            userTypeObj.Type = categoryTypeDto.Type;
            userTypeObj.Emails = categoryTypeDto.Emails;
            userTypeObj.Body = categoryTypeDto.Body;
            _categoryTypeService.Update(userTypeObj);
            SaveChanges();
            return categoryTypeDto;

        }

        public PagedResultsDto GetAllCategoryTypes(int page, int pageSize, int tenantId)
        {
            return _categoryTypeService.GetAllCategoryTypes(page, pageSize, tenantId);
        }
        private void ValidateMenu(CategoryTypeDto categoryTypeDto, long tenantId)
        {
            foreach (var name in categoryTypeDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_categoryTypeTranslationService.CheckNameExist(name.Value, name.Key, categoryTypeDto.CategoryTypeId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
    }
}
