using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class VendorDto
    {
        public long VendorId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }  
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
    }
}

