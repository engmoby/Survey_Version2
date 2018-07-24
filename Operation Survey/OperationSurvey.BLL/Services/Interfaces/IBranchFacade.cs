using System;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IBranchFacade
    {
        BranchDto GetBranch(long branchId, int tenantId);
        BranchDto CreateBranch(BranchDto userDto, int userId, int tenantId);
        BranchDto EditBranch(BranchDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllBranchs(int page, int pageSize, int tenantId); 
    }
}
