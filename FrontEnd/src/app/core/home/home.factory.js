(function() {
    angular
      .module('home')
      .factory('HomeResource', ['$resource', 'appCONSTANTS', HomeResource])    

    function HomeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Menus/:MenuId', {}, {
        getAllMenus: { method: 'GET', useToken: true, params:{lang:'@lang'} } 
      })
    }
      


}());
  