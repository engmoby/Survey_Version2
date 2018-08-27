(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editQuestionDialogController', ['$scope','$filter', 'blockUI',  '$state', 'appCONSTANTS', '$translate',
         'QuestionResource', 'ToastService','DepartmentPrepService',
            'QuestionByIdPrepService', editQuestionDialogController])

    function editQuestionDialogController($scope, $filter,blockUI, $state, appCONSTANTS, $translate, QuestionResource,
         ToastService, DepartmentPrepService,QuestionByIdPrepService) {
        blockUI.start("Loading..."); 
        
        var vm = this; 
		     
        var vm = this;
        vm.selectedDepartment = "";
        vm.selectedCategory = "";
        vm.selectedQuestionType="";
        vm.Question=QuestionByIdPrepService;
		vm.QuestionTypeList = appCONSTANTS.QuestionType;
		vm.DepartmentList=DepartmentPrepService.results;
 console.log(QuestionByIdPrepService);
		vm.language = appCONSTANTS.supportedLanguage;
       
        var indexDepartment = vm.DepartmentList.indexOf($filter('filter')(vm.DepartmentList, { 'departmentId': vm.Question.category.departmentId }, true)[0]);
            vm.selectedDepartment=vm.DepartmentList[indexDepartment];
 
            
            vm.categoryList = vm.selectedDepartment.categories;
        var indexCategory = vm.selectedDepartment.categories.indexOf($filter('filter')(vm.selectedDepartment.categories, { 'categoryId': vm.Question.category.categoryId }, true)[0]);
        vm.selectedCategory=vm.selectedDepartment.categories[indexCategory];  
 
        var indexType = vm.QuestionTypeList.indexOf($filter('filter')(vm.QuestionTypeList, { 'id': vm.Question.questionTypeId }, true)[0]);
        vm.selectedQuestionType=vm.QuestionTypeList[indexType]; 
        
        $scope.questionelemnt = []; 

        vm.Question.questionDetailses.forEach(element => { 
            $scope.questionelemnt.push(
                {
                    questionDetailsId:element.questionDetailsId,
                    questionEn:element.titleDictionary.en,
                questionAr:element.titleDictionary.ar
            }
            );
        });
        
     

        vm.Close = function () {
            $state.go('Question');
        }

        var counter=0;
      /* $scope.questionelemnt = [ {id:counter, questionEn : '', questionAr : '',inline:true} ];*/
    
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
        vm.departmentChange = function () {
            vm.categoryList = vm.selectedDepartment.categories;
        }
 

        vm.UpdateQuestion = function () { 
            blockUI.start("Loading..."); 
            
            var updateObj = new QuestionResource();
            updateObj.questionId = vm.Question.questionId; 
            updateObj.titleDictionary = vm.Question.titleDictionary; 
            updateObj.QuestionDetailses = []; 
             $scope.questionelemnt.forEach(element => {
                 updateObj.QuestionDetailses.push(
                     {
                        questionDetailsId:element.questionDetailsId,
                        titleDictionary:{en:element.questionEn,ar:element.questionAr}
                    });
             });
             
             /*updateObj.QuestionDetailses = null; */
             updateObj.CategoryId =  vm.selectedCategory.categoryId; 
             updateObj.QuestionTypeId = vm.selectedQuestionType.id; 
             updateObj.IsDeleted = false; 
             updateObj.IsStatic =false;
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
