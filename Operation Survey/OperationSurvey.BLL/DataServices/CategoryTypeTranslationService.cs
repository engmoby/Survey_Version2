using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices
{
    public class CategoryTypeTranslationService:Service<CategoryTypeTranslation>,ICategoryTypeTranslationService
    {
        public CategoryTypeTranslationService(IRepositoryAsync<CategoryTypeTranslation> repository):base(repository)
        {
            
        }
        public bool CheckNameExist(string objName, string language, long recordId, long tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.CategoryTypeId != recordId && x.CategoryType.TenantId == tenantId && !x.CategoryType.IsDeleted);
        }
    }
}
