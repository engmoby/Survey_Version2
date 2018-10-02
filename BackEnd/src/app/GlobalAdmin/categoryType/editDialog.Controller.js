(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'categoryTypeResource', 'ToastService',
            'categoryTypeByIdPrepService', editDialogController])

    function editDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource, ToastService, categoryTypeByIdPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.categoryType = categoryTypeByIdPrepService;
        console.log(vm.product);
        vm.Close = function () {
            $state.go('categoryType');
        }
		vm.UpdateType= function () {
            blockUI.start("Saving..."); 
            var updateObj = new categoryTypeResource();
            updateObj.categoryTypeId = vm.categoryType.categoryTypeId;
            updateObj.titleDictionary = vm.categoryType.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('categoryType');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
	}	
}());
