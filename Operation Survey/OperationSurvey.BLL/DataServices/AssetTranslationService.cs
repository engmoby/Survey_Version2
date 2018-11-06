using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices
{
    public class AssetTranslationService : Service<AssetTranslation>, IAssetTranslationService
    {
        public AssetTranslationService(IRepositoryAsync<AssetTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllAssets()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Asset.IsDeleted ).Select(x => x.Asset).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Asset.IsDeleted).Select().ToList();
            var Assets = _repository.Query(x => !x.Asset.IsDeleted ).Select(x => x.Asset)
                .OrderBy(x => x.AssetId).ToList();
            results.Data = Mapper.Map<List<Asset>, List<AssetDto>>(Assets);
            return results;
        }
        public PagedResultsDto GetAllAssetsTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Asset).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Assets = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Asset)
                .OrderBy(x => x.AssetId).ToList();
            results.Data = Mapper.Map<List<Asset>, List<AssetDto>>(Assets, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Asset Asset in src)
                        {
                            Asset.AssetTranslations = Asset.AssetTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetAssetTranslationByAssetId(string language,long AssetId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.AssetId == AssetId).Select(x => x.Asset).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Assets = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower() && x.AssetId == AssetId).Select(x => x.Asset)
                .OrderBy(x => x.AssetId).ToList();
            results.Data = Mapper.Map<List<Asset>, List<AssetDto>>(Assets, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Asset Asset in src)
                        {
                            Asset.AssetTranslations = Asset.AssetTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public AssetDto AssetTranslationByAssetId(string language, long AssetId)
        {
            var aaax = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Assets = _repository.Query(x => !x.Asset.IsDeleted && x.Language.ToLower() == language.ToLower() && x.AssetId == AssetId).Select(x => x.Asset)
                .OrderBy(x => x.AssetId).FirstOrDefault();
            var results = Mapper.Map<Asset, AssetDto>(Assets, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.AssetTranslations = src.AssetTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }

        public bool CheckNameExist(string objName, string language, long recordId, long tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.AssetId != recordId && x.Asset.TenantId == tenantId && !x.Asset.IsDeleted);

        }
    }
}