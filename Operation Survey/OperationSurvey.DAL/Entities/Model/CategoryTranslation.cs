using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class CategoryTranslation : Entity
    {
        public long CategoryTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; } 
        public long CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public int TenantId { get; set; }
    }
}
