(function() {
	angular
		.module('core')
		.constant('appCONSTANTS', {
			 'API_URL': 'http://localhost:32569/api/',
			// 'API_URL': 'https://ecatalogbackend.azurewebsites.net/api/',
			'defaultLanguage':'en'
		})
		.constant('messageTypeEnum', {
      success: 0,
      warning: 1,
      error: 2
		}).constant('userRolesEnum', {
			Client:"Client"
    });
}());