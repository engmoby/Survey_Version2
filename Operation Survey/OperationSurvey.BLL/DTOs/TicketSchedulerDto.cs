using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.Common;

namespace OperationSurvey.BLL.DTOs
{
    public class TicketSchedulerDto
    {
        public long Id { get; set; }
        public Enums.TicketStatus Status { get; set; }
        public int time { get; set; }

        public string Emails { get; set; }
        public string Body { get; set; }
        public bool IsActive { get; set; }
    }
}
