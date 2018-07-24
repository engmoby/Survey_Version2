(function () {
    angular
      .module('home')
        .factory('DepartmentResource', ['$resource', 'appCONSTANTS', DepartmentResource]) 

    function DepartmentResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Departments/', {}, {
            getAllDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Departments/GetAllDepartments', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Departments/EditDepartment', useToken: true },
            getDepartment: { method: 'GET', url: appCONSTANTS.API_URL + 'Departments/GetDepartmentById/:DepartmentId', useToken: true }
        })
    } 

}());
