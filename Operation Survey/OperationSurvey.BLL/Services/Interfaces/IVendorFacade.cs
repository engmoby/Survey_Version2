using OperationSurvey.BLL.DTOs;

namespace OperationSurvey.BLL.Services.Interfaces
{
    public interface IVendorFacade
    { 
        VendorDto GetVendor(long userId, int tenantId); 
        VendorDto CreateVendor(VendorDto userDto, int userId, int tenantId);
        VendorDto EditVendor(VendorDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllVendors(int page, int pageSize, int tenantId);
        VendorDto GetAllVendorByUserId(long userId);
    }
}
