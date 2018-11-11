(function () {
    'use strict';

    angular
        .module('home')
        .controller('ServiceController', ['$rootScope', '$stateParams', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'ServiceResource', 'ServicePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', ServiceController])


        .directive('modal', function () {
            return {
                template: '<div class="modal fade">' +
                    '<div class="modal-dialog">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                    '<h4 class="modal-title">{{ title }}</h4>' +
                    '</div>' +
                    '<div class="modal-body" ng-transclude></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                restrict: 'E',
                transclude: true,
                replace: true,
                scope: true,
                link: function postLink(scope, element, attrs) {
                    scope.title = attrs.title;

                    scope.$watch(attrs.visible, function (value) {
                        if (value == true)
                            $(element).modal('show');
                        else
                            $(element).modal('hide');
                    });

                    $(element).on('shown.bs.modal', function () {
                        scope.$apply(function () {
                            scope.$parent[attrs.visible] = true;
                        });
                    });

                    $(element).on('hidden.bs.modal', function () {
                        scope.$apply(function () {
                            scope.$parent[attrs.visible] = false;
                        });
                    });
                }
            };
        });
    function ServiceController($rootScope, $stateParams, blockUI, $scope, $filter, $translate,
        $state, ServiceResource, ServicePrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {
        // blockUI.start(); 
        blockUI.start("Loading...");
        $scope.projectId = $stateParams.projectId;

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = ServicePrepService.totalCount;
        $scope.ServiceList = ServicePrepService;
        console.log($scope.ServiceList);
        function refreshServices() {
            blockUI.start("Loading...");
            var k = ServiceResource.getAllServices({ projectId:$scope.projectId,page: vm.currentPage }).$promise.then(function (results) {
                $scope.ServiceList = results
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
            refreshServices();
        }
        blockUI.stop();

        $scope.showModal = false;
        $scope.objInModel = "";
        $scope.toggleModal = function (obj) {
            $scope.showModal = !$scope.showModal;
            $scope.objInModel = obj;
        };
        $scope.ClickApprove = function () {
            vm.Approve($scope.objInModel, $scope.objInModel.requestId);
            $scope.showModal = !$scope.showModal;
        };
        vm.UpdateService = function () {
            blockUI.start("Saving...");
            var updateObj = new ServiceResource();
            updateObj.serviceId = $scope.objInModel.serviceId;
            updateObj.percentage = $scope.objInModel.percentage;
            updateObj.notes = $scope.objInModel.notes;
            updateObj.$update().then(
                function (data, status) {
                    $scope.showModal = !$scope.showModal;
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    refreshServices();

                },
                function (data, status) {
                     
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }

})();