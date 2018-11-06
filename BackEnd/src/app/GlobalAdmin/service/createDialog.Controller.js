(function () {
    'use strict';

    angular
        .module('home')
        .controller('createDialogServiceController', ['$scope', '$stateParams', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'ServiceResource', 'ToastService', 'VendorPrepService', 'AssetPrepService', createDialogServiceController])

    function createDialogServiceController($scope, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate, ServiceResource,
        ToastService, VendorPrepService, AssetPrepService) {
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results;
        vm.Assets = AssetPrepService.results;
        vm.percentage = 0;
        vm.selectedVendor = null;
        vm.selectedAsset = null;
        vm.close = function () {
            $state.go('Service', { projectId: $scope.projectId });

        }

        vm.AddNewService = function () {
            blockUI.start("Saving...");
            debugger;
            var newObj = new ServiceResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;
            newObj.price = vm.price;
            newObj.percentage = vm.percentage;
            newObj.vendorId = vm.selectedVendor.vendorId;
            newObj.assetId = vm.selectedAsset.assetId;
            newObj.projectId = $scope.projectId;
            newObj.notes = vm.notes;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Service', { projectId: $scope.projectId });

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
