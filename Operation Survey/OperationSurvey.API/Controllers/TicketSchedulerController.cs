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
    public class TicketSchedulerController : BaseApiController
    {
        private readonly ITicketSchedulerFacade _ticketSchedulerFacade;
        public TicketSchedulerController(ITicketSchedulerFacade ticketSchedulerFacade)
        {
            _ticketSchedulerFacade = ticketSchedulerFacade;
        }
        [Route("api/TicketScheduler", Name = "GetALLTicketScheduler")]
        [HttpGet]
        public IHttpActionResult GetALLTicketScheduler()
        {
            var results = Mapper.Map<List<TicketSchedulerModel>>(_ticketSchedulerFacade.GetALLTicketScheduler(TenantId));
            return Ok(results);
        }

        [Route("api/TicketScheduler/{Id:long}", Name = "GetTicketScheduler")]
        [HttpGet]
        public IHttpActionResult GetTicketScheduler(long Id)
        {
            var results = Mapper.Map<TicketSchedulerModel>(_ticketSchedulerFacade.GetTicketScheduler(Id));
            return Ok(results);
        }

        [Route("api/TicketScheduler", Name = "CreateTicketScheduler")]
        [HttpPost]
        public IHttpActionResult CreateTicketScheduler([FromBody] TicketSchedulerModel ticketSchedulerModel)
        {
            _ticketSchedulerFacade.CreateTicketScheduler(TenantId,Mapper.Map<TicketSchedulerDto>(ticketSchedulerModel));
            return Ok();
        }
        [Route("api/TicketScheduler/{Id:long}", Name = "UpdateTicketScheduler")]
        [HttpPut]
        public IHttpActionResult UpdateTicketScheduler(long Id,[FromBody] TicketSchedulerModel ticketSchedulerModel)
        {
            _ticketSchedulerFacade.UpdateTicketScheduler(TenantId, Mapper.Map<TicketSchedulerDto>(ticketSchedulerModel));
            return Ok();
        }

        [Route("api/TicketScheduler/{Id:long}/Enable", Name = "EnableTicketScheduler")]
        [HttpGet]
        public IHttpActionResult EnableTicketScheduler(long Id)
        {
            _ticketSchedulerFacade.EnableTicketScheduler(Id);
            return Ok();
        }
        [Route("api/TicketScheduler/{Id:long}/Disable", Name = "DisableTicketScheduler")]
        [HttpGet]
        public IHttpActionResult DisableTicketScheduler(long Id)
        {
            _ticketSchedulerFacade.DisableTicketScheduler(Id);
            return Ok();
        }
        [Route("api/TicketScheduler/Scheduler", Name = "HandleTicketUnchanged")]
        [HttpGet]
        public IHttpActionResult HandleTicketUnchanged()
        {
            _ticketSchedulerFacade.HandleTicketUnchanged();
            return Ok();
        }
    }
}
