using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using AutoMapper;
using Elmah;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common.CustomException;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace OperationSurvey.BLL.Services
{
    public class TicketSchedulerFacade:BaseFacade, ITicketSchedulerFacade
    {
        private readonly ITicketSchedulerService _ticketSchedulerService;
        private readonly ITicketService _ticketService;
        public TicketSchedulerFacade(IUnitOfWorkAsync unitOfWork,ITicketSchedulerService ticketSchedulerService, ITicketService ticketService):base(unitOfWork)
        {
            _ticketSchedulerService = ticketSchedulerService;
            _ticketService = ticketService;
        }

        public List<TicketSchedulerDto> GetALLTicketScheduler(long tenantId)
        {
            return Mapper.Map<List<TicketSchedulerDto>>(_ticketSchedulerService.Query(x => x.TenantId == tenantId).Select().ToList());
        }

        public TicketSchedulerDto GetTicketScheduler(long ticketSchedulerId)
        {
            return Mapper.Map<TicketSchedulerDto>(_ticketSchedulerService.Find(ticketSchedulerId));
        }
        public void CreateTicketScheduler(long tenantId, TicketSchedulerDto ticketSchedulerDto)
        {
            var ticketScheduler =_ticketSchedulerService.Query(x => x.TenantId == tenantId && x.Status == ticketSchedulerDto.Status).Select()
                .FirstOrDefault();
            if (ticketScheduler != null)
            {
                throw new ValidationException(ErrorCodes.StatusAlreadyExist);
            }
            var ticket = Mapper.Map<TicketScheduler>(ticketSchedulerDto);
            ticket.TenantId = tenantId;
            ticket.IsActive = true;
            _ticketSchedulerService.Insert(ticket);
            SaveChanges();
        }
        public void UpdateTicketScheduler(long tenantId, TicketSchedulerDto ticketSchedulerDto)
        {
            var ticket = _ticketSchedulerService.Find(ticketSchedulerDto.Id);
            ticket.Body = ticketSchedulerDto.Body;
            ticket.Emails = ticketSchedulerDto.Emails;
            ticket.time = ticketSchedulerDto.time;
            ticket.IsActive = ticketSchedulerDto.IsActive;

            _ticketSchedulerService.Update(ticket);
            SaveChanges();
        }

        public void EnableTicketScheduler(long ticketSchedulerId)
        {
            var ticket = _ticketSchedulerService.Find(ticketSchedulerId);
            ticket.IsActive = true;
            _ticketSchedulerService.Update(ticket);
            SaveChanges();
        }

        public void DisableTicketScheduler(long ticketSchedulerId)
        {
            var ticket = _ticketSchedulerService.Find(ticketSchedulerId);
            ticket.IsActive = true;
            _ticketSchedulerService.Update(ticket);
            SaveChanges();
        }

        public void HandleTicketUnchanged()
        {
            var tickets = _ticketService.Queryable();
            foreach (var ticket in tickets)
            {
                var scheduler = _ticketSchedulerService
                    .Query(x => x.Status == ticket.Status && x.TenantId == ticket.TenantId).Select().FirstOrDefault();
                if(scheduler != null)
                {
                    var lastDateTime = ticket.Logs.OrderByDescending(x => x.DateTime).Where(x => x.Status == ticket.Status)
                        .Select(x => x.DateTime).FirstOrDefault();
                    if ((DateTime.Now - lastDateTime).TotalMinutes > scheduler.time)
                    {
                        try
                        {
                            SendHtmlFormattedEmail(scheduler.Emails, "Tickets", scheduler.Body);
                        }
                        catch (Exception e)
                        {
                            ErrorSignal.FromCurrentContext().Raise(e);
                        }
                        
                    }
                }
            }
        }
        
        private void SendHtmlFormattedEmail(string recepientEmail, string subject, string body)
        {
            string FromMail = "gmggroupsoftware@gmail.com";
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("in-v3.mailjet.com");
            mail.From = new MailAddress(FromMail);
            mail.To.Add(recepientEmail);
            mail.Subject = subject;
            mail.IsBodyHtml = true;
            mail.Body = body;
            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("9d7c1de804eabdf8fedf498bffadd546", "93187ce363c3beb198214badc25cdc3c");
            SmtpServer.EnableSsl = false;
            SmtpServer.Send(mail);

        }
    }
}
