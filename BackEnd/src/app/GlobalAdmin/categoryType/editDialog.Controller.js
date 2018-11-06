(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'categoryTypeResource', 'ToastService',
            'categoryTypeByIdPrepService','allEmailsPrepService', editDialogController])

    function editDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource, ToastService,
         categoryTypeByIdPrepService,allEmailsPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.categoryType = categoryTypeByIdPrepService;
        vm.users = allEmailsPrepService;
        vm.categoryType.emails = vm.categoryType.emails!=null?vm.categoryType.emails.split(';'):vm.categoryType.emails
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
            
            updateObj.type =  vm.categoryType.type; 
            updateObj.time =  vm.categoryType.time; 
            updateObj.emails =  vm.categoryType.emails.toString().replace(new RegExp(',', 'g'), ';');
            updateObj.body =  vm.categoryType.body;
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
        vm.validateEmail = function () {
            var RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var valid = true;
            vm.categoryType.emails.forEach(function (element) {
                valid = RegExp.test(element);
                if (!valid)
                    return valid;

            }, this);
            return valid
        }
	}	
}());
