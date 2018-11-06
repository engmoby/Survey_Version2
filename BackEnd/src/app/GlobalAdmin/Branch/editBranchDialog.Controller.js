(function () {
    'use strict';

    angular
        .module('home')
        .controller('editBranchDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate', 'BranchResource', 'ToastService',
            'BranchByIdPrepService','$stateParams','AreaByIdPrepService','CityByIdPrepService', 'RegionByIdPrepService', editBranchDialogController])

    function editBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource, ToastService,
         BranchByIdPrepService,$stateParams,AreaByIdPrepService,CityByIdPrepService, RegionByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Branch = BranchByIdPrepService;
        
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.areaName = AreaByIdPrepService.titleDictionary[$scope.selectedLanguage];
            
        vm.close = function () {
            $state.go('Area', { countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId });
        }
        vm.UpdateBranch = function () {
            var updateObj = new BranchResource();
            updateObj.BranchId = vm.Branch.branchId;
            updateObj.titleDictionary = vm.Branch.titleDictionary;
            updateObj.IsDeleted = false;
            updateObj.IsStatic = false;
            updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Area', { countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId },{ reload: true });

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
