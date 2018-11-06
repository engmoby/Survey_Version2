(function () {
    angular
      .module('home') 
        .factory('ServiceResource', ['$resource', 'appCONSTANTS', ServiceResource])
     
    function ServiceResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Services/', {}, {
            getAllServices: { method: 'GET', url: appCONSTANTS.API_URL + 'Services/GetAllServices/:ProjectId', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Services/EditService', useToken: true },
            getService: { method: 'GET', url: appCONSTANTS.API_URL + 'Services/GetServiceById/:ServiceId', useToken: true }
        })
    } 

}());
