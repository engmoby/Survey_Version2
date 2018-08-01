using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using OperationSurvey.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using OperationSurvey.DAL.Entities.Model;

namespace OperationSurvey.BLL.Services
{
    public class AnswerFacade : BaseFacade, IAnswerFacade
    {
        private readonly IAnswerService _answerService; 

        public AnswerFacade(IAnswerService answerService, IUnitOfWorkAsync unitOfWork ) : base(unitOfWork)
        {
            _answerService = answerService; 
        }

        public AnswerFacade(IAnswerService answerService  )
        {
            _answerService = answerService; 
        }

        public AnswerDto GetAnswer(long answerId, int tenantId)
        {
            return Mapper.Map<AnswerDto>(_answerService.Query(x => x.AnswerId == answerId && x.TenantId == tenantId).Select().FirstOrDefault());
        }

        public AnswerDto CreateAnswer(AnswerDto answerDto, int userId, int tenantId)
        {
        
            var answerObj = Mapper.Map<Answer>(answerDto); 

            answerObj.BranchId = answerDto.BranchId;
            answerObj.Date = answerDto.Date;
            answerObj.CreationTime = Strings.CurrentDateTime;
            answerObj.CreatorUserId = userId;
            answerObj.TenantId = tenantId; 
            _answerService.Insert(answerObj);
            SaveChanges();
            return answerDto;
        }
         

        public PagedResultsDto GetAllAnswers(int page, int pageSize, int tenantId)
        {
            return _answerService.GetAllAnswers(page, pageSize, tenantId);
        }

    }
}
