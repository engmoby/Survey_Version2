using System;
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
    public class UserTypeFacade : BaseFacade, IUserTypeFacade
    {
        private readonly IUserTypeService _userTypeService;
        private readonly IUserTypeTranslationService _typeTranslationService;

        public UserTypeFacade(IUserTypeService userTypeService, IUnitOfWorkAsync unitOfWork, IUserTypeTranslationService typeTranslationService) : base(unitOfWork)
        {
            _userTypeService = userTypeService;
            _typeTranslationService = typeTranslationService;
        }

        public UserTypeFacade(IUserTypeService userTypeService, IUserTypeTranslationService typeTranslationService)
        {
            _userTypeService = userTypeService;
            _typeTranslationService = typeTranslationService;
        }

        public UserTypeDto GetUserType(long userTypeId, int tenantId)
        {
            return Mapper.Map<UserTypeDto>(_userTypeService.Query(x => x.UserTypeId == userTypeId && x.TenantId == tenantId).Select().FirstOrDefault());
        }

        public UserTypeDto CreateUserType(UserTypeDto userTypeDto, int userId, int tenantId)
        {
            if (GetUserType(userTypeDto.UserTypeId, tenantId) != null)
            {
                return EditUserType(userTypeDto, userId, tenantId);
            }
            ValidateMenu(userTypeDto, tenantId);
            var userTypeObj = Mapper.Map<UserType>(userTypeDto);
            foreach (var userTypeName in userTypeDto.TitleDictionary)
            {
                //var check = _typeTranslationService.Query(x => x.Title == userTypeName.Value && x.TenantId == tenantId).Select();
                //if (check.Any())
                //    throw new ValidationException(ErrorCodes.RecordIsExist);
                if (string.IsNullOrEmpty(userTypeName.Value))
                    throw new ValidationException(ErrorCodes.RecordIsExist);

                userTypeObj.UserTypeTranslations.Add(new UserTypeTranslation
                {
                    Title = userTypeName.Value,
                    Language = userTypeName.Key,
                    TenantId = tenantId
                });
            }

            userTypeObj.CreationTime = Strings.CurrentDateTime;
            userTypeObj.CreatorUserId = userId;
            userTypeObj.TenantId = tenantId; 
            _typeTranslationService.InsertRange(userTypeObj.UserTypeTranslations);
            _userTypeService.Insert(userTypeObj);
            SaveChanges();
            return userTypeDto;
        }

        public UserTypeDto EditUserType(UserTypeDto userTypeDto, int userId, int tenantId)
        {
            var userTypeObj = _userTypeService.Query(x => x.UserTypeId == userTypeDto.UserTypeId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (userTypeObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateMenu(userTypeDto, tenantId);

            foreach (var userTypeName in userTypeDto.TitleDictionary)
            {
                //var check = _typeTranslationService.Query(x => x.Title == userTypeName.Value && x.TenantId == tenantId).Select();
                //if (check.Any())
                //    throw new ValidationException(ErrorCodes.RecordIsExist);

                var userTypeTranslation = userTypeObj.UserTypeTranslations.FirstOrDefault(x => x.Language.ToLower() == userTypeName.Key.ToLower() && x.UserTypeId == userTypeDto.UserTypeId);
                if (userTypeTranslation == null)
                {
                    userTypeObj.UserTypeTranslations.Add(new UserTypeTranslation
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
            userTypeObj.IsDeleted = userTypeDto.IsDeleted;
            userTypeObj.IsStatic = userTypeDto.IsStatic;
            _userTypeService.Update(userTypeObj);
            SaveChanges();
            return userTypeDto;

        }

        public PagedResultsDto GetAllUserTypes(int page, int pageSize, int tenantId)
        {
            return _userTypeService.GetAllUserTypes(page, pageSize, tenantId);
        }
        private void ValidateMenu(UserTypeDto userTypeDto, long tenantId)
        {
            foreach (var name in userTypeDto.TitleDictionary)
            { 
                if (name.Value.Length > 300) 
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, userTypeDto.UserTypeId,tenantId))
                    throw new ValidationException(ErrorCodes.RecordIsExist);
            }
        }
    }
}
