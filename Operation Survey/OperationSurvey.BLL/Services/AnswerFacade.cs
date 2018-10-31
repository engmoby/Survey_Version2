using System;
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
        public AnswerDto CheckAnswer(long projectId, int tenantId)
        {
            return Mapper.Map<AnswerDto>(_answerService.Query(x => x.ProjectId == projectId && x.TenantId == tenantId).Select().FirstOrDefault());
        }
        public void CreateAnswer(List<AnswerDto> answerDto, int userId, int tenantId)
        //public AnswerDto CreateAnswer(List<QuestionDto> questionanswerDto, int userId, int tenantId)
        {
            //var answerDto= new AnswerDto();

            var answerObj = Mapper.Map<List<Answer>>(answerDto);

            foreach (var answer in answerObj)
            {
                answer.CreationTime = DateTime.Now;
                answer.TenantId = tenantId;
                answer.UserId = userId;
                answer.CreatorUserId = userId;

                _answerDetailsService.InsertRange(answer.AnswerDetails);
                _answerService.Insert(answer);
            }
            //foreach (var answerfor in answerDto.AnswersdDetailses)
            //{ 
            //    answerObj.AnswersdDetailses.Add(new AnswerDetails
            //    {
            //        Date = answerDto.Date,
            //       // Value = answerfor.Value,
            //        Note = answerfor.Note,
            //        TenantId = tenantId
            //    });
            //}


            //answerObj.UserId = userId;
            //answerObj.BranchId = answerDto.BranchId;
            //answerObj.Date = answerDto.Date;
            //answerObj.CreationTime = Strings.CurrentDateTime;
            //answerObj.CreatorUserId = userId;
            //answerObj.TenantId = tenantId;

            //_answerDetailsService.InsertRange(answerObj.AnswerDetailses);
            //_answerService.Insert(answerObj);
            SaveChanges();

        }


        public PagedResultsDto GetAllAnswers(int page, int pageSize, int tenantId)
        {
            return _answerService.GetAllAnswers(page, pageSize, tenantId);
        }

        public PagedResultsDto GetAnswers(int page, int pageSize, long questionId, long countryId, long regionId, long cityId, long areaId, long branchId,
            string from, string to)
        {
            DateTime fromDateTime = !String.IsNullOrEmpty(from) ? DateTime.Parse(from) : DateTime.MinValue;
            DateTime toDateTime = !String.IsNullOrEmpty(to) ? DateTime.Parse(to) : DateTime.MaxValue;
            var query = _answerService.Query(x => x.QuestionId == questionId && x.Date >= fromDateTime &&
                                                  x.Date <= toDateTime
                                                  && (countryId <= 0 || x.Branch.Area.City.Region.CountryId == countryId)
                                                  && (regionId <= 0 || x.Branch.Area.City.RegionId == regionId)
                                                  && (cityId <= 0 || x.Branch.Area.CityId == cityId)
                                                  && (areaId <= 0 || x.Branch.AreaId == areaId)
                                                  && (branchId <= 0 || x.BranchId == branchId)).Select();
            PagedResultsDto result = new PagedResultsDto();
            result.TotalCount = query.Count();
            result.Data = Mapper.Map<List<AnswerDto>>(query.Skip((page - 1) * pageSize).Take(pageSize).ToList());
            return result;
        }

        public PagedResultsDto GetAnswerByProjectId(int page, int pageSize, long projectId, long questionId)
        { 
            var query = _answerService.Query(x => x.QuestionId == questionId && x.ProjectId == projectId).Select();
            PagedResultsDto result = new PagedResultsDto();
            result.TotalCount = query.Count();
            result.Data = Mapper.Map<List<AnswerDto>>(query.Skip((page - 1) * pageSize).Take(pageSize).ToList());
            return result;
        }
    }
}
