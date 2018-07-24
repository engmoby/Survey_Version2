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
    public class UserTypeTranslationService : Service<UserTypeTranslation>, IUserTypeTranslationService
    {
        public UserTypeTranslationService(IRepositoryAsync<UserTypeTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllUserTypes()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.UserType.IsDeleted).Select(x => x.UserType).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.UserType.IsDeleted).Select().ToList();
            var userTypes = _repository.Query(x => !x.UserType.IsDeleted).Select(x => x.UserType)
                .OrderBy(x => x.UserTypeId).ToList();
            results.Data = Mapper.Map<List<UserType>, List<UserTypeDto>>(userTypes);
            return results;
        }
        public PagedResultsDto GetAllUserTypesTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.UserType).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var userTypes = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.UserType)
                .OrderBy(x => x.UserTypeId).ToList();
            results.Data = Mapper.Map<List<UserType>, List<UserTypeDto>>(userTypes, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (UserType UserType in src)
                        {
                            UserType.UserTypeTranslations = UserType.UserTypeTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetUserTypeTranslationByUserTypeId(string language, long userTypeId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower() && x.UserTypeId == userTypeId).Select(x => x.UserType).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var UserTypes = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower() && x.UserTypeId == userTypeId).Select(x => x.UserType)
                .OrderBy(x => x.UserTypeId).ToList();
            results.Data = Mapper.Map<List<UserType>, List<UserTypeDto>>(UserTypes, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (UserType UserType in src)
                        {
                            UserType.UserTypeTranslations = UserType.UserTypeTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public UserTypeDto UserTypeTranslationByUserTypeId(string language, long userTypeId)
        {
            var aaax = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var UserTypes = _repository.Query(x => !x.UserType.IsDeleted && x.Language.ToLower() == language.ToLower() && x.UserTypeId == userTypeId).Select(x => x.UserType)
                .OrderBy(x => x.UserTypeId).FirstOrDefault();
            var results = Mapper.Map<UserType, UserTypeDto>(UserTypes, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.UserTypeTranslations = src.UserTypeTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }
        public bool CheckNameExist(string objName, string language, long recordId, long tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.UserTypeId != recordId && x.UserType.TenantId == tenantId && !x.UserType.IsDeleted);
        }

    }
}