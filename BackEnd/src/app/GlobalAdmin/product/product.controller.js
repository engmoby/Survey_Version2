(function () {
    'use strict';

    angular
        .module('home')
        .controller('productController', ['$rootScope', '$scope', '$filter', '$translate', '$state', 'ProductResource', 'AddProductResource', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', productController]);


    function productController($rootScope, $scope, $filter, $translate, $state, ProductResource, AddProductResource, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
        vm.hide=false;
         $scope.numberLimit = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
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
          $scope.showSelectValue = function(selectedBackage) {
            $scope.packageLimit=selectedBackage.value;
         //   alert($scope.packageLimit);
           // console.log(selectedBackage);
        }
         
        $scope.checkradioasd = -1;
        $scope.productDetails = "";
        $scope.UserId = JSON.parse(localStorage.getItem("data"));

        refreshBackgrounds();
        function refreshBackgrounds() {
            var k = ProductResource.getProductsList().$promise.then(function (results) {
                $scope.productList = results
          
                console.log( $scope.productList); 
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
            vm.hide=true;
            
            if( $scope.UserLimit <= 0){
                
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('LimitUserValidation'), "error");

//                alert("must be at least 1 user");
                           return;
                         }
                            
                            $scope.startDate1 = new Date($('#startdate').data('date'));
            $scope.startDate = new Date($('#startdate').data('date'));
            var numberOfDaysToAdd = parseInt($scope.packageLimit.value) ; 
            
            $scope.newdate = $scope.startDate.setMonth($scope.startDate.getMonth() + numberOfDaysToAdd); 
            $scope.endDate = new Date($scope.newdate); 
            var newRequest = new AddProductResource();
            newRequest.ProductId = $scope.productDetails.productId;
            newRequest.UserLimit = $scope.UserLimit;
            newRequest.UserId = $scope.UserId;
            newRequest.TotalPrice = $scope.totalPrice;
            newRequest.StartDate = $scope.startDate1;
            newRequest.EndDate = $scope.endDate;
            newRequest.$addRequest().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('BackageAddSuccess'), "success");
                    localStorage.removeItem('data');
                    $state.go('users');
                                       vm.hide=false;
 
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