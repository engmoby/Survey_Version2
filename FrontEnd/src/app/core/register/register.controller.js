(function() {
    'use strict';

    angular
        .module('home')
        .controller('registerController', ['$rootScope', '$scope','$translate','$state','RegisterResource','$localStorage','authorizationService','appCONSTANTS','ToastService',registerController]);
   
    function registerController($rootScope, $scope,$translate,$state,RegisterResource, $localStorage,authorizationService,appCONSTANTS,ToastService) {
        var vm = this;
        
		$scope.AddNewclient = function(){
			var newClient = new RegisterResource();
            newClient.FirstName = $scope.FirstName;
            newClient.LastName = $scope.LastName;
            newClient.Email = $scope.Email;
            newClient.Phone1 = $scope.Phone1;
            newClient.Phone2 = $scope.Phone2;
            newClient.Password = $scope.Password;
            newClient.$create().then(
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",$translate.instant('ClientAddSuccess'),"success");
                    
                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('product');
                    
					callBackFunction();
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data,"error");
                }
            );
		}
	}

}())