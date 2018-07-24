(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createCategoryDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate',
            'CategoryResource', 'ToastService', '$rootScope', 'DepartmentByIdPrepService', createCategoryDialogController])

    function createCategoryDialogController($scope, $http, $state, appCONSTANTS, $translate, CategoryResource,
        ToastService, $rootScope, DepartmentByIdPrepService) {
		var vm = this;
		vm.Department = DepartmentByIdPrepService;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
		    $state.go('Department');
		} 
		 
		vm.AddNewCategory = function () {
            var newObj = new CategoryResource();
		    newObj.DepartmentId = vm.Department.departmentId;
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Department');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
  
	}	
}());
