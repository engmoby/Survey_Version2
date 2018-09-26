using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IUserFacade
    {
        UserDto ValidateUser(string email, string password);
        UserDto GetUser(long userId, int tenantId);
        UserDto GetUser(long userId);
        UserDto GetUserByAccountId(Guid userAccountId);
        UserDto EditUserInfo(UserDto userDto, int userId, int tenantId);
        UserDto RegisterUser(UserDto userDto, int userId, int tenantId);
        void AddNewGlobalUser(AdminDto adminDto);
        void UpdateGlobalUser(AdminDto adminDto);
        void UpdateAdminPackage(AdminDto adminDto);
        UserConsumed GetMaxAndConsumedUsers(long tenantId);
        PagedResultsDto GetAllUsersByType(int TenantId,string type);
    }
}
