﻿using System;
using System.Collections.Generic;
using System.Linq;
using OperationSurvey.BLL.DataServices.Interfaces;
using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;
using AutoMapper;

namespace OperationSurvey.BLL.DataServices
{
    public class UserService : Service<User>, IUserService
    {
        public UserService(IRepositoryAsync<User> repository) : base(repository)
        {
            _repository = repository;
        }
        public User ValidateUser(string email, string password)
        {
           var getUser=  _repository.Query(u => u.Email.ToLower() == email.ToLower() && u.Password == password && !u.IsDeleted   ).Select().FirstOrDefault();
            return getUser;
        }
        public User CheckUserIsDeleted(string email, string password)
        {
            var getUser = _repository.Query(u => u.Email.ToLower() == email.ToLower() && u.Password == password).Select().FirstOrDefault();
            return getUser;
        }
        public bool CheckEmailDuplicated(string email, int tenantId)
        {
            return _repository.Queryable().Any(u => u.Email.ToLower() == email.ToLower() && !u.IsDeleted && u.TenantId== tenantId);
        }
        public bool CheckPhoneDuplicated(string phone, int tenantId)
        {
            return _repository.Queryable().Any(u => u.Phone == phone.ToLower() && !u.IsDeleted && u.TenantId == tenantId);
        }
        public PagedResultsDto GetAllUsers(int page, int pageSize, int tenantId)
        {
            var query = Queryable().Where(x => x.IsActive && (x.TenantId == tenantId) && !x.IsStatic).OrderBy(x => x.UserId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Count(); //_repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted);
            var modelReturn = query.OrderBy(x => x.UserId).Skip((page - 1) * pageSize).Take(pageSize).ToList();

            var userDto = new List<UserDto>();
            foreach (var user in modelReturn)
            {
                userDto.Add(new UserDto
                {
                    // UserRoles = Mapper.Map<List<UserRole>, List<UserRoleDto>>(user.UserRoles as List<UserRole>),
                    UserTypeId = (int)user.UserTypeId,
                    UserId = user.UserId,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Phone = user.Phone,
                });
            }
            //results.Data = Mapper.Map<List<User>, List<UserDto>>(modelReturn); 
            results.Data = userDto;
            return results;
        }
        public User GetAdminByAccountId(Guid userAccountId)
        {
            return _repository.Query(x => x.UserAccountId == userAccountId).Select().FirstOrDefault();
        }

        public PagedResultsDto GetAllUsersByTypeId(int tenantId,long userTypeId)
        {
            var query = Queryable().Where(x => x.IsActive && (x.TenantId == tenantId) && !x.IsStatic && x.UserTypeId == userTypeId).OrderBy(x => x.UserId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Count(); //_repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted);
            var modelReturn = query.OrderBy(x => x.UserId).ToList();
            results.Data = Mapper.Map<List<User>, List<UserNameDto>>(modelReturn); 
            return results;
        }
    }
}