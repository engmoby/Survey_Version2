(function () {
    'use strict';

    angular
        .module('home')
        .controller('TicketDetailsController', ['blockUI', '$scope', '$state',
            'TicketPrepService', '$filter', 'authorizationService','$translate','TicketResource', TicketDetailsController]);

    function TicketDetailsController(blockUI, $scope, $state,
        TicketPrepService, $filter, authorizationService , $translate,TicketResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.user = authorizationService.getUser();

            vm.ticket = TicketPrepService;
            vm.ticket.creationTime = vm.ticket.creationTime + "Z";
            vm.ticket.creationTime = $filter('date')(new Date(vm.ticket.creationTime), "dd/MM/yyyy hh:mm a");

            vm.ticket.technacianUsers[0] = $translate.instant('selectTech')
            vm.ticket.assignedUserId = '0';
            vm.ticket.showAssign = false

            vm.ticket.lastModificationTime = vm.ticket.lastModificationTime + "Z";
            vm.ticket.lastModificationTime = $filter('date')(new Date(vm.ticket.lastModificationTime), "dd/MM/yyyy hh:mm a");

            vm.ticket.technicianModificationTime = vm.ticket.technicianModificationTime + "Z";
            vm.ticket.technicianModificationTime = $filter('date')(new Date(vm.ticket.technicianModificationTime), "dd/MM/yyyy hh:mm a");
        }
        init();
        vm.assignTicket = function (ticketId, assignedUserId,comment) {
            var newObj = new TicketResource();
            newObj.assignComment = comment;
            newObj.$assigned({ ticketId: ticketId, assignedUserId: assignedUserId }).then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.approveTicket = function (ticketId) {
            TicketResource.approve({ ticketId: ticketId }).$promise.then(function (results) {
                $state.go('Tickets');
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.closeTicket = function (ticketId) {
            TicketResource.close({ ticketId: ticketId }).$promise.then(function (results) {
                $state.go('Tickets');
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
                $state.go('Tickets');
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        blockUI.stop();
    }

}());