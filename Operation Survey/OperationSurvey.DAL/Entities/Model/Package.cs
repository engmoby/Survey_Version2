using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Package:Entity
    {
        public Package()
        {
            Users = new List<User>();
        }
        public long PackageId { get; set; }
        public Guid PackageGuid { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime Start { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime End { get; set; }
        public long TenantId { get; set; }
        public int MaxNumberOfUsers { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
