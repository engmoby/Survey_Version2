using System;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class VendorTranslation : Entity
    {
        public VendorTranslation()
        {

        }
        public long VendorTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long VendorId { get; set; }
        public virtual Vendor Vendor { get; set; }
        public int? TenantId { get; set; }
    }
}
