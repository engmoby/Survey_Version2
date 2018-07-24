using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IUserService:IService<User>
    {
        User ValidateUser(string email, string password);
        bool CheckEmailDuplicated(string email);
        bool CheckPhoneDuplicated(string phone);
        User CheckUserIsDeleted(string firstName, string password);
        PagedResultsDto GetAllUsers(int page, int pageSize); 
    }
}
