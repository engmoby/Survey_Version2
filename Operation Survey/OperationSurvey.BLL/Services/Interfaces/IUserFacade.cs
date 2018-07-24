using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IUserFacade
    {
        UserDto ValidateUser(string email, string password);
        UserDto GetUser(long userId);
        UserDto GetUserByAccountId(Guid userAccountId);
        UserDto EditUserInfo(UserDto userDto);
        UserDto RegisterUser(UserDto userDto); 
    }
}
