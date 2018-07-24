﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Repository.Pattern.Repositories;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.DataServices
{
    public class BackgroundService : Service<Background>, IBackgroundService 
    {
        public BackgroundService(IRepositoryAsync<Background> repository) : base(repository)
        {

        }
        public PagedResultsDto GetAllBackgrounds(int page, int pageSize, long userId)
        {
            var query = Queryable().Where(x => x.IsActive || x.UserId == userId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            results.Data = Mapper.Map<List<Background>, List<BackgroundDto>>(query.OrderBy(x => x.BackgroundId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());

            return results;
        }
    }
}
