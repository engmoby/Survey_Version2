using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OperationSurvey.BLL.DTOs
{
    public class QuestionDashBoard
    {
        public long QuestionId { get; set; }

        public int LikeCount { get; set; }
        public int DisLikeCount { get; set; }

        public double OneStartCount { get; set; }
        public double TwoStartCount { get; set; }
        public double ThreeStartCount { get; set; }
        public double FourStartCount { get; set; }
        public double FiveStartCount { get; set; }
        public double Average { get; set; }

        public Dictionary<long,int> OptionsCount { get; set; }
    }
}
