using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OperationSurvey.BLL.DTOs
{
    public class TicketDashboard
    {
        public Dictionary<string, string> XaxisName { get; set; }
        public long PendingCount { get; set; }
        public long AssignedCount { get; set; }
        public long InProgressCount { get; set; }
        public long ClosedCount { get; set; }
        public long RejectedCount { get; set; }
        public long ReassignedCount { get; set; }
        public long CompletedCount { get; set; }
    }
}
