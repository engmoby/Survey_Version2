using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using OperationSurvey.API.Infrastructure;
using OperationSurvey.API.Models;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;

namespace OperationSurvey.API.Controllers
{
    public class CountryController : BaseApiController
    {
        private readonly ICountryFacade _countryFacade;
        public CountryController(ICountryFacade countryFacade)
        {
            _countryFacade = countryFacade;
        }

        [Route("api/Countries/GetAllCountries", Name = "GetAllCountries")]
        [HttpGet]
        public IHttpActionResult GetAllCountries(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto allCountries = _countryFacade.GetAllCountries(page, pagesize, TenantId);
            var data = Mapper.Map<List<CountryModel>>(allCountries.Data);
            return PagedResponse("GetAllCountries", page, pagesize, allCountries.TotalCount, data, allCountries.IsParentTranslated);
        }


        [Route("api/Countries", Name = "CreateCountry")]
        [HttpPost]
        public IHttpActionResult CreateCountry([FromBody] CountryModel countryModel)
        {
            var country = _countryFacade.CreateCountry(Mapper.Map<CountryDto>(countryModel), UserId, TenantId);

            return Ok(country);
        }


        [Route("api/Countries/EditCountry", Name = "EditCountry")]
        [HttpPost]
        public IHttpActionResult EditCountry([FromBody] CountryModel countryModel)
        {
            var country = _countryFacade.EditCountry(Mapper.Map<CountryDto>(countryModel), UserId, TenantId);

            return Ok(country);
        }
        [Route("api/Countries/{countryId:long}", Name = "GetCountry")]
        [HttpGet]
        public IHttpActionResult GetCountry(long countryId)
        {
            var countryModel = Mapper.Map<CountryModel>(_countryFacade.GetCountry(countryId, TenantId));
            return Ok(countryModel);
        }
    }
}
