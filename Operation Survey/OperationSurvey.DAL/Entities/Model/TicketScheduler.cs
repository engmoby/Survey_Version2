using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.Common;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class TicketScheduler:Entity
    {
        public long Id { get; set; }
        public Enums.TicketStatus Status { get; set; }
        public int time { get; set; }

        public string Emails { get; set; }
        public string Body { get; set; }
        public long  TenantId { get; set; }
        public bool IsActive { get; set; }
    }
}
