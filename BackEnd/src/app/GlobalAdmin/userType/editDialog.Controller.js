(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'UserTypeResource', 'ToastService',
            'UserTypeByIdPrepService', editDialogController])

    function editDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, UserTypeResource, ToastService, UserTypeByIdPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.usertype = UserTypeByIdPrepService;
        console.log(vm.product);
        vm.Close = function () {
            $state.go('usertype');
        }
		vm.UpdateType= function () {
            blockUI.start("Saving..."); 
            var updateObj = new UserTypeResource();
            updateObj.UserTypeId = vm.usertype.userTypeId;
            updateObj.titleDictionary = vm.usertype.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('usertype');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
	}	
}());
