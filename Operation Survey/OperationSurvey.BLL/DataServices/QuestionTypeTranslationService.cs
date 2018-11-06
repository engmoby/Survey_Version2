using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices
{
    public class QuestionTypeTranslationService : Service<QuestionTypeTranslation>, IQuestionTypeTranslationService
    {
        public QuestionTypeTranslationService(IRepositoryAsync<QuestionTypeTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
