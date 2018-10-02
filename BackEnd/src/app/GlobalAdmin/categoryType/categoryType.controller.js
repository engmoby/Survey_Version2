(function () {
    'use strict';

    angular
        .module('home')
        .controller('categoryTypeController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'categoryTypeResource', 'categoryTypePrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', categoryTypeController]);


    function categoryTypeController($rootScope, blockUI, $scope, $filter, $translate,
        $state, categoryTypeResource, categoryTypePrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

            // blockUI.start(); 
        blockUI.start("Loading..."); 

         $('.pmd-sidebar-nav>li>a').removeClass("active")
         $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = categoryTypePrepService.totalCount;
        $scope.categoryTypeList = categoryTypePrepService;

        function refreshCategoryTypes() {
            blockUI.start("Loading..."); 
            var k = categoryTypeResource.getAllcategoryTypes({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.categoryTypeList = results
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
            refreshCategoryTypes();
        }
       blockUI.stop();

    }

})();