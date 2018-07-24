﻿using System;
using System.Collections.Generic;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities.Model
{
    public class Area : Entity
    {
        public Area()
        {
            AreaTranslations = new List<AreaTranslation>();
            Branches = new List<Branch>();
        }
        public long AreaId { get; set; }
        public bool IsStatic { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }

        public virtual ICollection<AreaTranslation> AreaTranslations { get; set; }
        public virtual ICollection<Branch> Branches { get; set; }
        public int TenantId { get; set; }
    }
}
