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
    public class ServiceFacade : BaseFacade, IServiceFacade
    {
        private readonly IServiceService _serviceService; 
        private readonly IUserService _userService;
        private readonly IServiceTranslationService _serviceTranslationService;

        public ServiceFacade(IServiceService serviceService, IUnitOfWorkAsync unitOfWork,    IUserService userService, IServiceTranslationService serviceTranslationService) : base(unitOfWork)
        {
            _serviceService = serviceService; 
            _userService = userService;
            _serviceTranslationService = serviceTranslationService;
        }

        public ServiceFacade(IServiceService ServiceService , IUserService userService, IServiceTranslationService serviceTranslationService)
        {
            _serviceService = ServiceService; 
            _userService = userService;
            _serviceTranslationService = serviceTranslationService;
        }

        public ServiceDto GetService(long ServiceId, int tenantId)
        {
            //return Mapper.Map<ServiceDto>(_ServiceService.Query(x => x.ServiceId == ServiceId && x.TenantId == tenantId).Select().FirstOrDefault());
            if (ServiceId == 0) return null;

            var query = _serviceService.Query(x => x.ServiceId == ServiceId && x.TenantId == tenantId).Select()
                .FirstOrDefault();

            var departmetn = new ServiceDto();
            if (query != null)
            {
                departmetn.ServiceId = query.ServiceId;
                departmetn.AssetId = query.AssetId;
                departmetn.VendorId = query.VendorId;
                departmetn.Price = query.Price;
                departmetn.Percentage = query.Percentage;
                departmetn.Notes = query.Notes;
                departmetn.TitleDictionary = query.ServiceTranslations.ToDictionary(translation => translation.Language.ToLower(),
                    translation => translation.Title);
            }
            return departmetn;
        }

        public ServiceDto CreateService(ServiceDto serviceDto, int userId, int tenantId)
        {

            if (GetService(serviceDto.ServiceId, tenantId) != null)
            {
                return EditService(serviceDto, userId, tenantId);
            }
            ValidateService(serviceDto, tenantId);

            var serviceObj = Mapper.Map<DAL.Entities.Model.Service>(serviceDto);
            foreach (var ServiceName in serviceDto.TitleDictionary)
            {
                serviceObj.ServiceTranslations.Add(new ServiceTranslation
                {
                    Title = ServiceName.Value,
                    Language = ServiceName.Key,
                    TenantId = tenantId
                });
            }
            serviceObj.CreationTime = DateTime.Now;
            serviceObj.CreatorUserId = userId;
            serviceObj.TenantId = tenantId;
            _serviceTranslationService.InsertRange(serviceObj.ServiceTranslations);
            _serviceService.Insert(serviceObj);
            SaveChanges();
            return serviceDto;
        }

        public ServiceDto EditService(ServiceDto serviceDto, int userId, int tenantId)
        {
            var serviceObj = _serviceService.Query(x => x.ServiceId == serviceDto.ServiceId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (serviceObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateService(serviceDto, tenantId);
            foreach (var ServiceName in serviceDto.TitleDictionary)
            {
                var ServiceTranslation = serviceObj.ServiceTranslations.FirstOrDefault(x => x.Language.ToLower() == ServiceName.Key.ToLower() && x.ServiceId == serviceDto.ServiceId);
                if (ServiceTranslation == null)
                {
                    serviceObj.ServiceTranslations.Add(new ServiceTranslation
                    {
                        Title = ServiceName.Value,
                        Language = ServiceName.Key
                    });
                }
                else
                    ServiceTranslation.Title = ServiceName.Value;
            }

           // serviceObj.ServiceId = serviceDto.ServiceId;
            //serviceObj.VendorId = serviceDto.VendorId;
            //serviceObj.Price = serviceDto.Price;
            serviceObj.Percentage = serviceDto.Percentage;
            serviceObj.Notes = serviceDto.Notes;
            serviceObj.LastModificationTime = Strings.CurrentDateTime;
            serviceObj.LastModifierUserId = userId;
            serviceObj.IsDeleted = serviceDto.IsDeleted; 
            _serviceService.Update(serviceObj);
            SaveChanges();
            return serviceDto;

        }

        public PagedResultsDto GetAllServices(long projectId, int page, int pageSize, int tenantId)
        {
            return _serviceService.GetAllServices(projectId,page, pageSize, tenantId);
        }
        public ServiceDto GetAllServiceByUserId(long userId)
        {
            return Mapper.Map<ServiceDto>(_userService.Find(userId));
        }

        private void ValidateService(ServiceDto ServiceDto, long tenantId)
        {
            foreach (var name in ServiceDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_serviceTranslationService.CheckNameExist(name.Value, name.Key, ServiceDto.ServiceId, tenantId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }

    }
}
