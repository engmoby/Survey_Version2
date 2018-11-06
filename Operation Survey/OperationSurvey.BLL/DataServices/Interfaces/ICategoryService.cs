using System.Collections.Generic;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface ICategoryService : IService<Category>
    {
         PagedResultsDto GetAllCategorys(int page, int pageSize, int tenantId);
        List<CategoryDto> GetCategoryByDepartmentId(long departmentId);
    }
}
