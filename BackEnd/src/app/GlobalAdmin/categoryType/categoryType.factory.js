(function () {
    angular
      .module('home')
        .factory('UserTypeResource', ['$resource', 'appCONSTANTS', UserTypeResource])
        .factory('categoryTypeResource', ['$resource', 'appCONSTANTS', categoryTypeResource])
        //.factory('getUserTypeResource', ['$resource', 'appCONSTANTS', getUserTypeResource])
        //.factory('createUserTypeResource', ['$resource', 'appCONSTANTS', createUserTypeResource])
        //.factory('editUserTypeResource', ['$resource', 'appCONSTANTS', editUserTypeResource])

    function UserTypeResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'UserTypes/', {}, {
            getAllUserTypes: { method: 'GET', url: appCONSTANTS.API_URL + 'UserTypes/GetAllUserTypes', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'UserTypes/EditUserType', useToken: true },
            getUserType: { method: 'GET', url: appCONSTANTS.API_URL + 'UserTypes/GetUserTypeById/:UserTypeId', useToken: true }
        })
    }
    function categoryTypeResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'CategoriesTypes/', {}, {
            getAllcategoryTypes: { method: 'GET', url: appCONSTANTS.API_URL + 'CategoriesTypes/', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'CategoriesTypes/:categoryTypeId', useToken: true },
            getcategoryType: { method: 'GET', url: appCONSTANTS.API_URL + 'CategoriesTypes/:categoryTypeId', useToken: true }
        })
    }
    //function UserTypeResource($resource, appCONSTANTS) {
    //    return $resource(appCONSTANTS.API_URL + 'UserTypes/GetAllUserTypes', {}, {
    //        getAllUserTypes: { method: 'GET', useToken: true, params: { lang: '@lang' } }
    //    })
    //}

    //function getUserTypeResource($resource, appCONSTANTS) {
    //    return $resource(appCONSTANTS.API_URL + 'UserTypes/GetUserTypeById/:userTypeId', {}, {
    //        getUserTypeInfo: { method: 'GET', useToken: true, params: { lang: '@lang' } }
    //    })
    //}

    //function createUserTypeResource($resource, appCONSTANTS) {
    //    return $resource(appCONSTANTS.API_URL + 'UserTypes/EditUserType', {}, {
    //        addUserType: { method: 'POST', useToken: true },
    //    })
    //}

    //function editUserTypeResource($resource, appCONSTANTS) {
    //    return $resource(appCONSTANTS.API_URL + 'UserTypes/EditUserType', {}, {
    //        updateUserType: { method: 'POST', useToken: true },
    //    })
    //}

}());
