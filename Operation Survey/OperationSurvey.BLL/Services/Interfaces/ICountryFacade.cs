using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface ICountryFacade
    {
        CountryDto GetCountry(long countryId, int tenantId);
        CountryDto CreateCountry(CountryDto countryDto, int userId, int tenantId);
        CountryDto EditCountry(CountryDto countryDto, int userId, int tenantId);
        PagedResultsDto GetAllCountries(int page, int pageSize, int tenantId);
    }
}
