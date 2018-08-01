(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createQuestionDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'QuestionResource', 'ToastService', '$rootScope', createQuestionDialogController])

    function createQuestionDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, QuestionResource,
        ToastService, $rootScope) {
        
        blockUI.start("Loading..."); 
            
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Question');
		} 
		 
		vm.AddNewQuestion = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new QuestionResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Question');
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
