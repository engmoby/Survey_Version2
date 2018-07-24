﻿using System.Data.Entity;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Ef6;

namespace OperationSurvey.DAL.Entities
{
    public class OperationSurveyContext : DataContext
    {
        public DbSet<Background> Backgrounds { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<AnswerDetails> AnswerDetailses { get; set; }

        public DbSet<Role> Roles { get; set; }
        public DbSet<RoleTranslation> RoleTranslations{ get; set; }

        public DbSet<Permission> Permissions { get; set; }
        public DbSet<PermissionTranslation> PermissionTranslations { get; set; }

        public DbSet<UserType> UserTypes { get; set; }
        public DbSet<UserTypeTranslation> UserTypeTranslations { get; set; }

        public DbSet<Department> Departments { get; set; }
        public DbSet<DepartmentTranslation> DepartmentTranslations { get; set; }

        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoryTranslation> CategoryTranslations { get; set; }

        public DbSet<Area> Areas { get; set; }
        public DbSet<AreaTranslation> AreaTranslations { get; set; }

        public DbSet<Branch> Branches { get; set; }
        public DbSet<BranchTranslation> BranchTranslations { get; set; }
         
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionTranslation> QuestionTranslations { get; set; }

        public DbSet<QuestionDetails> QuestionDetailses { get; set; }
        public DbSet<QuestionDetailsTranslation> QuestionDetailsTranslations { get; set; }

        public OperationSurveyContext() : base("name=OperationSurveyDB")
        {
            Database.SetInitializer<OperationSurveyContext>(null);
        }
    }
}
