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
    public class QuestionTranslationService : Service<QuestionTranslation>, IQuestionTranslationService
    {
        public QuestionTranslationService(IRepositoryAsync<QuestionTranslation> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllQuestions()
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Question.IsDeleted ).Select(x => x.Question).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Question.IsDeleted).Select().ToList();
            var Questions = _repository.Query(x => !x.Question.IsDeleted ).Select(x => x.Question)
                .OrderBy(x => x.QuestionId).ToList();
            results.Data = Mapper.Map<List<Question>, List<QuestionDto>>(Questions);
            return results;
        }
        public PagedResultsDto GetAllQuestionsTranslation(string language)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Question).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Questions = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Question)
                .OrderBy(x => x.QuestionId).ToList();
            results.Data = Mapper.Map<List<Question>, List<QuestionDto>>(Questions, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Question Question in src)
                        {
                            Question.QuestionTranslations = Question.QuestionTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public PagedResultsDto GetQuestionTranslationByQuestionId(string language,long QuestionId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower()  && x.QuestionId == QuestionId).Select(x => x.Question).Count(x => !x.IsDeleted);
            var aaax = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Questions = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower() && x.QuestionId == QuestionId).Select(x => x.Question)
                .OrderBy(x => x.QuestionId).ToList();
            results.Data = Mapper.Map<List<Question>, List<QuestionDto>>(Questions, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Question Question in src)
                        {
                            Question.QuestionTranslations = Question.QuestionTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }
        public QuestionDto QuestionTranslationByQuestionId(string language, long QuestionId)
        {
            var aaax = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower()).Select().ToList();
            var Questions = _repository.Query(x => !x.Question.IsDeleted && x.Language.ToLower() == language.ToLower() && x.QuestionId == QuestionId).Select(x => x.Question)
                .OrderBy(x => x.QuestionId).FirstOrDefault();
            var results = Mapper.Map<Question, QuestionDto>(Questions, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {

                        src.QuestionTranslations = src.QuestionTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();


                    }
                );
            });
            return results;
        }


    }
}