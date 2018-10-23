using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OperationSurvey.API.Models
{
    public class TicketLogModel
    {
        public long Id { get; set; }
        public string Status { get; set; }
        public DateTime DateTime { get; set; }
        public string User { get; set; }
    }
}