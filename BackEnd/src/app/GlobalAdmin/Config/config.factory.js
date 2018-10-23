(function () {
    angular
        .module('home')
        .factory('configResource', ['$resource', 'appCONSTANTS', configResource])

    function configResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'TicketScheduler/', {}, {
            getAllTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/', useToken: true, isArray:true },
            createTicketScheduler: { method: 'POST', useToken: true },
            updateTicketScheduler: { method: 'PUT', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id', useToken: true },
            getTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id', useToken: true },
            disableTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id/Disable', useToken: true },
            enableTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id/Enable', useToken: true },
        })
    }

}());
