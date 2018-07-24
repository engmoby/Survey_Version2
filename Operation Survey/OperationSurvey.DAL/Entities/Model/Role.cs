using System;
using System.Collections.Generic;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Role : Entity
    {
        public Role()
        {
            UserRoles = new List<UserRole>();
            RolePermissions = new List<RolePermission>();
            CategoryRoles = new List<CategoryRole>();
            RoleTranslations = new List<RoleTranslation>();
        }
        public long RoleId { get; set; } 
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<RoleTranslation> RoleTranslations { get; set; }
        public virtual ICollection<CategoryRole> CategoryRoles { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }
        public virtual ICollection<RolePermission> RolePermissions { get; set; }
        public int? TenantId { get; set; }
    }
}
