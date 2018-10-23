using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class CategoryType:Entity
    {
        public CategoryType()
        {
            CategoryTypeTranslations = new List<CategoryTypeTranslation>();
            CategoryTypeCategories = new List<CategoryTypeCategory>();
        }
        public long CategoryTypeId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }

        public virtual ICollection<CategoryTypeTranslation> CategoryTypeTranslations { get; set; }
        public virtual ICollection<CategoryTypeCategory> CategoryTypeCategories { get; set; }
        public int? TenantId { get; set; }


        public int Time { get; set; }
        public string Type{ get; set; }
        public string Emails { get; set; }
        public string Body { get; set; }
    }
}
