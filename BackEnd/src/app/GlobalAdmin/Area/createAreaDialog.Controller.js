(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createAreaDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'AreaResource', 'ToastService', '$rootScope', createAreaDialogController])

    function createAreaDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, AreaResource,
        ToastService, $rootScope) {
        
        blockUI.start("Loading..."); 
            
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Area');
		} 
		 
		vm.AddNewArea = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new AreaResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Area');
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
