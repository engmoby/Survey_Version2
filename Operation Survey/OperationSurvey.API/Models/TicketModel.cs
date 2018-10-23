using OperationSurvey.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OperationSurvey.API.Models
{
    public class TicketModel
    {
        public long TicketId { get; set; }
        public string Status { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public string ModifierUser { get; set; }


        public DateTime? CreationTime { get; set; }
        public long CreatorUserId { get; set; }
        public string CreatorUser { get; set; }

        public long? AssignedUserId { get; set; }
        public string AssignedUser { get; set; }
        public DateTime? TechnicianModificationTime { get; set; }


        public int TenantId { get; set; }

        public long DepartmentId { get; set; }
        public Dictionary<string, string> DepartmentTitleDictionary { get; set; }

        public long CategoryId { get; set; }
        public Dictionary<string, string> CategoryTitleDictionary { get; set; }

        public long AreaId { get; set; }
        public Dictionary<string, string> AreaTitleDictionary { get; set; }

        public long BranchId { get; set; }
        public Dictionary<string, string> BranchTitleDictionary { get; set; }

        public string RejectionComment { get; set; }
        public string AssignComment { get; set; }
        public List<string> ImagesURL { get; set; }

        public Dictionary<long, string> TechnacianUsers { get; set; }
        public string Priority { get; set; }

    }
}