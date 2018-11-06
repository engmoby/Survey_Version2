using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface ITicketSchedulerFacade
    {
        List<TicketSchedulerDto> GetALLTicketScheduler(long tenantId);
        void CreateTicketScheduler(long tenantId, TicketSchedulerDto ticketSchedulerDto);
        void UpdateTicketScheduler(long tenantId, TicketSchedulerDto ticketSchedulerDto);
        void EnableTicketScheduler(long ticketSchedulerId);
        void DisableTicketScheduler(long ticketSchedulerId);
        TicketSchedulerDto GetTicketScheduler(long ticketSchedulerId);
        void HandleTicketUnchanged();
    }
}
