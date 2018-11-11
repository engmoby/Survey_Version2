(function () {
    'use strict';

    angular
        .module('home')
        .controller('createDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'VendorResource', 'ToastService',  createDialogController])

    function createDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, VendorResource,
        ToastService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        
       
    vm.close = function () {
        $state.go('Vendor');
    }

    vm.AddNewVendor = function () {
        blockUI.start("Saving...");
        
        var newObj = new VendorResource();
        newObj.titleDictionary = vm.titleDictionary;
        newObj.IsDeleted = false; 
        newObj.phone = vm.phone; 
        newObj.website = vm.website; 
        newObj.address = vm.address; 

        newObj.$create().then(
            function (data, status) {
                blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                $state.go('Vendor');

            },
            function (data, status) {
                ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
            }
        );
    }
 } 
}());
