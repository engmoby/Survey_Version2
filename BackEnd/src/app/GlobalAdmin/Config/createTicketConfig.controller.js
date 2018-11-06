(function () {
    'use strict';

    angular
        .module('home')
        .controller('createTicketConfigController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'configResource', 'ToastService', 'allEmailsPrepService', createTicketConfigController])

    function createTicketConfigController($scope, blockUI, $http, $state, appCONSTANTS, $translate, configResource,
        ToastService, allEmailsPrepService) {

        blockUI.start("Loading...");

        var vm = this;
        vm.users = allEmailsPrepService;
        vm.status = "Pending"
        // vm.users = [];
        vm.close = function () {
            $state.go('Config');
        }

        vm.AddNew = function () {
            blockUI.start("Loading...");

            var newObj = new configResource();
            newObj.status = vm.status;
            newObj.time = vm.time;
            newObj.emails = vm.emails.toString().replace(new RegExp(',', 'g'), ';');
            newObj.body = vm.body;
            newObj.$createTicketScheduler().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Config');
                    blockUI.stop();


                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.validateEmail = function () {
            var RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var valid = true;
            vm.emails.forEach(function (element) {
                valid = RegExp.test(element);
                if (!valid)
                    return valid;

            }, this);
            return valid
        }
        blockUI.stop();

    }
}());
