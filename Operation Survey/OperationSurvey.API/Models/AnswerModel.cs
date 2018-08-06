using System;
using System.Collections.Generic;

namespace OperationSurvey.API.Models
{
    public class AnswerModel
    {
        //public DateTime Date { get; set; } 

        //public long BranchId { get; set; } 

        //public List<QuestionModel> QuestionModel { get; set; }
        public long AnswerId { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }

        public long BranchId { get; set; }
        public long UserId { get; set; }
        public string UserName { get; set; }
        public long QuestionId { get; set; }

        public ICollection<AnswerDetailsModel> AnswerDetails { get; set; }
        //public List<string> AnswerDetails { get; set; }
        public int TenantId { get; set; }
        public string Note { get; set; }
    }
}
