using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using OperationSurvey.Common;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class AnswerDetails : Entity
    {
        public AnswerDetails()
        {

        }
        public long AnswerDetailsId { get; set; }
        //public DateTime Date { get; set; }
        //public DateTime CreationTime { get; set; }
        //public long? CreatorUserId { get; set; }
        //public Enums.QuestionType QuestionTypeId { get; set; }
        public int Value { get; set; }
        //public string Note { get; set; }

        [ForeignKey("Answer")]
        public long AnswerId { get; set; }
        public virtual Answer Answer { get; set; }

        [ForeignKey("QuestionDetails")]
        public long? QuestionDetailsId { get; set; }
        public virtual QuestionDetails QuestionDetails { get; set; }
        //[ForeignKey("Question")]
        //public long QuestionId { get; set; }
        //public virtual Question Question { get; set; }
        //public int TenantId { get; set; }
    }
}
