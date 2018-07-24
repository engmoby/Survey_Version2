(function() {
    angular
      .module('home')
      .factory('RegisterResource', ['$resource', 'appCONSTANTS', RegisterResource]);
  
    function RegisterResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Users/', {}, { 
        create: { method: 'POST'}, 
      })
    }
    
  }());
  