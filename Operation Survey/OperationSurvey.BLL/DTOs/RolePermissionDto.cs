using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class RolePermissionDto
    {
        public long RolePermissionId { get; set; }
         
        public long PermissionId { get; set; }
        public virtual PermissionDto Permission { get; set; }
         
        public long RoleId { get; set; }
        public virtual RoleDto Role { get; set; }

        public long ActionId { get; set; }
    }
}

