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
    public class DepartmentService : Service<Department>, IDepartmentService
    {
        public DepartmentService(IRepositoryAsync<Department> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllDepartments(int page, int pageSize, int tenantId)
        { 
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId== tenantId || x.TenantId == null)).OrderBy(x => x.DepartmentId);

            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            //results.Data = Mapper.Map<List<Department>, List<DepartmentDto>>(query.OrderBy(x => x.DepartmentId).Skip((page - 1) * pageSize).Take(pageSize).ToList());
            var modelReturn = query.OrderBy(x => x.DepartmentId).Skip((page - 1) * pageSize).Take(pageSize).ToList();

            //var userDto = new List<DepartmentDto>();
            //foreach (var user in modelReturn)
            //{
            //    userDto.Add(new DepartmentDto
            //    {
            //        // UserRoles = Mapper.Map<List<UserRole>, List<UserRoleDto>>(user.UserRoles as List<UserRole>),
            //        UserTypeId = (int)user.UserTypeId,
            //        UserId = user.UserId,
            //        FirstName = user.FirstName,
            //        LastName = user.LastName,
            //        Email = user.Email,
            //        Phone = user.Phone,
            //        DepartmentId = user.DepartmentId,
            //        TitleDictionary = user.DepartmentTranslations
            //    });
            //}

            return results;
        }

    }
}