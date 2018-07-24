(function() {
  'use strict';

  angular
      .module('core')
      // registering 'lodash' as a constant to be able to inject it later
      .constant('_', window._)
      .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      })
      .filter('getById', function() {
        return function(input, productId) {
          var i=0, len=input.length;
          for (; i<len; i++) {
            if (+input[i].productId == +productId) {
              return input[i];
            }
          }
          return null;
        }
      }) 
}());
