using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class UserDto
    {
        public long UserId { get; set; }
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string Email { get; set; } 
        public string Password { get; set; } 
        public string Phone  { get; set; }
        public Guid UserAccountId { get; set; }

        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public int UserTypeId { get; set; }
        public int BranchId { get; set; }
        public List<UserRoleDto> UserRoles { get; set; }
        public int TenantId { get; set; }

    }
}
