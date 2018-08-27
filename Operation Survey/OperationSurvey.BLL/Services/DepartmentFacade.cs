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
    public class DepartmentFacade : BaseFacade, IDepartmentFacade
    {
        private readonly IDepartmentService _departmentService;
        private readonly IDepartmentTranslationService _typeTranslationService;
        private readonly IUserService _userService;

        public DepartmentFacade(IDepartmentService departmentService, IUnitOfWorkAsync unitOfWork, IDepartmentTranslationService typeTranslationService, IUserService userService) : base(unitOfWork)
        {
            _departmentService = departmentService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public DepartmentFacade(IDepartmentService departmentService, IDepartmentTranslationService typeTranslationService, IUserService userService)
        {
            _departmentService = departmentService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public DepartmentDto GetDepartment(long departmentId, int tenantId)
        {
            //return Mapper.Map<DepartmentDto>(_departmentService.Query(x => x.DepartmentId == departmentId && x.TenantId == tenantId).Select().FirstOrDefault());
            if (departmentId == 0) return null;

            var query = _departmentService.Query(x => x.DepartmentId == departmentId && x.TenantId == tenantId).Select()
                .FirstOrDefault();

            var departmetn = new DepartmentDto();
            if (query != null)
            {
                departmetn.DepartmentId = query.DepartmentId;
                departmetn.TitleDictionary = query.DepartmentTranslations.ToDictionary(translation => translation.Language.ToLower(), 
                    translation => translation.Title);}

            return departmetn;
        }

        public DepartmentDto CreateDepartment(DepartmentDto departmentDto, int userId, int tenantId)
        {

            if (GetDepartment(departmentDto.DepartmentId, tenantId) != null)
            {
                return EditDepartment(departmentDto, userId, tenantId);
            }
            ValidateDepartment(departmentDto, tenantId);
            var departmentObj = Mapper.Map<Department>(departmentDto);
            foreach (var departmentName in departmentDto.TitleDictionary)
            {
                departmentObj.DepartmentTranslations.Add(new DepartmentTranslation
                {
                    Title = departmentName.Value,
                    Language = departmentName.Key,
                    TenantId = tenantId
                });
            }
            departmentObj.CreationTime = Strings.CurrentDateTime;
            departmentObj.CreatorUserId = userId;
            departmentObj.TenantId = tenantId;
            _typeTranslationService.InsertRange(departmentObj.DepartmentTranslations);
            _departmentService.Insert(departmentObj);
            SaveChanges();
            return departmentDto;
        }

        public DepartmentDto EditDepartment(DepartmentDto departmentDto, int userId, int tenantId)
        {
            var departmentObj = _departmentService.Query(x => x.DepartmentId == departmentDto.DepartmentId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (departmentObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateDepartment(departmentDto, tenantId);
            foreach (var departmentName in departmentDto.TitleDictionary)
            {
                var departmentTranslation = departmentObj.DepartmentTranslations.FirstOrDefault(x => x.Language.ToLower() == departmentName.Key.ToLower() && x.DepartmentId == departmentDto.DepartmentId);
                if (departmentTranslation == null)
                {
                    departmentObj.DepartmentTranslations.Add(new DepartmentTranslation
                    {
                        Title = departmentName.Value,
                        Language = departmentName.Key
                    });
                }
                else
                    departmentTranslation.Title = departmentName.Value;
            }
            departmentObj.LastModificationTime = Strings.CurrentDateTime;
            departmentObj.LastModifierUserId = userId;
            departmentObj.IsDeleted = departmentDto.IsDeleted;
            departmentObj.IsStatic = departmentDto.IsStatic;
            _departmentService.Update(departmentObj);
            SaveChanges();
            return departmentDto;

        }

        public PagedResultsDto GetAllDepartments(int page, int pageSize, int tenantId)
        {
            return _departmentService.GetAllDepartments(page, pageSize, tenantId);
        }
        public DepartmentDto GetAllDepartmentByUserId(long userId)
        {
            return Mapper.Map<DepartmentDto>(_userService.Find(userId).Department);
        }

        private void ValidateDepartment(DepartmentDto departmentDto, long tenantId)
        {
            foreach (var name in departmentDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, departmentDto.DepartmentId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
    }
}
