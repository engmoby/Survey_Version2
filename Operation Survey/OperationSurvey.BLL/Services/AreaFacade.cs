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

        public AreaDto GetArea(long areaId)
        {
            var ddd = _areaService.Find(areaId);
            return Mapper.Map<AreaDto>(ddd);
        }

        public AreaDto CreateArea(AreaDto areaDto)
        {
            if (GetArea(areaDto.AreaId) != null)
            {
                return EditArea(areaDto);
            }

            var areaObj = Mapper.Map<Area>(areaDto);
            foreach (var areaName in areaDto.TitleDictionary)
            {
                areaObj.AreaTranslations.Add(new AreaTranslation
                {
                    Title = areaName.Value,
                    Language = areaName.Key
                });
            }
            _typeTranslationService.InsertRange(areaObj.AreaTranslations);
            _areaService.Insert(areaObj);
            SaveChanges();
            return areaDto;
        }

        public AreaDto EditArea(AreaDto areaDto)
        {
            var areaObj = _areaService.Find(areaDto.AreaId);
            if (areaObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var areaName in areaDto.TitleDictionary)
            {
                var areaTranslation = areaObj.AreaTranslations.FirstOrDefault(x => x.Language.ToLower() == areaName.Key.ToLower() && x.AreaId == areaDto.AreaId);
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
            areaObj.IsDeleted = areaDto.IsDeleted;
            areaObj.IsStatic = areaDto.IsStatic;
            _areaService.Update(areaObj);
            SaveChanges();
            return areaDto;

        }

        public PagedResultsDto GetAllAreas(int page, int pageSize)
        {
            return _areaService.GetAllAreas(page, pageSize);
        }

    }
}
