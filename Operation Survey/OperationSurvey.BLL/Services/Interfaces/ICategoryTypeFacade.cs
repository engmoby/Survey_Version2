using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface ICategoryTypeFacade
    {
        CategoryTypeDto GetCategoryType (long categoryTypeId, int tenantId);
        CategoryTypeDto CreateCategoryType(CategoryTypeDto categoryTypeDto, int userId, int tenantId);
        CategoryTypeDto EditCategoryType(CategoryTypeDto categoryTypeDto, int userId, int tenantId);
        PagedResultsDto GetAllCategoryTypes(int page, int pageSize, int tenantId);
        void HandleUnaswerdQuestion();
    }
}
