using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class CategoryTypeTranslation:Entity
    {
        public long CategoryTypeTranslationId { get; set; }
        
        public string Language { get; set; }
        public string Title { get; set; } 
        public long CategoryTypeId { get; set; }
        public virtual CategoryType CategoryType { get; set; }
    }
}
