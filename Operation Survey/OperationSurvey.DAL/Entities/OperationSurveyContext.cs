using System.Data.Entity;
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
        public DbSet<RoleTranslation> RoleTranslations { get; set; }

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
        public DbSet<Package> Packages { get; set; }
        public DbSet<UserBranch> UserBranches { get; set; }
        public DbSet<UserCategory> UserCategories { get; set; }
        public DbSet<Ticket> Tickets { get; set; }


        public DbSet<Country> Countries { get; set; }
        public DbSet<CountryTranslation> CountryTranslations { get; set; }
        public DbSet<Region> Regions { get; set; }
        public DbSet<RegionTranslation> RegionTranslations { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<CityTranslation> CityTranslations { get; set; }
        public DbSet<CategoryType> CategoryTypes { get; set; }
        public DbSet<CategoryTypeTranslation> CategoryTypeTranslations { get; set; }
        public DbSet<CategoryTypeCategory> CategoryTypeCategories { get; set; }

        public OperationSurveyContext() : base("name=OperationSurveyDB")
        {
            Database.SetInitializer<OperationSurveyContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Ticket>()
                .HasRequired(c => c.Department)
                .WithMany()
                .WillCascadeOnDelete(false);


            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Ticket>()
                .HasRequired(c => c.Branch)
                .WithMany()
                .WillCascadeOnDelete(false);
        }
    }
}