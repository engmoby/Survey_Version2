using System;
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
    public class AssetFacade : BaseFacade, IAssetFacade
    {
        private readonly IAssetService _assetService;
        private readonly IAssetTranslationService _typeTranslationService;
        private readonly IUserService _userService;

        public AssetFacade(IAssetService AssetService, IUnitOfWorkAsync unitOfWork, IAssetTranslationService typeTranslationService, IUserService userService) : base(unitOfWork)
        {
            _assetService = AssetService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public AssetFacade(IAssetService AssetService, IAssetTranslationService typeTranslationService, IUserService userService)
        {
            _assetService = AssetService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public AssetDto GetAsset(long AssetId, int tenantId)
        {
            //return Mapper.Map<AssetDto>(_AssetService.Query(x => x.AssetId == AssetId && x.TenantId == tenantId).Select().FirstOrDefault());
            if (AssetId == 0) return null;

            var query = _assetService.Query(x => x.AssetId == AssetId && x.TenantId == tenantId).Select()
                .FirstOrDefault();

            var departmetn = new AssetDto();
            if (query != null)
            {
                departmetn.AssetStatus = query.AssetStatus;
                departmetn.PaymentMethod = query.PaymentMethod;
                departmetn.Price = query.Price;
                departmetn.AssetId = query.AssetId;
                departmetn.VendorId = query.VendorId; 
                departmetn.ProjectId = query.ProjectId;
                departmetn.Notes = query.Notes;
                departmetn.TitleDictionary = query.AssetTranslations.ToDictionary(translation => translation.Language.ToLower(),
                    translation => translation.Title);
            }

            return departmetn;
        }

        public AssetDto CreateAsset(AssetDto assetDto, int userId, int tenantId)
        {

            if (GetAsset(assetDto.AssetId, tenantId) != null)
            {
                return EditAsset(assetDto, userId, tenantId);
            }
            ValidateAsset(assetDto, tenantId);
            var AssetObj = Mapper.Map<Asset>(assetDto);
            foreach (var AssetName in assetDto.TitleDictionary)
            {
                AssetObj.AssetTranslations.Add(new AssetTranslation
                {
                    Title = AssetName.Value,
                    Language = AssetName.Key,
                    TenantId = tenantId
                });
            }
            AssetObj.CreationTime = DateTime.Now;
            AssetObj.CreatorUserId = userId;
            AssetObj.TenantId = tenantId;
            _typeTranslationService.InsertRange(AssetObj.AssetTranslations);
            _assetService.Insert(AssetObj);
            SaveChanges();
            return assetDto;
        }

        public AssetDto EditAsset(AssetDto AssetDto, int userId, int tenantId)
        {
            var AssetObj = _assetService.Query(x => x.AssetId == AssetDto.AssetId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (AssetObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateAsset(AssetDto, tenantId);
            foreach (var AssetName in AssetDto.TitleDictionary)
            {
                var AssetTranslation = AssetObj.AssetTranslations.FirstOrDefault(x => x.Language.ToLower() == AssetName.Key.ToLower() && x.AssetId == AssetDto.AssetId);
                if (AssetTranslation == null)
                {
                    AssetObj.AssetTranslations.Add(new AssetTranslation
                    {
                        Title = AssetName.Value,
                        Language = AssetName.Key
                    });
                }
                else
                    AssetTranslation.Title = AssetName.Value;
            }
            AssetObj.LastModificationTime = DateTime.Now;
            AssetObj.LastModifierUserId = userId;
            AssetObj.IsDeleted = AssetDto.IsDeleted;
            AssetObj.Notes = AssetDto.Notes;
            AssetObj.AssetStatus = AssetDto.AssetStatus;
            _assetService.Update(AssetObj);
            SaveChanges();
            return AssetDto;

        }

        public PagedResultsDto GetAllAssets(long projectId, int page, int pageSize, int tenantId)
        {
            return _assetService.GetAllAssets(projectId, page, pageSize, tenantId);
        }
        public AssetDto GetAllAssetByUserId(long userId)
        {
            return Mapper.Map<AssetDto>(_userService.Find(userId));
        }

        private void ValidateAsset(AssetDto AssetDto, long tenantId)
        {
            foreach (var name in AssetDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, AssetDto.AssetId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
    }
}
