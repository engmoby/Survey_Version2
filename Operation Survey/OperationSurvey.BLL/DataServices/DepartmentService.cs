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
        private readonly ICategoryService _categoryService;
        public DepartmentService(IRepositoryAsync<Department> repository, ICategoryService  categoryService) : base(repository)
        {
            _repository = repository;
            _categoryService = categoryService;
        }
        
        public PagedResultsDto GetAllDepartments(int page, int pageSize, int tenantId)
        { 
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId== tenantId || x.TenantId == null)).OrderBy(x => x.DepartmentId);

            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var modelReturn = pageSize > 0
                ? query.OrderBy(x => x.DepartmentId).Skip((page - 1) * pageSize).Take(pageSize).ToList()
                : query.Where(x => x.Categories.Count > 0).OrderBy(x => x.DepartmentId).ToList();

            var userDto = new List<DepartmentDto>();
            foreach (var user in modelReturn)
            {
                var categoryList = _categoryService.GetCategoryByDepartmentId(user.DepartmentId);
                userDto.Add(new DepartmentDto
                {
                    DepartmentId = user.DepartmentId,
                    Categories = categoryList,
                    TitleDictionary = user.DepartmentTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)
                });
            }
            // results.Data = Mapper.Map<List<Department>, List<DepartmentDto>>(query.OrderBy(x => x.DepartmentId).Skip((page - 1) * pageSize).Take(pageSize).ToList());
             results.Data = userDto;

            return results;
        }

    }
}