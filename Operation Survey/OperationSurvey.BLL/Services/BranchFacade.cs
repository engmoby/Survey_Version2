using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
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

        public BranchDto GetBranch(long branchId)
        {
            return Mapper.Map<BranchDto>(_branchService.Find(branchId));
        }

        public BranchDto CreateBranch(BranchDto branchDto)
        {
            if (GetBranch(branchDto.BranchId) != null)
            {
                return EditBranch(branchDto);
            }

            var BranchObj = Mapper.Map<Branch>(branchDto);
            foreach (var BranchName in branchDto.TitleDictionary)
            {
                BranchObj.BranchTranslations.Add(new BranchTranslation
                {
                    Title = BranchName.Value,
                    Language = BranchName.Key
                });
            }
            _typeTranslationService.InsertRange(BranchObj.BranchTranslations);
            _branchService.Insert(BranchObj);
            SaveChanges();
            return branchDto;
        }

        public BranchDto EditBranch(BranchDto BranchDto)
        {
            var BranchObj = _branchService.Find(BranchDto.BranchId);
            if (BranchObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var BranchName in BranchDto.TitleDictionary)
            {
                var BranchTranslation = BranchObj.BranchTranslations.FirstOrDefault(x => x.Language.ToLower() == BranchName.Key.ToLower() && x.BranchId == BranchDto.BranchId);
                if (BranchTranslation == null)
                {
                    BranchObj.BranchTranslations.Add(new BranchTranslation
                    {
                        Title = BranchName.Value,
                        Language = BranchName.Key
                    });
                }
                else
                    BranchTranslation.Title = BranchName.Value;
            }
            //BranchObj.IsDeleted = BranchDto.IsDeleted;
            //BranchObj.IsStatic = BranchDto.IsStatic;
            _branchService.Update(BranchObj);
            SaveChanges();
            return BranchDto;

        }

        public PagedResultsDto GetAllBranchs(int page, int pageSize)
        {
            return _branchService.GetAllBranchs(page, pageSize);
        }

    }
}
