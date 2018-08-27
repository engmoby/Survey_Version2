using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.BLL.Services.ManageStorage;
using OperationSurvey.Common;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace OperationSurvey.BLL.Services
{
    public class TicketFacade:BaseFacade,ITicketFacade
    {
        private readonly ITicketService _ticketService;
        private readonly IManageStorage _manageStorage;
        private readonly IUserService _userService;
        private readonly IUserCategoryService _userCategoryService;
        private readonly IUserBranchService _userBranchService;

        public TicketFacade(IUnitOfWorkAsync unitOfWork, ITicketService ticketService, IManageStorage manageStorage, IUserService userService, IUserCategoryService userCategoryService, IUserBranchService userBranchService):base(unitOfWork)
        {
            _ticketService = ticketService;
            _manageStorage = manageStorage;
            _userService = userService;
            _userCategoryService = userCategoryService;
            _userBranchService = userBranchService;
        }

        public void CreateTicket(TicketDto ticketDto,int tenantId,long userId, List<MemoryStream> files, string path)
        {
            var ticket = Mapper.Map<Ticket>(ticketDto);
            ticket.TenantId = tenantId;
            ticket.CreatorUserId = userId;
            ticket.CreationTime = DateTime.Now;
            ticket.Status = Enums.TicketStatus.Pending;
            _ticketService.Insert(ticket);
            SaveChanges();
            var imageId = 1;
            foreach (var memoryStream in files)
            {
                _manageStorage.UploadImage(path + "\\" + "Ticket-" + ticket.TicketId, memoryStream, imageId.ToString());
                imageId++;
            }
        }

        public TicketDto GetTicket(long ticketId)
        {
            return Mapper.Map<TicketDto>(_ticketService.Find(ticketId));
        }
        public PagedResultsDto GetAllTickets(long userId, int tenantId, int page, int pageSize)
        {
            PagedResultsDto result = new PagedResultsDto();
            var user =  _userService.Find(userId);
            IOrderedEnumerable<Ticket> query;
            List<long> userCategoriesId;
            List<long> userBranchesId;
            switch (user.UserTypeId)
            {
                case 1:
                    if (user.IsStatic)
                    {
                        query = _ticketService.Query(x => x.TenantId == tenantId).Select()
                            .OrderBy(x => x.CreationTime);
                        result.TotalCount = query.Count();
                        result.Data =
                            Mapper.Map<List<TicketDto>>(query.Skip((page - 1) * pageSize).Take(pageSize).ToList());
                    }
                    break;
                case 2:
                    userCategoriesId = user.UserCategories.Select(c => c.CategoryId).ToList();
                    query = _ticketService
                        .Query(x => x.TenantId == tenantId && x.DepartmentId == user.DepartmentId &&
                                    userCategoriesId.Contains(x.CategoryId)).Select()
                        .OrderBy(x => x.CreationTime);
                    result.TotalCount = query.Count();
                    result.Data =
                        Mapper.Map<List<TicketDto>>(query.Skip((page - 1) * pageSize).Take(pageSize).ToList());
                    break;
                case 3:
                    userBranchesId = user.UserBranches.Select(c => c.BranchId).ToList();
                    query = _ticketService
                        .Query(x => x.TenantId == tenantId && x.AreaId == user.AreaId &&
                                userBranchesId.Contains(x.BranchId)).Select()
                        .OrderBy(x => x.CreationTime);
                    result.TotalCount = query.Count();
                    result.Data =
                        Mapper.Map<List<TicketDto>>(query.Skip((page - 1) * pageSize).Take(pageSize).ToList());
                    break;

                case 4:
                    //userBranchesId = user.UserBranches.Select(c => c.BranchId).ToList();
                    //userCategoriesId = user.UserCategories.Select(c => c.CategoryId).ToList();
                    query = _ticketService
                        .Query(x => x.TenantId == tenantId && x.AssignedUserId == user.UserId).Select()
                        .OrderBy(x => x.CreationTime);
                    result.TotalCount = query.Count();
                    result.Data =
                        Mapper.Map<List<TicketDto>>(query.Skip((page - 1) * pageSize).Take(pageSize).ToList());
                    break;
            }

            return result;
        }

        public List<UserDto> GetTechnacianForTicket(long ticketId)
        {
            var ticket = _ticketService.Find(ticketId);
            var userIdForCategory = _userCategoryService.Query(x => x.CategoryId == ticket.CategoryId)
                .Select(x => x.UserId).ToList();
            var userIdForBranch= _userBranchService.Query(x => x.BranchId == ticket.BranchId)
                .Select(x => x.UserId).ToList();
            return Mapper.Map<List<UserDto>>(_userService.Query(x => userIdForBranch.Contains(x.UserId) && userIdForCategory.Contains(x.UserId)).Select()
                .ToList());
        }
        public void AssignedTicket(long userId, long ticketId, long assignedUserId)
        {
            var ticket = _ticketService.Find(ticketId);
            ticket.LastModificationTime = DateTime.Now;
            ticket.LastModifierUserId = userId;
            ticket.AssignedUserId = assignedUserId;
            ticket.Status = Enums.TicketStatus.Assigned;
            _ticketService.Update(ticket);
            SaveChanges();
        }
        public void ApproveTicket(long userId, long ticketId)
        {
            var ticket = _ticketService.Find(ticketId);
            ticket.TechnicianModificationTime = DateTime.Now;
            ticket.Status = Enums.TicketStatus.InProgress;
            _ticketService.Update(ticket);
            SaveChanges();
        }
        public void CloseTicket(long userId, long ticketId)
        {
            var ticket = _ticketService.Find(ticketId);
            ticket.TechnicianModificationTime = DateTime.Now;
            ticket.Status = Enums.TicketStatus.Closed;
            _ticketService.Update(ticket);
            SaveChanges();
        }
        public void RejectTicket(long userId, long ticketId,string comment)
        {
            var ticket = _ticketService.Find(ticketId);
            ticket.TechnicianModificationTime = DateTime.Now;
            ticket.Status = Enums.TicketStatus.Rejected;
            ticket.RejectionComment = comment;
            _ticketService.Update(ticket);
            SaveChanges();
        }

        public List<TicketDashboard> GetTicketDashboard(long tenantId,string xAxis)
        {
            List<TicketDashboard> ticketDashboards = new List<TicketDashboard>();
            if (xAxis.ToLower() == "branch")
            {
                 ticketDashboards = _ticketService.Queryable()
                    .GroupBy(x => x.BranchId, (k, t) => new { key = k, tickets = t.ToList()}).Select(x=>x).ToList()
                    .Select(x => new TicketDashboard
                    {
                        XaxisName = x.tickets.FirstOrDefault().Branch.BranchTranslations
                            .ToDictionary(translation => translation.Language.ToLower(),
                                translation => translation.Title),
                        AssignedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Assigned),
                        PendingCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Pending),
                        InProgressCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.InProgress),
                        ClosedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Closed),
                        RejectedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Rejected),
                    }).ToList();
            }
            else if (xAxis.ToLower() == "area")
            {
                ticketDashboards = _ticketService.Queryable()
                    .GroupBy(x => x.AreaId, (k, t) => new { key = k, tickets = t.ToList() }).Select(x => x).ToList()
                    .Select(x => new TicketDashboard
                    {
                        XaxisName = x.tickets.FirstOrDefault().Area.AreaTranslations
                            .ToDictionary(translation => translation.Language.ToLower(),
                                translation => translation.Title),
                        AssignedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Assigned),
                        PendingCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Pending),
                        InProgressCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.InProgress),
                        ClosedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Closed),
                        RejectedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Rejected),
                    }).ToList();
            }
            else if (xAxis.ToLower() == "department")
            {
                ticketDashboards = _ticketService.Queryable()
                    .GroupBy(x => x.DepartmentId, (k, t) => new { key = k, tickets = t.ToList() }).Select(x => x).ToList()
                    .Select(x => new TicketDashboard
                    {
                        XaxisName = x.tickets.FirstOrDefault().Department.DepartmentTranslations
                            .ToDictionary(translation => translation.Language.ToLower(),
                                translation => translation.Title),
                        AssignedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Assigned),
                        PendingCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Pending),
                        InProgressCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.InProgress),
                        ClosedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Closed),
                        RejectedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Rejected),
                    }).ToList();
            }
            else if (xAxis.ToLower() == "category")
            {
                ticketDashboards = _ticketService.Queryable()
                    .GroupBy(x => x.CategoryId, (k, t) => new { key = k, tickets = t.ToList() }).Select(x => x).ToList()
                    .Select(x => new TicketDashboard
                    {
                        XaxisName = x.tickets.FirstOrDefault().Category.CategoryTranslations
                            .ToDictionary(translation => translation.Language.ToLower(),
                                translation => translation.Title),
                        AssignedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Assigned),
                        PendingCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Pending),
                        InProgressCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.InProgress),
                        ClosedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Closed),
                        RejectedCount = x.tickets.Count(t => t.Status == Enums.TicketStatus.Rejected),
                    }).ToList();
            }

            return ticketDashboards;
        }
    }
}
