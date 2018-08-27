(function() {
	angular
		.module('core')
		.constant('appCONSTANTS', {
			//    'API_URL': 'http://localhost:32569/api/', 
				'API_URL': 'https://surveyv2.azurewebsites.net/api/',
		 'defaultLanguage':'en',
		 'supportedLanguage':{
			 'en':{'key':'en','value':'english'},
			 'ar':{'key':'ar','value':'arabic'}
		 },
		 'QuestionType':[
			 {id:0,text:"Checkbox"},
			 {id:1,text:"Rate"},
			 {id:2,text:"LikeDislike"}
		]
		})
		.constant('messageTypeEnum', {
      success: 0,
      warning: 1,
      error: 2
		}).constant('userRolesEnum', {
			GlobalAdmin:"GlobalAdmin"
    });
}());