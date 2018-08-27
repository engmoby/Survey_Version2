(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswersController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource', 'AreaPrepService',
            'ToastService', AnswersController]);

    function AnswersController(blockUI, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource, AreaPrepService, ToastService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[7].children[0]).addClass("active")

        var vm = this;
        vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "جميع المناطق" } };
        vm.areaList = [];
        vm.areaList.push(vm.selectedArea);
        vm.areaList = vm.areaList.concat(AreaPrepService.results)
        vm.questionList = AnswerQuestionPrepService.results;
        vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
        vm.branchList = [];
        vm.branchList.push(vm.selectedBranch);
        console.log(vm.questionList);
        /*// Toggle selection for a given fruit by name*/

        vm.questionList.forEach(function (element) {
            element.page = 1;
            element.answers = [];
            element.showAnswer = false
        }, this);


        vm.areaChange = function () {
            // vm.areaList.splice(0, 1);
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }
        vm.viewAnswer = function (ques) {
            ques.isloading = true;
            AnswerResource.getAnswer({ questionId: ques.questionId, page: ques.page, areaId: vm.areaId, branchId: vm.branchId, from: from, to: to }).$promise.then(function (results) {
                ques.isloading = false;
                ques.answers = results;
                // $scope.$apply()
            },
                function (data, status) {
                    ques.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        var from = ""
        var to = ""
        vm.areaId = 0
        vm.branchId = 0
        vm.applyFilter = function () {
            vm.questionList.forEach(function (element) {
                element.page = 1;
                element.answers = [];
                element.showAnswer = false
            }, this);
            from = ""
            if ($('#fromdate').val() != "") {
                var fromDate = $('#fromdate').val().split('/')
                from = (new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
            }
            to = ""
            if ($('#todate').val() != "") {
                var toDate = $('#todate').val().split('/')
                to = (new Date(toDate[1] + "/" + toDate[0] + "/" + toDate[2])).toISOString().replace('Z', '');
            }
            vm.areaId = vm.selectedArea.areaId;
            vm.branchId = vm.selectedBranch.branchId;
        }

        vm.changePage = function (page, ques) {
            ques.isloading = true;
            ques.page = page
            AnswerResource.getAnswer({ questionId: ques.questionId, page: ques.page, areaId: vm.areaId, branchId: vm.branchId, from: from, to: to }).$promise.then(function (results) {
                ques.isloading = false;
                ques.answers = results;
            },
                function (data, status) {
                    ques.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


    }
}());