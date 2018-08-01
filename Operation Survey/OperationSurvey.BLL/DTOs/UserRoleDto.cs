using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class UserRoleDto
    {
        public long UserRoleId { get; set; }

        public long UserId { get; set; }
        //public UserDto User { get; set; }

        public long RoleId { get; set; }
        public RoleDto Role { get; set; }
    }
}

