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
    public class CategoryRoleService : Service<CategoryRole>, ICategoryRoleService
    {
        public CategoryRoleService(IRepositoryAsync<CategoryRole> repository) : base(repository)
        {
            _repository = repository;
        }

        public List<CategoryRoleDto> GetCategoryRoleById(long categoryId,int tenantId)
        {
            var categoryRoles = _repository.Query(x => x.CategoryId == categoryId && x.TenantId== tenantId).Select().ToList();

            List<CategoryRoleDto> categoryRoleDto;
            categoryRoleDto = new List<CategoryRoleDto>();
            foreach (var category in categoryRoles)
            {
                categoryRoleDto.Add(new CategoryRoleDto
                {
                    RoleId = category.RoleId,
                    CategoryId = category.CategoryId,
                });
            }
          //   var results = Mapper.Map<List<CategoryRole>, List<CategoryRoleDto>>(categoryRoles);
           var results = categoryRoleDto;
            return results;
        }

    }
}
