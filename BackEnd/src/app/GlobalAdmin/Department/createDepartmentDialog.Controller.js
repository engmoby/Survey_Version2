(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createDepartmentDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'DepartmentResource', 'ToastService', '$rootScope', createDepartmentDialogController])

    function createDepartmentDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, DepartmentResource,
        ToastService, $rootScope) {
        blockUI.start("Loading..."); 
            
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Department');
		} 
		 
		vm.AddNewDepartment = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new DepartmentResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                  blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Department');

                },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();  
	}	
}());
