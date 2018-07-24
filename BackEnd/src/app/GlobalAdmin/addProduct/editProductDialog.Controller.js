(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editProductDialogController', ['$scope','$http', '$state','appCONSTANTS','$translate', 'EditResource','ToastService','EditProductPrepService',  editProductDialogController])

	function editProductDialogController($scope,$http, $state , appCONSTANTS, $translate, EditResource,ToastService, EditProductPrepService){
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.product = EditProductPrepService;
        console.log(vm.product);
		vm.close = function(){
			$state.go('productList');
		}
		vm.Updateproduct = function () {
            debugger;
            var updateProduct = new EditResource();

            updateProduct.productId = vm.product.productId;
            updateProduct.titleDictionary = vm.product.titleDictionary;
            updateProduct.ApiUrl = vm.product.apiUrl;  
            updateProduct.$updateProduct().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('productEditSuccess'), "success");
 
                  $state.go('productList');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
	}	
}());
