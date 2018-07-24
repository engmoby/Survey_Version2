(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'UserTypeResource', 'ToastService', '$rootScope', createDialogController])

    function createDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, UserTypeResource,
        ToastService, $rootScope) {
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('usertype');
		} 
		 
        vm.AddNewType = function () {
            blockUI.start("Saving..."); 
            var newObj = new UserTypeResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('usertype');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
  
	}	
}());
