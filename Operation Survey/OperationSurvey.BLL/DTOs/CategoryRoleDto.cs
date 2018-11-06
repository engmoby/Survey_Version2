using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class CategoryRoleDto
    {
        public long CategoryRoleId { get; set; }
         
        public long CategoryId { get; set; }
        //public virtual CategoryDto Category { get; set; }
         
        public long RoleId { get; set; }
        public virtual RoleDto Role { get; set; }
        public int TenantId { get; set; }
    }
}

