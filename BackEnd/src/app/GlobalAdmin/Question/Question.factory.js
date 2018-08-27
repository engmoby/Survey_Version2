(function () {
    angular
      .module('home')
        .factory('QuestionResource', ['$resource', 'appCONSTANTS', QuestionResource]) 

    function QuestionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Questions/', {}, {
            getAllQuestions: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/GetAllQuestions', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Questions/EditQuestion', useToken: true },
            getQuestion: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/GetQuestionById/:QuestionId', useToken: true },
            getQuestionDashBoard: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/:questionId/dashboard', useToken: true }
        })
    } 

}());
