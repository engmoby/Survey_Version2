using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface ICategoryTypeTranslationService:IService<CategoryTypeTranslation>
    {
        bool CheckNameExist(string objName, string language, long recordId, long tenantId);
    }
}
