using System;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class UserTypeTranslation : Entity
    {
        public UserTypeTranslation()
        {

        }
        public long UserTypeTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long UserTypeId { get; set; }
        public virtual UserType UserType { get; set; }
        public int TenantId { get; set; }
    }
}
