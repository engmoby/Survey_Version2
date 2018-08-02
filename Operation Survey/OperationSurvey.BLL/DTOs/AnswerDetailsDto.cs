using System;
using System.Collections.Generic;
using OperationSurvey.Common;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.DTOs
{
    public class AnswerDetailsDto
    {
        public long AnswerDetailsId { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public Enums.QuestionType QuestionTypeId { get; set; }
        public string[] Values { get; set; }
        public string Value { get; set; }
        public string Note { get; set; }

        public long AnswerId { get; set; }
    //    public Answer Answer { get; set; }

        public long QuestionId { get; set; }
       // public Question Question { get; set; }
        public int TenantId { get; set; }
    }
}

