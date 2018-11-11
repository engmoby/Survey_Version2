(function () {
    'use strict';

    angular
        .module('home')
        .controller('editDialogServiceController', ['$scope', '$filter', '$stateParams', 'blockUI', '$http', '$state',
         'appCONSTANTS', '$translate', 'AssetPrepService', 'ToastService',
            'ServiceByIdPrepService', 'ServiceResource', 'VendorPrepService', editDialogServiceController])

    function editDialogServiceController($scope, $filter, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate,
        AssetPrepService, ToastService,        ServiceByIdPrepService, ServiceResource, VendorPrepService) {
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results; 
        vm.Assets = AssetPrepService.results; 
        vm.Service = ServiceByIdPrepService; 
        console.log(vm.Service);
 

        var indexVendor = vm.Vendors.indexOf($filter('filter')(vm.Vendors, { 'vendorId': vm.Service.vendorId }, true)[0]);
        vm.vendor = vm.Vendors[indexVendor];
        
        var indexAsset = vm.Assets.indexOf($filter('filter')(vm.Assets, { 'AssetId': vm.Service.AssetId }, true)[0]);
        vm.Asset = vm.Assets[indexAsset];



        vm.Close = function () {
            $state.go('Service', { projectId: $scope.projectId });

        }
        vm.UpdateService = function () { 
            blockUI.start("Saving...");
            var updateObj = new ServiceResource();
            updateObj.serviceId = vm.Service.serviceId;
            updateObj.percentage = vm.Service.percentage;
            updateObj.price = vm.Service.price;
            updateObj.vendorId = vm.Service.vendorId;
            updateObj.notes = vm.Service.notes; 
            updateObj.$update().then(
                function (data, status) { 
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Service', { projectId: $scope.projectId });

                },
                function (data, status) {
                     
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
