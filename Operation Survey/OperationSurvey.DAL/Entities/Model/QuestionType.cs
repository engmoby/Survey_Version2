using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class QuestionType : Entity
    {
        public QuestionType()
        {
            Questions = new List<Question>();
            QuestionTypeTranslations = new List<QuestionTypeTranslation>();
        }
        public long QuestionTypeId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
        public virtual ICollection<QuestionTypeTranslation> QuestionTypeTranslations { get; set; }
        public int? TenantId { get; set; }
    }
}
