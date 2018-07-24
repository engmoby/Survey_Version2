namespace OperationSurvey.API.Models
{
    public class UserRoleModel
    {
        public long UserRoleId { get; set; }

        public long UserId { get; set; }
        public virtual UserModel User { get; set; }

        public long RoleId { get; set; }
        public virtual RoleModel Role { get; set; }
    }
}
