using System.Collections.Generic;
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
    public class RoleFacade : BaseFacade, IRoleFacade
    {
        private readonly IRoleService _roleService;
        private readonly IRolePermissionService _rolePermissionService;
        private readonly IRoleTranslationService _typeTranslationService;

        public RoleFacade(IRoleService roleService, IUnitOfWorkAsync unitOfWork, IRoleTranslationService typeTranslationService, IRolePermissionService rolePermissionService) : base(unitOfWork)
        {
            _roleService = roleService;
            _typeTranslationService = typeTranslationService;
            _rolePermissionService = rolePermissionService;
        }

        public RoleFacade(IRoleService roleService, IRoleTranslationService typeTranslationService, IRolePermissionService rolePermissionService)
        {
            _roleService = roleService;
            _typeTranslationService = typeTranslationService;
            _rolePermissionService = rolePermissionService;
        }

        public RoleDto GetRole(long roleId)
        {
            if (roleId == 0)
            {
                return null;
            }
            var getRole = _roleService.Find(roleId);
            var afterMap = Mapper.Map<RoleDto>(getRole);

            afterMap.Permissions = _rolePermissionService.GetRolePermissionById(roleId);

            return afterMap;
        }

        public RoleDto CreateRole(RoleDto roleDto)
        {
            if (GetRole(roleDto.RoleId) != null)
            {
                return EditRole(roleDto);
            }

            var roleObj = Mapper.Map<Role>(roleDto);
            foreach (var roleName in roleDto.TitleDictionary)
            {
                roleObj.RoleTranslations.Add(new RoleTranslation
                {
                    Title = roleName.Value,
                    Language = roleName.Key
                });
            }
            foreach (var roleper in roleDto.Permissions)
            {

                roleObj.RolePermissions.Add(new RolePermission
                { 
                    PermissionId = roleper.PermissionId,
                    ActionId = 1
                });
            }
         
            _rolePermissionService.InsertRange(roleObj.RolePermissions);
            _typeTranslationService.InsertRange(roleObj.RoleTranslations);
            _roleService.Insert(roleObj);

            SaveChanges();
            return roleDto;
        }

        public RoleDto EditRole(RoleDto roleDto)
        {
            var roleObj = _roleService.Find(roleDto.RoleId);
            if (roleObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var roleName in roleDto.TitleDictionary)
            {
                var roleTranslation = roleObj.RoleTranslations.FirstOrDefault(x => x.Language.ToLower() == roleName.Key.ToLower() && x.RoleId == roleDto.RoleId);
                if (roleTranslation == null)
                {
                    roleObj.RoleTranslations.Add(new RoleTranslation
                    {
                        Title = roleName.Value,
                        Language = roleName.Key
                    });
                }
                else
                    roleTranslation.Title = roleName.Value;
            }
            var deletePermissions = new RolePermission[roleObj.RolePermissions.Count];
            roleObj.RolePermissions.CopyTo(deletePermissions, 0);
            foreach (var roleObjRolePermission in deletePermissions)
            { 
                _rolePermissionService.Delete(roleObjRolePermission);

            }
            foreach (var roleper in roleDto.Permissions)
            { 
                roleObj.RolePermissions.Add(new RolePermission
                { 
                    PermissionId = roleper.PermissionId,
                    ActionId = 1
                });
            }
            roleObj.IsDeleted = roleDto.IsDeleted;
            roleObj.IsStatic = roleDto.IsStatic;
            _roleService.Update(roleObj);
            SaveChanges();
            return roleDto;

        }

        public PagedResultsDto GetAllRoles(int page, int pageSize)
        {
            return _roleService.GetAllRoles(page, pageSize);
        }

    }
}
