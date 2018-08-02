(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswerQuestionDialogController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'QuestionPrepService', 'QuestionResource', 'AreaPrepService',
         'ToastService', AnswerQuestionDialogController]);

    function AnswerQuestionDialogController(blockUI, $scope, $translate, AnswerResource, $state, QuestionPrepService, QuestionResource, AreaPrepService, ToastService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;
        $scope.likeText = "";
        $scope.selectedArea = "";
        $scope.areaList = AreaPrepService.results;
        $scope.questionList = QuestionPrepService.results;
        $scope.IsLike = 0;
        $scope.isLikeSub = 0;
        $scope.selection = [];
        $scope.selectedRate = 0;
        $scope.selectedBranch = ""; 
   
        console.log($scope.questionList);
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
        $scope.onItemRating = function (rating, questionId, note) {
            $scope.selectedRate = rating;
            quesObject.question = questionId;
            quesObject.value = rating;
            quesObject.note = note;
            //  vm.selectedAnswerDetails.push(quesObject)
            // alert('On Rating: ' + rating);
        };


        $scope.areaChange = function () {
            $scope.branchList = $scope.selectedArea.branches;
        }


        $scope.AddAnswer = function (list) {
            blockUI.start("Loading...");
            debugger;
            var submitAnswer = new AnswerResource();
            submitAnswer.Date = new Date($('#startdate').data('date'));
            submitAnswer.branchId = $scope.selectedBranch.branchId;
           submitAnswer.questionModel = list;
            submitAnswer.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    $state.go('AnswerQuestion');

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