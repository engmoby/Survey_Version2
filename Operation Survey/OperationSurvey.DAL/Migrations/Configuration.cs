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
            var suerType1 = new UserType { IsDeleted =false, IsStatic = true };
            var suerType2 = new UserType { IsDeleted =false, IsStatic = true };
            context.UserTypes.AddOrUpdate(h => h.UserTypeId,suerType1);
            context.UserTypes.AddOrUpdate(h => h.UserTypeId,suerType2);

            var suerTypeTreanslation1 = new UserTypeTranslation { Language = "en", Title = "Employee",UserType = suerType1};
            var suerTypeTreanslation2 = new UserTypeTranslation { Language = "ar", Title = "الموظفين",UserType = suerType1 };
            context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation1);
            context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation2);


            var suerTypeTreanslation3 = new UserTypeTranslation { Language = "en", Title = "Manager", UserType = suerType2 };
            var suerTypeTreanslation4 = new UserTypeTranslation { Language = "ar", Title = "المديرين", UserType = suerType2 };
            context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation3);
            context.UserTypeTranslations.AddOrUpdate(h => h.UserTypeTranslationId, suerTypeTreanslation4);

            context.Users.AddOrUpdate(new User
            {
                IsDeleted = false,
                FirstName = "Admin",
                LastName = "Abdo",
                Password = "wArilz/QIT55GuLgpRQlCHX0lir/WTXM8yc33MPiN3Bl26dnvS752gHPadYZoL20",
                Phone = "0411111111",
                Email = "admin@gmail.com",
                UserType = suerType1,
                TenantId = 1
            });


            var permisison1 = new Permission { IsDeleted = false, IsStatic = true };
            var permisison2 = new Permission { IsDeleted = false, IsStatic = true };
            context.Permissions.AddOrUpdate(h => h.PermissionId, permisison1);
            context.Permissions.AddOrUpdate(h => h.PermissionId, permisison2);

            var permissionTreanslation1 = new PermissionTranslation { Language = "en", Title = "Users Permissions", Permission = permisison1 };
            var permissionTreanslation2 = new PermissionTranslation { Language = "ar", Title = "الموظفين مواضفات", Permission = permisison1 };
            context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation1);
            context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation2);


            var permissionTreanslation3 = new PermissionTranslation { Language = "en", Title = "User Type Permissions", Permission = permisison2 };
            var permissionTreanslation4 = new PermissionTranslation { Language = "ar", Title = "يوزر تايب مواضفات", Permission = permisison2 };
            context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation3);
            context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation4);
        }
    }

}
