(function () {
    'use strict';

    angular
        .module('home')
        .controller('AreaController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AreaResource', 'AreaPrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService','CityByIdPrepService','RegionByIdPrepService', AreaController]);


    function AreaController($rootScope, blockUI, $scope, $filter, $translate,
        $state, AreaResource, AreaPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService,CityByIdPrepService,RegionByIdPrepService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")

        blockUI.start("Loading..."); 
            
        var vm = this;
        $scope.totalCount = AreaPrepService.totalCount;
        $scope.AreaList = AreaPrepService;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        function refreshAreas() {

            blockUI.start("Loading..."); 
            
            var k = AreaResource.getAllAreas({page:vm.currentPage}).$promise.then(function (results) { 
                $scope.AreaList = results  
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
            refreshAreas();
        }
        blockUI.stop();
        
    }

})();
