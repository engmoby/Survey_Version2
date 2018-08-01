(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswerQuestionDialogController', [  'blockUI', '$scope',  '$translate','$filter', 'CategoryResource','$state','QuestionPrepService', 'QuestionResource',  'AreaPrepService',   
         'ToastService', AnswerQuestionDialogController]);

    function AnswerQuestionDialogController(  blockUI, $scope,  $translate,$filter,CategoryResource, $state,QuestionPrepService, QuestionResource, AreaPrepService, ToastService) {
        
        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active") 
        blockUI.start("Loading..."); 
    
        var vm = this;  
        $scope.likeText = "";
        $scope.selectedArea = "";
        $scope.areaList = AreaPrepService.results; 
        $scope.questionList = QuestionPrepService.results;  
        console.log( $scope.questionList);
         $scope.IsLike = 0;
        $scope.isLikeSub = 0;
        $scope.selection = [];
        $scope.selectedRate =0;
        $scope.catet =" ";

        angular.forEach($scope.questionList, function(value, key) {
           debugger;
           //refreshCurrentProduct(value.categoryId);
           value.categoryTitle="dddddd" ;
            console.log(key + ': ' + value);
          });

        $scope.oncateInit = function(val){
            refreshCurrentProduct(val);
            alert('On Rating: ' + val);
          };
          function refreshCurrentProduct(val) {

            var k = CategoryResource.getCategory({ categoryId: val }).$promise.then(function (results) {
            
                $scope.catet =results;
           
                console.log($scope.catet);
            },
            function (data, status) {
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        // Toggle selection for a given fruit by name
  $scope.toggleSelection = function toggleSelection(fruitName) {
    var idx = $scope.selection.indexOf(fruitName);

    // Is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.selection.push(fruitName);
    }
  };
  $scope.rate = 3;
  $scope.onItemRating = function(rating){
    $scope.selectedRate =rating;
     alert('On Rating: ' + rating);
  };

       
 $scope.areaChange = function () { 
    $scope.branchList =  $scope.selectedArea.branches;
 }


        $scope.AddNewclient = function () {
            blockUI.start("Loading..."); 
            
            var newClient = new UserResource();
            newClient.FirstName = $scope.FirstName;
            newClient.LastName = $scope.LastName;
            newClient.Email = $scope.Email;
            newClient.Phone = $scope.Phone;
            newClient.Password = $scope.Password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.$create().then(
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

                },
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUsers();
        }
    
    blockUI.stop();
    
    }

}());