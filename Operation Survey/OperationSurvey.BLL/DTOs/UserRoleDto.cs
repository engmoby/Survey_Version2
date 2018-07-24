using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class UserRoleDto
    {
        public long UserRoleId { get; set; }

        public long UserId { get; set; }
        public virtual UserDto User { get; set; }

        public long RoleId { get; set; }
        public virtual RoleDto Role { get; set; }
    }
}

