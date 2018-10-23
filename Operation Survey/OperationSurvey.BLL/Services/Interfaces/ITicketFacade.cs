using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface ITicketFacade
    {
        void CreateTicket(TicketDto ticketDto,int tenantId,long userId, List<MemoryStream> files, string path);
        TicketDto GetTicket(long ticketId);
        PagedResultsDto GetAllTickets(long userId, int tenantId, int page, int pageSize,
            long countryId, long regionId, long cityId, long areaId, long departmentId,
            long categoryId, long branchId, string from, string to, long technasianId, long branchManagerId, string status);
        void AssignedTicket(long userId, long ticketId, long assignedUserId, string assignComment);
        void ApproveTicket(long userId, long ticketId);
        void CloseTicket(long userId, long ticketId);
        void RejectTicket(long userId, long ticketId,string comment);
        List<UserDto> GetTechnacianForTicket(long ticketId);
        List<TicketDashboard> GetTicketDashboard(long tenantId,string xAxis,long countryId, long regionId, long cityId, long areaId, long departmentId,
        long categoryId, long branchId, string from, string to, long technasianId, long branchManagerId, string status);

        void ReAssignedTicket(long userId, long ticketId, long assignedUserId, string assignComment);
        void CompleteTicket(long userId, long ticketId);
        List<TicketLogDto> GetTicketLogs(long ticketId);
    }
}
