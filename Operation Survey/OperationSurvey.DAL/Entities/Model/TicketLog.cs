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
    public class TicketLog:Entity
    {
        public long Id { get; set; }

        [ForeignKey("Ticket")]
        public long TicketId { get; set; }
        public virtual Ticket Ticket { get; set; }
        public Enums.TicketStatus Status { get; set; }
        public DateTime DateTime { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }
        public virtual User User { get; set; }
    }
}
