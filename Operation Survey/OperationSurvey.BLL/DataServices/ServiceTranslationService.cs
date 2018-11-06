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
    public class ServiceTranslationService : Service<ServiceTranslation>, IServiceTranslationService
    {
        public ServiceTranslationService(IRepositoryAsync<ServiceTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllServices()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Service.IsDeleted ).Select(x => x.Service).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Service.IsDeleted).Select().ToList();
            var Services = _repository.Query(x => !x.Service.IsDeleted ).Select(x => x.Service)
                .OrderBy(x => x.ServiceId).ToList();
            results.Data = Mapper.Map<List<DAL.Entities.Model.Service>, List<ServiceDto>>(Services);
            return results;
        }
        public PagedResultsDto GetAllServicesTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Service).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Services = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Service)
                .OrderBy(x => x.ServiceId).ToList();
            results.Data = Mapper.Map<List<DAL.Entities.Model.Service>, List<ServiceDto>>(Services, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (DAL.Entities.Model.Service Service in src)
                        {
                            Service.ServiceTranslations = Service.ServiceTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetServiceTranslationByServiceId(string language,long ServiceId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.ServiceId == ServiceId).Select(x => x.Service).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Services = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower() && x.ServiceId == ServiceId).Select(x => x.Service)
                .OrderBy(x => x.ServiceId).ToList();
            results.Data = Mapper.Map<List<DAL.Entities.Model.Service>, List<ServiceDto>>(Services, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (DAL.Entities.Model.Service Service in src)
                        {
                            Service.ServiceTranslations = Service.ServiceTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public ServiceDto ServiceTranslationByServiceId(string language, long ServiceId)
        {
            var aaax = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Services = _repository.Query(x => !x.Service.IsDeleted && x.Language.ToLower() == language.ToLower() && x.ServiceId == ServiceId).Select(x => x.Service)
                .OrderBy(x => x.ServiceId).FirstOrDefault();
            var results = Mapper.Map<DAL.Entities.Model.Service, ServiceDto>(Services, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.ServiceTranslations = src.ServiceTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }

        public bool CheckNameExist(string objName, string language, long recordId, long tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.ServiceId != recordId && x.Service.TenantId == tenantId && !x.Service.IsDeleted);

        }
    }
}