using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.DTOs
{
    class QuestionDto
    {
        public long QuestionId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public long CategoryId { get; set; }
        public List<QuestionDetails> QuestionDetailses { get; set; }
        public List<AnswerDetails> AnswersdDetailses { get; set; }
        public long QuestionTypeId { get; set; }
        public int TenantId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }

    }
}
