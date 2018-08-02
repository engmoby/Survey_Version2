(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createQuestionDialogController', [ 'blockUI',  '$state', 'appCONSTANTS', '$translate',
            'QuestionResource', 'ToastService' ,'DepartmentPrepService', createQuestionDialogController])

    function createQuestionDialogController( blockUI,  $state, appCONSTANTS, $translate, QuestionResource,ToastService,DepartmentPrepService) {
        
        blockUI.start("Loading..."); 
            
        var vm = this;
        vm.selectedDepartment = "";
        vm.selectedCategory = "";
        vm.selectedQuestionType="";
		vm.QuestionTypeList = appCONSTANTS.QuestionType;
		vm.DepartmentList=DepartmentPrepService;
		vm.CategoryList=[];
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Question');
        } 
        
        vm.departmentChange = function () {
            vm.categoryList = $scope.selectedDepartment.categories;
        }
		 
		vm.AddNewQuestion = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new QuestionResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.QuestionDetailses = false; 
            newObj.Category = false; 
            newObj.QuestionTypeId = false; 
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
