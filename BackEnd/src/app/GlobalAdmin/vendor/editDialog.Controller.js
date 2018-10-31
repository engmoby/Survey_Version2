(function () {
    'use strict';

    angular
        .module('home')
        .controller('editDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'categoryTypeResource', 'ToastService',
            'VendorByIdPrepService', 'VendorResource', editDialogController])

    function editDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource, ToastService,
        VendorByIdPrepService, VendorResource) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendor = VendorByIdPrepService;
        console.log(vm.Vendor);

        vm.Close = function () {
            $state.go('Vendor');
        }
        vm.UpdateVendor = function () {
            debugger
            blockUI.start("Saving...");
            var updateObj = new VendorResource();
            updateObj.vendorId = vm.Vendor.vendorId;
            updateObj.titleDictionary = vm.Vendor.titleDictionary;
            updateObj.phone = vm.Vendor.phone;
            updateObj.Website = vm.Vendor.website;
            updateObj.address = vm.Vendor.address;
            debugger;
            updateObj.$update().then(
                function (data, status) {
                    debugger;
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Vendor');

                },
                function (data, status) {
                    debugger;
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
