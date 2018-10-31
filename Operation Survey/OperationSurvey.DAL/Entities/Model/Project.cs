using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Project : Entity
    {
        public Project()
        { 
            ProjectTranslations = new List<ProjectTranslation>();
            Assets = new List<Asset>();
            Services = new List<Service>();
        }
        public long ProjectId { get; set; }

        [ForeignKey("Branch")]
        public long BranchId { get; set; }
        public virtual Branch Branch { get; set; }

        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<ProjectTranslation> ProjectTranslations { get; set; } 
        public virtual ICollection<Asset> Assets { get; set; } 
        public virtual ICollection<Service> Services { get; set; } 
        public int? TenantId { get; set; }
    }
}
