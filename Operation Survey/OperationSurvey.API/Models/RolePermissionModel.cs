using System;
using System.Collections.Generic;

namespace OperationSurvey.API.Models
{
    public class RolePermissionModel
    {
        public long RolePermissionId { get; set; }

        public long PermissionId { get; set; }
        public virtual PermissionModel Permission { get; set; }

        public long RoleId { get; set; }
        public virtual RoleModel Role { get; set; }

        public long ActionId { get; set; }
    }
}
