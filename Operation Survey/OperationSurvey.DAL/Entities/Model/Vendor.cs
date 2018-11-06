using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Vendor : Entity
    {
        public Vendor()
        { 
            VendorTranslations = new List<VendorTranslation>();
        }
        public long VendorId { get; set; }

        public string Website { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<VendorTranslation> VendorTranslations { get; set; } 
        public int? TenantId { get; set; }
    }
}
