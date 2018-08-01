using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IQuestionTranslationService : IService<QuestionTranslation>
    {
        PagedResultsDto GetAllQuestions();
        PagedResultsDto GetAllQuestionsTranslation(string language);
        PagedResultsDto GetQuestionTranslationByQuestionId(string language, long questionId);
        QuestionDto QuestionTranslationByQuestionId(string language, long questionId);
    }
}
