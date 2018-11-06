(function () {
    angular
      .module('home')
        .factory('CategoryResource', ['$resource', 'appCONSTANTS', CategoryResource]) 

    function CategoryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Category/', {}, {
            getAllCategorys: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetAllCategories', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Category/EditCategory', useToken: true },
            getCategory: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetCategoryById/:CategoryId', useToken: true }
        })
    } 

}());
