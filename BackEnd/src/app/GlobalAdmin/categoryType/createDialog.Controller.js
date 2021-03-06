(function () {
    'use strict';

    angular
        .module('home')
        .controller('createcategoryTypeDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'categoryTypeResource', 'ToastService', 'allEmailsPrepService', createcategoryTypeDialogController])

    function createcategoryTypeDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource,
        ToastService, allEmailsPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.users = allEmailsPrepService;
        vm.close = function () {
            $state.go('categoryType');
        }

        vm.AddNewType = function () {
            var listMails = "";
            if (vm.emails != null)
                vm.emails.toString().replace(new RegExp(',', 'g'), ';');
                
            debugger; blockUI.start("Saving...");
            var newObj = new categoryTypeResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.type = vm.type;
            newObj.time = vm.time;
            newObj.emails = listMails;
            newObj.body = vm.body;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('categoryType');

                },
                function (data, status) {
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

    }
}());
