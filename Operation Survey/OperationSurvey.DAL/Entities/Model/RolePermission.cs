using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class RolePermission : Entity
    { 
        public long RolePermissionId { get; set; }

        [ForeignKey("Permission")]
        public long PermissionId { get; set; }
        public virtual Permission Permission { get; set; }

        [ForeignKey("Role")]
        public long RoleId { get; set; }
        public virtual Role Role { get; set; }

        public long ActionId { get; set; }

        public int TenantId { get; set; }

    }
}
