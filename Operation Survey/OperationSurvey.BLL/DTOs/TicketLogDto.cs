using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.Common;

namespace OperationSurvey.BLL.DTOs
{
    public class TicketLogDto
    {
        public long Id { get; set; }
        public Enums.TicketStatus Status { get; set; }
        public DateTime DateTime { get; set; }
        public string User { get; set; }
    }
}
