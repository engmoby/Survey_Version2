(function () {
    'use strict';

    angular
        .module('home')
        .controller('createDialogAssetController', ['$scope', '$stateParams', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'AssetResource', 'ToastService', 'VendorPrepService', createDialogAssetController])

    function createDialogAssetController($scope, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate, AssetResource,
        ToastService, VendorPrepService) { 
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results;
        vm.selectedVendor = null;
        $scope.assetStatus = "NotRecevied";
        $scope.paymentMethod = "Credit";
        vm.close = function () {
            $state.go('Asset', { projectId: $scope.projectId });
 
        }

        vm.AddNewAsset = function () {
            blockUI.start("Saving...");
            debugger;
            var newObj = new AssetResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;
            newObj.price = vm.price;
            newObj.assetStatus = $scope.assetStatus;
            newObj.paymentMethod = $scope.paymentMethod;
            newObj.vendorId = vm.selectedVendor.vendorId;
            newObj.projectId = $scope.projectId;
            newObj.notes = vm.notes;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Asset', { projectId: $scope.projectId });

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
