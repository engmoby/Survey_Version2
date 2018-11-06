(function () {
    angular
      .module('home') 
        .factory('AssetResource', ['$resource', 'appCONSTANTS', AssetResource])
     
    function AssetResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Assets/', {}, {
            getAllAssets: { method: 'GET', url: appCONSTANTS.API_URL + 'Assets/GetAllAssets/:ProjectId', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Assets/EditAsset', useToken: true },
            getAsset: { method: 'GET', url: appCONSTANTS.API_URL + 'Assets/GetAssetById/:AssetId', useToken: true }
        })
    } 

}());
