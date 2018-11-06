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
    public class VendorFacade : BaseFacade, IVendorFacade
    {
        private readonly IVendorService _vendorService;
        private readonly IVendorTranslationService _typeTranslationService;
        private readonly IUserService _userService;

        public VendorFacade(IVendorService vendorService, IUnitOfWorkAsync unitOfWork, IVendorTranslationService typeTranslationService, IUserService userService) : base(unitOfWork)
        {
            _vendorService = vendorService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public VendorFacade(IVendorService vendorService, IVendorTranslationService typeTranslationService, IUserService userService)
        {
            _vendorService = vendorService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public VendorDto GetVendor(long vendorId, int tenantId)
        {
            //return Mapper.Map<VendorDto>(_VendorService.Query(x => x.VendorId == VendorId && x.TenantId == tenantId).Select().FirstOrDefault());
            if (vendorId == 0) return null;

            var query = _vendorService.Query(x => x.VendorId == vendorId && x.TenantId == tenantId).Select()
                .FirstOrDefault();

            var vendor = new VendorDto();
            if (query != null)
            {
                vendor.VendorId = query.VendorId;
                vendor.Website = query.Website;
                vendor.Phone = query.Phone;
                vendor.Address = query.Address;
                vendor.TitleDictionary = query.VendorTranslations.ToDictionary(translation => translation.Language.ToLower(), 
                    translation => translation.Title);}

            return vendor;
        }

        public VendorDto CreateVendor(VendorDto VendorDto, int userId, int tenantId)
        {

            if (GetVendor(VendorDto.VendorId, tenantId) != null)
            {
                return EditVendor(VendorDto, userId, tenantId);
            }
            ValidateVendor(VendorDto, tenantId);
            var VendorObj = Mapper.Map<Vendor>(VendorDto);
            foreach (var VendorName in VendorDto.TitleDictionary)
            {
                VendorObj.VendorTranslations.Add(new VendorTranslation
                {
                    Title = VendorName.Value,
                    Language = VendorName.Key,
                    TenantId = tenantId
                });
            }
            VendorObj.CreationTime = Strings.CurrentDateTime;
            VendorObj.CreatorUserId = userId;
            VendorObj.TenantId = tenantId;
            _typeTranslationService.InsertRange(VendorObj.VendorTranslations);
            _vendorService.Insert(VendorObj);
            SaveChanges();
            return VendorDto;
        }

        public VendorDto EditVendor(VendorDto vendorDto, int userId, int tenantId)
        {
            var VendorObj = _vendorService.Query(x => x.VendorId == vendorDto.VendorId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (VendorObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateVendor(vendorDto, tenantId);
            foreach (var VendorName in vendorDto.TitleDictionary)
            {
                var VendorTranslation = VendorObj.VendorTranslations.FirstOrDefault(x => x.Language.ToLower() == VendorName.Key.ToLower() && x.VendorId == vendorDto.VendorId);
                if (VendorTranslation == null)
                {
                    VendorObj.VendorTranslations.Add(new VendorTranslation
                    {
                        Title = VendorName.Value,
                        Language = VendorName.Key
                    });
                }
                else
                    VendorTranslation.Title = VendorName.Value;
            }
            VendorObj.Website = vendorDto.Website;
            VendorObj.Address = vendorDto.Address;
            VendorObj.Phone = vendorDto.Phone;
            VendorObj.LastModificationTime = Strings.CurrentDateTime;
            VendorObj.LastModifierUserId = userId;
            VendorObj.IsDeleted = vendorDto.IsDeleted; 
            _vendorService.Update(VendorObj);
            SaveChanges();
            return vendorDto;

        }

        public PagedResultsDto GetAllVendors(int page, int pageSize, int tenantId)
        {
            return _vendorService.GetAllVendors(page, pageSize, tenantId);
        }
        public VendorDto GetAllVendorByUserId(long userId)
        {
            return Mapper.Map<VendorDto>(_userService.Find(userId));
        }

        private void ValidateVendor(VendorDto vendorDto, long tenantId)
        {
            foreach (var name in vendorDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, vendorDto.VendorId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
    }
}
