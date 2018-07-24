using Microsoft.Practices.Unity;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.DataContext;
using Repository.Pattern.Ef6;
using Repository.Pattern.Ef6.Factories;
using Repository.Pattern.Repositories;
using Repository.Pattern.UnitOfWork;

namespace OperationSurvey.DAL.Entities
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
                //.RegisterType<IRepositoryAsync<Product>, Repository<Product>>(new PerResolveLifetimeManager())
                //.RegisterType<IRepositoryAsync<ProductTranslation>, Repository<ProductTranslation>>(new PerResolveLifetimeManager())
                //.RegisterType<IRepositoryAsync<UserProduct>, Repository<UserProduct>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<User>, Repository<User>>(new PerResolveLifetimeManager());


        }

    }
}
