(function () {
    'use strict';

    angular
        .module('home')
        .controller('AssetController', ['$rootScope', '$stateParams', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AssetResource', 'AssetPrepService', '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', AssetController]);


    function AssetController($rootScope, $stateParams, blockUI, $scope, $filter, $translate,
        $state, AssetResource, AssetPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {
        // blockUI.start(); 
        blockUI.start("Loading...");
        $scope.projectId = $stateParams.projectId;

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = AssetPrepService.totalCount;
        $scope.AssetList = AssetPrepService;
        console.log($scope.AssetList);
        function refreshAssets() {
            blockUI.start("Loading...");
            var k = AssetResource.getAllAssets({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.AssetList = results
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
            refreshAssets();
        }
        blockUI.stop();

    }

})();