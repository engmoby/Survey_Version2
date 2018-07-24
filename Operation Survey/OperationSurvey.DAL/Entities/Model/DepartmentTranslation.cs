using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class DepartmentTranslation : Entity
    {
        public long DepartmentTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; } 

        public long DepartmentId { get; set; }
        public virtual Department Department { get; set; }
        public int TenantId { get; set; }
    }
}
