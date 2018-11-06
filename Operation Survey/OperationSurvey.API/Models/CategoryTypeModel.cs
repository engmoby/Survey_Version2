using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OperationSurvey.API.Models
{
    public class CategoryTypeModel
    {
        public long CategoryTypeId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }

        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public int? TenantId { get; set; }
        public int Time { get; set; }
        public string Type { get; set; }
        public string Emails { get; set; }
        public string Body { get; set; }
    }
}