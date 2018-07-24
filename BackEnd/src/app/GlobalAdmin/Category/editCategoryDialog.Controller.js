(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editCategoryDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate', 'CategoryResource', 'ToastService',
            'CategoryByIdPrepService', editCategoryDialogController])

    function editCategoryDialogController($scope, $http, $state, appCONSTANTS, $translate, CategoryResource, ToastService, CategoryByIdPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Category = CategoryByIdPrepService; 
        vm.Close = function () {
            $state.go('Department');
        }
        vm.UpdateCategory = function () { 
            var updateObj = new CategoryResource();
            updateObj.CategoryId = vm.Category.categoryId;
            updateObj.titleDictionary = vm.Category.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
 
                    $state.go('Department');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
	}	
}());
