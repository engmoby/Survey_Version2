using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IRegionFacade
    {
        RegionDto GetRegion(long regionId, int tenantId);
        RegionDto CreateRegion(RegionDto regionDto, int userId, int tenantId);
        RegionDto EditRegion(RegionDto regionDto, int userId, int tenantId);
        PagedResultsDto GetAllRegions(long countryId, int page, int pageSize, int tenantId);
        PagedResultsDto GetAllRegionsForUser(long userId);
    }
}
