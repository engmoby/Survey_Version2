(function () {
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('productAddSuccess'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 
            
            var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();
                    
                },
                function (data, status) {
                blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
