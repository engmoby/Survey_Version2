using System;
using OperationSurvey.BLL.DTOs;
using System.Collections.Generic;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IAnswerFacade
    { 
        AnswerDto GetAnswer(long userId, int tenantId);
        void CreateAnswer(List<AnswerDto> userDto, int userId, int tenantId);
        //AnswerDto CreateAnswer(List<QuestionDto> questionanswerDto, int userId, int tenantId);
        PagedResultsDto GetAllAnswers(int page, int pageSize, int tenantId);

        PagedResultsDto GetAnswers(int page, int pageSize, long questionId, long countryId, long regionId, long cityId, long areaId, long branchId, string from, string to);
    }
}
