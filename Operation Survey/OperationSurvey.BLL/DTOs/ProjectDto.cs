using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class ProjectDto
    {
        public long ProjectId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        public long BranchId { get; set; }

        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }

        public List<AssetDto> Assets { get; set; }
        public List<ServiceDto> Services { get; set; }
    }
}

