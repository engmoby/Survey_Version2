using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface ICityFacade
    {
        CityDto GetCity(long cityId, int tenantId);
        CityDto CreateCity(CityDto cityDto, int userId, int tenantId);
        CityDto EditCity(CityDto cityDto, int userId, int tenantId);
        PagedResultsDto GetAllCities(long regionId, int page, int pageSize, int tenantId);
        PagedResultsDto GetAllCitiesForUser(long userId);
    }
}
