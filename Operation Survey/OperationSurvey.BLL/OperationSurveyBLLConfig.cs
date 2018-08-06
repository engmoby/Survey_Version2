﻿using AutoMapper;
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

namespace OperationSurvey.BLL
{
    public static class OperationSurveyBllConfig
    {
        public static void RegisterMappings(MapperConfigurationExpression mapperConfiguration)
        {
            mapperConfiguration.CreateMap<User, UserDto>()
                .ForMember(dto => dto.Password, m => m.MapFrom(src => PasswordHelper.Decrypt(src.Password)));
            mapperConfiguration.CreateMap<UserDto, User>();


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
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            mapperConfiguration.CreateMap<CategoryRoleDto, CategoryRole>();
            mapperConfiguration.CreateMap<CategoryRole, CategoryRoleDto>();

            mapperConfiguration.CreateMap<QuestionDto, Question>();
            mapperConfiguration.CreateMap<Question, QuestionDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.QuestionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.CategoryId, m => m.MapFrom(src => src.Category.CategoryId));


            mapperConfiguration.CreateMap<QuestionDetailsDto, QuestionDetails>();
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
                .RegisterType<IAnswerService, AnswerService>(new PerResolveLifetimeManager())
                .RegisterType<IAnswerDetailsService, AnswerDetailsService>(new PerResolveLifetimeManager())
                .RegisterType<IFormToMail, FormToMail>(new PerResolveLifetimeManager());
        }

    }
}
