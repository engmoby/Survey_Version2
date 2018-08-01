using System;
using System.Collections.Generic;
using OperationSurvey.Common;

namespace OperationSurvey.API.Models
{
    public class AnswerDetailsModel
    {
        public long AnswerDetailsId { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public Enums.QuestionType QuestionTypeId { get; set; }
        public string Value { get; set; }
        public string Note { get; set; }

        public long AnswerId { get; set; }
       // public AnswerModel Answer { get; set; }

        public long QuestionId { get; set; }
      //  public QuestionModel Question { get; set; }
        public int TenantId { get; set; }
    }
}
