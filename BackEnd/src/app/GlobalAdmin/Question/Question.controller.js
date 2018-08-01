(function () {
    'use strict';

    angular
        .module('home')
        .controller('QuestionController', [ 'blockUI', '$scope',  'QuestionResource', 'QuestionPrepService',  
            'ToastService', QuestionController]);


    function QuestionController(  blockUI, $scope,   QuestionResource, QuestionPrepService, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        blockUI.start("Loading..."); 
            
        var vm = this;
        $scope.totalCount = QuestionPrepService.totalCount;
        $scope.QuestionList = QuestionPrepService;
        function refreshQuestions() {

            blockUI.start("Loading..."); 
            
            var k = QuestionResource.getAllQuestions({page:vm.currentPage}).$promise.then(function (results) { 
                $scope.QuestionList = results  
                blockUI.stop();
                
            },
            function (data, status) {
                blockUI.stop();
                
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        vm.showMore = function (element) {
            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshQuestions();
        }
        blockUI.stop();
        
    }

})();
