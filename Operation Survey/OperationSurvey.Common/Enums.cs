﻿namespace OperationSurvey.Common
{
    public class Enums
    {
        public enum RoleType
        {
            Client,
            GlobalAdmin
        }

        public enum SupportedLanguage
        {
            areg,
            enus,
            engb
        }

        public enum QuestionType
        {
            Checkbox,
            Rate,
            LikeDislike
        }

        public enum TicketStatus
        {
            Pending,
            Assigned,
            InProgress,
            Closed,
            Rejected
        }
    }
}
