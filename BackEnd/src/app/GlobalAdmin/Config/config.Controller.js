(function () {
    'use strict';

    angular
        .module('home')
        .controller('ConfigController', ['blockUI', '$scope', '$state',
            'configTicketsPrepService', '$filter', 'authorizationService', '$translate', 'configResource', ConfigController]);

    function ConfigController(blockUI, $scope, $state,
        configTicketsPrepService, $filter, authorizationService, $translate, configResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[11].children[0]).addClass("active")
        // blockUI.start("Loading...");
        var vm = this;
        vm.tickets = configTicketsPrepService;
        vm.changeActive = function (ticket) {
            if (ticket.isActive) {
                configResource.disableTicketScheduler({Id:ticket.id}).$promise.then(function (results) {
                    ticket.isActive = !ticket.isActive
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
            else {
                configResource.enableTicketScheduler({Id:ticket.id}).$promise.then(function (results) {
                    ticket.isActive = !ticket.isActive
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
    }

}());