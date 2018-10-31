using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Service : Entity
    {
        public Service()
        {
            ServiceTranslations = new List<ServiceTranslation>();
        }
        public long ServiceId { get; set; }


        //   [ForeignKey("Asset")]
        public long AssetId { get; set; }
        //   public virtual Asset Asset { get; set; }

        //   [ForeignKey("Vendor")]
        public long VendorId { get; set; }
        //     public virtual Vendor Vendor { get; set; }
        public float Price { get; set; }
        public string Notes { get; set; }
        public float Percentage { get; set; }

        public long ProjectId { get; set; }
        //  public virtual Project Project { get; set; }
        public virtual ICollection<ServiceTranslation> ServiceTranslations { get; set; }

        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public int? TenantId { get; set; }
    }
}
