﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OperationSurvey.BLL.DTOs
{
    public class CategoryTypeDto
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
    }
}
