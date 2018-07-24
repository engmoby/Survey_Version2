(function () {
    angular
      .module('home')
      .factory('ProductResource', ['$resource', 'appCONSTANTS', ProductResource])
      .factory('AddProductResource', ['$resource', 'appCONSTANTS', AddProductResource])
      .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])
      .factory('AddUserResource', ['$resource', 'appCONSTANTS', AddUserResource])
      .factory('UserProductResource', ['$resource', 'appCONSTANTS', UserProductResource])
      .factory('GetUserResource', ['$resource', 'appCONSTANTS', GetUserResource])
      .factory('GetBackageResource', ['$resource', 'appCONSTANTS', GetBackageResource]);

    function ProductResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Products/GetAllProducts', {}, {
            getProductsList: { method: 'GET',  useToken: true,params: { lang: '@lang' } }
        })
    }

    function AddProductResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Products/AddProductRequest', {}, {
            addRequest: { method: 'POST', useToken: true },
        })
    }

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/GetAllUsers', {}, {
          getAllUsers: { method: 'GET', useToken: true, params: { lang: '@lang' }  }
        })
    }
    function AddUserResource($resource, appCONSTANTS) {
              return $resource(appCONSTANTS.API_URL + 'Users/', {}, { 
                create: { method: 'POST',useToken: true}
              })
            }

            function UserProductResource($resource, appCONSTANTS) {
                return $resource(appCONSTANTS.API_URL + 'Products/GetUserProductByUserId/:UserId', {}, {
                    getUserProductList: { method: 'GET', useToken: true, params: { lang: '@lang' } }
                })
            }
            
            function GetUserResource($resource, appCONSTANTS) {
                return $resource(appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', {}, {
                    getUserInfo: { method: 'GET', useToken: true, params: { lang: '@lang' } }
                })
            }
            
            function GetBackageResource($resource, appCONSTANTS) {
                return $resource(appCONSTANTS.API_URL + 'Products/GetProductByBackageId/:backageGuid', {}, {
                    getBackageInfo: { method: 'GET', useToken: true, params: { lang: '@lang' } }
                })
            }
            
}());
