(function () {
    'use strict';

    angular
        .module('home')
        .controller('editUserController', ['$rootScope', '$scope', '$filter', '$translate', '$state',    'UserResource', 'AddUserResource', 'UserProductResource', 'GetUserResource', '$localStorage', 'authorizationService', 'appCONSTANTS','EditUserPrepService', 'ToastService', editUserController]);


    function editUserController($rootScope, $scope, $filter, $translate, $state,   UserResource, AddUserResource, UserProductResource, GetUserResource, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService,ToastService) {
        $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        vm.show=true;
        $scope.userObj = "";
        $scope.productList = [];
        $scope.checkradioasd = -1;
        $scope.productDetails = "";
        //vm.Obj=EditUserPrepService;
        $scope.userObj =  EditUserPrepService; 
        console.log($scope.userObj );
        localStorage.setItem('data', JSON.stringify($scope.userObj.userId));
      //  console.log($scope.userObj);
        
    //    refreshUserInfo();   
        refreshuserProducts();
        // function refreshUserInfo() {
        //     var k = GetUserResource.getUserInfo({ userId: $scope.userObj.userId }).$promise.then(function (results) {
        //         $scope.userObj = results
                 
        //     },
        //     function (data, status) {
        //         ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
        //     });
        // }
        function refreshuserProducts() {
            var k = UserProductResource.getUserProductList({ userId: $scope.userObj.userId }).$promise.then(function (results) {
                $scope.userProductList = results 
                $scope.isPaneShown = false;
			$scope.$emit('UNLOAD')
            },
            function (data, status) {
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        } 
        $scope.Updateclient = function () {
            vm.show=false;
            var newClient = new AddUserResource();
            newClient.UserId =$scope.userObj.userId;             
            newClient.Phone1 = $scope.userObj.phone1;
            newClient.Phone2 = $scope.userObj.phone2;
            newClient.Password = $scope.userObj.password;
            newClient.IsActive = $scope.userObj.isActive;
            newClient.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show=true;
                    localStorage.setItem('data', JSON.stringify(data.userId));
                    //$state.go('product');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
 
    }

})();