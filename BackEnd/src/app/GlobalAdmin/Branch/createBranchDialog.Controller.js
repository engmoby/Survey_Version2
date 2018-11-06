(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createBranchDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate',
            'BranchResource', 'ToastService', '$stateParams', 'AreaByIdPrepService','CityByIdPrepService', 'RegionByIdPrepService', createBranchDialogController])

    function createBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource,
        ToastService, $stateParams, AreaByIdPrepService,CityByIdPrepService, RegionByIdPrepService) {
		var vm = this;
		vm.Area = AreaByIdPrepService;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.areaName = AreaByIdPrepService.titleDictionary[$scope.selectedLanguage];
		vm.close = function(){
		    $state.go('Area',{ countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId });
		} 
		 
		vm.AddNewBranch = function () {
            var newObj = new BranchResource();
		    newObj.AreaId = vm.Area.areaId;
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Area',{ countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId },{ reload: true });

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
  
	}	
}());
