using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class City:Entity
    {
        public City()
        {
            CityTranslations = new List<CityTranslation>();
            Areas = new List<Area>();
        }
        public long CityId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<CityTranslation> CityTranslations { get; set; }
        public virtual ICollection<Area> Areas { get; set; }
        [ForeignKey("Region")]
        public long RegionId { get; set; }
        public virtual Region Region { get; set; }
    }
}
