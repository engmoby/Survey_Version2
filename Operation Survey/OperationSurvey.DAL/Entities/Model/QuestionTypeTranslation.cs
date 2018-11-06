using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class QuestionTypeTranslation : Entity
    {
        public long QuestionTypeTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long QuestionTypeId { get; set; }
        public virtual QuestionType QuestionType { get; set; }
        public int? TenantId { get; set; }
    }
}
