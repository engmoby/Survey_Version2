using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class CategoryTypeCategory:Entity
    {
        public long CategoryTypeCategoryId { get; set; }

        public long CategoryId { get; set; }
        public virtual Category Category { get; set; }

        public long CategoryTypeId { get; set; }
        public virtual CategoryType CategoryType { get; set; }
    }
}
