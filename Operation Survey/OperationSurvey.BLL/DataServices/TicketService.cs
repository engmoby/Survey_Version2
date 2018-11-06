using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices
{
    public class TicketService:Service<Ticket>,ITicketService
    {
        public TicketService(IRepositoryAsync<Ticket> repository):base(repository)
        {
            
        }
    }
}
