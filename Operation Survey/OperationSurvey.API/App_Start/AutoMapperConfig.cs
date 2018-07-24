using AutoMapper.Configuration;
using OperationSurvey.API.Models;
using OperationSurvey.BLL;
using OperationSurvey.BLL.DTOs;

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


            mapperConfiguration.CreateMap<PermissionModel, PermissionDto>();
            mapperConfiguration.CreateMap<PermissionDto, PermissionModel>();
             

            mapperConfiguration.CreateMap<PermissionModel, RolePermissionDto>();
            mapperConfiguration.CreateMap<RolePermissionDto, PermissionModel>();

            mapperConfiguration.CreateMap<BackgroundModel, BackgroundDto>();
            mapperConfiguration.CreateMap<BackgroundDto, BackgroundModel>(); 

            OperationSurveyBllConfig.RegisterMappings(mapperConfiguration); 

        }
    }
}