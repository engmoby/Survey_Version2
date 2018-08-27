using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;
using OperationSurvey.Common;

namespace OperationSurvey.DAL.Entities.Model
{
    public class User : Entity
    {
        public User()
        {
            UserRoles = new List<UserRole>();
            UserBranches = new List<UserBranch>();
            UserCategories = new List<UserCategory>();
        }

        [Key]
        public long UserId { get; set; }
        [Required]
        public Guid UserAccountId { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        
        public string Phone { get; set; }  
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }


        [ForeignKey("UserType")]
        public long UserTypeId { get; set; }
        public virtual UserType UserType { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
         
        public int TenantId { get; set; }
        [ForeignKey("Package")]
        public long? PackageId { get; set; }
        public virtual Package Package { get; set; }

        public bool IsStatic { get; set; }
        [ForeignKey("Department")]
        public long? DepartmentId { get; set; }
        public virtual Department Department { get; set; }

        [ForeignKey("Area")]
        public long? AreaId { get; set; }
        public virtual Area Area { get; set; }
        public virtual ICollection<UserBranch> UserBranches { get; set; }
        public virtual ICollection<UserCategory> UserCategories { get; set; }

    }
}
