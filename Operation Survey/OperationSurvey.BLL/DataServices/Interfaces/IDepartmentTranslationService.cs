using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IDepartmentTranslationService : IService<DepartmentTranslation>
    {
        PagedResultsDto GetAllDepartments();
        PagedResultsDto GetAllDepartmentsTranslation(string language);
        PagedResultsDto GetDepartmentTranslationByDepartmentId(string language, long DepartmentId);
        DepartmentDto DepartmentTranslationByDepartmentId(string language, long DepartmentId);
    }
}
