using System.Linq;
using OperationSurvey.Common;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.DAL.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Entities.OperationSurveyContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(Entities.OperationSurveyContext context)
        {
            //var p1 = context.PermissionTranslations.Find(3);
            //var p2 = context.PermissionTranslations.Find(4);
            //p1.Title = "Category Type Permissions";
            //p2.Title = "أذونات نوع الفئة";
            //context.PermissionTranslations.AddOrUpdate(p1);
            //context.PermissionTranslations.AddOrUpdate(p2);

            //var suerType1 = new UserType { IsDeleted = false, IsStatic = true };
            //var suerType2 = new UserType { IsDeleted = false, IsStatic = true };
            //var suerType3 = new UserType { IsDeleted = false, IsStatic = true };
            //var suerType4 = new UserType { IsDeleted = false, IsStatic = true };
            //context.UserTypes.AddOrUpdate(h => h.UserTypeId, suerType1);
            //context.UserTypes.AddOrUpdate(h => h.UserTypeId, suerType2);
            //context.UserTypes.AddOrUpdate(h => h.UserTypeId, suerType3);
            //context.UserTypes.AddOrUpdate(h => h.UserTypeId, suerType4);

            //var suerTypeTreanslation1 =
            //    new UserTypeTranslation { Language = "en", Title = "Employee", UserType = suerType1 };
            //var suerTypeTreanslation2 =
            //    new UserTypeTranslation { Language = "ar", Title = "الموظفين", UserType = suerType1 };
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation1);
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation2);


            //var suerTypeTreanslation3 =
            //    new UserTypeTranslation { Language = "en", Title = "Department Manager", UserType = suerType2 };
            //var suerTypeTreanslation4 =
            //    new UserTypeTranslation { Language = "ar", Title = "مدير الإدارة", UserType = suerType2 };
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation3);
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation4);

            //var suerTypeTreanslation5 =
            //    new UserTypeTranslation { Language = "en", Title = "Branch Manager", UserType = suerType3 };
            //var suerTypeTreanslation6 =
            //    new UserTypeTranslation { Language = "ar", Title = "مدير الفرع", UserType = suerType3 };
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation5);
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation6);

            //var suerTypeTreanslation7 =
            //    new UserTypeTranslation { Language = "en", Title = "technician", UserType = suerType4 };
            //var suerTypeTreanslation8 =
            //    new UserTypeTranslation { Language = "ar", Title = "فني", UserType = suerType4 };
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation7);
            //context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation8);
            ////context.Users.AddOrUpdate(new User
            ////{
            ////    IsDeleted = false,
            ////    FirstName = "Admin",
            ////    LastName = "Abdo",
            ////    Password = "wArilz/QIT55GuLgpRQlCHX0lir/WTXM8yc33MPiN3Bl26dnvS752gHPadYZoL20",
            ////    Phone = "0411111111",
            ////    Email = "admin@gmail.com",
            ////    UserType = suerType1,
            ////    TenantId = 1
            ////});

            //var cateorytype = new CategoryType { IsDeleted = false, IsStatic = true };
            //var categoryTypeTreanslation1 =
            //    new CategoryTypeTranslation { Language = "en", Title = "Project Management", CategoryType = cateorytype };
            //var categoryTypeTreanslation2 =
            //    new CategoryTypeTranslation { Language = "ar", Title = "اداره  مشروعات", CategoryType = cateorytype };

            //context.CategoryTypeTranslations.AddOrUpdate(h => h.CategoryTypeTranslationId, categoryTypeTreanslation1);
            //context.CategoryTypeTranslations.AddOrUpdate(h => h.CategoryTypeTranslationId, categoryTypeTreanslation2);

            //var permisison11 = new Permission { IsDeleted = false, IsStatic = true };

            //var permisison12 = new Permission { IsDeleted = false, IsStatic = true };
            // var permisison13 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison3 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison4 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison5 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison6 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison7 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison8 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison9 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison10 = new Permission { IsDeleted = false, IsStatic = true };
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison1);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison2);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison3);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison4);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison5);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison6);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison7);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison8);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison9);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison10);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison11);


            //var permissionTreanslation21 =
            //    new PermissionTranslation { Language = "en", Title = "Configuration", Permission = permisison11 };
            //var permissionTreanslation22 =
            //    new PermissionTranslation { Language = "ar", Title = "ترتيب", Permission = permisison11 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation21);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation22);


            //var permissionTreanslation1 =
            //    new PermissionTranslation { Language = "en", Title = "Vendor Permissions", Permission = permisison12 };
            //var permissionTreanslation2 =
            //    new PermissionTranslation { Language = "ar", Title = " أذونات بائعين", Permission = permisison12 }; 
            // context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation1);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation2);


            //var permissionTreanslation3 =
            //    new PermissionTranslation { Language = "en", Title = "Project Management Permissions", Permission = permisison13 };
            //var permissionTreanslation4 =
            //    new PermissionTranslation { Language = "ar", Title = "أذونات ادارة مشروع", Permission = permisison13 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation3);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation4);

            //var permissionTreanslation5 =
            //    new PermissionTranslation { Language = "en", Title = "Role Permissions", Permission = permisison3 };
            //var permissionTreanslation6 =
            //    new PermissionTranslation { Language = "ar", Title = "أذونات الدور", Permission = permisison3 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation5);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation6);

            //var permissionTreanslation7 =
            //    new PermissionTranslation { Language = "en", Title = "Area Permissions", Permission = permisison4 };
            //var permissionTreanslation8 =
            //    new PermissionTranslation { Language = "ar", Title = "أذونات المنطقة", Permission = permisison4 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation7);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation8);

            //var permissionTreanslation9 =
            //    new PermissionTranslation { Language = "en", Title = "Department Permissions", Permission = permisison5 };
            //var permissionTreanslation10 =
            //    new PermissionTranslation { Language = "ar", Title = "أذونات القسم", Permission = permisison5 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation9);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation10);

            //var permissionTreanslation11 =
            //    new PermissionTranslation { Language = "en", Title = "Question Permissions", Permission = permisison6 };
            //var permissionTreanslation12 =
            //    new PermissionTranslation { Language = "ar", Title = "أذونات السؤال", Permission = permisison6 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation11);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation12);

            //var permissionTreanslation13 = new PermissionTranslation
            //{
            //    Language = "en",
            //    Title = "Answer Question Permissions",
            //    Permission = permisison7
            //};
            //var permissionTreanslation14 =
            //    new PermissionTranslation { Language = "ar", Title = "أجابة سؤال أذونات", Permission = permisison7 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation13);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation14);

            //var permissionTreanslation15 =
            //    new PermissionTranslation { Language = "en", Title = "Answer Permissions", Permission = permisison8 };
            //var permissionTreanslation16 =
            //    new PermissionTranslation { Language = "ar", Title = "أذونات الرد", Permission = permisison8 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation15);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation16);

            //var permissionTreanslation17 =
            //    new PermissionTranslation { Language = "en", Title = "Tickets", Permission = permisison9 };
            //var permissionTreanslation18 =
            //    new PermissionTranslation { Language = "ar", Title = "شكاوي", Permission = permisison9 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation17);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation18);

            //var permissionTreanslation19 =
            //    new PermissionTranslation { Language = "en", Title = "Dashboard", Permission = permisison10 };
            //var permissionTreanslation20 =
            //    new PermissionTranslation { Language = "ar", Title = "لوحة القيادة", Permission = permisison10 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation19);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation20);



            //Role adminRole = new Role { IsDeleted = false, IsStatic = true };
            //context.Roles.AddOrUpdate(adminRole);
            //context.RoleTranslations.AddOrUpdate(
            //    new RoleTranslation { Language = "en", Title = "admin", Role = adminRole });
            //context.RoleTranslations.AddOrUpdate(
            //    new RoleTranslation { Language = "ar", Title = "مشرف", Role = adminRole });

            ////context.UserRoles.AddOrUpdate(new UserRole
            ////{
            ////    Role = adminRole,
            ////    TenantId = 1,
            ////    User = context.Users.FirstOrDefault()
            ////});
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison1 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison2 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison3 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison4 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison5 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison6 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison9 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison10 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, RoleId = 1, Permission = permisison11 });

        }
    }

}
