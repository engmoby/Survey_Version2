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
    public class RolePermissionService : Service<RolePermission>, IRolePermissionService
    {
        public RolePermissionService(IRepositoryAsync<RolePermission> repository) : base(repository)
        {
            _repository = repository;
        }

        public List<RolePermissionDto> GetRolePermissionById(long roleId, int tenantId)
        {
            var rolePermissions = _repository.Query(x => x.RoleId == roleId && x.TenantId == tenantId).Select().ToList();
            var results = Mapper.Map<List<RolePermission>, List<RolePermissionDto>>(rolePermissions);
            return results;
        }

    }
}
