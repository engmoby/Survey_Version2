using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface ICategoryFacade
    { 
        CategoryDto GetCategory(long userId, int tenantId); 
        CategoryDto CreateCategory(CategoryDto userDto, int userId, int tenantId);
        CategoryDto EditCategory(CategoryDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllCategorys(int page, int pageSize, int tenantId); 
    }
}
