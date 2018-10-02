using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Category : Entity
    {
        public Category()
        {
            CategoryTranslations = new List<CategoryTranslation>();
            // Departments = new List<Department>();
            CategoryRoles = new List<CategoryRole>();
            UserCategories = new List<UserCategory>();
            Tickets = new List<Ticket>();
            CategoryTypeCategories = new List<CategoryTypeCategory>();
        }

        public long CategoryId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }

        [ForeignKey("Department")]
        public long DepartmentId { get; set; }
        public virtual Department Department { get; set; }
         
        public virtual ICollection<CategoryTranslation> CategoryTranslations { get; set; }
     //   public virtual ICollection<Department> Departments { get; set; }
        public virtual ICollection<CategoryRole> CategoryRoles { get; set; }
        //public virtual ICollection<Category> Categories { get; set; }
        public virtual ICollection<UserCategory> UserCategories { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
        public virtual ICollection<CategoryTypeCategory> CategoryTypeCategories { get; set; }

        public int TenantId { get; set; }

    }
}
