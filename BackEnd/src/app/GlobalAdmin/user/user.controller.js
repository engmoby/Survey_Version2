(function () {
    'use strict';

    angular
        .module('home')
        .controller('userController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource', 'UserTypeResource',
            'userPrepService', 'RoleResource', 'RolePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', userController]);

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource, userPrepService, RoleResource,
        RolePrepService, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        
        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")

        blockUI.start("Loading..."); 
    
        var vm = this;
        $scope.totalCount = userPrepService.totalCount;
        $scope.userList = userPrepService.results;
        $scope.roleList = RolePrepService.results;
        BindUserType();
        console.log($scope.userList);

        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        $scope.userObj = "";
        $scope.selectedType = "";
        $scope.userTypeList = [];
 
        function refreshUsers() {
            blockUI.start("Loading..."); 
            
            var k = UserResource.getAllUsers({ page: vm.currentPage }).$promise.then(function (results) {
                vm.getPageData = results;
                $scope.userList = vm.getPageData.results;
                    console.log($scope.userList);
                blockUI.stop();
                    
                },
            function (data, status) {
                blockUI.stop();
                
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }

        function BindUserType() {
            blockUI.start("Loading..."); 
            
            var k = UserTypeResource.getAllUserTypes().$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.userTypeList = vm.getPageData.results;
                blockUI.stop();
                    
                },
                function (data, status) {
                blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        $scope.AddNewclient = function () {
            blockUI.start("Loading..."); 
            
            var newClient = new UserResource();
            newClient.FirstName = $scope.FirstName;
            newClient.LastName = $scope.LastName;
            newClient.Email = $scope.Email;
            newClient.Phone = $scope.Phone;
            newClient.Password = $scope.Password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.$create().then(
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

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