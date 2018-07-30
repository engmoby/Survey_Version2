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
    public class AreaFacade : BaseFacade, IAreaFacade
    {
        private readonly IAreaService _areaService;
        private readonly IAreaTranslationService _typeTranslationService;

        public AreaFacade(IAreaService areaService, IUnitOfWorkAsync unitOfWork, IAreaTranslationService typeTranslationService) : base(unitOfWork)
        {
            _areaService = areaService;
            _typeTranslationService = typeTranslationService;
        }

        public AreaFacade(IAreaService areaService, IAreaTranslationService typeTranslationService)
        {
            _areaService = areaService;
            _typeTranslationService = typeTranslationService;
        }

        public AreaDto GetArea(long areaId, int tenantId)
        {
            return Mapper.Map<AreaDto>(_areaService.Query(x => x.AreaId == areaId && x.TenantId == tenantId).Select().FirstOrDefault());
        }

        public AreaDto CreateArea(AreaDto areaDto, int userId, int tenantId)
        {
            if (GetArea(areaDto.AreaId, tenantId) != null)
            {
                return EditArea(areaDto, userId, tenantId);
            }

            var areaObj = Mapper.Map<Area>(areaDto);
            foreach (var areaName in areaDto.TitleDictionary)
            {
                areaObj.AreaTranslations.Add(new AreaTranslation
                {
                    Title = areaName.Value,
                    Language = areaName.Key,
                    TenantId = tenantId
                });
            }

            areaObj.CreationTime = Strings.CurrentDateTime;
            areaObj.CreatorUserId = userId;
            areaObj.TenantId = tenantId;
            _typeTranslationService.InsertRange(areaObj.AreaTranslations);
            _areaService.Insert(areaObj);
            SaveChanges();
            return areaDto;
        }

        public AreaDto EditArea(AreaDto areaDto, int userId, int tenantId)
        { 
            var areaObj = _areaService.Query(x => x.AreaId == areaDto.AreaId && x.TenantId == tenantId).Select().FirstOrDefault();
            if (areaObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var areaName in areaDto.TitleDictionary)
            {
                var areaTranslation = areaObj.AreaTranslations.FirstOrDefault(x => x.Language.ToLower() == areaName.Key.ToLower() 
                && x.AreaId == areaDto.AreaId);
                if (areaTranslation == null)
                {
                    areaObj.AreaTranslations.Add(new AreaTranslation
                    {
                        Title = areaName.Value,
                        Language = areaName.Key
                    });
                }
                else
                    areaTranslation.Title = areaName.Value;
            }

            areaObj.LastModificationTime = Strings.CurrentDateTime;
            areaObj.LastModifierUserId = userId;
            areaObj.IsDeleted = areaDto.IsDeleted;
            areaObj.IsStatic = areaDto.IsStatic;
            _areaService.Update(areaObj);
            SaveChanges();
            return areaDto;

        }

        public PagedResultsDto GetAllAreas(int page, int pageSize, int tenantId)
        {
            return _areaService.GetAllAreas(page, pageSize, tenantId);
        }

    }
}
