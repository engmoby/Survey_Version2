(function() {
    angular
      .module('home') 
      .factory('ProductResource', ['$resource', 'appCONSTANTS', ProductResource])
      .factory('AddProductResource', ['$resource', 'appCONSTANTS', AddProductResource]);
   
    function ProductResource($resource, appCONSTANTS) {  
      return $resource(appCONSTANTS.API_URL + 'Products/GetAllProducts', {}, { 
        getProductsList: { method: 'GET', params:{lang:'@lang'} }
})
}

function AddProductResource($resource, appCONSTANTS) {  
  return $resource(appCONSTANTS.API_URL + 'Products/AddProductRequest', {}, { 
    addRequest: { method: 'POST'}, 
})
}
  }());
  