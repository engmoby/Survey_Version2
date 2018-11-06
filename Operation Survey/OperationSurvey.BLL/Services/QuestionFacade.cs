using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.Services.Interfaces;
using Repository.Pattern.UnitOfWork;

namespace OperationSurvey.BLL.Services
{
    public class QuestionFacade : BaseFacade, IQuestionFacade
    {
        private readonly IQuestionService _questionService;
        private readonly IQuestionTranslationService _questionTranslationService;

        public QuestionFacade(IQuestionService questionService, IUnitOfWorkAsync unitOfWork, IQuestionTranslationService quesyTranslationService) : base(unitOfWork)
        {
            _questionService = questionService;
            _questionTranslationService = quesyTranslationService;
        }
    }
}
