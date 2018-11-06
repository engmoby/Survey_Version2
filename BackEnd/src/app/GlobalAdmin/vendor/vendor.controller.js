(function () {
    'use strict';

    angular
        .module('home')
        .controller('VendorController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'VendorResource', 'VendorPrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', VendorController]);


    function VendorController($rootScope, blockUI, $scope, $filter, $translate,
        $state, VendorResource, VendorPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

            // blockUI.start(); 
        blockUI.start("Loading..."); 

         $('.pmd-sidebar-nav>li>a').removeClass("active")
         $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = VendorPrepService.totalCount;
        $scope.VendorList = VendorPrepService;

        function refreshVendors() {
            blockUI.start("Loading..."); 
            var k = VendorResource.getAllVendors({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.VendorList = results
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
            refreshVendors();
        }
       blockUI.stop();

    }

})();