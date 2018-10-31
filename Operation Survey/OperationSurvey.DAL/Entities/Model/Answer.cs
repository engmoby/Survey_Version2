using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Answer : Entity
    {
        public Answer()
        {
            AnswerDetails = new List<AnswerDetails>(); 
        }
        public long AnswerId { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }

        [ForeignKey("Project")]
        public long? ProjectId { get; set; }
        public virtual Project Project { get; set; }

        [ForeignKey("Branch")]
        public long BranchId { get; set; }
        public virtual Branch Branch { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }
        public virtual User User { get; set; }

        public virtual ICollection<AnswerDetails> AnswerDetails { get; set; }
        public int TenantId { get; set; }


        [ForeignKey("Question")]
        public long QuestionId { get; set; }
        public virtual Question Question { get; set; }

        public string Note { get; set; }

    }
}
