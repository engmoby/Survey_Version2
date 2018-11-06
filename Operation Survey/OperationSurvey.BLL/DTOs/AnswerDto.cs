using System;
using System.Collections.Generic;

namespace OperationSurvey.BLL.DTOs
{
    public class AnswerDto
    {
        public long AnswerId { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }

        public long BranchId { get; set; }
        //public BranchDto Branch { get; set; }

        public long UserId { get; set; }
        public UserDto User { get; set; }
        //public QuestionDto QuestionModel { get; set; }
        public long QuestionId { get; set; }
        public long ProjectId { get; set; }

        public ICollection<AnswerDetailsDto> AnswerDetails { get; set; }
        //public List<string> AnswerDetails { get; set; }

        public int TenantId { get; set; }
        public string Note { get; set; }

    }
}

