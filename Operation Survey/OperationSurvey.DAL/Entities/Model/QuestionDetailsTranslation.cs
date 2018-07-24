using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class QuestionDetailsTranslation : Entity
    {
        public long QuestionDetailsTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; } 
        public long QuestionDetailsId { get; set; }
        public virtual QuestionDetails QuestionDetails { get; set; }
        public int TenantId { get; set; }
    }
}
