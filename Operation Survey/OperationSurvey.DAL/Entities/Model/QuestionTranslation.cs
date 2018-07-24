using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class QuestionTranslation : Entity
    {
        public long QuestionTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; } 
        public long QuestionId { get; set; }
        public virtual Question Question { get; set; }
        public int TenantId { get; set; }
    }
}
