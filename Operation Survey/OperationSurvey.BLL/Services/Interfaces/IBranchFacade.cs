using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IBranchFacade
    { 
        BranchDto GetBranch(long userId); 
        BranchDto CreateBranch(BranchDto userDto); 
        BranchDto EditBranch(BranchDto userDto);
        PagedResultsDto GetAllBranchs(int page, int pageSize); 
    }
}
