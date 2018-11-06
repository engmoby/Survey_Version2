using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class CityTranslation:Entity
    {
        public long CityTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        [ForeignKey("City")]
        public long CityId { get; set; }
        public virtual City City { get; set; }
    }
}
