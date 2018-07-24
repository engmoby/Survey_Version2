using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IUserTypeService : IService<UserType>
    {
         PagedResultsDto GetAllUserTypes(int page, int pageSize);
    }
}
