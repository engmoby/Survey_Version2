using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IUserTypeFacade
    { 
        UserTypeDto GetUserType(long userTypeId , int tenantId); 
        UserTypeDto CreateUserType(UserTypeDto userDto, int userId, int tenantId); 
        UserTypeDto EditUserType(UserTypeDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllUserTypes(int page, int pageSize,   int tenantId); 
    }
}
