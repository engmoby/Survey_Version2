(function () {
    'use strict';

    angular
        .module('home')
        .controller('ProjectController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'ProjectResource', 'ProjectPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', ProjectController]);


    function ProjectController($rootScope, blockUI, $scope, $filter, $translate,
        $state, ProjectResource, ProjectPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        // blockUI.start(); 
        blockUI.start("Loading...");

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = ProjectPrepService.totalCount;
        $scope.ProjectList = ProjectPrepService;
        console.log($scope.ProjectList)
        $scope.getTotal = function (projectObj) {

             
            var total = 0;
            for (var i = 0; i < projectObj.assets.length; i++) {

                var product = projectObj.assets[i];
                if (product.paymentMethod == 1) { total += (product.price); }
                else { total -= (product.price); }

            }


            return total;
        }
        $scope.getServiceTotal = function (projectObj) {

             
            var total = 0;
            for (var i = 0; i < projectObj.services.length; i++) {

                var product = projectObj.services[i]; 
                    total += (product.price);
              

            }


            return total;
        }
        // $scope.getTotal = function (projectObj) {

        //      
        //     var total = 0;
        //     $scope.ProjectList.results.forEach(function (element) {
        //         for (var i = 0; i < element.assets.length; i++) {

        //             var product = element.assets[i];
        //             if (product.paymentMethod == 1) { total += (product.price); }
        //             else { total -= (product.price); }

        //         }
        //     });

        //     return total;
        // }
        function refreshProjects() {
            blockUI.start("Loading...");
            var k = ProjectResource.getAllProjects({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.ProjectList = results
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
            refreshProjects();
        }
        blockUI.stop();

    }

})();