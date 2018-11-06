(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('updateTicketConfigController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'configResource', 'ToastService', 'allEmailsPrepService','ticketSchedulerPrepService', updateTicketConfigController])

    function updateTicketConfigController($scope, blockUI, $http, $state, appCONSTANTS, $translate, configResource,
        ToastService, allEmailsPrepService,ticketSchedulerPrepService) {
        
        blockUI.start("Loading..."); 
            
        var vm = this;
        vm.users = allEmailsPrepService;
        vm.ticketScheduler = ticketSchedulerPrepService;
        vm.ticketScheduler.emails = vm.ticketScheduler.emails.split(';')
        // vm.users = [];
		vm.close = function(){
			$state.go('Config');
		} 
		 
		vm.update = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new configResource();
            newObj.id =  vm.ticketScheduler.id; 
            newObj.status =  vm.ticketScheduler.status; 
            newObj.time =  vm.ticketScheduler.time; 
            newObj.emails =  vm.ticketScheduler.emails.toString().replace(new RegExp(',', 'g'), ';');
            newObj.body =  vm.ticketScheduler.body;
            newObj.$updateTicketScheduler({Id:vm.ticketScheduler.id}).then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success"); 
                    $state.go('Config');
                     blockUI.stop();        


                },
                function (data, status) {
               blockUI.stop();        

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.validateEmail = function () {
            var RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var valid = true;
            vm.ticketScheduler.emails.forEach(function (element) {
                valid = RegExp.test(element);
                if (!valid)
                    return valid;

            }, this);
            return valid
        }
        blockUI.stop();
  
	}	
}());
