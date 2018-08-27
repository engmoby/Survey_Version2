using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using AutoMapper;
using Newtonsoft.Json;
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
        private readonly IPermissionService _permissionService;
        private readonly IRolePermissionService _rolePermissionService;
        private readonly IPackageService _packageService;
        private readonly IUserBranchService _userBranchService;
        private readonly IUserCategoryService _userCategoryService;

        public UserFacade(IUserService userService, IUnitOfWorkAsync unitOfWork, IUserRoleService userRoleService, IPermissionService permissionService, IRolePermissionService rolePermissionService, IPackageService packageService, IUserBranchService userBranchService, IUserCategoryService userCategoryService) : base(unitOfWork)
        {
            _userService = userService;
            _userRoleService = userRoleService;
            _permissionService = permissionService;
            _rolePermissionService = rolePermissionService;
            _packageService = packageService;
            _userBranchService = userBranchService;
            _userCategoryService = userCategoryService;
        }

        public UserFacade(IUserService userService, IUserRoleService userRoleService, IPermissionService permissionService, IRolePermissionService rolePermissionService, IPackageService packageService, IUserBranchService userBranchService, IUserCategoryService userCategoryService)
        {
            _userService = userService;
            _userRoleService = userRoleService;
            _permissionService = permissionService;
            _rolePermissionService = rolePermissionService;
            _packageService = packageService;
            _userBranchService = userBranchService;
            _userCategoryService = userCategoryService;
        }


        public UserDto ValidateUser(string email, string password)
        {
            string encryptedPassword = PasswordHelper.Encrypt(password);;
            var user = _userService.ValidateUser(email, encryptedPassword) ?? _userService.CheckUserIsDeleted(email, encryptedPassword);
            if (user == null) throw new ValidationException(ErrorCodes.UserNotFound);
            if (!user.IsStatic && DateTime.Now.Date > user.Package.End.Date ) throw new ValidationException(ErrorCodes.PackageExpired);
            if (!user.IsStatic && DateTime.Now.Date < user.Package.Start.Date) throw new ValidationException(ErrorCodes.PackageNotActivated);
            var userDto = Mapper.Map<UserDto>(user);
            userDto.PermissionId = GetUserPaermissionId(user.UserId);
            return userDto;
        }
        

        private List<long> GetUserPaermissionId(long userId)
        {
            var userRoleId = _userRoleService.Query(x => x.UserId == userId).Select(x => x.RoleId).ToList();
            var userPermissionId = _rolePermissionService.Query(x=>userRoleId.Contains(x.RoleId)).Select(x=>x.PermissionId).ToList();
            return userPermissionId;
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
            getRole.UserRoles = new List<UserRole>();
            getRole.UserType = new UserType();

            var userDto = new UserDto();

            userDto.UserTypeId = (int)getRole.UserTypeId;
            userDto.UserId = getRole.UserId;
            userDto.FirstName = getRole.FirstName;
            userDto.LastName = getRole.LastName;
            userDto.Email = getRole.Email;
            userDto.Phone = getRole.Phone;
            userDto.UserAccountId = getRole.UserAccountId;
            userDto.TenantId = getRole.TenantId;
            userDto.Password = PasswordHelper.Decrypt(getRole.Password);


            var afterMap = userDto;
            //var afterMap = Mapper.Map<UserDto>(getRole);

            afterMap.UserRoles = _userRoleService.GetUserRoleById(userId, userDto.TenantId);

            return afterMap;
        }
        public UserDto GetUser(long userId, int tenantId)
        {
            if (userId == 0)
            {
                return null;
            }
            //var getRole = _userService.Find(userId);
            var getRole = _userService.Query(x => x.UserId == userId && x.TenantId == tenantId).Select().FirstOrDefault();
            getRole.UserRoles = new List<UserRole>();
            getRole.UserType = new UserType();

            var userDto = new UserDto();

            userDto.UserTypeId = (int)getRole.UserTypeId;
            userDto.UserId = getRole.UserId;
            userDto.FirstName = getRole.FirstName;
            userDto.LastName = getRole.LastName;
            userDto.Email = getRole.Email;
            userDto.Phone = getRole.Phone;
            userDto.UserAccountId = getRole.UserAccountId;
            userDto.DepartmentId = getRole.DepartmentId;
            userDto.AreaId = getRole.AreaId;
            userDto.BranchesId = getRole.UserBranches.Select(x=>x.BranchId).ToList();
            userDto.CateoriesId = getRole.UserCategories.Select(x=>x.CategoryId).ToList();
            userDto.Password = PasswordHelper.Decrypt(getRole.Password);


            var afterMap = userDto;
            //var afterMap = Mapper.Map<UserDto>(getRole);

            afterMap.UserRoles = _userRoleService.GetUserRoleById(userId, tenantId);

            return afterMap;
        }


        public UserDto GetUserByAccountId(Guid userAccountId)
        {
            return Mapper.Map<UserDto>(_userService.Query(x => x.UserAccountId == userAccountId).Select().FirstOrDefault());
        }
        public UserDto RegisterUser(UserDto userDto, int userId, int tenantId)
        {
            if (GetUser(userDto.UserId, tenantId) != null)
            {
                return EditUser(userDto, userId, tenantId);
            }
            if (_userService.CheckEmailDuplicated(userDto.Email, tenantId))
            {
                throw new ValidationException(ErrorCodes.MailExist);
            }
            if (_userService.CheckPhoneDuplicated(userDto.Phone, tenantId))
            {
                throw new ValidationException(ErrorCodes.PhoneExist);
            }


            var userObj = Mapper.Map<User>(userDto);
            userObj.FirstName = userDto.FirstName;
            // userObj.UserAccountId = Guid.NewGuid();
            userObj.LastName = userDto.LastName;
            userObj.Email = userDto.Email;
            userObj.Phone = userDto.Phone;
            userObj.Password = PasswordHelper.Encrypt(userDto.Password);
            userObj.CreationTime = DateTime.Now;
            userObj.IsActive = userDto.IsActive;
            userObj.IsDeleted = false;
            userObj.UserTypeId = userDto.UserTypeId;
            userObj.TenantId = tenantId;
            userObj.CreationTime = Strings.CurrentDateTime;
            userObj.CreatorUserId = userId;

            foreach (var roleper in userDto.UserRoles)
            {

                userObj.UserRoles.Add(new UserRole
                {
                    RoleId = roleper.RoleId,
                    TenantId = tenantId
                });
            }
            Package package;

            var packages = _packageService.Query(x => x.TenantId == tenantId).Include(x => x.Users).Select().ToList();
            package = packages.OrderBy(x => x.Start).FirstOrDefault();
            int count = 1;
            while (true)
            {
                if (package.MaxNumberOfUsers > package.Users.Count(x => !x.IsDeleted))
                {
                    break;
                }
                //else
                //{
                //    consumedWaiters = consumedWaiters - package.MaxNumberOfWaiters;
                //}

                package = packages.OrderBy(x => x.Start).Skip(count).FirstOrDefault();
                count++;
            }
            userObj.PackageId = package.PackageId;

            _userCategoryService.InsertRange(userObj.UserCategories);
            _userBranchService.InsertRange(userObj.UserBranches);
            _userRoleService.InsertRange(userObj.UserRoles);
            _userService.Insert(userObj);
            SaveChanges();
            //var userRetuenDto = Mapper.Map<UserDto>(userObj);
            var admin = _userService.Query(x => x.IsStatic && x.TenantId == tenantId).Select().FirstOrDefault();
            UpdateSubscription(admin.UserAccountId, package.PackageGuid, _userService.Query(x=>x.PackageId == package.PackageId && !x.IsDeleted).Select().Count());

            return userDto;
        }

        public UserDto EditUserInfo(UserDto userDto, int userId, int tenantId)
        {
            //  var getUser = GetUser(userDto.UserId);
            var returnUser = EditUser(userDto, userId, tenantId);
            return returnUser;
        }
        public UserDto EditUser(UserDto userDto, int userId, int tenantId)
        {
            //if (_userService.CheckEmailDuplicated(userDto.Email, tenantId))
            //{
            //    throw new ValidationException(ErrorCodes.MailExist);
            //}
            //if (_userService.CheckPhoneDuplicated(userDto.Phone, tenantId))
            //{
            //    throw new ValidationException(ErrorCodes.PhoneExist);
            //}
            var userObj = _userService.Query(x => x.UserId == userDto.UserId && x.TenantId == tenantId)
                .Select().FirstOrDefault(); 
            //userObj.Phone = (userDto.Phone == "" || userDto.Phone == "0") ? null : userDto.Phone;
            userObj.FirstName = userDto.FirstName;
            userObj.LastName = userDto.LastName;
            userObj.Phone = userDto.Phone;
            userObj.Password = (userDto.Password != null) ? PasswordHelper.Encrypt(userDto.Password) : userObj.Password;
            userObj.IsActive = userDto.IsActive;
            userObj.IsDeleted = false;
            userObj.Email = userDto.Email;
            userObj.UserTypeId = userDto.UserTypeId;
            userObj.AreaId = userDto.AreaId;
            userObj.DepartmentId = userDto.DepartmentId;


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
                    RoleId = roleper.RoleId,
                    TenantId = tenantId
                });
            }
            var deleteuserBranches = new UserBranch[userObj.UserBranches.Count];
            userObj.UserBranches.CopyTo(deleteuserBranches, 0);
            foreach (var userBranch in deleteuserBranches)
            {
                _userBranchService.Delete(userBranch);

            }
            foreach (var branchId in userDto.BranchesId)
            {
                userObj.UserBranches.Add(new UserBranch
                {
                    BranchId = branchId
                });
            }
            var deleteuserCategories = new UserCategory[userObj.UserCategories.Count];
            userObj.UserCategories.CopyTo(deleteuserCategories, 0);
            foreach (var userCategory in deleteuserCategories)
            {
                _userCategoryService.Delete(userCategory);

            }
            foreach (var categoryId in userDto.CateoriesId)
            {
                userObj.UserCategories.Add(new UserCategory
                {
                    CategoryId = categoryId
                });
            }

            _userService.Update(userObj);
            SaveChanges();


            // var userRetuenDto = Mapper.Map<UserDto>(userObj);
            return userDto;
        }

        private void UpdateSubscription(Guid adminAccountGuid, Guid packageGuid, int consumed)
        {
            //var admin = _userService.Find(adminId);
            string url = ConfigurationManager.AppSettings["subscriptionURL"];
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url + "/Users/EditUserConsumer");
            //request.Headers.Add("X-Auth-Token:" + token);
            request.ContentType = "application/json";
            request.Method = "POST";
            var serializer = JsonConvert.SerializeObject(new
            {
                userConsumer = consumed,
                userAccountId = adminAccountGuid,
                backageGuid = packageGuid,
                //productId = admin.ProductId
            });
            //request.ContentLength = serializer.Length;
            using (var streamWriter = new StreamWriter(request.GetRequestStream()))
            {
                string json = serializer;

                streamWriter.Write(json);
            }
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            {

                Stream receiveStream = response.GetResponseStream();
                StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8);
                var infoResponse = readStream.ReadToEnd();

                response.Close();
                receiveStream.Close();
                readStream.Close();
            }
        }
        #region integration with subscription module
        public void AddNewGlobalUser(AdminDto adminDto)
        {
            var admin = _userService.GetAdminByAccountId(adminDto.UserAccountId);
            var lastUser = _userService.Queryable().OrderByDescending(x => x.TenantId).FirstOrDefault();
           var tenantId = admin?.TenantId ?? (lastUser?.TenantId +1 ?? 1);
            if (admin == null)
            {
                User newAdmin = new User();
                newAdmin.Email = adminDto.UserName;
                newAdmin.FirstName = adminDto.Name;
                newAdmin.UserAccountId = adminDto.UserAccountId;
                newAdmin.UserRoles.Add(new UserRole {RoleId = 1});
                newAdmin.UserTypeId = 1;
                newAdmin.Password = adminDto.Password;
                newAdmin.IsActive = adminDto.IsActive;
                newAdmin.TenantId = tenantId;
                newAdmin.IsStatic = true;
                _userRoleService.InsertRange(newAdmin.UserRoles);
                _userService.Insert(newAdmin);
                admin = newAdmin;
            }
            else
            {
                admin.Email = adminDto.UserName;
                admin.FirstName = adminDto.Name;
                admin.Password = adminDto.Password;
                admin.IsActive = adminDto.IsActive;
                //admin.ProductId = adminDto.ProductId;

                _userService.Update(admin);
            }
            SaveChanges();
            var package = _packageService.Query(x => x.PackageGuid == adminDto.PackageGuid).Select().FirstOrDefault();
            if (package == null)
            {
                Package newPackage = new Package
                {
                    End = adminDto.End,
                    Start = adminDto.Start,
                    MaxNumberOfUsers = adminDto.Limit,
                    PackageGuid = adminDto.PackageGuid,
                    TenantId = tenantId
                };
                _packageService.Insert(newPackage);
            }
            else
            {
                package.End = adminDto.End;
                package.Start = adminDto.Start;
                _packageService.Update(package);
            }

            //_userService.Update(admin);
            SaveChanges();
        }

        public void UpdateGlobalUser(AdminDto adminDto)
        {
            var admin = _userService.GetAdminByAccountId(adminDto.UserAccountId);
            admin.Email = adminDto.UserName;
            admin.FirstName = adminDto.Name;
            admin.Password = adminDto.Password;
            admin.IsActive = adminDto.IsActive;

            _userService.Update(admin);
            SaveChanges();
        }

        public void UpdateAdminPackage(AdminDto adminDto)
        {
            var admin = _userService.GetAdminByAccountId(adminDto.UserAccountId);
            var package = _packageService.Query(x => x.PackageGuid == adminDto.PackageGuid).Select().FirstOrDefault();
            if (package == null)
            {
                Package newPackage = new Package
                {
                    End = adminDto.End,
                    Start = adminDto.Start,
                    MaxNumberOfUsers = adminDto.Limit,
                    PackageGuid = adminDto.PackageGuid,
                    TenantId = admin.TenantId
                };
                _packageService.Insert(newPackage);
            }
            else
            {
                package.End = adminDto.End;
                package.Start = adminDto.Start;
                _packageService.Update(package);
            }
            //admin.ProductId = adminDto.ProductId;

            _userService.Update(admin);
            SaveChanges();
        }


        public UserConsumed GetMaxAndConsumedUsers(long tenantId)
        {
            var maxNum = _packageService.Query(x=>x.TenantId == tenantId).Select(x=>x.MaxNumberOfUsers).Sum();

            var consumedUsers = _userService.Query(x=>!x.IsDeleted && x.TenantId == tenantId && !x.IsStatic).Select().Count();

            UserConsumed MaxCon = new UserConsumed();
            MaxCon.MaxNumUsers = maxNum;
            MaxCon.ConsumedUsers = consumedUsers;


            return MaxCon;
        }



        #endregion
    }
}
