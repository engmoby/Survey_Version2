using System;
using System.Collections.Generic;
using OperationSurvey.Common;

namespace OperationSurvey.API.Models
{
    public class AssetModel
    {
        public long AssetId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        public long VendorId { get; set; }
        //public VendorModel Vendor { get; set; }
        public float Price { get; set; }
        public string Notes { get; set; }
        public Enums.AssetStatus AssetStatus { get; set; }
        public string DisplayAssetStatus { get; set; }
        public Enums.PaymentMethod PaymentMethod { get; set; }
        public string DisplayPaymentMethod { get; set; }
        public long ProjectId { get; set; }
        public virtual ProjectModel Project { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; } 
    }
}
