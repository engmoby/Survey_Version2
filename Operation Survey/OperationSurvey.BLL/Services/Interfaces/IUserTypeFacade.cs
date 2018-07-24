using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IUserTypeFacade
    { 
        UserTypeDto GetUserType(long userId); 
        UserTypeDto CreateUserType(UserTypeDto userDto); 
        UserTypeDto EditUserType(UserTypeDto userDto);
        PagedResultsDto GetAllUserTypes(int page, int pageSize); 
    }
}
