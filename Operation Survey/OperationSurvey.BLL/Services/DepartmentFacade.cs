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

        public DepartmentFacade(IDepartmentService departmentService, IUnitOfWorkAsync unitOfWork, IDepartmentTranslationService typeTranslationService) : base(unitOfWork)
        {
            _departmentService = departmentService;
            _typeTranslationService = typeTranslationService;
        }

        public DepartmentFacade(IDepartmentService departmentService, IDepartmentTranslationService typeTranslationService)
        {
            _departmentService = departmentService;
            _typeTranslationService = typeTranslationService;
        }

        public DepartmentDto GetDepartment(long departmentId, int tenantId)
        {
            return Mapper.Map<DepartmentDto>(_departmentService.Query(x => x.DepartmentId == departmentId && x.TenantId == tenantId).Select().FirstOrDefault());
        }

        public DepartmentDto CreateDepartment(DepartmentDto departmentDto, int userId, int tenantId)
        {
            if (GetDepartment(departmentDto.DepartmentId, tenantId) != null)
            {
                return EditDepartment(departmentDto, userId, tenantId);
            }

            var departmentObj = Mapper.Map<Department>(departmentDto);
            foreach (var departmentName in departmentDto.TitleDictionary)
            {
                departmentObj.DepartmentTranslations.Add(new DepartmentTranslation
                {
                    Title = departmentName.Value,
                    Language = departmentName.Key
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

    }
}
