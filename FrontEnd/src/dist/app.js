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
  (function() {
    'use strict';

    angular
        .module('home')
        .controller('productController', ['$rootScope', '$scope','$filter','$translate','$state','ProductResource','AddProductResource','$localStorage','authorizationService','appCONSTANTS','ToastService',productController]);


                  function productController($rootScope, $scope,$filter,$translate,$state,ProductResource,AddProductResource, $localStorage,authorizationService,appCONSTANTS,ToastService) {

               $scope.productList = [];
        $scope.checkradioasd=-1;
        $scope.productDetails="";
        $scope.UserId = JSON.parse(localStorage.getItem("data"));

                refreshBackgrounds();
        function refreshBackgrounds(){
			var k = ProductResource.getProductsList().$promise.then(function(results) {
                $scope.productList = results 
                console.log($scope.productList.results)
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

                      $scope.radioProductClick = function (product) { 
            $scope.checkradioasd = product.productId;
            var indexRate = $scope.productList.results.indexOf($filter('filter')($scope.productList.results, { 'productId': product.productId }, true)[0]);
            $scope.productDetails = $scope.productList.results[indexRate];  
        };

		$scope.AddProductRequest = function(){
			var newRequest = new AddProductResource();
            newRequest.ProductId = $scope.productDetails.productId;
            newRequest.UserLimit = $scope.UserLimit; 
            newRequest.UserId = $scope.UserId; 
            newRequest.TotalPrice = $scope.totalPrice;  
            newRequest.$addRequest().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp","Success","success");

				                 },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data,"error");
                }
            );
        }

                $scope.totalPrice = 0; 
        $scope.getTotal = function () {
            $scope.totalPrice = 10; 

                    $scope.totalPrice = $scope.UserLimit*$scope.productDetails.price;

                }
	}

}())