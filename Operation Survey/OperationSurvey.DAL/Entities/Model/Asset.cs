using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using OperationSurvey.Common;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Asset : Entity
    {
        public Asset()
        {
            AssetTranslations = new List<AssetTranslation>();
        }
        public long AssetId { get; set; }

        [ForeignKey("Vendor")]
        public long VendorId { get; set; }
        public virtual Vendor Vendor { get; set; }
        public float Price { get; set; }
        public string Notes { get; set; }
        public Enums.AssetStatus AssetStatus { get; set; }
        public Enums.PaymentMethod PaymentMethod { get; set; }
        public long ProjectId { get; set; }
        public virtual Project Project { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<AssetTranslation> AssetTranslations { get; set; }
        public int? TenantId { get; set; }
    }
}
