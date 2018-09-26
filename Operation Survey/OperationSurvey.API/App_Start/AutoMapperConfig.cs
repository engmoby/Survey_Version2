using System;
using AutoMapper.Configuration;
using OperationSurvey.API.Models;
using OperationSurvey.BLL;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.Common;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.API
{
    public class AutoMapperConfig
    {
        public static void RegisterMappings()
        {

            var mapperConfiguration = new MapperConfigurationExpression();

            mapperConfiguration.CreateMap<UserModel, UserDto>();
            mapperConfiguration.CreateMap<UserDto, UserModel>();

            mapperConfiguration.CreateMap<UserRoleModel, UserRoleDto>();
            mapperConfiguration.CreateMap<UserRoleDto, UserRoleModel>();

            mapperConfiguration.CreateMap<UserTypeModel, UserTypeDto>();
            mapperConfiguration.CreateMap<UserTypeDto, UserTypeModel>();


            mapperConfiguration.CreateMap<RoleModel, RoleDto>();
            mapperConfiguration.CreateMap<RoleDto, RoleModel>();

            mapperConfiguration.CreateMap<AreaModel, AreaDto>();
            mapperConfiguration.CreateMap<AreaDto, AreaModel>();

            mapperConfiguration.CreateMap<BranchModel, BranchDto>();
            mapperConfiguration.CreateMap<BranchDto, BranchModel>();


            mapperConfiguration.CreateMap<DepartmentModel, DepartmentDto>();
            mapperConfiguration.CreateMap<DepartmentDto, DepartmentModel>();


            mapperConfiguration.CreateMap<CategoryModel, CategoryDto>();
            mapperConfiguration.CreateMap<CategoryDto, CategoryModel>();

            
            mapperConfiguration.CreateMap<CategoryRoleModel, CategoryRoleDto>();
            mapperConfiguration.CreateMap<CategoryRoleDto, CategoryRoleModel>();

            mapperConfiguration.CreateMap<PermissionModel, PermissionDto>();
            mapperConfiguration.CreateMap<PermissionDto, PermissionModel>();
             

            mapperConfiguration.CreateMap<PermissionModel, RolePermissionDto>();
            mapperConfiguration.CreateMap<RolePermissionDto, PermissionModel>();


            mapperConfiguration.CreateMap<QuestionModel, QuestionDto>();
            mapperConfiguration.CreateMap<QuestionDto, QuestionModel>();

            mapperConfiguration.CreateMap<QuestionDetailsModel, QuestionDetailsDto>();
            mapperConfiguration.CreateMap<QuestionDetailsDto, QuestionDetailsModel>();



            mapperConfiguration.CreateMap<AnswerDetailsModel, AnswerDetailsDto>();
            mapperConfiguration.CreateMap<AnswerDetailsDto, AnswerDetailsModel>();

            mapperConfiguration.CreateMap<AnswerModel, AnswerDto>();
            mapperConfiguration.CreateMap<AnswerDto, AnswerModel>()
                .ForMember(dto => dto.UserName, m => m.MapFrom(src => src.User.FirstName+" "+src.User.LastName));

            mapperConfiguration.CreateMap<AdminModel, AdminDto>();
            mapperConfiguration.CreateMap<UserConsumed, UserConsumedModel>();

            mapperConfiguration.CreateMap<TicketModel, TicketDto>()
                .ForMember(dto => dto.Status, m => m.MapFrom(src => Enum.Parse(typeof(Enums.TicketStatus), src.Status)));
            mapperConfiguration.CreateMap<TicketDto, TicketModel>()
                .ForMember(dto => dto.Status, m => m.MapFrom(src => src.Status.ToString()));


            mapperConfiguration.CreateMap<CountryModel, CountryDto>();
            mapperConfiguration.CreateMap<CountryDto, CountryModel>();
            mapperConfiguration.CreateMap<RegionModel, RegionDto>();
            mapperConfiguration.CreateMap<RegionDto, RegionModel>();
            mapperConfiguration.CreateMap<CityModel, CityDto>();
            mapperConfiguration.CreateMap<CityDto, CityModel>();

            OperationSurveyBllConfig.RegisterMappings(mapperConfiguration); 

        }
    }
}