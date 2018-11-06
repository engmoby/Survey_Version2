(function () {
    angular
      .module('home') 
        .factory('VendorResource', ['$resource', 'appCONSTANTS', VendorResource])
     
    function VendorResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Vendors/', {}, {
            getAllVendors: { method: 'GET', url: appCONSTANTS.API_URL + 'Vendors/GetAllVendors', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Vendors/EditVendor', useToken: true },
            getVendor: { method: 'GET', url: appCONSTANTS.API_URL + 'Vendors/GetVendorById/:VendorId', useToken: true }
        })
    } 

}());
