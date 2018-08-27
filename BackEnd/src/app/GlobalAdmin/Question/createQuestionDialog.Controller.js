(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createQuestionDialogController', ['$scope','$window', 'blockUI',  '$state', 'appCONSTANTS', '$translate',
            'QuestionResource', 'ToastService' ,'DepartmentPrepService', createQuestionDialogController])

    function createQuestionDialogController($scope,$window, blockUI,  $state, appCONSTANTS, $translate, QuestionResource,ToastService,DepartmentPrepService) {
        
        blockUI.start("Loading..."); 
            
        var vm = this;
        vm.selectedDepartment = "";
        vm.selectedCategory = "";
        vm.selectedQuestionType="";
		vm.QuestionTypeList = appCONSTANTS.QuestionType;
		vm.DepartmentList=DepartmentPrepService.results;
 
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Question');
        } 
        
        vm.departmentChange = function () {
            vm.categoryList = vm.selectedDepartment.categories;
        }
 
		vm.AddNewQuestion = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new QuestionResource();
            newObj.titleDictionary = vm.titleDictionary; 
           newObj.QuestionDetailses = []; 
            $scope.questionelemnt.forEach(element => {
                newObj.QuestionDetailses.push({titleDictionary:{en:element.questionEn,ar:element.questionAr}});
            });
            
            newObj.CategoryId =  vm.selectedCategory.categoryId; 
            newObj.QuestionTypeId = vm.selectedQuestionType.id; 
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
  
        var counter=0;
        $scope.questionelemnt = [ {id:counter, questionEn : '', questionAr : '',inline:true} ];
    
        $scope.newItem = function($event){
            counter++;
            $scope.questionelemnt.push(  { id:counter, questionEn : '', questionAr : '',inline:true} );
            $event.preventDefault();
        }
        $scope.inlinef= function($event,inlinecontrol){
            var checkbox = $event.target;
            if(checkbox.checked){
                $('#'+ inlinecontrol).css('display','inline');
            }else{
                $('#'+ inlinecontrol).css('display','');
            }
    
        }
        $scope.showitems = function($event){
            $('#displayitems').css('visibility','none');
        }


	}	
}());
