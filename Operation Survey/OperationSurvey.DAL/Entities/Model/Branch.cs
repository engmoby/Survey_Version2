using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Branch : Entity
    {
        public Branch()
        {
            BranchTranslations = new List<BranchTranslation>();
            // Users = new List<User>();
        }

        public long BranchId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }

        [ForeignKey("Area")]
        public long AreaId { get; set; }
        public virtual Area Area { get; set; }

        public virtual ICollection<BranchTranslation> BranchTranslations { get; set; }
        //  public virtual ICollection<User> Users { get; set; }
        public int TenantId { get; set; }
    }
}
