(function () {
    'use strict';

    angular
        .module('home')
        .controller('dashboardController', ['blockUI', '$scope', '$state',
            '$translate', 'dashboardResource', 'QuestionResource', 'TicketDashboardPrepService',
            'AnswerQuestionPrepService', '$filter', dashboardController]);

    function dashboardController(blockUI, $scope, $state,
        $translate, dashboardResource, QuestionResource, TicketDashboardPrepService, AnswerQuestionPrepService, $filter) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[9].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.ticketsFilter = [
                {
                    name: $translate.instant('Country'),
                    value: "country"
                },
                {
                    name: $translate.instant('Region'),
                    value: "region"
                },
                {
                    name: $translate.instant('City'),
                    value: "city"
                },
                {
                    name: $translate.instant('Area'),
                    value: "area"
                },
                {
                    name: $translate.instant('Branch'),
                    value: "branch"
                },
                {
                    name: $translate.instant('Department'),
                    value: "department"
                },
                {
                    name: $translate.instant('CategoryLbl'),
                    value: "category"
                }
            ]
            vm.selectedTicketFilter = "branch"
            vm.options = {
                chart: {
                    type: 'multiBarChart',
                    height: 300,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 65,
                        left: 50
                    },
                    stacked: true,

                    duration: 100,
                    xAxis: {
                        // axisLabel: 'X Axis',
                        rotateLabels: 30
                    },
                    yAxis: {
                        axisLabel: $translate.instant('ticketsCount'),
                        axisLabelDistance: -10,

                    }
                }
            };
            loadTicketDashboard(TicketDashboardPrepService);
            vm.questionList = AnswerQuestionPrepService.results;

        }
        function loadTicketDashboard(tickets) {
            var assigned = [];
            var closed = [];
            var InProgress = [];
            var Pending = [];
            var Rejected = [];
            tickets.forEach(function (element) {
                assigned.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.assignedCount
                })
                InProgress.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.inProgressCount
                })
                Pending.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.pendingCount
                })
                Rejected.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.rejectedCount
                })
                closed.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.closedCount
                })
            }, this);
            vm.data = [
                {
                    "key": $translate.instant('AssignedStatus'),
                    "values": assigned
                },
                {
                    "key": $translate.instant('InProgressStatus'),
                    "values": InProgress
                },
                {
                    "key": $translate.instant('Pending'),
                    "values": Pending
                },
                {
                    "key": $translate.instant('RejectedStatus'),
                    "values": Rejected
                },
                {
                    "key": $translate.instant('ClosedStatus'),
                    "values": closed
                }
            ];
        }
        init();

        vm.ticketFilterChange = function () {
            dashboardResource.getTicketsDashboard({ xaxis: vm.selectedTicketFilter }).$promise
                .then(function (results) {
                    loadTicketDashboard(results)
                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.getQuestionDashbard = function (question) {
            question.isloading = true;
            QuestionResource.getQuestionDashBoard({ questionId: question.questionId }).$promise
                .then(function (results) {
                    question.dashboard = results;
                    question.isloading = false;
                    if (question.questionTypeId == 0) {
                        question.data = []
                        if (question.dashboard.optionsCount != undefined) {
                            for(var element in question.dashboard.optionsCount ) {
                                question.data.push({
                                    key: ($filter('filter')(question.questionDetailses, { questionDetailsId: element }))[0].titleDictionary[$scope.selectedLanguage],
                                    y: question.dashboard.optionsCount[element]
                                })
                            }

                            question.options = {
                                chart: {
                                    type: 'pieChart',
                                    height: 350,
                                    x: function (d) { return d.key; },
                                    y: function (d) { return d.y; },
                                    showLabels: true,
                                    duration: 500,
                                    // labelThreshold: 0.01,
                                    // labelSunbeamLayout: true,
                                    legend: {
                                        margin: {
                                            top: 5,
                                            right: 35,
                                            bottom: 5,
                                            left: 0
                                        }
                                    }
                                }
                            };
                        }
                    }
                    if (question.questionTypeId == 1) {
                        question.data = [
                            {
                                key: $translate.instant('onestar'),
                                y: question.dashboard.oneStartCount
                            },
                            {
                                key: $translate.instant('twostar'),
                                y: question.dashboard.twoStartCount
                            },
                            {
                                key: $translate.instant('threestar'),
                                y: question.dashboard.threeStartCount
                            },
                            {
                                key: $translate.instant('fourstar'),
                                y: question.dashboard.fourStartCount
                            },
                            {
                                key: $translate.instant('fivestar'),
                                y: question.dashboard.fiveStartCount
                            }
                        ]
                        question.options = {
                            chart: {
                                type: 'pieChart',
                                height: 350,
                                x: function (d) { return d.key; },
                                y: function (d) { return d.y; },
                                showLabels: true,
                                duration: 500,
                                // labelThreshold: 0.01,
                                // labelSunbeamLayout: true,
                                legend: {
                                    margin: {
                                        top: 5,
                                        right: 35,
                                        bottom: 5,
                                        left: 0
                                    }
                                }
                            }
                        };
                    }
                    if (question.questionTypeId == 2) {
                        question.data = [
                            {
                                key: $translate.instant('LikeLbl'),
                                y: question.dashboard.likeCount
                            },
                            {
                                key: $translate.instant('DisLikeLbl'),
                                y: question.dashboard.disLikeCount
                            }
                        ]
                        question.options = {
                            chart: {
                                type: 'pieChart',
                                height: 300,
                                x: function (d) { return d.key; },
                                y: function (d) { return d.y; },
                                showLabels: true,
                                donut: true,
                                pie: {
                                    startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2 },
                                    endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2 }
                                },
                                // labelThreshold: 0.01,
                                // labelSunbeamLayout: true,
                                legend: {
                                    margin: {
                                        top: 5,
                                        right: 35,
                                        bottom: 5,
                                        left: 0
                                    }
                                }
                            }
                        };
                    }
                },
                function (data, status) {
                    question.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        blockUI.stop();
    }

}());