(function () {
    angular
        .module('home')
        .factory('AnswerQuestionResource', ['$resource', 'appCONSTANTS', AnswerQuestionResource])

    function AnswerQuestionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Questions/', {}, {
            getAllQuestions: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/GetAllQuestionsByUserId', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true },
            CheckAnswersByProjectId: { method: 'GET', url: appCONSTANTS.API_URL + 'Answers/CheckAnswersByProjectId/:ProjectId', useToken: true },
        })
    }

}());
