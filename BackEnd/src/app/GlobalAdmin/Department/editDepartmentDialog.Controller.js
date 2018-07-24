(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editDepartmentDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'DepartmentResource', 'ToastService',
            'DepartmentByIdPrepService', editDepartmentDialogController])

    function editDepartmentDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, DepartmentResource, ToastService, DepartmentByIdPrepService) {
        blockUI.start("Loading..."); 
        
        var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Department = DepartmentByIdPrepService; 
        vm.Close = function () {
            $state.go('Department');
        }
        vm.UpdateDepartment = function () { 
            blockUI.start("Loading..."); 
            
            var updateObj = new DepartmentResource();
            updateObj.DepartmentId = vm.Department.departmentId;
            updateObj.titleDictionary = vm.Department.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
 
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
