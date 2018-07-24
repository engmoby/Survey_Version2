﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Answer : Entity
    {
        public Answer()
        {
            AnswersdDetailses = new List<AnswerDetails>(); 
        }
        public long AnswerId { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }

        [ForeignKey("Branch")]
        public long BranchId { get; set; }
        public virtual Branch Branch { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }
        public virtual User User { get; set; }

        public virtual ICollection<AnswerDetails> AnswersdDetailses { get; set; }
        public int TenantId { get; set; }
    }
}