using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface ICategoryTranslationService : IService<CategoryTranslation>
    {
        PagedResultsDto GetAllCategorys();
        PagedResultsDto GetAllCategorysTranslation(string language);
        PagedResultsDto GetCategoryTranslationByCategoryId(string language, long categoryId);
        CategoryDto CategoryTranslationByCategoryId(string language, long categoryId);
        bool CheckNameExist(string objName, string language, long recordId, long tenantId);
    }
}
