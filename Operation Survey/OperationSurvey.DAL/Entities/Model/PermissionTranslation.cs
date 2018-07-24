using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class PermissionTranslation : Entity
    {
        public long PermissionTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; } 
        public long PermissionId { get; set; }
        public virtual Permission Permission { get; set; }
    }
}
