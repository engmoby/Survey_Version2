(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createRegionDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RegionResource', 'ToastService', '$stateParams','CountryByIdPrepService', createRegionDialogController])

    function createRegionDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RegionResource,
        ToastService, $stateParams,CountryByIdPrepService) {
        
        blockUI.start("Loading..."); 
            
		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = CountryByIdPrepService.titleDictionary[$scope.selectedLanguage];
        
		vm.close = function(){
			$state.go('Regions',{countryId: $stateParams.countryId });
		} 
		 
		vm.AddNewRegion = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new RegionResource();
            newObj.countryId= $stateParams.countryId;
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Regions',{countryId: $stateParams.countryId },{ reload: true });
                     blockUI.stop();        


                },
                function (data, status) {
               blockUI.stop();        

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();
  
	}	
}());
