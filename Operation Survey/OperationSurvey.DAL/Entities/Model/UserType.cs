using System;
using System.Collections.Generic;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class UserType : Entity
    {
        public UserType()
        {
            UserTypeTranslations = new List<UserTypeTranslation>();
            Users = new List<User>();
        }
        public long UserTypeId { get; set; } 
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<UserTypeTranslation> UserTypeTranslations { get; set; }
        public virtual ICollection<User> Users { get; set; }
        public int? TenantId { get; set; }
    }
}
