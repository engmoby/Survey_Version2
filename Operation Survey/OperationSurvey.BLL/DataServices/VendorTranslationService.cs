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
    public class VendorTranslationService : Service<VendorTranslation>, IVendorTranslationService
    {
        public VendorTranslationService(IRepositoryAsync<VendorTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllVendors()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Vendor.IsDeleted ).Select(x => x.Vendor).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Vendor.IsDeleted).Select().ToList();
            var Vendors = _repository.Query(x => !x.Vendor.IsDeleted ).Select(x => x.Vendor)
                .OrderBy(x => x.VendorId).ToList();
            results.Data = Mapper.Map<List<Vendor>, List<VendorDto>>(Vendors);
            return results;
        }
        public PagedResultsDto GetAllVendorsTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Vendor).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Vendors = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Vendor)
                .OrderBy(x => x.VendorId).ToList();
            results.Data = Mapper.Map<List<Vendor>, List<VendorDto>>(Vendors, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Vendor Vendor in src)
                        {
                            Vendor.VendorTranslations = Vendor.VendorTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetVendorTranslationByVendorId(string language,long VendorId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.VendorId == VendorId).Select(x => x.Vendor).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Vendors = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower() && x.VendorId == VendorId).Select(x => x.Vendor)
                .OrderBy(x => x.VendorId).ToList();
            results.Data = Mapper.Map<List<Vendor>, List<VendorDto>>(Vendors, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Vendor Vendor in src)
                        {
                            Vendor.VendorTranslations = Vendor.VendorTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public VendorDto VendorTranslationByVendorId(string language, long VendorId)
        {
            var aaax = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Vendors = _repository.Query(x => !x.Vendor.IsDeleted && x.Language.ToLower() == language.ToLower() && x.VendorId == VendorId).Select(x => x.Vendor)
                .OrderBy(x => x.VendorId).FirstOrDefault();
            var results = Mapper.Map<Vendor, VendorDto>(Vendors, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.VendorTranslations = src.VendorTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }

        public bool CheckNameExist(string objName, string language, long recordId, long tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.VendorId != recordId && x.Vendor.TenantId == tenantId && !x.Vendor.IsDeleted);

        }
    }
}