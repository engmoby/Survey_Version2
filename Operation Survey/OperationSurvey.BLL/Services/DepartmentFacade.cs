using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.Services
{
    public class DepartmentFacade : BaseFacade, IDepartmentFacade
    {
        private readonly IDepartmentService _DepartmentService;
        private readonly IDepartmentTranslationService _typeTranslationService;

        public DepartmentFacade(IDepartmentService DepartmentService, IUnitOfWorkAsync unitOfWork, IDepartmentTranslationService typeTranslationService) : base(unitOfWork)
        {
            _DepartmentService = DepartmentService;
            _typeTranslationService = typeTranslationService;
        }

        public DepartmentFacade(IDepartmentService DepartmentService, IDepartmentTranslationService typeTranslationService)
        {
            _DepartmentService = DepartmentService;
            _typeTranslationService = typeTranslationService;
        }

        public DepartmentDto GetDepartment(long DepartmentId)
        {
            var ddd = _DepartmentService.Find(DepartmentId);
            return Mapper.Map<DepartmentDto>(ddd);
        }

        public DepartmentDto CreateDepartment(DepartmentDto DepartmentDto)
        {
            if (GetDepartment(DepartmentDto.DepartmentId) != null)
            {
                return EditDepartment(DepartmentDto);
            }

            var DepartmentObj = Mapper.Map<Department>(DepartmentDto);
            foreach (var DepartmentName in DepartmentDto.TitleDictionary)
            {
                DepartmentObj.DepartmentTranslations.Add(new DepartmentTranslation
                {
                    Title = DepartmentName.Value,
                    Language = DepartmentName.Key
                });
            }
            _typeTranslationService.InsertRange(DepartmentObj.DepartmentTranslations);
            _DepartmentService.Insert(DepartmentObj);
            SaveChanges();
            return DepartmentDto;
        }

        public DepartmentDto EditDepartment(DepartmentDto DepartmentDto)
        {
            var DepartmentObj = _DepartmentService.Find(DepartmentDto.DepartmentId);
            if (DepartmentObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var DepartmentName in DepartmentDto.TitleDictionary)
            {
                var DepartmentTranslation = DepartmentObj.DepartmentTranslations.FirstOrDefault(x => x.Language.ToLower() == DepartmentName.Key.ToLower() && x.DepartmentId == DepartmentDto.DepartmentId);
                if (DepartmentTranslation == null)
                {
                    DepartmentObj.DepartmentTranslations.Add(new DepartmentTranslation
                    {
                        Title = DepartmentName.Value,
                        Language = DepartmentName.Key
                    });
                }
                else
                    DepartmentTranslation.Title = DepartmentName.Value;
            }
            DepartmentObj.IsDeleted = DepartmentDto.IsDeleted;
            DepartmentObj.IsStatic = DepartmentDto.IsStatic;
            _DepartmentService.Update(DepartmentObj);
            SaveChanges();
            return DepartmentDto;

        }

        public PagedResultsDto GetAllDepartments(int page, int pageSize)
        {
            return _DepartmentService.GetAllDepartments(page, pageSize);
        }

    }
}
