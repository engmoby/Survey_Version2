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
    public class QuestionDetailsFacade : BaseFacade, IQuestionDetailsFacade
    {
        private readonly IQuestionDetailsService _questionDetailsService;
        private readonly IQuestionDetailsTranslationService _questionDetailsTranslationService;

        public QuestionDetailsFacade(IQuestionDetailsService questionDetailsService, IUnitOfWorkAsync unitOfWork, IQuestionDetailsTranslationService questionDetailsTranslationService) : base(unitOfWork)
        {
            _questionDetailsService = questionDetailsService;
            _questionDetailsTranslationService = questionDetailsTranslationService;
        }
    }
}
