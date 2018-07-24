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
        }

        [Key]
        public long UserId { get; set; }
        [Required]
        public Guid UserAccountId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
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

        //[ForeignKey("Branch")]
        //public long BranchId { get; set; }
        //public virtual Branch Branch { get; set; }

    }
}
