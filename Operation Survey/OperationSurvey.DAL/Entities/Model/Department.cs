using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Department : Entity
    {
        public Department()
        {
            DepartmentTranslations = new List<DepartmentTranslation>();
            Categories = new List<Category>();

        }

        public long DepartmentId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
         
        public virtual ICollection<DepartmentTranslation> DepartmentTranslations { get; set; }
        public virtual ICollection<Category> Categories { get; set; }
        public int TenantId { get; set; }
    }
}
