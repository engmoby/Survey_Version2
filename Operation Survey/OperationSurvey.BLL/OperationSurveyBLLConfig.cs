using AutoMapper;
using AutoMapper.Configuration;
using Microsoft.Practices.Unity;
using OperationSurvey.BLL.DataServices;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.FormToMail;
using OperationSurvey.Common;
using OperationSurvey.DAL;
using OperationSurvey.DAL.Entities.Model;
using System.Linq;
using System.Threading;
using OperationSurvey.BLL.Services.ManageStorage;

namespace OperationSurvey.BLL
{
    public static class OperationSurveyBllConfig
    {
        public static void RegisterMappings(MapperConfigurationExpression mapperConfiguration)
        {
            mapperConfiguration.CreateMap<User, UserDto>()
                .ForMember(dto => dto.Password, m => m.MapFrom(src => PasswordHelper.Decrypt(src.Password)))
                .ForMember(dto => dto.CateoriesId, m => m.MapFrom(src => src.UserCategories.Select(x=>x.CategoryId).ToList()))
                .ForMember(dto => dto.BranchesId, m => m.MapFrom(src => src.UserBranches.Select(x=>x.BranchId).ToList()));
            mapperConfiguration.CreateMap<UserDto, User>()
                .ForMember(dto => dto.UserCategories, m => m.MapFrom(src => src.CateoriesId.Select(x => new UserCategory {CategoryId = x}).ToList()))
                .ForMember(dto => dto.UserBranches, m => m.MapFrom(src => src.BranchesId.Select(x => new UserBranch { BranchId = x }).ToList()));


            mapperConfiguration.CreateMap<UserRoleDto, UserRole>();
            mapperConfiguration.CreateMap<UserRole, UserRoleDto>() ;


            mapperConfiguration.CreateMap<Background, BackgroundDto>();
            mapperConfiguration.CreateMap<BackgroundDto, Background>();

            mapperConfiguration.CreateMap<UserTypeDto, UserType>();
            mapperConfiguration.CreateMap<UserType, UserTypeDto>()
                   .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.UserTypeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<RoleDto, Role>();
            mapperConfiguration.CreateMap<Role, RoleDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.RoleTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<RolePermissionDto, RolePermission>();
            mapperConfiguration.CreateMap<RolePermission, RolePermissionDto>()
                .ForMember(dto => dto.Permission, m => m.MapFrom(src => src.Permission))
                .ForMember(dto => dto.Role, m => m.MapFrom(src => src.Role));

            mapperConfiguration.CreateMap<PermissionDto, Permission>();
            mapperConfiguration.CreateMap<Permission, PermissionDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.PermissionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            mapperConfiguration.CreateMap<AreaDto, Area>()
                .ForMember(dto => dto.Branches, m => m.Ignore());
            mapperConfiguration.CreateMap<Area, AreaDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.AreaTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<BranchDto, Branch>();
            mapperConfiguration.CreateMap<Branch, BranchDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.BranchTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            mapperConfiguration.CreateMap<DepartmentDto, Department>()
                .ForMember(dto => dto.Categories, m => m.Ignore());
            mapperConfiguration.CreateMap<Department, DepartmentDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.DepartmentTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<CategoryDto, Category>()
                .ForMember(dto => dto.CategoryRoles, m => m.Ignore());

            mapperConfiguration.CreateMap<Category, CategoryDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.CategoryTypes, m => m.MapFrom(src => src.CategoryTypeCategories.Select(x=>x.CategoryType).ToList()));


            mapperConfiguration.CreateMap<CategoryRoleDto, CategoryRole>();
            mapperConfiguration.CreateMap<CategoryRole, CategoryRoleDto>();

            mapperConfiguration.CreateMap<QuestionDto, Question>();
            mapperConfiguration.CreateMap<Question, QuestionDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.QuestionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.CategoryId, m => m.MapFrom(src => src.Category.CategoryId));


            mapperConfiguration.CreateMap<QuestionDetailsDto, QuestionDetails>()
                .ForMember(dto => dto.QuestionDetailsTranslations, m => m.MapFrom(src => src.TitleDictionary.Select(x=>new QuestionDetailsTranslation {
                    Language = x.Key, Title = x.Value}).ToList()));

            mapperConfiguration.CreateMap<QuestionDetails, QuestionDetailsDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.QuestionDetailsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            mapperConfiguration.CreateMap<AnswerDetails, AnswerDetailsDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.QuestionDetails.QuestionDetailsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            mapperConfiguration.CreateMap<AnswerDetailsDto, AnswerDetails>()
                .ForMember(dto => dto.QuestionDetails, m => m.Ignore());
            mapperConfiguration.CreateMap<Answer, AnswerDto>();
                //.ForMember(dto=>dto.AnswerDetails,m=>m.MapFrom(src=>src.AnswerDetailses.Select(x=>x.Value).ToList()));
            mapperConfiguration.CreateMap<AnswerDto, Answer>();
            //.ForMember(dto => dto.AnswerDetailses, m => m.MapFrom(src => src.AnswerDetails.Select(x => new AnswerDetails {Value = x}).ToList()));


