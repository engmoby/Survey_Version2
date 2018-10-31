(function () {
    angular
      .module('home') 
        .factory('ProjectResource', ['$resource', 'appCONSTANTS', ProjectResource])
     
    function ProjectResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Projects/', {}, {
            getAllProjects: { method: 'GET', url: appCONSTANTS.API_URL + 'Projects/GetAllProjects', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Projects/EditProject/', useToken: true },
            getProject: { method: 'GET', url: appCONSTANTS.API_URL + 'Projects/GetProjectById/:ProjectId', useToken: true }
        })
    } 

}());
