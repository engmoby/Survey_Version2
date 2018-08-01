(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editQuestionDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'QuestionResource', 'ToastService',
            'QuestionByIdPrepService', editQuestionDialogController])

    function editQuestionDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, QuestionResource, ToastService, QuestionByIdPrepService) {
        blockUI.start("Loading..."); 
        
        var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Question = QuestionByIdPrepService; 
        vm.Close = function () {
            $state.go('Question');
        }
        vm.UpdateQuestion = function () { 
            blockUI.start("Loading..."); 
            
            var updateObj = new QuestionResource();
            updateObj.QuestionId = vm.Question.QuestionId;
            updateObj.titleDictionary = vm.Question.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
 
                    $state.go('Question');

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
