(function () {
    'use strict';

    angular
        .module('home')
        .controller('DepartmentController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'DepartmentResource', 'DepartmentPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', DepartmentController]);


    function DepartmentController($rootScope, blockUI, $scope, $filter, $translate,
        $state, DepartmentResource,DepartmentPrepService,  $localStorage, authorizationService,
        appCONSTANTS, ToastService) {
   
        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")
        
        blockUI.start("Loading..."); 
            
        $scope.totalCount = DepartmentPrepService.totalCount;
        $scope.DepartmentList = DepartmentPrepService;

        console.log( $scope.DepartmentList);
        var vm = this;
        function refreshDepartments() {
        blockUI.start("Loading..."); 
            
            var k = DepartmentResource.getAllDepartments({ page: vm.currentPage }).$promise.then(function (results) { 
                $scope.DepartmentList = results 
                blockUI.stop();
                
            },
            function (data, status) {
                blockUI.stop();
                
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        vm.showMore = function (element) {
            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshDepartments();
        }
        blockUI.stop();
        
    }

})();
