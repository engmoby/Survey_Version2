(function () {
    'use strict';

    angular
        .module('home')
        .controller('editProductController', ['$rootScope', '$scope', '$filter', '$translate', '$state', '$stateParams', 'ProductResource', 'AddProductResource', 'GetBackageResource', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', editProductController]);


    function editProductController($rootScope, $scope, $filter, $translate, $state, $stateParams, ProductResource, AddProductResource, GetBackageResource, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        $scope.Backages = [{
            value: '1',
            title: '1 Month'
        }, 
          {
              value: '3',
              title: '3 Month'
          },

          {
              value: '6',
              title: '6 Month'
          },
          {
              value: '9',
              title: '9 Month'
          },
          {
              value: '12',
              title: '12 Month'
          },
        ];
        $scope.showSelectValue = function (selectedBackage) {
            $scope.packageLimit = selectedBackage.value;
           //  alert($scope.packageLimit);
            // console.log(selectedBackage);
        }
        $scope.ShowDate = true;
        $scope.checkradioasd = -1;
        $scope.productDetails = "";
        $scope.UserId = JSON.parse(localStorage.getItem("data"));

        refreshCurrentProduct();
        function refreshCurrentProduct() {

            var k = GetBackageResource.getBackageInfo({ backageGuid: $stateParams.backageGuid }).$promise.then(function (results) {
                $scope.currentProduct = results
                var inputDate = new Date($scope.currentProduct.endDate);
                var todaysDate = new Date();

                if (inputDate.setHours(0, 0, 0, 0) > todaysDate.setHours(0, 0, 0, 0)) {
                    $scope.ShowDate = false;
                }
                console.log($scope.currentProduct);
            },
            function (data, status) {
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }

        $scope.radioProductClick = function (product) {
            $scope.checkradioasd = product.productId;
            var indexRate = $scope.productList.results.indexOf($filter('filter')($scope.productList.results, { 'productId': product.productId }, true)[0]);
            $scope.productDetails = $scope.productList.results[indexRate];
        };

        $scope.AddProductRequest = function () {
            $scope.UserId = JSON.parse(localStorage.getItem("data"));
            var x = 12;
            $scope.startDate1 = "";
            $scope.endDate = "";
            x= parseInt($scope.packageLimit.value); 
            if ($scope.ShowDate == true) {
                $scope.startDate1 = new Date($('#startdate').data('date'));
                $scope.startDate = new Date($('#startdate').data('date'));
                $scope.newdate = $scope.startDate.setMonth($scope.startDate.getMonth() + x);
                $scope.endDate = new Date($scope.newdate);
            }
            else {
                $scope.startDate1 = $scope.currentProduct.startDate;
                $scope.today = new Date($scope.currentProduct.endDate); //$scope.ddd= new Date( $scope.currentProduct.endDate.data('date'));
              
               $scope.today.setMonth($scope.today.getMonth() + x);
            
               
               $scope.newdate = $scope.today;
                $scope.endDate = new Date($scope.newdate);
            }

            var newRequest = new AddProductResource();
            newRequest.BackageGuid = $scope.currentProduct.backageGuid;
            newRequest.StartDate = $scope.startDate1;
            newRequest.EndDate = $scope.endDate;
            newRequest.UserId = $scope.UserId;

            newRequest.$addRequest().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp",  $translate.instant('Editeduccessfully'), "success");
                    localStorage.removeItem('data');
                    $state.go('users');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

        // $scope.totalPrice = 0; 
        // $scope.getTotal = function () {
        //     $scope.totalPrice = 10; 

        // $scope.totalPrice = $scope.UserLimit*$scope.productDetails.price;

        // }
    }

})();