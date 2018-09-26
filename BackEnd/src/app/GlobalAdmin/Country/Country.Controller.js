(function () {
    'use strict';

    angular
        .module('home')
        .controller('CountryController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'CountryResource', 'CountriesPrepService',  '$localStorage', 'appCONSTANTS',
            'ToastService', CountryController]);


    function CountryController($rootScope, blockUI, $scope, $filter, $translate,
        $state, CountryResource, CountriesPrepService, $localStorage, appCONSTANTS, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")

        blockUI.start("Loading..."); 
            
        var vm = this;
        $scope.totalCount = CountriesPrepService.totalCount;
        $scope.Countries  = CountriesPrepService;
        function refreshCountries() {

            blockUI.start("Loading..."); 
            
            var k = CountryResource.getAllCountries({page:vm.currentPage}).$promise.then(function (results) { 
                $scope.Countries = results  
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
            refreshCountries();
        }
        blockUI.stop();
        
    }

})();
