(function () {
    'use strict';

    angular
        .module('home')
        .controller('usertypeController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'UserTypeResource', 'userTypePrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', usertypeController]);


    function usertypeController($rootScope, blockUI, $scope, $filter, $translate,
        $state, UserTypeResource, userTypePrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

            // blockUI.start(); 
        blockUI.start("Loading..."); 

         $('.pmd-sidebar-nav>li>a').removeClass("active")
         $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = userTypePrepService.totalCount;
        $scope.usertypeList = userTypePrepService;

        function refreshUserTypes() {
            blockUI.start("Loading..."); 
            var k = UserTypeResource.getAllUserTypes({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.usertypeList = results
                blockUI.stop();
            },
            function (data, status) {
                blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUserTypes();
        }
       blockUI.stop();

    }

})();