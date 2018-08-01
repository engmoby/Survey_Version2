using System.Collections.Generic;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IQuestionService : IService<Question>
    {
        PagedResultsDto GetAllQuestions(int page, int pageSize, int tenantId);
        List<QuestionDto> GetAllQuestions(int tenantId);

    }
}
