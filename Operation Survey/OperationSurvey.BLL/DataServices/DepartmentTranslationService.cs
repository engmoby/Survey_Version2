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
    public class DepartmentTranslationService : Service<DepartmentTranslation>, IDepartmentTranslationService
    {
        public DepartmentTranslationService(IRepositoryAsync<DepartmentTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllDepartments()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Department.IsDeleted ).Select(x => x.Department).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Department.IsDeleted).Select().ToList();
            var Departments = _repository.Query(x => !x.Department.IsDeleted ).Select(x => x.Department)
                .OrderBy(x => x.DepartmentId).ToList();
            results.Data = Mapper.Map<List<Department>, List<DepartmentDto>>(Departments);
            return results;
        }
        public PagedResultsDto GetAllDepartmentsTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Department).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Departments = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Department)
                .OrderBy(x => x.DepartmentId).ToList();
            results.Data = Mapper.Map<List<Department>, List<DepartmentDto>>(Departments, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Department Department in src)
                        {
                            Department.DepartmentTranslations = Department.DepartmentTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetDepartmentTranslationByDepartmentId(string language,long DepartmentId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.DepartmentId == DepartmentId).Select(x => x.Department).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Departments = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower() && x.DepartmentId == DepartmentId).Select(x => x.Department)
                .OrderBy(x => x.DepartmentId).ToList();
            results.Data = Mapper.Map<List<Department>, List<DepartmentDto>>(Departments, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Department Department in src)
                        {
                            Department.DepartmentTranslations = Department.DepartmentTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public DepartmentDto DepartmentTranslationByDepartmentId(string language, long DepartmentId)
        {
            var aaax = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Departments = _repository.Query(x => !x.Department.IsDeleted && x.Language.ToLower() == language.ToLower() && x.DepartmentId == DepartmentId).Select(x => x.Department)
                .OrderBy(x => x.DepartmentId).FirstOrDefault();
            var results = Mapper.Map<Department, DepartmentDto>(Departments, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.DepartmentTranslations = src.DepartmentTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }


    }
}