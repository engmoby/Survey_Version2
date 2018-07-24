using System.Collections.Generic;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface ICategoryRoleService : IService<CategoryRole>
    {
        List<CategoryRoleDto> GetCategoryRoleById(long categoryId, int tenantId);
    }
}
