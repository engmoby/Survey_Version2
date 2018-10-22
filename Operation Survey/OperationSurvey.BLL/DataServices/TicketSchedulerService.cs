using Service.Pattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;

namespace OperationSurvey.BLL.DataServices
{
    public class TicketSchedulerService:Service<TicketScheduler>,ITicketSchedulerService
    {
        public TicketSchedulerService(IRepositoryAsync<TicketScheduler> repository):base(repository)
        {
            
        }
    }
}
