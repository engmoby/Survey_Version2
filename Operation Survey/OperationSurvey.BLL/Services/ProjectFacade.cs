using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using OperationSurvey.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.Services
{
    public class ProjectFacade : BaseFacade, IProjectFacade
    {
        private readonly IProjectService _projectService;
        private readonly IProjectTranslationService _typeTranslationService;
        private readonly IUserService _userService;

        public ProjectFacade(IProjectService projectService, IUnitOfWorkAsync unitOfWork, IProjectTranslationService typeTranslationService, IUserService userService) : base(unitOfWork)
        {
            _projectService = projectService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public ProjectFacade(IProjectService projectService, IProjectTranslationService typeTranslationService, IUserService userService)
        {
            _projectService = projectService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public ProjectDto GetProject(long projectId, int tenantId)
        {
            //return Mapper.Map<ProjectDto>(_ProjectService.Query(x => x.ProjectId == ProjectId && x.TenantId == tenantId).Select().FirstOrDefault());
            if (projectId == 0) return null;

            var query = _projectService.Query(x => x.ProjectId == projectId && x.TenantId == tenantId).Select()
                .FirstOrDefault();

            var departmetn = new ProjectDto();
            if (query != null)
            {
                departmetn.ProjectId = query.ProjectId;
                departmetn.BranchId = query.BranchId;
                departmetn.AreaId = query.Branch.AreaId;
                departmetn.CityId = (long)query.Branch.Area.CityId;
                departmetn.RegionId = (long)query.Branch.Area.City.RegionId;
                departmetn.CountryId = (long)query.Branch.Area.City.Region.CountryId;
                departmetn.TitleDictionary = query.ProjectTranslations.ToDictionary(translation => translation.Language.ToLower(),
                    translation => translation.Title);
            }

            return departmetn;
        }

        public ProjectDto CreateProject(ProjectDto projectDto, int userId, int tenantId)
        {

            if (GetProject(projectDto.ProjectId, tenantId) != null)
            {
                return EditProject(projectDto, userId, tenantId);
            }
            ValidateProject(projectDto, tenantId);
            var projectObj = Mapper.Map<Project>(projectDto);
            foreach (var projectName in projectDto.TitleDictionary)
            {
                projectObj.ProjectTranslations.Add(new ProjectTranslation
                {
                    Title = projectName.Value,
                    Language = projectName.Key,
                    TenantId = tenantId
                });
            }
            projectObj.BranchId = projectDto.BranchId;
            projectObj.CreationTime = Strings.CurrentDateTime;
            projectObj.CreatorUserId = userId;
            projectObj.TenantId = tenantId;
            _typeTranslationService.InsertRange(projectObj.ProjectTranslations);
            _projectService.Insert(projectObj);
            SaveChanges();
            return projectDto;
        }

        public ProjectDto EditProject(ProjectDto projectDto, int userId, int tenantId)
        {
            var projectObj = _projectService.Query(x => x.ProjectId == projectDto.ProjectId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (projectObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateProject(projectDto, tenantId);
            foreach (var projectName in projectDto.TitleDictionary)
            {
                var projectTranslation = projectObj.ProjectTranslations.FirstOrDefault(x => x.Language.ToLower() == projectName.Key.ToLower() && x.ProjectId == projectDto.ProjectId);
                if (projectTranslation == null)
                {
                    projectObj.ProjectTranslations.Add(new ProjectTranslation
                    {
                        Title = projectName.Value,
                        Language = projectName.Key
                    });
                }
                else
                    projectTranslation.Title = projectName.Value;
            }
            projectObj.BranchId = projectDto.BranchId;
            projectObj.LastModificationTime = Strings.CurrentDateTime;
            projectObj.LastModifierUserId = userId;
            projectObj.IsDeleted = projectDto.IsDeleted;
            _projectService.Update(projectObj);
            SaveChanges();
            return projectDto;

        }

        public PagedResultsDto GetAllProjects(int page, int pageSize, int tenantId)
        {
            return _projectService.GetAllProjects(page, pageSize, tenantId);
        }
        public ProjectDto GetAllProjectByUserId(long userId)
        {
            return Mapper.Map<ProjectDto>(_userService.Find(userId));
        }

        private void ValidateProject(ProjectDto ProjectDto, long tenantId)
        {
            foreach (var name in ProjectDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, ProjectDto.ProjectId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
    }
}
