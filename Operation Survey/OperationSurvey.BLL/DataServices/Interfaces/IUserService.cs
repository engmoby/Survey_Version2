using System;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IUserService:IService<User>
    {
        User ValidateUser(string email, string password );
        bool CheckEmailDuplicated(string email,int tenantId);
        bool CheckPhoneDuplicated(string phone, int tenantId);
        User CheckUserIsDeleted(string firstName, string password);
        PagedResultsDto GetAllUsers(int page, int pageSize, int tenantId);
        User GetAdminByAccountId(Guid userAccountId);
    }
}
