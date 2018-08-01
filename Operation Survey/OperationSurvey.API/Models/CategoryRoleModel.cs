namespace OperationSurvey.API.Models
{
    public class CategoryRoleModel
    {
        public long CategoryRoleId { get; set; }

        public long CategoryId { get; set; }
       // public virtual CategoryModel Category { get; set; }

        public long RoleId { get; set; }
        public virtual RoleModel Role { get; set; }
        public int TenantId { get; set; }
    }
}
