using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Script.Serialization;
using AutoMapper;
using OperationSurvey.API.Infrastructure;
using OperationSurvey.API.Models;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;

namespace OperationSurvey.API.Controllers
{
    public class TicketController : BaseApiController
    {
        private ITicketFacade _ticketFacade;

        public TicketController(ITicketFacade ticketFacade)
        {
            _ticketFacade = ticketFacade;
        }

        [Route("api/Tickets", Name = "CreateTicket")]
        [HttpPost]
        public IHttpActionResult CreateRequest()
        {
            var httpRequest = HttpContext.Current.Request;
            List<MemoryStream> files = new List<MemoryStream>();
            for (var i = 0; i < HttpContext.Current.Request.Files.Count; i++)
            {
                var stream = new MemoryStream();
                HttpContext.Current.Request.Files[i].InputStream.CopyTo(stream);
                files.Add(stream);
            }
            var ticketModel =
                new JavaScriptSerializer().Deserialize<TicketModel>(HttpContext.Current.Request.Form.Get(0));
            ticketModel.Status = "0";
            _ticketFacade.CreateTicket(Mapper.Map<TicketDto>(ticketModel), TenantId, UserId, files,
                HostingEnvironment.MapPath("~/Images/"));
            return Ok();
        }

        [Route("api/Tickets/", Name = "GetAllTickets")]
        [HttpGet]
        [ResponseType(typeof(List<TicketModel>))]
        public IHttpActionResult GetAllTickets(int page = Page, int pagesize = PageSize,
            long countryId = 0, long regionId=0, long cityId=0, long areaId=0, long departmentId=0,
            long categoryId = 0, long branchId = 0, string from = "", string to = "",long technasianId = 0,long branchManagerId = 0,string status = "")
        {
            PagedResultsDto requests = _ticketFacade.GetAllTickets(UserId, TenantId, page, pagesize, categoryId,
                regionId, cityId, areaId, departmentId, categoryId, branchId
                , from, to, technasianId, branchManagerId, status);
            var data = Mapper.Map<List<TicketModel>>(requests.Data);
            //if (data != null)
            //    foreach (var item in data)
            //    {
            //        item.ImagesURL = new List<string>();
            //        string path = HostingEnvironment.MapPath("~/Images/") + "\\" + "Ticket-" + item.TicketId;
            //        var imageCounter = Directory.Exists(path) ?Directory
            //            .GetFiles(path)
            //            .Count(x => !Path.GetFileName(x).Contains("thumb")):-1;
            //        int id = 1;
            //        while (id < imageCounter + 1)
            //        {
            //            item.ImagesURL.Add(Url.Link("TicketImage", new {ticketId = item.TicketId, imageId = id}));
            //            id++;
            //        }

            //    }
            return PagedResponse("GetAllTickets", page, pagesize, requests.TotalCount, data, false);
        }

        [Route("api/Tickets/{ticketId:long}", Name = "GetTicket")]
        [HttpGet]
        [ResponseType(typeof(List<TicketModel>))]
        public IHttpActionResult GetTicket(long ticketId)
        {
            var ticketModel = Mapper.Map<TicketModel>(_ticketFacade.GetTicket(ticketId));

            ticketModel.ImagesURL = new List<string>();
            string path = HostingEnvironment.MapPath("~/Images/") + "\\" + "Ticket-" + ticketModel.TicketId;
            var imageCounter = Directory.Exists(path) ? Directory
                .GetFiles(path)
                .Count(x => !Path.GetFileName(x).Contains("thumb")) : -1;
            int id = 1;
            while (id < imageCounter + 1)
            {
                ticketModel.ImagesURL.Add(Url.Link("TicketImage", new {ticketId = ticketModel.TicketId, imageId = id}));
                id++;
            }
            return Ok(ticketModel);
        }

        [Route("api/Tickets/{ticketId:long}/Image/{imageId:int}", Name = "TicketImage")]
        public HttpResponseMessage GetTicketImage(long ticketId, int imageId, string type = "orignal")
        {
            try
            {
                string filePath = type == "orignal"
                    ? Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\" + "Ticket-" + ticketId)
                        .FirstOrDefault(x => Path.GetFileName(x).Split('.')[0] == imageId.ToString() &&
                                             !Path.GetFileName(x).Contains("thumb"))
                    : Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\" + "Ticket-" + ticketId)
                        .FirstOrDefault(x => Path.GetFileName(x).Split('.')[0] == imageId.ToString() &&
                                             Path.GetFileName(x).Contains("thumb"));


                HttpResponseMessage Response = new HttpResponseMessage(HttpStatusCode.OK);

                byte[] fileData = File.ReadAllBytes(filePath);

                Response.Content = new ByteArrayContent(fileData);
                Response.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");

                return Response;
            }
            catch (Exception e)
            {
                return new HttpResponseMessage();
            }
        }

        [Route("api/Tickets/{ticketId:long}/Assigned/{assignedUserId:long}", Name = "AssignedTicket")]
        [HttpPost]
        public IHttpActionResult AssignedTicket(long ticketId, long assignedUserId,[FromBody] TicketModel ticketModel)
        {
            _ticketFacade.AssignedTicket(UserId,ticketId, assignedUserId, ticketModel.AssignComment);
            return Ok();
        }

        [Route("api/Tickets/{ticketId:long}/Approve", Name = "ApproveTicket")]
        [HttpGet]
        public IHttpActionResult ApproveTicket(long ticketId)
        {
            _ticketFacade.ApproveTicket(UserId, ticketId);
            return Ok();
        }

        [Route("api/Tickets/{ticketId:long}/Closed", Name = "CloseTicket")]
        [HttpGet]
        public IHttpActionResult CloseTicket(long ticketId)
        {
            _ticketFacade.CloseTicket(UserId, ticketId);
            return Ok();
        }

        [Route("api/Tickets/{ticketId:long}/Reject", Name = "RejectTicket")]
        [HttpPost]
        public IHttpActionResult RejectTicket(long ticketId, [FromBody] TicketModel ticketModel)
        {
            _ticketFacade.RejectTicket(UserId, ticketId, ticketModel.RejectionComment);
            return Ok();
        }

        //[Route("api/Tickets/{ticketId:long}/Technacian", Name = "AssignedTicket")]
        //[HttpGet]
        //public IHttpActionResult AssignedTicket(long ticketId)
        //{
        //    return Ok(Mapper.Map<List<UserModel>>(_ticketFacade.GetTechnacianForTicket(ticketId)));

        //}

        [Route("api/Tickets/dashboard", Name = "GetTicketDashboard")]
        [HttpGet]
        public IHttpActionResult GetTicketDashboard(string xaxis="branch")
        {
            return Ok(_ticketFacade.GetTicketDashboard(TenantId, xaxis));
        }
    }
}
