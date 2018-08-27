using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.Common;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Ticket:Entity
    {
        public long TicketId { get; set; }
        public Enums.TicketStatus Status { get; set; }
        public string Title{ get; set; }
        public string Description { get; set; }

        public DateTime? LastModificationTime { get; set; }
        [ForeignKey("ModifierUser")]
        public long? LastModifierUserId { get; set; }
        public virtual User ModifierUser { get; set; }


        public DateTime CreationTime { get; set; }
        [ForeignKey("CreatorUser")]
        public long CreatorUserId { get; set; }
        public virtual User CreatorUser { get; set; }

        [ForeignKey("AssignedUser")]
        public long? AssignedUserId { get; set; }
        public virtual User AssignedUser { get; set; }
        public DateTime? TechnicianModificationTime { get; set; }


        public int TenantId { get; set; }

        [ForeignKey("Department")]
        public long DepartmentId { get; set; }
        public virtual Department Department { get; set; }

        [ForeignKey("Category")]
        public long CategoryId { get; set; }
        public virtual Category Category { get; set; }

        [ForeignKey("Area")]
        public long AreaId { get; set; }
        public virtual Area Area { get; set; }

        [ForeignKey("Branch")]
        public long BranchId { get; set; }
        public virtual Branch Branch { get; set; }

        public string RejectionComment { get; set; }
    }
}
