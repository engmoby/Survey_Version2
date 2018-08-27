(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswerQuestionDialogController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource', 'AreaPrepService',
            'ToastService', AnswerQuestionDialogController]);

    function AnswerQuestionDialogController(blockUI, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource, AreaPrepService, ToastService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[6].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;
       
        console.log($scope.questionList);
        /*// Toggle selection for a given fruit by name*/
        function init(){
            $scope.likeText = "";
            $scope.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
            $scope.areaList = [];
            $scope.areaList.push($scope.selectedArea);
            $scope.areaList = $scope.areaList.concat(AreaPrepService.results)
            $scope.questionList = AnswerQuestionPrepService.results;
            $scope.IsLike = 0;
            $scope.isLikeSub = 0;
            $scope.selection = [];
            $scope.selectedRate = 0;
            $scope.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            $scope.branchList = [];
            $scope.branchList.push($scope.selectedBranch);
        }
        init();
        vm.answers = []
        $scope.questionList.forEach(function (element) {
            vm.answers.push({
                branchId: 0,
                date: new Date(),
                questionId: element.questionId,
                answerDetails: [],
                note: ""

            })
        }, this);
        $scope.toggleSelection = function toggleSelection(QuestionDetail, questionId) {

            vm.answers.forEach(function (element) {
                if (element.questionId == questionId) {
                    var idx = element.answerDetails.indexOf(QuestionDetail);
                    /*// Is currently selected*/
                    if (idx > -1) {
                        /*$scope.selection.splice(idx, 1);*/
                        element.answerDetails.splice(idx, 1);

                    }

                    /* // Is newly selected*/
                    else {
                        /* $scope.selection.push({ questionDetailsId: QuestionDetail.questionDetailsId });*/
                        element.answerDetails.push({ questionDetailsId: QuestionDetail.questionDetailsId });
                    }
                }
            }, this);

        };
        $scope.rate = 3;
        $scope.onItemRating = function (rating, questionId) {
            /*$scope.selectedRate = rating;*/
            vm.answers.forEach(function (element) {
                if (element.questionId == questionId) {
                    element.answerDetails = [];
                    element.answerDetails.push({ value: rating });
                }
            }, this);
            /*quesObject.question = questionId;
            quesObject.value = rating;
            quesObject.note = note;*/
            /* //  vm.selectedAnswerDetails.push(quesObject)
             // alert('On Rating: ' + rating);*/
        };


        $scope.areaChange = function () {
            /*$scope.areaList.splice(0, 1);*/
            for (var i = $scope.areaList.length - 1; i >= 0; i--) {
                if ($scope.areaList[i].areaId == 0) {
                    $scope.areaList.splice(i, 1);
                }
            }
            $scope.branchList = [];
            $scope.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            $scope.branchList.push($scope.selectedBranch);
            $scope.branchList = $scope.branchList.concat($scope.selectedArea.branches);
        }

        $scope.branchChange = function () {
            for (var i = $scope.branchList.length - 1; i >= 0; i--) {
                if ($scope.branchList[i].branchId == 0) {
                    $scope.branchList.splice(i, 1);
                }
            }
        }


        $scope.AddAnswer = function (list) {
            blockUI.start("Loading...");
            debugger;
            var submitAnswer = new AnswerResource();
            vm.answers.forEach(function (element) {
                element.branchId = $scope.selectedBranch.branchId;
                var fromDate = $('#startdate').val().split('/')
                element.date =(new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
                /*element.date = new Date($('#startdate').data('date'));*/
            }, this);
            /*   // submitAnswer.Date = new Date($('#startdate').data('date'));
               // submitAnswer.branchId = $scope.selectedBranch.branchId;
           //    submitAnswer.questionModel = list;*/
            AnswerResource.create(vm.answers, function (data, status) {
                blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                init();
                vm.answers = []
                $scope.questionList.forEach(function (element) {
                    vm.answers.push({
                        branchId: 0,
                        date: new Date(),
                        questionId: element.questionId,
                        answerDetails: [],
                        note: ""
                    })
                    element.l = null;
                    element.questionDetailses.forEach(function(QuestionDetail) {
                        QuestionDetail.values = null;
                    }, this);
                }, this);
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUsers();
        }

        blockUI.stop();


        vm.answersValid = function () {
            var isInValid = false;
            vm.answers.forEach(function (element) {
                if (element.answerDetails.length <= 0) {
                    isInValid = true
                }
            }, this);
            if ($('#startdate').data('date') == null || $scope.selectedArea.areaId == 0 || $scope.selectedBranch.branchId == 0) {
                isInValid = true
            }
            return isInValid;
        }
    }

}());