using System;
using System.Collections.Generic;

namespace OperationSurvey.API.Models
{
    public class UserModel
    {
        public long UserId { get; set; }
        public Guid UserAccountId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; } 
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public int UserTypeId { get; set; }
        public int BranchId { get; set; }
        public virtual ICollection<UserRoleModel> UserRoles { get; set; }
        public long? DepartmentId { get; set; }
        public long? AreaId { get; set; }
        public List<long> CateoriesId { get; set; }
        public List<long> BranchesId { get; set; }
        public long? CountryId { get; set; }
        public long? RegionId { get; set; }
        public long? CityId { get; set; }
    }
}