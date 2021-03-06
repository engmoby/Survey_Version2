﻿using OperationSurvey.DAL.Entities;
using OperationSurvey.DAL.Entities.Model;
using Microsoft.Practices.Unity;
using Repository.Pattern.DataContext;
using Repository.Pattern.Ef6;
using Repository.Pattern.Ef6.Factories;
using Repository.Pattern.Repositories;
using Repository.Pattern.UnitOfWork;
namespace OperationSurvey.DAL
{
    public static class OperationSurveyDalConfig
    {
        public static void RegisterTypes(IUnityContainer container)
        {
            container
                .RegisterType<IDataContextAsync, OperationSurveyContext>(new PerResolveLifetimeManager())
                .RegisterType<IUnitOfWorkAsync, UnitOfWork>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryProvider, RepositoryProvider>(
                    new PerResolveLifetimeManager(),
                    new InjectionConstructor(new object[] {new RepositoryFactories()})
                )
                .RegisterType<IRepositoryAsync<Background>, Repository<Background>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<UserRole>, Repository<UserRole>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<RolePermission>, Repository<RolePermission>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Answer>, Repository<Answer>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<AnswerDetails>, Repository<AnswerDetails>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Department>, Repository<Department>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Role>, Repository<Role>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<RoleTranslation>, Repository<RoleTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Permission>, Repository<Permission>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<PermissionTranslation>, Repository<PermissionTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<UserType>, Repository<UserType>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<UserTypeTranslation>, Repository<UserTypeTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Department>, Repository<Department>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<DepartmentTranslation>, Repository<DepartmentTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Category>, Repository<Category>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CategoryRole>, Repository<CategoryRole>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CategoryTranslation>, Repository<CategoryTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Area>, Repository<Area>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<AreaTranslation>, Repository<AreaTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Branch>, Repository<Branch>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<BranchTranslation>, Repository<BranchTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Question>, Repository<Question>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<QuestionTranslation>, Repository<QuestionTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<QuestionDetails>, Repository<QuestionDetails>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<QuestionDetailsTranslation>, Repository<QuestionDetailsTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<User>, Repository<User>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Package>, Repository<Package>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<UserBranch>, Repository<UserBranch>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<UserCategory>, Repository<UserCategory>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Ticket>, Repository<Ticket>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Country>, Repository<Country>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CountryTranslation>, Repository<CountryTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Region>, Repository<Region>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<RegionTranslation>, Repository<RegionTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<City>, Repository<City>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CityTranslation>, Repository<CityTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CategoryType>, Repository<CategoryType>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CategoryTypeTranslation>, Repository<CategoryTypeTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CategoryTypeCategory>, Repository<CategoryTypeCategory>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<TicketLog>, Repository<TicketLog>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<TicketScheduler>, Repository<TicketScheduler>>(new PerResolveLifetimeManager())

                .RegisterType<IRepositoryAsync<Project>, Repository<Project>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<ProjectTranslation>, Repository<ProjectTranslation>>(new PerResolveLifetimeManager())

                .RegisterType<IRepositoryAsync<Asset>, Repository<Asset>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<AssetTranslation>, Repository<AssetTranslation>>(new PerResolveLifetimeManager())


                .RegisterType<IRepositoryAsync<Vendor>, Repository<Vendor>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<VendorTranslation>, Repository<VendorTranslation>>(new PerResolveLifetimeManager())

                .RegisterType<IRepositoryAsync<Service>, Repository<Service>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<ServiceTranslation>, Repository<ServiceTranslation>>(new PerResolveLifetimeManager())
                ;


        }

    }
}
