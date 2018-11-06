using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IVendorService : IService<Vendor>
    {
         PagedResultsDto GetAllVendors(int page, int pageSize, int tenantId);
    }
}
