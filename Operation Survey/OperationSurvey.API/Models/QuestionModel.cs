using System;
using System.Collections.Generic;
using OperationSurvey.Common;

namespace OperationSurvey.API.Models
{
    public class QuestionModel
    {
        public long QuestionId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public List<QuestionDetailsModel> QuestionDetailses { get; set; }
        public int CategoryId { get; set; }
        public Enums.QuestionType QuestionTypeId { get; set; }
        public CategoryModel Category { get; set; }
       public List<AnswerDetailsModel> AnswersdDetailses { get; set; }
      public AnswerDetailsModel Answer { get; set; }

    }
}
