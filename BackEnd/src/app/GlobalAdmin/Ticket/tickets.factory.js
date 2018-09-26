(function () {
    angular
        .module('home')
        .factory('TicketResource', ['$resource', 'appCONSTANTS', TicketResource])

    function TicketResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Tickets/', {}, {
            create: { method: 'POST', useToken: true },
            getTickets: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/', useToken: true },
            getTicket: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId', useToken: true },
            assigned: { method: 'POST', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Assigned/:assignedUserId', useToken: true },
            approve: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Approve', useToken: true },
            close: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Closed', useToken: true },
            reject: { method: 'POST', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Reject', useToken: true }
        })
    }

}());
