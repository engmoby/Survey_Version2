(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Config', {
                    url: '/Config',
                    templateUrl: './app/GlobalAdmin/Config/templates/config.html',
                    controller: 'ConfigController',
                    'controllerAs': 'configCtrl',
                    resolve: {
                        configTicketsPrepService: configTicketsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['11'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('newTicketConfig', {
                    url: '/newTicketConfig',
                    templateUrl: './app/GlobalAdmin/Config/templates/newTicketConfig.html',
                    controller: 'createTicketConfigController',
                    'controllerAs': 'ticketConfigCtrl',
                    resolve: {
                        allEmailsPrepService: allEmailsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['11'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('editTicketConfig', {
                    url: '/TicketConfig/:Id',
                    templateUrl: './app/GlobalAdmin/Config/templates/editTicketConfig.html',
                    controller: 'updateTicketConfigController',
                    'controllerAs': 'ticketConfigCtrl',
                    resolve: {
                        ticketSchedulerPrepService: ticketSchedulerPrepService,
                        allEmailsPrepService: allEmailsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['11'],
                            redirectTo: 'root'
                        }
                    }
                })
        });

    configTicketsPrepService.$inject = ['configResource']
    function configTicketsPrepService(configResource) {
        return configResource.getAllTicketScheduler().$promise;
    }

    allEmailsPrepService.$inject = ['UserResource']
    function allEmailsPrepService(UserResource) {
        return UserResource.GetAllEmails().$promise;
    }
    ticketSchedulerPrepService.$inject = ['configResource', '$stateParams']
    function ticketSchedulerPrepService(configResource, $stateParams) {
        return configResource.getTicketScheduler({ Id: $stateParams.Id }).$promise;
    }
}());
