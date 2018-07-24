(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('productDialogController', ['$scope','$http','$state','appCONSTANTS','$translate' , 'CreateProductResource','ToastService','$rootScope',  productDialogController ])

	function productDialogController($scope,$http , $state , appCONSTANTS, $translate , CreateProductResource,ToastService,$rootScope){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('productList');
		} 
		 
        vm.AddNewProduct = function () {
            var newProduct = new CreateProductResource();
            newProduct.titleDictionary = vm.titleDictionary;
            newProduct.ApiUrl = vm.apiUrl; 
            newProduct.IsDeleted = false; 
            newProduct.IsActive =true;
            newProduct.$addProduct().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('productAddSuccess'), "success"); 
                    $state.go('productList');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
  
	}	
}());
