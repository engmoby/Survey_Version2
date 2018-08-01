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
    public class BranchFacade : BaseFacade, IBranchFacade
    {
        private readonly IBranchService _branchService;
        private readonly IBranchTranslationService _typeTranslationService;

        public BranchFacade(IBranchService branchService, IUnitOfWorkAsync unitOfWork, IBranchTranslationService typeTranslationService) : base(unitOfWork)
        {
            _branchService = branchService;
            _typeTranslationService = typeTranslationService;
        }

        public BranchFacade(IBranchService branchService, IBranchTranslationService typeTranslationService)
        {
            _branchService = branchService;
            _typeTranslationService = typeTranslationService;
        }

        public BranchDto GetBranch(long branchId, int tenantId)
        {
            return Mapper.Map<BranchDto>(_branchService.Query(x => x.BranchId == branchId && x.TenantId == tenantId)
                .Select().FirstOrDefault());
        }

        public BranchDto CreateBranch(BranchDto branchDto, int userId, int tenantId)
        {
            if (GetBranch(branchDto.BranchId, tenantId) != null)
            {
                return EditBranch(branchDto, userId, tenantId);
            }

            var branchObj = Mapper.Map<Branch>(branchDto);
            foreach (var branchName in branchDto.TitleDictionary)
            {
                branchObj.BranchTranslations.Add(new BranchTranslation
                {
                    Title = branchName.Value,
                    Language = branchName.Key,
                    TenantId = tenantId
                });
            }

            branchObj.CreationTime = Strings.CurrentDateTime;
            branchObj.CreatorUserId = userId;
            branchObj.TenantId = tenantId;
            _typeTranslationService.InsertRange(branchObj.BranchTranslations);
            _branchService.Insert(branchObj);
            SaveChanges();
            return branchDto;
        }

        public BranchDto EditBranch(BranchDto branchDto, int userId, int tenantId)
        { 
            var branchObj = _branchService.Query(x => x.BranchId == branchDto.BranchId && x.TenantId == tenantId)
                .Select().FirstOrDefault();
            if (branchObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var branchName in branchDto.TitleDictionary)
            {
                var branchTranslation = branchObj.BranchTranslations.FirstOrDefault(x => x.Language.ToLower() == branchName.Key.ToLower() && x.BranchId == branchDto.BranchId);
                if (branchTranslation == null)
                {
                    branchObj.BranchTranslations.Add(new BranchTranslation
                    {
                        Title = branchName.Value,
                        Language = branchName.Key
                    });
                }
                else
                    branchTranslation.Title = branchName.Value;
            }
            branchObj.LastModificationTime = Strings.CurrentDateTime;
            branchObj.LastModifierUserId = userId;
            branchObj.IsDeleted = branchDto.IsDeleted;
            branchObj.IsStatic = branchDto.IsStatic;
            _branchService.Update(branchObj);
            SaveChanges();
            return branchDto;

        }

        public PagedResultsDto GetAllBranchs(int page, int pageSize, int tenantId)
        {
            return _branchService.GetAllBranchs(page, pageSize, tenantId);
        }

    }
}
