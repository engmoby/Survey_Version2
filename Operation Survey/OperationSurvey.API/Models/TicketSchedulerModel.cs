using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OperationSurvey.API.Models
{
    public class TicketSchedulerModel
    {
        public long Id { get; set; }
        public string Status { get; set; }
        public int time { get; set; }

        public string Emails { get; set; }
        public string Body { get; set; }
        public bool IsActive { get; set; }
    }
}