using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class CountryTranslation:Entity
    {
        public long CountryTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        [ForeignKey("Country")]
        public long CountryId { get; set; }
        public virtual Country Country { get; set; }
    }
}
