using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IAnswerFacade
    { 
        AnswerDto GetAnswer(long userId, int tenantId); 
        AnswerDto CreateAnswer(AnswerDto userDto, int userId, int tenantId);  
        PagedResultsDto GetAllAnswers(int page, int pageSize, int tenantId); 
    }
}
