using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class QuestionDetails : Entity
    {
        public QuestionDetails()
        {
            QuestionDetailsTranslations = new List<QuestionDetailsTranslation>();
        }
        public virtual ICollection<QuestionDetailsTranslation> QuestionDetailsTranslations { get; set; }
        public long QuestionDetailsId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }

        [ForeignKey("Question")]
        public long QuestionId { get; set; }
        public virtual Question Question { get; set; }
        public int TenantId { get; set; }
    }
}
