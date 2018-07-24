using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.Common;

namespace OperationSurvey.BLL.DTOs
{
    public class ProductNamesDto
    {
        public long ProductId { get; set; }
        public string ProductTitle { get; set; }
        public string ProductDesc { get; set; } 
    }
}
