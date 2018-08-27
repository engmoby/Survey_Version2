(function () {
    'use strict';

    angular
        .module('home')
        .controller('TicketsController', ['blockUI', '$scope', '$translate', 'TicketResource', '$state', 'AreaPrepService', 'DepartmentPrepService',
            'ToastService', 'TicketsPrepService', 'UserAreaPrepService', 'UserDepartmentPrepService', 'authorizationService', TicketsController]);

    function TicketsController(blockUI, $scope, $translate, TicketResource, $state, AreaPrepService, DepartmentPrepService,
        ToastService, TicketsPrepService, UserAreaPrepService, UserDepartmentPrepService, authorizationService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.areaList = vm.areaList.concat(AreaPrepService.results)
            vm.user = authorizationService.getUser();
            vm.tickets = TicketsPrepService;
            if (vm.tickets.results != null)
                vm.tickets.results.forEach(function (element) {
                    element.technacianUsers[0] = $translate.instant('selectTech')
                    element.assignedUserId = '0';
                    element.showAssign = false
                }, this);
            vm.selectedRate = 0;
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);
        }
        init();

        vm.areaChange = function () {
            vm.areaList.splice(0, 1);
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
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

        vm.currentPage = 1;
        function refreshTickets() {
            blockUI.start("Loading...");
            TicketResource.getTickets({ page: vm.currentPage }).$promise.then(function (results) {
                vm.tickets = results;
                vm.tickets.results.forEach(function (element) {
                    element.technacianUsers[0] = $translate.instant('selectTech')
                    element.assignedUserId = '0';
                    element.showAssign = false
                }, this);
                blockUI.stop();


            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTickets();
        }

        vm.assignTicket = function (ticketId, assignedUserId) {
            TicketResource.assigned({ ticketId: ticketId, assignedUserId: assignedUserId }).$promise.then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.approveTicket = function (ticketId) {
            TicketResource.approve({ ticketId: ticketId }).$promise.then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.closeTicket = function (ticketId) {
            TicketResource.close({ ticketId: ticketId }).$promise.then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.rejectTicket = function (ticketId, comment) {
            var newObj = new TicketResource();
            newObj.RejectionComment = comment;
            newObj.$reject({ ticketId: ticketId }).then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        blockUI.stop();
    }

}());