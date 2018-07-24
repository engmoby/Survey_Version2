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
            //context.UserTypes.Add(new UserType
            //{
            //    IsDeleted = false,
            //    IsStatic = true
            //});
            //context.Users.Add(new User
            //{
            //    IsDeleted = false,
            //    FirstName = "Admin",
            //    LastName = "Abdo",
            //    Password = "wArilz/QIT55GuLgpRQlCHX0lir/WTXM8yc33MPiN3Bl26dnvS752gHPadYZoL20",
            //    Phone = "0411111111",
            //    Email = "admin@gmail.com",
            //    UserTypeId = 1,
            //    TenantId = 1
            //});
            //context.Products.Add(new Product
            //{
            //    ProductId = 1,
            //    IsDeleted = false,
            //    IsActive = true
            //});
            //var product = context.Products.Find(1);
            //context.ProductTranslations.Add(new ProductTranslation
            //{
            //    Product = product,
            //    ProductId = 1,
            //    ProductName = "E-Gatalog",
            //    ProductDescription = " E-GatalogE-GatalogE-GatalogE-GatalogE-Gatalog",
            //    Language = "en-US"
            //});



            //context.Products.Add(new Product
            //{
            //    ProductId = 2,
            //    IsDeleted = false,
            //    IsActive = true
            //});
            //var product2 = context.Products.Find(2);
            //context.ProductTranslations.Add(new ProductTranslation
            //{
            //    Product = product2,
            //    ProductId = 2,
            //    ProductName = "Invetation",
            //    ProductDescription = "Invetation",
            //    Language = "en-US"
            //});
        }
    }

}
