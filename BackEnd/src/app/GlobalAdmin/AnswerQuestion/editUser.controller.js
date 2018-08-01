(function () {
    'use strict';

    angular
        .module('home')
        .controller('editUserController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource', 'UserTypeResource',
            'RoleResource', 'RolePrepService','$localStorage', 'authorizationService', 'appCONSTANTS', 'EditUserPrepService', 'ToastService', editUserController]);


    function editUserController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource,
        RoleResource,RolePrepService, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService, ToastService) {

        blockUI.start("Loading..."); 
        
        $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        BindUserType();
        vm.show = true;
        $scope.roleList = RolePrepService.results; 
        vm.selectedUserRoles = [];
        $scope.userObj = EditUserPrepService;
        $scope.userTypeList = [];
        $scope.selectedType = "";
        console.log($scope.userObj);
        var i;
        for (i = 0; i < $scope.userObj.userRoles.length; i++) {
            var indexRate = $scope.roleList.indexOf($filter('filter')($scope.roleList, { 'roleId': $scope.userObj.userRoles[i].roleId }, true)[0]);
            vm.selectedUserRoles.push($scope.roleList[indexRate]);

        }



        function BindUserType() {
            blockUI.start("Loading..."); 
            
            var k = UserTypeResource.getAllUserTypes().$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.userTypeList = vm.getPageData.results;

                    var indexRate = $scope.userTypeList.indexOf($filter('filter')($scope.userTypeList, { 'userTypeId': $scope.userObj.userTypeId }, true)[0]);
                    $scope.selectedType = $scope.userTypeList[indexRate];
                    blockUI.stop();
                    
                 
                },
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        $scope.Updateclient = function () {
            blockUI.start("Loading..."); 
            
            vm.show=false;
            var newClient = new UserResource();
            newClient.UserId =$scope.userObj.userId;             
            newClient.Phone = $scope.userObj.phone;
            newClient.Email = $scope.userObj.email;
            newClient.Password = $scope.userObj.password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.$update().then(
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show=true;
                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

                },
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();
        
        
    }

})();