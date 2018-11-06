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
    public class QuestionTypeFacade : BaseFacade, IQuestionTypeFacade
    {
        private readonly IQuestionTypeService _questionTypeService;
        private readonly IQuestionTypeTranslationService _questionTypeTranslationService;

        public QuestionTypeFacade(IQuestionTypeService questionTypeService, IUnitOfWorkAsync unitOfWork, IQuestionTypeTranslationService questionTypeTranslationService) : base(unitOfWork)
        {
            _questionTypeService = questionTypeService;
            _questionTypeTranslationService = questionTypeTranslationService;
        }
    }
}
