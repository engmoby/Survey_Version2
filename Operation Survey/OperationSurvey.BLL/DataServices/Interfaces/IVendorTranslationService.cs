using OperationSurvey.BLL.DTOs;
using OperationSurvey.DAL.Entities.Model;
using Service.Pattern;

namespace OperationSurvey.BLL.DataServices.Interfaces
{
    public interface IVendorTranslationService : IService<VendorTranslation>
    {
        PagedResultsDto GetAllVendors();
        PagedResultsDto GetAllVendorsTranslation(string language);
        PagedResultsDto GetVendorTranslationByVendorId(string language, long VendorId);
        VendorDto VendorTranslationByVendorId(string language, long VendorId);
        bool CheckNameExist(string objName, string language, long recordId, long tenantId);
    }
}
