using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Service.Pattern;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IBackgroundService : IService<Background>
    {
        PagedResultsDto GetAllBackgrounds(int page, int pageSize, long userId); 
    }
}
