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
    public class QuestionService : Service<Question>, IQuestionService
    {
        public QuestionService(IRepositoryAsync<Question> repository) : base(repository)
        {
            _repository = repository;
        }

    }
}
