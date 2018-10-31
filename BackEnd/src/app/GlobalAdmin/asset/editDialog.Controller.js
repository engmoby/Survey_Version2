(function () {
    'use strict';

    angular
        .module('home')
        .controller('editDialogAssetController', ['$scope', '$filter', '$stateParams', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'categoryTypeResource', 'ToastService',
            'AssetByIdPrepService', 'AssetResource', 'VendorPrepService', editDialogAssetController])

    function editDialogAssetController($scope, $filter, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource, ToastService,
        AssetByIdPrepService, AssetResource, VendorPrepService) {
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results; 
        vm.Asset = AssetByIdPrepService; 
        console.log(vm.Asset);

        if (vm.Asset.paymentMethod == 1)
            vm.Asset.paymentMethod = "Credit";
        else
            vm.Asset.paymentMethod = "Debit";

        if (vm.Asset.assetStatus == 1)
            vm.Asset.assetStatus = "NotRecevied";
        else
            vm.Asset.assetStatus = "Recevied";


        var indexVendor = vm.Vendors.indexOf($filter('filter')(vm.Vendors, { 'vendorId': vm.Asset.vendorId }, true)[0]);
        vm.vendor = vm.Vendors[indexVendor];



        vm.Close = function () {
            $state.go('Asset', { projectId: $scope.projectId });

        }
        vm.UpdateAsset = function () { 
            blockUI.start("Saving...");
            var updateObj = new AssetResource();
            updateObj.assetId = vm.Asset.assetId;
            updateObj.assetStatus = vm.Asset.assetStatus;
            updateObj.notes = vm.Asset.notes; 
            updateObj.$update().then(
                function (data, status) { 
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Asset', { projectId: $scope.projectId });

                },
                function (data, status) {
                    debugger;
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
