(function () {
    angular
        .module('home')
        .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/', {}, {
            getAllUsers: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllUsers', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true },
            getUserLimit: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetMaxAndConUsers', useToken: true },
            getUserDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Departments', useToken: true },
            getUserArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Area', useToken: true },
            getUserByTypeName: { method: 'GET', url: appCONSTANTS.API_URL + 'Users', useToken: true },
            GetAllUsersWhoAnswer: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllUsersWhoAnswer',isArray:true , useToken: true },
            GetAllEmails: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Emails',isArray:true , useToken: true }
        })
    }

}());
