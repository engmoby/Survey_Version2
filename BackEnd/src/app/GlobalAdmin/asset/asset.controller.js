(function () {
    'use strict';

    angular
        .module('home')
        .controller('AssetController', ['$rootScope', '$stateParams', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AssetResource', 'AssetPrepService', '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', 'AnswerQuestionResource', 'VendorPrepService', AssetController]);


    function AssetController($rootScope, $stateParams, blockUI, $scope, $filter, $translate,
        $state, AssetResource, AssetPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, AnswerQuestionResource, VendorPrepService) {
        // blockUI.start(); 
        blockUI.start("Loading...");
        $scope.projectId = $stateParams.projectId;

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = AssetPrepService.totalCount;
        $scope.AssetList = AssetPrepService;
        $scope.vendorList = VendorPrepService;
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

        vm.previousBtn = function (projectId) {
            CheckAnswersByProject(projectId);
        }
        function CheckAnswersByProject(projectId) {
            blockUI.start("Loading...");
            AnswerQuestionResource.CheckAnswersByProjectId({ projectId: projectId }).$promise.then(function (results) {
                if (results.userId != 0) {
                    if (results.userId != undefined) {
                        $state.go('Answers', { projectId: projectId });
                    }
                    else {
                        $state.go('AnswerQuestion', { projectId: projectId });
                    }
                }
                blockUI.stop();
            },
                function (data, status) {
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