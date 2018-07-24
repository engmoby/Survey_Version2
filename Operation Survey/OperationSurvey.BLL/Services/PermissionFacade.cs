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
    public class PermissionFacade : BaseFacade, IPermissionFacade
    {
        private readonly IPermissionService _PermissionService;
        private readonly IPermissionTranslationService _typeTranslationService;

        public PermissionFacade(IPermissionService PermissionService, IUnitOfWorkAsync unitOfWork, IPermissionTranslationService typeTranslationService) : base(unitOfWork)
        {
            _PermissionService = PermissionService;
            _typeTranslationService = typeTranslationService;
        }

        public PermissionFacade(IPermissionService PermissionService, IPermissionTranslationService typeTranslationService)
        {
            _PermissionService = PermissionService;
            _typeTranslationService = typeTranslationService;
        }

        public PermissionDto GetPermission(long PermissionId)
        {
            return Mapper.Map<PermissionDto>(_PermissionService.Find(PermissionId));
        }

        public PermissionDto CreatePermission(PermissionDto PermissionDto)
        {
            if (GetPermission(PermissionDto.PermissionId) != null)
            {
                return EditPermission(PermissionDto);
            }

            var PermissionObj = Mapper.Map<Permission>(PermissionDto);
            foreach (var PermissionName in PermissionDto.TitleDictionary)
            {
                PermissionObj.PermissionTranslations.Add(new PermissionTranslation
                {
                    Title = PermissionName.Value,
                    Language = PermissionName.Key
                });
            }
            _typeTranslationService.InsertRange(PermissionObj.PermissionTranslations);
            _PermissionService.Insert(PermissionObj);
            SaveChanges();
            return PermissionDto;
        }

        public PermissionDto EditPermission(PermissionDto PermissionDto)
        {
            var PermissionObj = _PermissionService.Find(PermissionDto.PermissionId);
            if (PermissionObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var PermissionName in PermissionDto.TitleDictionary)
            {
                var PermissionTranslation = PermissionObj.PermissionTranslations.FirstOrDefault(x => x.Language.ToLower() == PermissionName.Key.ToLower() && x.PermissionId == PermissionDto.PermissionId);
                if (PermissionTranslation == null)
                {
                    PermissionObj.PermissionTranslations.Add(new PermissionTranslation
                    {
                        Title = PermissionName.Value,
                        Language = PermissionName.Key
                    });
                }
                else
                    PermissionTranslation.Title = PermissionName.Value;
            }
            PermissionObj.IsDeleted = PermissionDto.IsDeleted;
            PermissionObj.IsStatic = PermissionDto.IsStatic;
            _PermissionService.Update(PermissionObj);
            SaveChanges();
            return PermissionDto;

        }

        public PagedResultsDto GetAllPermissions(int page, int pageSize)
        {
            return _PermissionService.GetAllPermissions(page, pageSize);
        }

    }
}
