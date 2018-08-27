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
    public class RoleTranslationService : Service<RoleTranslation>, IRoleTranslationService
    {
        public RoleTranslationService(IRepositoryAsync<RoleTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllRoles()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Role.IsDeleted ).Select(x => x.Role).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Role.IsDeleted).Select().ToList();
            var Roles = _repository.Query(x => !x.Role.IsDeleted ).Select(x => x.Role)
                .OrderBy(x => x.RoleId).ToList();
            results.Data = Mapper.Map<List<Role>, List<RoleDto>>(Roles);
            return results;
        }
        public PagedResultsDto GetAllRolesTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Role).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Roles = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Role)
                .OrderBy(x => x.RoleId).ToList();
            results.Data = Mapper.Map<List<Role>, List<RoleDto>>(Roles, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Role Role in src)
                        {
                            Role.RoleTranslations = Role.RoleTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetRoleTranslationByRoleId(string language,long RoleId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.RoleId == RoleId).Select(x => x.Role).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Roles = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower() && x.RoleId == RoleId).Select(x => x.Role)
                .OrderBy(x => x.RoleId).ToList();
            results.Data = Mapper.Map<List<Role>, List<RoleDto>>(Roles, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Role Role in src)
                        {
                            Role.RoleTranslations = Role.RoleTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public RoleDto RoleTranslationByRoleId(string language, long RoleId)
        {
            var aaax = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Roles = _repository.Query(x => !x.Role.IsDeleted && x.Language.ToLower() == language.ToLower() && x.RoleId == RoleId).Select(x => x.Role)
                .OrderBy(x => x.RoleId).FirstOrDefault();
            var results = Mapper.Map<Role, RoleDto>(Roles, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.RoleTranslations = src.RoleTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }

        public bool CheckNameExist(string language, string title, long roleId, int tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() &&
                          x.Title.ToLower() == title.ToLower() &&
                          x.RoleId != roleId && !x.Role.IsDeleted && x.Role.TenantId == tenantId);
        }
    }
}