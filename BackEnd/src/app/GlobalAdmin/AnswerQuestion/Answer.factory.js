(function () {
    angular
        .module('home')
        .factory('AnswerResource', ['$resource', 'appCONSTANTS', AnswerResource])

    function AnswerResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Answers/', {}, {
            getAllAnswers: { method: 'GET', url: appCONSTANTS.API_URL + 'Answers/GetAllAnswers', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true,isArray:true }, 
            getAnswer: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/:questionId/answers', useToken: true }
            
        })
    }

}());
