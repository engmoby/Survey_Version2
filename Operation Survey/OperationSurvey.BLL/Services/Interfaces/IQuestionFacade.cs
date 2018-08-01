using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IQuestionFacade
    { 
        QuestionDto GetQuestion(long userId, int tenantId); 
        QuestionDto CreateQuestion(QuestionDto userDto, int userId, int tenantId); 
        QuestionDto EditQuestion(QuestionDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllQuestions(int page, int pageSize, int tenantId);
        PagedResultsDto GetAllQuestionsByUserId(int page, int pageSize, int userId, int tenantId);

    }
}
