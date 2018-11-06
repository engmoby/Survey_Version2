using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class ServiceDto
    {
        public long ServiceId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; } 
        public long AssetId { get; set; }
        public virtual AssetDto Asset { get; set; } 
        public long VendorId { get; set; }
        public virtual VendorDto Vendor { get; set; }
        public float Price { get; set; }
        public string Notes { get; set; }
        public float Percentage { get; set; } 
        public long ProjectId { get; set; }
        public virtual ProjectDto Project { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; } 
    }
}

