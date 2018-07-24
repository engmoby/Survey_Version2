(function () {
    angular
      .module('home')
      .factory('getProductResource', ['$resource', 'appCONSTANTS', getProductResource])
      .factory('EditResource', ['$resource', 'appCONSTANTS', EditResource])
      .factory('CreateProductResource', ['$resource', 'appCONSTANTS', CreateProductResource]) ;

    function getProductResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Products/GetProduct/:productId', {}, {
            getProductInfo: { method: 'GET', useToken: true, params: { lang: '@lang' } }
        })
    }

    function CreateProductResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Products/CreateProduct', {}, {
            addProduct: { method: 'POST', useToken: true },
        })
    }
 
    function EditResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Products/EditProduct', {}, {
            updateProduct: { method: 'POST', useToken: true },
         })
    }
            
}());
