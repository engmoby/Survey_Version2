using System.Linq;
using AutoMapper;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.BLL.Services.Interfaces;
using OperationSurvey.Common;
using OperationSurvey.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using OperationSurvey.DAL.Entities.Model;
using System.Collections.Generic;

namespace OperationSurvey.BLL.Services
{
    public class AnswerFacade : BaseFacade, IAnswerFacade
    {
        private readonly IAnswerService _answerService;
        private readonly IAnswerDetailsService _answerDetailsService;

        public AnswerFacade(IAnswerService answerService, IUnitOfWorkAsync unitOfWork, IAnswerDetailsService answerDetailsService) : base(unitOfWork)
        {
            _answerService = answerService;
            _answerDetailsService = answerDetailsService;
        }

        public AnswerFacade(IAnswerService answerService, IAnswerDetailsService answerDetailsService)
        {
            _answerService = answerService;
            _answerDetailsService = answerDetailsService;
        }

        public AnswerDto GetAnswer(long answerId, int tenantId)
        {
            return Mapper.Map<AnswerDto>(_answerService.Query(x => x.AnswerId == answerId && x.TenantId == tenantId).Select().FirstOrDefault());
        }

       public AnswerDto CreateAnswer(AnswerDto userDto, int userId, int tenantId)
        //public AnswerDto CreateAnswer(List<QuestionDto> questionanswerDto, int userId, int tenantId)
        {
            var answerDto= new AnswerDto();

            var answerObj = Mapper.Map<Answer>(answerDto);

            foreach (var answerfor in answerDto.AnswersdDetailses)
            { 
                answerObj.AnswersdDetailses.Add(new AnswerDetails
                {
                    Date = answerDto.Date,
                   // Value = answerfor.Value,
                    Note = answerfor.Note,
                    TenantId = tenantId
                });
            }


            answerObj.UserId = userId;
            answerObj.BranchId = answerDto.BranchId;
            answerObj.Date = answerDto.Date;
            answerObj.CreationTime = Strings.CurrentDateTime;
            answerObj.CreatorUserId = userId;
            answerObj.TenantId = tenantId;

            _answerDetailsService.InsertRange(answerObj.AnswersdDetailses);
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
