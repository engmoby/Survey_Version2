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
    public class PermissionTranslationService : Service<PermissionTranslation>, IPermissionTranslationService
    {
        public PermissionTranslationService(IRepositoryAsync<PermissionTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllPermissions()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Permission.IsDeleted ).Select(x => x.Permission).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Permission.IsDeleted).Select().ToList();
            var Permissions = _repository.Query(x => !x.Permission.IsDeleted ).Select(x => x.Permission)
                .OrderBy(x => x.PermissionId).ToList();
            results.Data = Mapper.Map<List<Permission>, List<PermissionDto>>(Permissions);
            return results;
        }
        public PagedResultsDto GetAllPermissionsTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Permission).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Permissions = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Permission)
                .OrderBy(x => x.PermissionId).ToList();
            results.Data = Mapper.Map<List<Permission>, List<PermissionDto>>(Permissions, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Permission Permission in src)
                        {
                            Permission.PermissionTranslations = Permission.PermissionTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetPermissionTranslationByPermissionId(string language,long PermissionId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.PermissionId == PermissionId).Select(x => x.Permission).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Permissions = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower() && x.PermissionId == PermissionId).Select(x => x.Permission)
                .OrderBy(x => x.PermissionId).ToList();
            results.Data = Mapper.Map<List<Permission>, List<PermissionDto>>(Permissions, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Permission Permission in src)
                        {
                            Permission.PermissionTranslations = Permission.PermissionTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PermissionDto PermissionTranslationByPermissionId(string language, long PermissionId)
        {
            var aaax = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Permissions = _repository.Query(x => !x.Permission.IsDeleted && x.Language.ToLower() == language.ToLower() && x.PermissionId == PermissionId).Select(x => x.Permission)
                .OrderBy(x => x.PermissionId).FirstOrDefault();
            var results = Mapper.Map<Permission, PermissionDto>(Permissions, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.PermissionTranslations = src.PermissionTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }


    }
}