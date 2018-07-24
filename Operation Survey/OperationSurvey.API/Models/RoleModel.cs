using System;
using System.Collections.Generic;

namespace OperationSurvey.API.Models
{
    public class RoleModel
    {
        public long RoleId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        public string Url { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public List<PermissionModel> Permissions { get; set; }
        public List<RolePermissionModel> RolePermissions { get; set; }
    }
}
