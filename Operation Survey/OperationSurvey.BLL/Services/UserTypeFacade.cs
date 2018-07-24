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

        public UserTypeDto GetUserType(long userTypeId)
        {
            return Mapper.Map<UserTypeDto>(_userTypeService.Find(userTypeId));
        }

        public UserTypeDto CreateUserType(UserTypeDto userTypeDto)
        {
            if (GetUserType(userTypeDto.UserTypeId) != null)
            {
                return EditUserType(userTypeDto);
            }

            var userTypeObj = Mapper.Map<UserType>(userTypeDto);
            foreach (var userTypeName in userTypeDto.TitleDictionary)
            {
                userTypeObj.UserTypeTranslations.Add(new UserTypeTranslation
                {
                    Title = userTypeName.Value,
                    Language = userTypeName.Key
                });
            }
            _typeTranslationService.InsertRange(userTypeObj.UserTypeTranslations);
            _userTypeService.Insert(userTypeObj);
            SaveChanges();
            return userTypeDto;
        }

        public UserTypeDto EditUserType(UserTypeDto userTypeDto)
        {
            var userTypeObj = _userTypeService.Find(userTypeDto.UserTypeId);
            if (userTypeObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var userTypeName in userTypeDto.TitleDictionary)
            {
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
            userTypeObj.IsDeleted = userTypeDto.IsDeleted;
            userTypeObj.IsStatic = userTypeDto.IsStatic;
            _userTypeService.Update(userTypeObj);
            SaveChanges();
            return userTypeDto;

        }

        public PagedResultsDto GetAllUserTypes(int page, int pageSize)
        {
            return _userTypeService.GetAllUserTypes(page, pageSize);
        }

    }
}
