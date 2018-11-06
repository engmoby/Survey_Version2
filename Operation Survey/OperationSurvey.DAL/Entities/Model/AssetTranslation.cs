using System;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class AssetTranslation : Entity
    {
        public AssetTranslation()
        {

        }
        public long AssetTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long AssetId { get; set; }
        public virtual Asset Asset { get; set; }
        public int? TenantId { get; set; }
    }
}
