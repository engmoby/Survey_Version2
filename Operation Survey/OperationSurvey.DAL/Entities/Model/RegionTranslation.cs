using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class RegionTranslation:Entity
    {
        public long RegionTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        [ForeignKey("Region")]
        public long RegionId { get; set; }
        public virtual Region Region { get; set; }
    }
}
