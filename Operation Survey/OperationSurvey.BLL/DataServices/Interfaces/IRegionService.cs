using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IRegionService:IService<Region>
    {
        PagedResultsDto GetAllRegions(long countryId,int page, int pageSize, int tenantId);
    }
}
