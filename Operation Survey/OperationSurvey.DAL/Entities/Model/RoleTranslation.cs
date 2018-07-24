using System;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class RoleTranslation : Entity
    {
        public RoleTranslation()
        {

        }
        public long RoleTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long RoleId { get; set; }
        public virtual Role Role { get; set; }
        public int? TenantId { get; set; }
    }
}
