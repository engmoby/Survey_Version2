﻿using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices
{
    public class CategoryService : Service<Category>, ICategoryService
    {
        public CategoryService(IRepositoryAsync<Category> repository) : base(repository)
        {
            _repository = repository;
        }

        public PagedResultsDto GetAllCategorys(int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => !x.IsDeleted && (x.TenantId == tenantId || x.TenantId == null)).OrderBy(x => x.CategoryId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            results.Data = Mapper.Map<List<Category>, List<CategoryDto>>(query.OrderBy(x => x.CategoryId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

            return results;
        }
        public List<CategoryDto> GetCategoryByDepartmentId(long departmentId)
        {
            var query = Queryable().Where(x => !x.IsDeleted && (x.DepartmentId == departmentId)).OrderBy(x => x.CategoryId);
            var objDto = new List<CategoryDto>();
            foreach (var category in query)
            {
                objDto.Add(new CategoryDto
                {
                    CategoryId = category.CategoryId,
                    TitleDictionary = category.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title),


                });
            }
            // var data = Mapper.Map<List<Category>, List<CategoryDto>>(query.OrderBy(x => x.CategoryId).ToList());

            return objDto;
        }
    }
}