using System;
using System.Collections.Generic;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public   class Permission : Entity
    {
        public Permission()
        {
            PermissionTranslations = new List<PermissionTranslation>();
            RolePermissions = new List<RolePermission>();
        }
        public long PermissionId { get; set; } 
        public string Url { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; } 
        public ICollection<PermissionTranslation> PermissionTranslations { get; set; }
        public virtual ICollection<RolePermission> RolePermissions { get; set; } 
    }
}
