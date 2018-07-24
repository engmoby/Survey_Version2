(function() {
    'use strict';

    angular
        .module('core')
        .config(function($stateProvider, $urlRouterProvider,) {

            $urlRouterProvider.otherwise('/'); 
            // main views
            $stateProvider
              .state('root', {
                    url: '/', 
                    controller: 'loginController',
                   
                    data: {
                       permissions: {
                          
                        }
                    }, 
                })
                .state('login', {
                    url: '/login',
                    templateUrl: './app/core/login/templates/login.html',
                    'controller': 'loginController'
                }) 
                .state('register', {
                    url: '/register',
                    templateUrl: './app/core/register/templates/register.html', 
                    controller: 'registerController',
                    'controllerAS':'registerCtrl'
                }) 

                .state('product', {
                    url: '/product',
                    templateUrl: './app/product/templates/product.html', 
                    controller: 'productController',
                    'controllerAS':'productCtrl',
                    // resolve: {
                    //     productPrepService: productPrepService
                    // }
                })
        });
        productPrepService.$inject = ['ProductResource']
        function productPrepService(ProductResource) {
            return ProductResource.getAllProducts().$promise;
        }
}());
