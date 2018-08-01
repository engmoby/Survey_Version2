using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IAnswerService : IService<Answer>
    {
         PagedResultsDto GetAllAnswers(int page, int pageSize, int tenantId);
    }
}
