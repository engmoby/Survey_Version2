using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using OperationSurvey.Common;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public   class Question : Entity
    {
        public Question()
        {
            QuestionTranslations = new List<QuestionTranslation>();
            QuestionDetailses = new List<QuestionDetails>();
            AnswersdDetailses = new List<AnswerDetails>();
        }

        public long QuestionId { get; set; }
        public Enums.QuestionType QuestionTypeId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }

        [ForeignKey("Category")]
        public long CategoryId { get; set; }
        public virtual Category Category { get; set; }

        public ICollection<QuestionTranslation> QuestionTranslations { get; set; }
        public virtual ICollection<QuestionDetails> QuestionDetailses { get; set; }
        public virtual ICollection<AnswerDetails> AnswersdDetailses { get; set; }
        public int TenantId { get; set; }
    }
}
