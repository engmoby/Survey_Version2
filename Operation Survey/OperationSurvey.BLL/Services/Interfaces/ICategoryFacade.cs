using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface ICategoryFacade
    { 
        CategoryDto GetCategory(long userId); 
        CategoryDto CreateCategory(CategoryDto userDto); 
        CategoryDto EditCategory(CategoryDto userDto);
        PagedResultsDto GetAllCategorys(int page, int pageSize); 
    }
}
