﻿using System;
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
    public class RegionTranslationService:Service<RegionTranslation>,IRegionTranslationService
    {
        public RegionTranslationService(IRepositoryAsync<RegionTranslation> repository):base(repository)
        {

        }
        public bool CheckNameExist(string objName, string language, long recordId, long tenantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.RegionId != recordId && x.Region.Country.TenantId == tenantId && !x.Region.IsDeleted);
        }
    }
}