            mapperConfiguration.CreateMap<Ticket, TicketDto>()
                .ForMember(dto => dto.CreatorUser, m => m.MapFrom(src => src.CreatorUser.FirstName+" "+src.CreatorUser.LastName))
                .ForMember(dto => dto.AssignedUser, m => m.MapFrom(src => src.AssignedUser != null? src.AssignedUser.FirstName + " " + src.AssignedUser.LastName:""))
                .ForMember(dto => dto.ModifierUser, m => m.MapFrom(src => src.ModifierUser != null? src.ModifierUser.FirstName + " " + src.ModifierUser.LastName:""))
                .ForMember(dto => dto.DepartmentTitleDictionary, m => m.MapFrom(src => src.Department.DepartmentTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.CategoryTitleDictionary, m => m.MapFrom(src => src.Category.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.AreaTitleDictionary, m => m.MapFrom(src => src.Area.AreaTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.BranchTitleDictionary, m => m.MapFrom(src => src.Branch.BranchTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.TechnacianUsers, m => m.MapFrom(src => src.Category.UserCategories.Where(x=>src.Branch.UserBranches.Select(b=>b.UserId).Contains(x.UserId)).ToDictionary(translation => translation.UserId , translation => translation.User.FirstName + " " + translation.User.LastName.ToLower())));
            mapperConfiguration.CreateMap<TicketDto, Ticket>()
                .ForMember(dto => dto.CreatorUser, m => m.Ignore())
                .ForMember(dto => dto.AssignedUser, m => m.Ignore())
                .ForMember(dto => dto.ModifierUser, m => m.Ignore());


            mapperConfiguration.CreateMap<CountryDto, Country>();
            mapperConfiguration.CreateMap<Country, CountryDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CountryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            mapperConfiguration.CreateMap<RegionDto, Region>();
            mapperConfiguration.CreateMap<Region, RegionDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.RegionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.CountryNameDictionary, m => m.MapFrom(src => src.Country.CountryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<CityDto, City>();
            mapperConfiguration.CreateMap<City, CityDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CityTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.RegionNameDictionary, m => m.MapFrom(src => src.Region.RegionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<User, UserNameDto>()
                .ForMember(dto => dto.UserName, m => m.MapFrom(src => src.FirstName+" "+src.LastName));

            mapperConfiguration.CreateMap<CategoryTypeDto, CategoryType>();
            mapperConfiguration.CreateMap<CategoryType, CategoryTypeDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CategoryTypeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            Mapper.Initialize(mapperConfiguration);
        }

        public static void RegisterTypes(IUnityContainer container)
        {
            OperationSurveyDalConfig.RegisterTypes(container);
            container
                .RegisterType<IBackgroundService, BackgroundService>(new PerResolveLifetimeManager())
                 .RegisterType<IUserTypeService, UserTypeService>(new PerResolveLifetimeManager())
                 .RegisterType<IUserTypeTranslationService, UserTypeTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IRoleService, RoleService>(new PerResolveLifetimeManager())
                .RegisterType<IRoleTranslationService, RoleTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IAreaService, AreaService>(new PerResolveLifetimeManager())
                .RegisterType<IAreaTranslationService, AreaTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IBranchService, BranchService>(new PerResolveLifetimeManager())
                .RegisterType<IBranchTranslationService, BranchTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IDepartmentService, DepartmentService>(new PerResolveLifetimeManager())
                .RegisterType<IDepartmentTranslationService, DepartmentTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryService, CategoryService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryTranslationService, CategoryTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IUserService, UserService>(new PerResolveLifetimeManager())
                .RegisterType<IUserRoleService, UserRoleService>(new PerResolveLifetimeManager())
                .RegisterType<IPermissionService, PermissionService>(new PerResolveLifetimeManager())
                .RegisterType<IPermissionTranslationService, PermissionTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IRolePermissionService, RolePermissionService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryRoleService, CategoryRoleService>(new PerResolveLifetimeManager())
                .RegisterType<IQuestionService, QuestionService>(new PerResolveLifetimeManager())
                .RegisterType<IQuestionTranslationService, QuestionTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IQuestionDetailsService, QuestionDetailsService>(new PerResolveLifetimeManager())
                .RegisterType<IQuestionDetailsTranslationService, QuestionDetailsTranslationService>(new PerResolveLifetimeManager())

                .RegisterType<IAnswerService, AnswerService>(new PerResolveLifetimeManager())
                .RegisterType<IAnswerDetailsService, AnswerDetailsService>(new PerResolveLifetimeManager())
                .RegisterType<IPackageService, PackageService>(new PerResolveLifetimeManager())
                .RegisterType<IUserBranchService, UserBranchService>(new PerResolveLifetimeManager())
                .RegisterType<IUserCategoryService, UserCategoryService>(new PerResolveLifetimeManager())
                .RegisterType<ITicketService, TicketService>(new PerResolveLifetimeManager())
                .RegisterType<IManageStorage, ManageStorage>(new PerResolveLifetimeManager())
                .RegisterType<IFormToMail, FormToMail>(new PerResolveLifetimeManager())

                .RegisterType<ICountryService, CountryService>(new PerResolveLifetimeManager())
                .RegisterType<ICountryTranslationService, CountryTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IRegionService, RegionService>(new PerResolveLifetimeManager())
                .RegisterType<IRegionTranslationService, RegionTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<ICityService, CityService>(new PerResolveLifetimeManager())
                .RegisterType<ICityTranslationService, CityTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryTypeTranslationService, CategoryTypeTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryTypeService, CategoryTypeService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryTypeCategoryService, CategoryTypeCategoryService>(new PerResolveLifetimeManager());
        }

    }
}
