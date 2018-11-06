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
    public interface ICityService:IService<City>
    {
        PagedResultsDto GetAllCities(long regionId, int page, int pageSize, int tenantId);
    }
}
