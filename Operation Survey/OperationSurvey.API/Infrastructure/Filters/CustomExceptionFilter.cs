using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Resources;
using System.Threading;
using System.Web;
using System.Web.Http.Filters;
using Elmah;
using Exceptions = OperationSurvey.Common.CustomException;

namespace OperationSurvey.API.Infrastructure.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            var exception = context.Exception;
            ErrorSignal.FromCurrentContext().Raise(exception);

            if (exception is Exceptions.ValidationException)
            {
                context.Response = context.Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetResourceMessage(((Exceptions.ApplicationException)exception).ErrorCodeMessageKey));

            }
            else if (exception is Exceptions.NotFoundException)
            {
                context.Response = context.Request.CreateErrorResponse(HttpStatusCode.NotFound, GetResourceMessage(((Exceptions.ApplicationException)exception).ErrorCodeMessageKey));

            }
            else
            {
                //TODO:Localize the message below
                context.Response = context.Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Sorry Something went wrong");
            }
        }
        private ResourceManager _resourceManager;
        protected string GetResourceMessage(string key)
        {
            if (_resourceManager == null)
            {
                _resourceManager = new ResourceManager("OperationSurvey.Resources.Resource", typeof(OperationSurvey.Resources.Resource).Assembly);
            }

            return _resourceManager.GetString(key);
        }
    }
}