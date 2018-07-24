using System.IO;

namespace OperationSurvey.BLL.Services.FormToMail
{
    public interface IFormToMail
    {
        void SendMail(string subj, string message,string mailTo);
    }
}
