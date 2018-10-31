using System;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class ProjectTranslation : Entity
    {
        public ProjectTranslation()
        {

        }
        public long ProjectTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long ProjectId { get; set; }
        public virtual Project Project { get; set; }
        public int? TenantId { get; set; }
    }
}
