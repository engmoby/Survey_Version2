using System;
using System.Collections.Generic;

namespace OperationSurvey.API.Models
{
    public class AnswerModel
    { 
        public DateTime Date { get; set; } 

        public long BranchId { get; set; } 
         
        public List<QuestionModel> QuestionModel { get; set; }
    }
}
