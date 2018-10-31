using System;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class ServiceTranslation : Entity
    { 
        public long ServiceTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long ServiceId { get; set; }
        public virtual Service Service { get; set; }
        public int? TenantId { get; set; }
    }
}
