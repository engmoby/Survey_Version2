using System;
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
    public class UserFacade : BaseFacade, IUserFacade
    {
        private readonly IUserService _userService;
        private readonly IUserRoleService _userRoleService;

        public UserFacade(IUserService userService, IUnitOfWorkAsync unitOfWork, IUserRoleService userRoleService) : base(unitOfWork)
        {
            _userService = userService;
            _userRoleService = userRoleService;
        }

        public UserFacade(IUserService userService, IUserRoleService userRoleService)
        {
            _userService = userService;
            _userRoleService = userRoleService;
        }

      
        public UserDto ValidateUser(string email, string password)
        {
            string encryptedPassword = PasswordHelper.Encrypt(password);
            var user = Mapper.Map<UserDto>(_userService.ValidateUser(email, encryptedPassword)) ?? Mapper.Map<UserDto>(_userService.CheckUserIsDeleted(email, encryptedPassword));
            if (user == null) throw new ValidationException(ErrorCodes.UserNotFound);

            return user;
        }
        //public UserDto GetUser(long userId)
        //{
        //    return Mapper.Map<UserDto>(_userService.Find(userId));
        //}
        public UserDto GetUser(long userId)
        {
            if (userId == 0)
            {
                return null;
            }
            var getRole = _userService.Find(userId);
            getRole.UserRoles= new List<UserRole>();
            getRole.UserType= new UserType();

            var userDto = new UserDto();

            userDto.UserTypeId = (int) getRole.UserTypeId;
            userDto.UserId = getRole.UserId;
            userDto.FirstName = getRole.FirstName;
            userDto.LastName = getRole.LastName;
            userDto.Email = getRole.Email;
            userDto.Phone = getRole.Phone;
            userDto.Password = PasswordHelper.Decrypt(getRole.Password);


            var afterMap = userDto;
            //var afterMap = Mapper.Map<UserDto>(getRole);

            afterMap.UserRoles = _userRoleService.GetUserRoleById(userId);

            return afterMap;
        }


        public UserDto GetUserByAccountId(Guid userAccountId)
        {
            return Mapper.Map<UserDto>(_userService.Query(x => x.UserAccountId == userAccountId).Select().FirstOrDefault());
        }
        public UserDto RegisterUser(UserDto userDto)
        {
            if (GetUser(userDto.UserId) != null)
            {
                return EditUser(userDto);
            }
            if (_userService.CheckEmailDuplicated(userDto.Email))
            {
                throw new ValidationException(ErrorCodes.MailExist);
            }
            if (_userService.CheckPhoneDuplicated(userDto.Phone))
            {
                throw new ValidationException(ErrorCodes.PhoneExist);
            }

          
            var userObj = Mapper.Map<User>(userDto);
            userObj.FirstName = userDto.FirstName;
            userObj.UserAccountId = Guid.NewGuid();
            userObj.LastName = userDto.LastName;
            userObj.Email = userDto.Email;
            userObj.Phone = userDto.Phone;
            userObj.Password = PasswordHelper.Encrypt(userDto.Password);
            userObj.CreationTime = DateTime.Now;
            userObj.IsActive = userDto.IsActive;
            userObj.IsDeleted = false;
            userObj.UserTypeId = userDto.UserTypeId;


            foreach (var roleper in userDto.UserRoles)
            {

                userObj.UserRoles.Add(new UserRole
                {
                    RoleId = roleper.RoleId
                });
            }
            _userRoleService.InsertRange(userObj.UserRoles); 
            _userService.Insert(userObj);
            SaveChanges();
            //var userRetuenDto = Mapper.Map<UserDto>(userObj);
            return userDto;
        }

        public UserDto EditUserInfo(UserDto userDto)
        {
          //  var getUser = GetUser(userDto.UserId);
            var returnUser = EditUser(userDto);
            return returnUser;
        }
        public UserDto EditUser(UserDto userDto)
        {
            var userObj = _userService.Find(userDto.UserId);
            //userObj.Phone = (userDto.Phone == "" || userDto.Phone == "0") ? null : userDto.Phone;
            userObj.Phone =   userDto.Phone;
            userObj.Password = (userDto.Password != null) ? PasswordHelper.Encrypt(userDto.Password) : userObj.Password;
            userObj.IsActive = userDto.IsActive;
            userObj.IsDeleted = false;
            userObj.Email = userDto.Email;
            userObj.UserTypeId = userDto.UserTypeId;


            var deleteuserRoles = new UserRole[userObj.UserRoles.Count];
            userObj.UserRoles.CopyTo(deleteuserRoles, 0);
            foreach (var roleObjRoleuserRole in deleteuserRoles)
            {
                _userRoleService.Delete(roleObjRoleuserRole);

            }
            foreach (var roleper in userDto.UserRoles)
            {
                userObj.UserRoles.Add(new UserRole
                {
                    RoleId = roleper.RoleId 
                });
            }


            _userService.Update(userObj);
            SaveChanges();


           // var userRetuenDto = Mapper.Map<UserDto>(userObj);
            return userDto;
        }
 

    }
}
