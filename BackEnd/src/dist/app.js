(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: './app/GlobalAdmin/user/templates/user.html',
                    controller: 'userController',
                    'controllerAs': 'userCtrl',
                    resolve: {
                        userPrepService: userPrepService,
                        RolePrepService: RolePrepService,
                        userConsumedPrepService: userConsumedPrepService,
                        AreaPrepService: AllAreaPrepService,
                        DepartmentPrepService: AllDepartmentPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('addUser', {
                    url: '/addUser',
                    templateUrl: './app/GlobalAdmin/user/templates/addUser.html',
                    controller: 'userController',
                    'controllerAs': 'userCtrl',

                    resolve: {
                        userPrepService: userPrepService,
                        RolePrepService: RolePrepService,
                        userConsumedPrepService: userConsumedPrepService,
                        AreaPrepService: AllAreaPrepService,
                        DepartmentPrepService: AllDepartmentPrepService

                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }


                })

                .state('editUser', {
                    url: '/editUser/:userId',
                    templateUrl: './app/GlobalAdmin/user/templates/editUser.html',
                    controller: 'editUserController',
                    'controllerAs': 'editUserCtrl',
                    resolve: {
                        EditUserPrepService: EditUserPrepService,
                        RolePrepService: RolePrepService,
                        AreaPrepService: AllAreaPrepService,
                        DepartmentPrepService: AllDepartmentPrepService

                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })
                

                .state('Role', {
                    url: '/Role',
                    templateUrl: './app/GlobalAdmin/Role/templates/Role.html',
                    controller: 'RoleController',
                    'controllerAs': 'RoleCtrl',
                    resolve: {
                        RolePrepService: RolePrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newRole', {
                    url: '/newRole',
                    templateUrl: './app/GlobalAdmin/Role/templates/new.html',
                    controller: 'createRoleDialogController',
                    'controllerAs': 'newRoleCtrl',
                    resolve: {
                        PermissionPrepService: PermissionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editrole', {
                    url: '/editrole/:roleId',
                    templateUrl: './app/GlobalAdmin/Role/templates/edit.html',
                    controller: 'editRoleDialogController',
                    'controllerAs': 'editRoleCtrl',
                    resolve: {
                        RoleByIdPrepService: RoleByIdPrepService,
                        PermissionPrepService: PermissionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('Area', {
                    url: '/Area',
                    templateUrl: './app/GlobalAdmin/Area/templates/Area.html',
                    controller: 'AreaController',
                    'controllerAs': 'AreaCtrl',
                    resolve: {
                        AreaPrepService: AreaPrepService
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newArea', {
                    url: '/newArea',
                    templateUrl: './app/GlobalAdmin/Area/templates/new.html',
                    controller: 'createAreaDialogController',
                    'controllerAs': 'newAreaCtrl',
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editArea', {
                    url: '/editArea/:areaId',
                    templateUrl: './app/GlobalAdmin/Area/templates/edit.html',
                    controller: 'editAreaDialogController',
                    'controllerAs': 'editAreaCtrl',
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('newBranch', {
                    url: '/newBranch/:areaId',
                    templateUrl: './app/GlobalAdmin/Branch/templates/new.html',
                    controller: 'createBranchDialogController',
                    'controllerAs': 'newBranchCtrl',
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editBranch', {
                    url: '/editBranch/:branchId',
                    templateUrl: './app/GlobalAdmin/Branch/templates/edit.html',
                    controller: 'editBranchDialogController',
                    'controllerAs': 'editBranchCtrl',
                    resolve: {
                        BranchByIdPrepService: BranchByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('Department', {
                    url: '/Department',
                    templateUrl: './app/GlobalAdmin/Department/templates/Department.html',
                    controller: 'DepartmentController',
                    'controllerAs': 'DepartmentCtrl',
                    resolve: {
                        DepartmentPrepService: DepartmentPrepService
                    },
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newDepartment', {
                    url: '/newDepartment',
                    templateUrl: './app/GlobalAdmin/Department/templates/new.html',
                    controller: 'createDepartmentDialogController',
                    'controllerAs': 'newDepartmentCtrl',
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editDepartment', {
                    url: '/editDepartment/:departmentId',
                    templateUrl: './app/GlobalAdmin/Department/templates/edit.html',
                    controller: 'editDepartmentDialogController',
                    'controllerAs': 'editDepartmentCtrl',
                    resolve: {
                        DepartmentByIdPrepService: DepartmentByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('newCategory', {
                    url: '/newCategory/:departmentId',
                    templateUrl: './app/GlobalAdmin/Category/templates/new.html',
                    controller: 'createCategoryDialogController',
                    'controllerAs': 'newCategoryCtrl',
                    resolve: {
                        DepartmentByIdPrepService: DepartmentByIdPrepService,
                        RolePrepService: RolePrepService
                    },
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editCategory', {
                    url: '/editCategory/:categoryId',
                    templateUrl: './app/GlobalAdmin/Category/templates/edit.html',
                    controller: 'editCategoryDialogController',
                    'controllerAs': 'editCategoryCtrl',
                    resolve: {
                        CategoryByIdPrepService: CategoryByIdPrepService,
                        RolePrepService: RolePrepService
                    },
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('AnswerQuestion', {
                    url: '/AnswerQuestion',
                    templateUrl: './app/GlobalAdmin/AnswerQuestion/templates/AnswerQuestion.html',
                    controller: 'AnswerQuestionDialogController',
                    'controllerAs': 'AnswerQuestionCtrl',
                    resolve: {
                        AreaPrepService: AllAreaPrepService,
                        
                        AnswerQuestionPrepService: AnswerQuestionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['7'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('Question', {
                    url: '/Question',
                    templateUrl: './app/GlobalAdmin/Question/templates/Question.html',
                    controller: 'QuestionController',
                    'controllerAs': 'QuestionCtrl',
                    resolve: {
                        QuestionPrepService: QuestionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['6'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newQuestion', {
                    url: '/newQuestion',
                    templateUrl: './app/GlobalAdmin/Question/templates/new.html',
                    controller: 'createQuestionDialogController',
                    'controllerAs': 'newQuestionCtrl',
                    resolve: {
                        DepartmentPrepService: AllDepartmentPrepService
                    },
                    data: {
                        permissions: {
                            only: ['6'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editQuestion', {
                    url: '/editQuestion/:questionId',
                    templateUrl: './app/GlobalAdmin/Question/templates/edit.html',
                    controller: 'editQuestionDialogController',
                    'controllerAs': 'editQuestionCtrl',
                    resolve: {
                        QuestionByIdPrepService: QuestionByIdPrepService,
                        DepartmentPrepService: AllDepartmentPrepService
                    },
                    data: {
                        permissions: {
                            only: ['6'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('Answers', {
                    url: '/Answers',
                    templateUrl: './app/GlobalAdmin/Answers/templates/answers.html',
                    controller: 'AnswersController',
                    'controllerAs': 'answersCtrl',
                    resolve: {
                        AreaPrepService: AllAreaPrepService,
                        AnswerQuestionPrepService: AnswerQuestionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['8'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('Tickets', {
                    url: '/Tickets',
                    templateUrl: './app/GlobalAdmin/Ticket/templates/tickets.html',
                    controller: 'TicketsController',
                    'controllerAs': 'ticketsCtrl',
                    resolve: {
                        AreaPrepService: AllAreaPrepService,
                        DepartmentPrepService: AllDepartmentPrepService,
                        TicketsPrepService: TicketsPrepService,
                        UserAreaPrepService: UserAreaPrepService,
                        UserDepartmentPrepService: UserDepartmentPrepService
                    },
                    data: {
                        permissions: {
                            only: ['9'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('newTicket', {
                    url: '/newTicket',
                    templateUrl: './app/GlobalAdmin/Ticket/templates/newTicket.html',
                    controller: 'createTicketcontroller',
                    'controllerAs': 'createTicketCtrl',
                    resolve: {
                        DepartmentPrepService: AllDepartmentPrepService,
                        UserAreaPrepService: UserAreaPrepService
                    },
                    data: {
                        permissions: {
                            only: ['9'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('TicketDetails', {
                    url: '/Tickets/:ticketId',
                    templateUrl: './app/GlobalAdmin/Ticket/templates/TicketDetails.html',
                    controller: 'TicketDetailsController',
                    'controllerAs': 'ticketDetailsCtrl',
                    resolve: {
                        TicketPrepService: TicketPrepService

                    },
                    data: {
                        permissions: {
                            only: ['9'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('Dashboard', {
                    url: '/Dashboard',
                    templateUrl: './app/GlobalAdmin/dashboard/templates/dashboard.html',
                    controller: 'dashboardController',
                    'controllerAs': 'dashboardCtrl',
                    resolve: {
                        TicketDashboardPrepService: TicketDashboardPrepService,
                        AnswerQuestionPrepService: AnswerQuestionPrepService

                    },
                    data: {
                        permissions: {
                            only: ['10'],
                            redirectTo: 'root'
                        }
                    }
                })

        });
    
    userPrepService.$inject = ['UserResource']
    function userPrepService(UserResource) {
        return UserResource.getAllUsers().$promise;
    }

    EditUserPrepService.$inject = ['UserResource', '$stateParams']
    function EditUserPrepService(GetUserResource, $stateParams) {
        return GetUserResource.getUser({ userId: $stateParams.userId }).$promise;
    }

    userConsumedPrepService.$inject = ['UserResource']
    function userConsumedPrepService(UserResource) {
        return UserResource.getUserLimit().$promise;
    }

    
    userTypePrepService.$inject = ['UserTypeResource']
    function userTypePrepService(UserTypeResource) {
        return UserTypeResource.getAllUserTypes().$promise;
    }


    UserTypeByIdPrepService.$inject = ['UserTypeResource', '$stateParams']
    function UserTypeByIdPrepService(UserTypeResource, $stateParams) {
        return UserTypeResource.getUserType({ userTypeId: $stateParams.userTypeId }).$promise;
    }

    
    RolePrepService.$inject = ['RoleResource']
    function RolePrepService(RoleResource) {
        return RoleResource.getAllRoles().$promise;
    }

    RoleByIdPrepService.$inject = ['RoleResource', '$stateParams']
    function RoleByIdPrepService(RoleResource, $stateParams) {
        return RoleResource.getRole({ roleId: $stateParams.roleId }).$promise;
    }

    PermissionPrepService.$inject = ['PermissionResource']
    function PermissionPrepService(PermissionResource) {
        return PermissionResource.getAllPermissions().$promise;
    }
    
    AreaPrepService.$inject = ['AreaResource']
    function AreaPrepService(AreaResource) {
        return AreaResource.getAllAreas().$promise;
    }

    AllAreaPrepService.$inject = ['AreaResource']
    function AllAreaPrepService(AreaResource) {
        return AreaResource.getAllAreas({ pageSize: 0 }).$promise;
    }

    AreaByIdPrepService.$inject = ['AreaResource', '$stateParams']
    function AreaByIdPrepService(AreaResource, $stateParams) {
        return AreaResource.getArea({ areaId: $stateParams.areaId }).$promise;
    }


    
    BranchPrepService.$inject = ['BranchResource']
    function BranchPrepService(BranchResource) {
        return BranchResource.getAllBranchs().$promise;
    }

    BranchByIdPrepService.$inject = ['BranchResource', '$stateParams']
    function BranchByIdPrepService(BranchResource, $stateParams) {
        return BranchResource.getBranch({ branchId: $stateParams.branchId }).$promise;
    }

    
    DepartmentPrepService.$inject = ['DepartmentResource']
    function DepartmentPrepService(DepartmentResource) {
        return DepartmentResource.getAllDepartments().$promise;
    }

    AllDepartmentPrepService.$inject = ['DepartmentResource']
    function AllDepartmentPrepService(DepartmentResource) {
        return DepartmentResource.getAllDepartments({ pageSize: 0 }).$promise;
    }

    DepartmentByIdPrepService.$inject = ['DepartmentResource', '$stateParams']
    function DepartmentByIdPrepService(DepartmentResource, $stateParams) {
        return DepartmentResource.getDepartment({ departmentId: $stateParams.departmentId }).$promise;
    }



    
    CategoryPrepService.$inject = ['CategoryResource']
    function CategoryPrepService(CategoryResource) {
        return CategoryResource.getAllCategorys().$promise;
    }

    CategoryByIdPrepService.$inject = ['CategoryResource', '$stateParams']
    function CategoryByIdPrepService(CategoryResource, $stateParams) {
        return CategoryResource.getCategory({ categoryId: $stateParams.categoryId }).$promise;
    }

    
    AnswerQuestionPrepService.$inject = ['AnswerQuestionResource']
    function AnswerQuestionPrepService(AnswerQuestionResource) {
        return AnswerQuestionResource.getAllQuestions().$promise;
    }




    
    QuestionPrepService.$inject = ['QuestionResource']
    function QuestionPrepService(QuestionResource) {
        return QuestionResource.getAllQuestions().$promise;
    }

    QuestionByIdPrepService.$inject = ['QuestionResource', '$stateParams']
    function QuestionByIdPrepService(QuestionResource, $stateParams) {
        return QuestionResource.getQuestion({ questionId: $stateParams.questionId }).$promise;
    }

    TicketsPrepService.$inject = ['TicketResource']
    function TicketsPrepService(TicketResource) {
        return TicketResource.getTickets().$promise;
    }

    TicketPrepService.$inject = ['TicketResource', '$stateParams']
    function TicketPrepService(TicketResource, $stateParams) {
        return TicketResource.getTicket({ ticketId: $stateParams.ticketId }).$promise;
    }

    UserAreaPrepService.$inject = ['UserResource']
    function UserAreaPrepService(UserResource) {
        return UserResource.getUserArea().$promise;
    }
    UserDepartmentPrepService.$inject = ['UserResource']
    function UserDepartmentPrepService(UserResource) {
        return UserResource.getUserDepartments().$promise;
    }

    TicketDashboardPrepService.$inject = ['dashboardResource']
    function TicketDashboardPrepService(dashboardResource) {
        return dashboardResource.getTicketsDashboard().$promise;
    }
}());
(function() {
    'use strict';

      angular
      .module('home')
      .config(config)
      .run(runBlock);

      config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$rootScope', 'ngProgressLite' ];

      function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;

      }

      function runBlock($rootScope, ngProgressLite ) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          startProgress();
      });
      var routingDoneEvents = ['$stateChangeSuccess', '$stateChangeError', '$stateNotFound'];

        angular.forEach(routingDoneEvents, function(event) {
        $rootScope.$on(event, function(event, toState, toParams, fromState, fromParams) {
          endProgress();
        });
      });

        function startProgress() {
        ngProgressLite.start();
      }

        function endProgress() {
        ngProgressLite.done();
      }

      }
  })();
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
(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswerQuestionDialogController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource', 'AreaPrepService',
            'ToastService', AnswerQuestionDialogController]);

    function AnswerQuestionDialogController(blockUI, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource, AreaPrepService, ToastService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[6].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;
       
        console.log($scope.questionList);
        
        function init(){
            $scope.likeText = "";
            $scope.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
            $scope.areaList = [];
            $scope.areaList.push($scope.selectedArea);
            $scope.areaList = $scope.areaList.concat(AreaPrepService.results)
            $scope.questionList = AnswerQuestionPrepService.results;
            $scope.IsLike = 0;
            $scope.isLikeSub = 0;
            $scope.selection = [];
            $scope.selectedRate = 0;
            $scope.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            $scope.branchList = [];
            $scope.branchList.push($scope.selectedBranch);
        }
        init();
        vm.answers = []
        $scope.questionList.forEach(function (element) {
            vm.answers.push({
                branchId: 0,
                date: new Date(),
                questionId: element.questionId,
                answerDetails: [],
                note: ""

            })
        }, this);
        $scope.toggleSelection = function toggleSelection(QuestionDetail, questionId) {

            vm.answers.forEach(function (element) {
                if (element.questionId == questionId) {
                    var idx = element.answerDetails.indexOf(QuestionDetail);
                    
                    if (idx > -1) {
                        
                        element.answerDetails.splice(idx, 1);

                    }

                    
                    else {
                        
                        element.answerDetails.push({ questionDetailsId: QuestionDetail.questionDetailsId });
                    }
                }
            }, this);

        };
        $scope.rate = 3;
        $scope.onItemRating = function (rating, questionId) {
            
            vm.answers.forEach(function (element) {
                if (element.questionId == questionId) {
                    element.answerDetails = [];
                    element.answerDetails.push({ value: rating });
                }
            }, this);
            
            
        };


        $scope.areaChange = function () {
            
            for (var i = $scope.areaList.length - 1; i >= 0; i--) {
                if ($scope.areaList[i].areaId == 0) {
                    $scope.areaList.splice(i, 1);
                }
            }
            $scope.branchList = [];
            $scope.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            $scope.branchList.push($scope.selectedBranch);
            $scope.branchList = $scope.branchList.concat($scope.selectedArea.branches);
        }

        $scope.branchChange = function () {
            for (var i = $scope.branchList.length - 1; i >= 0; i--) {
                if ($scope.branchList[i].branchId == 0) {
                    $scope.branchList.splice(i, 1);
                }
            }
        }


        $scope.AddAnswer = function (list) {
            blockUI.start("Loading...");
            debugger;
            var submitAnswer = new AnswerResource();
            vm.answers.forEach(function (element) {
                element.branchId = $scope.selectedBranch.branchId;
                var fromDate = $('#startdate').val().split('/')
                element.date =(new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
                
            }, this);
            
            AnswerResource.create(vm.answers, function (data, status) {
                blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                init();
                vm.answers = []
                $scope.questionList.forEach(function (element) {
                    vm.answers.push({
                        branchId: 0,
                        date: new Date(),
                        questionId: element.questionId,
                        answerDetails: [],
                        note: ""
                    })
                    element.l = null;
                    element.questionDetailses.forEach(function(QuestionDetail) {
                        QuestionDetail.values = null;
                    }, this);
                }, this);
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUsers();
        }

        blockUI.stop();


        vm.answersValid = function () {
            var isInValid = false;
            vm.answers.forEach(function (element) {
                if (element.answerDetails.length <= 0) {
                    isInValid = true
                }
            }, this);
            if ($('#startdate').data('date') == null || $scope.selectedArea.areaId == 0 || $scope.selectedBranch.branchId == 0) {
                isInValid = true
            }
            return isInValid;
        }
    }

}());(function () {
    angular
        .module('home')
        .factory('AnswerQuestionResource', ['$resource', 'appCONSTANTS', AnswerQuestionResource])

    function AnswerQuestionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Questions/', {}, {
            getAllQuestions: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/GetAllQuestionsByUserId', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true },
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswersController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource', 'AreaPrepService',
            'ToastService', AnswersController]);

    function AnswersController(blockUI, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource, AreaPrepService, ToastService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[7].children[0]).addClass("active")

        var vm = this;
        vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "جميع المناطق" } };
        vm.areaList = [];
        vm.areaList.push(vm.selectedArea);
        vm.areaList = vm.areaList.concat(AreaPrepService.results)
        vm.questionList = AnswerQuestionPrepService.results;
        vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
        vm.branchList = [];
        vm.branchList.push(vm.selectedBranch);
        console.log(vm.questionList);

        vm.questionList.forEach(function (element) {
            element.page = 1;
            element.answers = [];
            element.showAnswer = false
        }, this);


        vm.areaChange = function () {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }
        vm.viewAnswer = function (ques) {
            ques.isloading = true;
            AnswerResource.getAnswer({ questionId: ques.questionId, page: ques.page, areaId: vm.areaId, branchId: vm.branchId, from: from, to: to }).$promise.then(function (results) {
                ques.isloading = false;
                ques.answers = results;
            },
                function (data, status) {
                    ques.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        var from = ""
        var to = ""
        vm.areaId = 0
        vm.branchId = 0
        vm.applyFilter = function () {
            vm.questionList.forEach(function (element) {
                element.page = 1;
                element.answers = [];
                element.showAnswer = false
            }, this);
            from = ""
            if ($('#fromdate').val() != "") {
                var fromDate = $('#fromdate').val().split('/')
                from = (new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
            }
            to = ""
            if ($('#todate').val() != "") {
                var toDate = $('#todate').val().split('/')
                to = (new Date(toDate[1] + "/" + toDate[0] + "/" + toDate[2])).toISOString().replace('Z', '');
            }
            vm.areaId = vm.selectedArea.areaId;
            vm.branchId = vm.selectedBranch.branchId;
        }

        vm.changePage = function (page, ques) {
            ques.isloading = true;
            ques.page = page
            AnswerResource.getAnswer({ questionId: ques.questionId, page: ques.page, areaId: vm.areaId, branchId: vm.branchId, from: from, to: to }).$promise.then(function (results) {
                ques.isloading = false;
                ques.answers = results;
            },
                function (data, status) {
                    ques.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


    }
}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('AreaController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AreaResource', 'AreaPrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', AreaController]);


    function AreaController($rootScope, blockUI, $scope, $filter, $translate,
        $state, AreaResource, AreaPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = AreaPrepService.totalCount;
        $scope.AreaList = AreaPrepService;
        function refreshAreas() {

            blockUI.start("Loading..."); 

                        var k = AreaResource.getAllAreas({page:vm.currentPage}).$promise.then(function (results) { 
                $scope.AreaList = results  
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
            refreshAreas();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('AreaResource', ['$resource', 'appCONSTANTS', AreaResource]) 

    function AreaResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
            getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Areas/GetAllAreas', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Areas/EditArea', useToken: true },
            getArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Areas/GetAreaById/:AreaId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createAreaDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'AreaResource', 'ToastService', '$rootScope', createAreaDialogController])

    function createAreaDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, AreaResource,
        ToastService, $rootScope) {

                blockUI.start("Loading..."); 

            		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Area');
		} 

		 		vm.AddNewArea = function () {
            blockUI.start("Loading..."); 

                        var newObj = new AreaResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Area');
                     blockUI.stop();        


                },
                function (data, status) {
               blockUI.stop();        

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();

  	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editAreaDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'AreaResource', 'ToastService',
            'AreaByIdPrepService', editAreaDialogController])

    function editAreaDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, AreaResource, ToastService, AreaByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Area = AreaByIdPrepService; 
        vm.Close = function () {
            $state.go('Area');
        }
        vm.UpdateArea = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new AreaResource();
            updateObj.AreaId = vm.Area.areaId;
            updateObj.titleDictionary = vm.Area.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Area');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();

        	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('BranchController', ['$rootScope', '$scope', '$filter', '$translate',
            '$state', 'BranchResource',   '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', BranchController]);


    function BranchController($rootScope, $scope, $filter, $translate,
        $state, BranchResource,  $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        blockUI.start("Loading..."); 

                    refreshBranchs();

        function refreshBranchs() {
           blockUI.start("Loading..."); 

                        var k = BranchResource.getAllBranchs().$promise.then(function (results) {
                $scope.BranchList = results;
                blockUI.stop();

                            },
            function (data, status) {
                blockUI.stop();

                                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }

    }

})();
(function () {
    angular
      .module('home')
        .factory('BranchResource', ['$resource', 'appCONSTANTS', BranchResource]) 

    function BranchResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Branchs/', {}, {
            getAllBranchs: { method: 'GET', url: appCONSTANTS.API_URL + 'Branchs/GetAllBranchs', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Branchs/EditBranch', useToken: true },
            getBranch: { method: 'GET', url: appCONSTANTS.API_URL + 'Branchs/GetBranchById/:BranchId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createBranchDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate',
            'BranchResource', 'ToastService', '$rootScope', 'AreaByIdPrepService', createBranchDialogController])

    function createBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource,
        ToastService, $rootScope, AreaByIdPrepService) {
		var vm = this;
		vm.Area = AreaByIdPrepService;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
		    $state.go('Area');
		} 

		 		vm.AddNewBranch = function () {
            var newObj = new BranchResource();
		    newObj.AreaId = vm.Area.areaId;
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Area');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

  	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editBranchDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate', 'BranchResource', 'ToastService',
            'BranchByIdPrepService', editBranchDialogController])

    function editBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource, ToastService, BranchByIdPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Branch = BranchByIdPrepService; 
        vm.close = function () {
            $state.go('Area');
        }
        vm.UpdateBranch = function () { 
            var updateObj = new BranchResource();
            updateObj.BranchId = vm.Branch.branchId;
            updateObj.titleDictionary = vm.Branch.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Area');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('DepartmentController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'DepartmentResource', 'DepartmentPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', DepartmentController]);


    function DepartmentController($rootScope, blockUI, $scope, $filter, $translate,
        $state, DepartmentResource,DepartmentPrepService,  $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

           $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

                blockUI.start("Loading..."); 

                    $scope.totalCount = DepartmentPrepService.totalCount;
        $scope.DepartmentList = DepartmentPrepService;

        console.log( $scope.DepartmentList);
        var vm = this;
        function refreshDepartments() {
        blockUI.start("Loading..."); 

                        var k = DepartmentResource.getAllDepartments({ page: vm.currentPage }).$promise.then(function (results) { 
                $scope.DepartmentList = results 
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
            refreshDepartments();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('DepartmentResource', ['$resource', 'appCONSTANTS', DepartmentResource]) 

    function DepartmentResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Departments/', {}, {
            getAllDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Departments/GetAllDepartments', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Departments/EditDepartment', useToken: true },
            getDepartment: { method: 'GET', url: appCONSTANTS.API_URL + 'Departments/GetDepartmentById/:DepartmentId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createDepartmentDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'DepartmentResource', 'ToastService', '$rootScope', createDepartmentDialogController])

    function createDepartmentDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, DepartmentResource,
        ToastService, $rootScope) {
        blockUI.start("Loading..."); 

            		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Department');
		} 

		 		vm.AddNewDepartment = function () {
            blockUI.start("Loading..."); 

                        var newObj = new DepartmentResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                  blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Department');

                },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();  
	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editDepartmentDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'DepartmentResource', 'ToastService',
            'DepartmentByIdPrepService', editDepartmentDialogController])

    function editDepartmentDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, DepartmentResource, ToastService, DepartmentByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Department = DepartmentByIdPrepService; 
        vm.Close = function () {
            $state.go('Department');
        }
        vm.UpdateDepartment = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new DepartmentResource();
            updateObj.DepartmentId = vm.Department.departmentId;
            updateObj.titleDictionary = vm.Department.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Department');

                },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();

        	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('CategoryController', ['$rootScope', '$scope', '$filter', '$translate',
            '$state', 'CategoryResource',   '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', CategoryController]);


    function CategoryController($rootScope, $scope, $filter, $translate,
        $state, CategoryResource,  $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        refreshCategorys();

        function refreshCategorys() {
            blockUI.start("Loading..."); 

                        var k = CategoryResource.getAllCategorys().$promise.then(function (results) {
                $scope.CategoryList = results;
                blockUI.stop();

                            },
            function (data, status) {
                blockUI.stop();                
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }

    }

})();
(function () {
    angular
      .module('home')
        .factory('CategoryResource', ['$resource', 'appCONSTANTS', CategoryResource]) 

    function CategoryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Category/', {}, {
            getAllCategorys: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetAllCategories', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Category/EditCategory', useToken: true },
            getCategory: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetCategoryById/:CategoryId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createCategoryDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate',
            'CategoryResource','RolePrepService', 'ToastService', '$rootScope', 'DepartmentByIdPrepService', createCategoryDialogController])

    function createCategoryDialogController($scope, $http, $state, appCONSTANTS, $translate, CategoryResource,RolePrepService,
        ToastService, $rootScope, DepartmentByIdPrepService) {
		var vm = this;
		vm.Department = DepartmentByIdPrepService;
		vm.language = appCONSTANTS.supportedLanguage;
        $scope.roleList = RolePrepService.results;
		vm.close = function(){
		    $state.go('Department');
		} 

		 		vm.AddNewCategory = function () {
            var newObj = new CategoryResource();
		    newObj.DepartmentId = vm.Department.departmentId;
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.CategoryRoles = vm.selectedCategoryRoles;
            newObj.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Department');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

  	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editCategoryDialogController', ['$scope','$filter', '$http', '$state', 'appCONSTANTS', '$translate',
         'CategoryResource', 'RolePrepService','ToastService','CategoryByIdPrepService', editCategoryDialogController])

    function editCategoryDialogController($scope,$filter, $http, $state, appCONSTANTS, $translate, CategoryResource,RolePrepService,
         ToastService,CategoryByIdPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Category = CategoryByIdPrepService; 
        $scope.roleList = RolePrepService.results; 
        vm.selectedCategoryRoles = [];

                console.log(vm.Category);

                 var i;
        for (i = 0; i < vm.Category.categoryRoles.length; i++) {
            var indexRate = $scope.roleList.indexOf($filter('filter')($scope.roleList, { 'roleId': vm.Category.categoryRoles[i].roleId }, true)[0]);
            vm.selectedCategoryRoles.push($scope.roleList[indexRate]);

        }

        vm.Close = function () {
            $state.go('Department');
        }
        vm.UpdateCategory = function () { 
            var updateObj = new CategoryResource();
            updateObj.CategoryId = vm.Category.categoryId;
            updateObj.titleDictionary = vm.Category.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
            updateObj.CategoryRoles = vm.selectedCategoryRoles;
		    updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Department');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('QuestionController', [ 'blockUI', '$scope', 'appCONSTANTS', 'QuestionResource', 'QuestionPrepService',  
            'ToastService', QuestionController]);


    function QuestionController(  blockUI, $scope, appCONSTANTS,  QuestionResource, QuestionPrepService, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")

        blockUI.start("Loading..."); 
            
        var vm = this;
		$scope.QuestionTypeList = appCONSTANTS.QuestionType;
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
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createQuestionDialogController', ['$scope','$window', 'blockUI',  '$state', 'appCONSTANTS', '$translate',
            'QuestionResource', 'ToastService' ,'DepartmentPrepService', createQuestionDialogController])

    function createQuestionDialogController($scope,$window, blockUI,  $state, appCONSTANTS, $translate, QuestionResource,ToastService,DepartmentPrepService) {
        
        blockUI.start("Loading..."); 
            
        var vm = this;
        vm.selectedDepartment = "";
        vm.selectedCategory = "";
        vm.selectedQuestionType="";
		vm.QuestionTypeList = appCONSTANTS.QuestionType;
		vm.DepartmentList=DepartmentPrepService.results;
 
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Question');
        } 
        
        vm.departmentChange = function () {
            vm.categoryList = vm.selectedDepartment.categories;
        }
 
		vm.AddNewQuestion = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new QuestionResource();
            newObj.titleDictionary = vm.titleDictionary; 
           newObj.QuestionDetailses = []; 
            $scope.questionelemnt.forEach(element => {
                newObj.QuestionDetailses.push({titleDictionary:{en:element.questionEn,ar:element.questionAr}});
            });
            
            newObj.CategoryId =  vm.selectedCategory.categoryId; 
            newObj.QuestionTypeId = vm.selectedQuestionType.id; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
                 ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                      $state.go('Question');
                     blockUI.stop();    
                },
                function (data, status) {
               blockUI.stop();        

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();
  
        var counter=0;
        $scope.questionelemnt = [ {id:counter, questionEn : '', questionAr : '',inline:true} ];
    
        $scope.newItem = function($event){
            counter++;
            $scope.questionelemnt.push(  { id:counter, questionEn : '', questionAr : '',inline:true} );
            $event.preventDefault();
        }
        $scope.inlinef= function($event,inlinecontrol){
            var checkbox = $event.target;
            if(checkbox.checked){
                $('#'+ inlinecontrol).css('display','inline');
            }else{
                $('#'+ inlinecontrol).css('display','');
            }
    
        }
        $scope.showitems = function($event){
            $('#displayitems').css('visibility','none');
        }


	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editQuestionDialogController', ['$scope','$filter', 'blockUI',  '$state', 'appCONSTANTS', '$translate',
         'QuestionResource', 'ToastService','DepartmentPrepService',
            'QuestionByIdPrepService', editQuestionDialogController])

    function editQuestionDialogController($scope, $filter,blockUI, $state, appCONSTANTS, $translate, QuestionResource,
         ToastService, DepartmentPrepService,QuestionByIdPrepService) {
        blockUI.start("Loading..."); 
        
        var vm = this; 
		     
        var vm = this;
        vm.selectedDepartment = "";
        vm.selectedCategory = "";
        vm.selectedQuestionType="";
        vm.Question=QuestionByIdPrepService;
		vm.QuestionTypeList = appCONSTANTS.QuestionType;
		vm.DepartmentList=DepartmentPrepService.results;
 console.log(QuestionByIdPrepService);
		vm.language = appCONSTANTS.supportedLanguage;
       
        var indexDepartment = vm.DepartmentList.indexOf($filter('filter')(vm.DepartmentList, { 'departmentId': vm.Question.category.departmentId }, true)[0]);
            vm.selectedDepartment=vm.DepartmentList[indexDepartment];
 
            
            vm.categoryList = vm.selectedDepartment.categories;
        var indexCategory = vm.selectedDepartment.categories.indexOf($filter('filter')(vm.selectedDepartment.categories, { 'categoryId': vm.Question.category.categoryId }, true)[0]);
        vm.selectedCategory=vm.selectedDepartment.categories[indexCategory];  
 
        var indexType = vm.QuestionTypeList.indexOf($filter('filter')(vm.QuestionTypeList, { 'id': vm.Question.questionTypeId }, true)[0]);
        vm.selectedQuestionType=vm.QuestionTypeList[indexType]; 
        
        $scope.questionelemnt = []; 

        vm.Question.questionDetailses.forEach(element => { 
            $scope.questionelemnt.push(
                {
                    questionDetailsId:element.questionDetailsId,
                    questionEn:element.titleDictionary.en,
                questionAr:element.titleDictionary.ar
            }
            );
        });
        
     

        vm.Close = function () {
            $state.go('Question');
        }

        var counter=0;
      
    
        $scope.newItem = function($event){
            counter++;
            $scope.questionelemnt.push(  { id:counter, questionEn : '', questionAr : '',inline:true} );
            $event.preventDefault();
        }
        $scope.inlinef= function($event,inlinecontrol){
            var checkbox = $event.target;
            if(checkbox.checked){
                $('#'+ inlinecontrol).css('display','inline');
            }else{
                $('#'+ inlinecontrol).css('display','');
            }
    
        }
        $scope.showitems = function($event){
            $('#displayitems').css('visibility','none');
        }
        vm.departmentChange = function () {
            vm.categoryList = vm.selectedDepartment.categories;
        }
 

        vm.UpdateQuestion = function () { 
            blockUI.start("Loading..."); 
            
            var updateObj = new QuestionResource();
            updateObj.questionId = vm.Question.questionId; 
            updateObj.titleDictionary = vm.Question.titleDictionary; 
            updateObj.QuestionDetailses = []; 
             $scope.questionelemnt.forEach(element => {
                 updateObj.QuestionDetailses.push(
                     {
                        questionDetailsId:element.questionDetailsId,
                        titleDictionary:{en:element.questionEn,ar:element.questionAr}
                    });
             });
             
             
             updateObj.CategoryId =  vm.selectedCategory.categoryId; 
             updateObj.QuestionTypeId = vm.selectedQuestionType.id; 
             updateObj.IsDeleted = false; 
             updateObj.IsStatic =false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
 
                    $state.go('Question');

                },
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();
        
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('productAddSuccess'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 

                        var k = PermissionResource.getAllPermissions().$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();

                                    },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editRoleDialogController', ['$scope', 'blockUI', '$http', '$filter','$state', 'appCONSTANTS', '$translate', 'RoleResource', 'PermissionResource','PermissionPrepService', 'ToastService',
            'RoleByIdPrepService', editRoleDialogController])

    function editRoleDialogController($scope, blockUI, $http,$filter, $state, appCONSTANTS, $translate, RoleResource, PermissionResource,PermissionPrepService, ToastService, RoleByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.permissionList = PermissionPrepService.results;
        vm.Role = RoleByIdPrepService;
        console.log(vm.Role); 
        vm.selectedPermissions = [];
        vm.Close = function () {
            $state.go('Role');
        }
        var i;
        for (i = 0; i < vm.Role.permissions.length; i++) {
            var indexRate = vm.permissionList.indexOf($filter('filter')(vm.permissionList, { 'permissionId': vm.Role.permissions[i].permissionId }, true)[0]);
            vm.selectedPermissions.push(vm.permissionList[indexRate]);

        }




               vm.UpdateType = function () {
            blockUI.start("Loading..."); 

                        var updateObj = new RoleResource();
            updateObj.RoleId = vm.Role.roleId;
            updateObj.Permissions = vm.selectedPermissions;
            updateObj.titleDictionary = vm.Role.titleDictionary;
            updateObj.IsDeleted = false;
            updateObj.IsStatic = false;
            updateObj.$update().then(
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Role');

                },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

           }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('RoleController', ['$rootScope', 'blockUI','$scope', '$filter', '$translate',
            '$state', 'RoleResource', 'RolePrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', RoleController]);


    function RoleController($rootScope, blockUI, $scope, $filter, $translate,
        $state, RoleResource,RolePrepService,  $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;

        $scope.totalCount = RolePrepService.totalCount;
        $scope.RoleList = RolePrepService;
        function refreshRoles() {
            blockUI.start("Loading..."); 

                        var k = RoleResource.getAllRoles({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.RoleList = results;
                blockUI.stop();

                            },
            function (data, status) {
                blockUI.stop();

                                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshRoles();
        }
        blockUI.stop();

            }

})();(function () {
    angular
      .module('home')
        .factory('RoleResource', ['$resource', 'appCONSTANTS', RoleResource])
        .factory('PermissionResource', ['$resource', 'appCONSTANTS', PermissionResource])

    function RoleResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Roles/', {}, {
            getAllRoles: { method: 'GET', url: appCONSTANTS.API_URL + 'Roles/GetAllRoles', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Roles/EditRole', useToken: true },
            getRole: { method: 'GET', url: appCONSTANTS.API_URL + 'Roles/GetRoleById/:RoleId', useToken: true }  

        })
    }
    function PermissionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Permissions/', {}, {
            getAllPermissions: { method: 'GET', url: appCONSTANTS.API_URL + 'Permissions/GetAllPermissions', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Permissions/EditRole', useToken: true },
            getRole: { method: 'GET', url: appCONSTANTS.API_URL + 'Permissions/GetRoleById/:RoleId', useToken: true }

        })
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('dashboardController', ['blockUI', '$scope', '$state',
            '$translate', 'dashboardResource', 'QuestionResource', 'TicketDashboardPrepService',
            'AnswerQuestionPrepService', '$filter', dashboardController]);

    function dashboardController(blockUI, $scope, $state,
        $translate, dashboardResource, QuestionResource, TicketDashboardPrepService, AnswerQuestionPrepService, $filter) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[9].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.ticketsFilter = [
                {
                    name: $translate.instant('Area'),
                    value: "area"
                },
                {
                    name: $translate.instant('Branch'),
                    value: "branch"
                },
                {
                    name: $translate.instant('Department'),
                    value: "department"
                },
                {
                    name: $translate.instant('CategoryLbl'),
                    value: "category"
                }
            ]
            vm.selectedTicketFilter = "branch"
            vm.options = {
                chart: {
                    type: 'multiBarChart',
                    height: 300,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 65,
                        left: 50
                    },
                    stacked: true,

                    duration: 100,
                    xAxis: {
                        rotateLabels: 30
                    },
                    yAxis: {
                        axisLabel: $translate.instant('ticketsCount'),
                        axisLabelDistance: -10,

                    }
                }
            };
            loadTicketDashboard(TicketDashboardPrepService);
            vm.questionList = AnswerQuestionPrepService.results;

        }
        function loadTicketDashboard(tickets) {
            var assigned = [];
            var closed = [];
            var InProgress = [];
            var Pending = [];
            var Rejected = [];
            tickets.forEach(function (element) {
                assigned.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.assignedCount
                })
                InProgress.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.inProgressCount
                })
                Pending.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.pendingCount
                })
                Rejected.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.rejectedCount
                })
                closed.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.closedCount
                })
            }, this);
            vm.data = [
                {
                    "key": $translate.instant('AssignedStatus'),
                    "values": assigned
                },
                {
                    "key": $translate.instant('InProgressStatus'),
                    "values": InProgress
                },
                {
                    "key": $translate.instant('Pending'),
                    "values": Pending
                },
                {
                    "key": $translate.instant('RejectedStatus'),
                    "values": Rejected
                },
                {
                    "key": $translate.instant('ClosedStatus'),
                    "values": closed
                }
            ];
        }
        init();

        vm.ticketFilterChange = function () {
            dashboardResource.getTicketsDashboard({ xaxis: vm.selectedTicketFilter }).$promise
                .then(function (results) {
                    loadTicketDashboard(results)
                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.getQuestionDashbard = function (question) {
            question.isloading = true;
            QuestionResource.getQuestionDashBoard({ questionId: question.questionId }).$promise
                .then(function (results) {
                    question.dashboard = results;
                    question.isloading = false;
                    if (question.questionTypeId == 0) {
                        question.data = []
                        if (question.dashboard.optionsCount != undefined) {
                            for(var element in question.dashboard.optionsCount ) {
                                question.data.push({
                                    key: ($filter('filter')(question.questionDetailses, { questionDetailsId: element }))[0].titleDictionary[$scope.selectedLanguage],
                                    y: question.dashboard.optionsCount[element]
                                })
                            }

                            question.options = {
                                chart: {
                                    type: 'pieChart',
                                    height: 350,
                                    x: function (d) { return d.key; },
                                    y: function (d) { return d.y; },
                                    showLabels: true,
                                    duration: 500,
                                    legend: {
                                        margin: {
                                            top: 5,
                                            right: 35,
                                            bottom: 5,
                                            left: 0
                                        }
                                    }
                                }
                            };
                        }
                    }
                    if (question.questionTypeId == 1) {
                        question.data = [
                            {
                                key: $translate.instant('onestar'),
                                y: question.dashboard.oneStartCount
                            },
                            {
                                key: $translate.instant('twostar'),
                                y: question.dashboard.twoStartCount
                            },
                            {
                                key: $translate.instant('threestar'),
                                y: question.dashboard.threeStartCount
                            },
                            {
                                key: $translate.instant('fourstar'),
                                y: question.dashboard.fourStartCount
                            },
                            {
                                key: $translate.instant('fivestar'),
                                y: question.dashboard.fiveStartCount
                            }
                        ]
                        question.options = {
                            chart: {
                                type: 'pieChart',
                                height: 350,
                                x: function (d) { return d.key; },
                                y: function (d) { return d.y; },
                                showLabels: true,
                                duration: 500,
                                legend: {
                                    margin: {
                                        top: 5,
                                        right: 35,
                                        bottom: 5,
                                        left: 0
                                    }
                                }
                            }
                        };
                    }
                    if (question.questionTypeId == 2) {
                        question.data = [
                            {
                                key: $translate.instant('LikeLbl'),
                                y: question.dashboard.likeCount
                            },
                            {
                                key: $translate.instant('DisLikeLbl'),
                                y: question.dashboard.disLikeCount
                            }
                        ]
                        question.options = {
                            chart: {
                                type: 'pieChart',
                                height: 300,
                                x: function (d) { return d.key; },
                                y: function (d) { return d.y; },
                                showLabels: true,
                                donut: true,
                                pie: {
                                    startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2 },
                                    endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2 }
                                },
                                legend: {
                                    margin: {
                                        top: 5,
                                        right: 35,
                                        bottom: 5,
                                        left: 0
                                    }
                                }
                            }
                        };
                    }
                },
                function (data, status) {
                    question.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        blockUI.stop();
    }

}());(function () {
    angular
        .module('home')
        .factory('dashboardResource', ['$resource', 'appCONSTANTS', dashboardResource])

    function dashboardResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Tickets/', {}, {
            getTicketsDashboard: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/dashboard', useToken: true,isArray:true },
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editUserController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource', 'UserTypeResource',
            'RoleResource', 'RolePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS', 'EditUserPrepService', 'ToastService',
            'AreaPrepService', 'DepartmentPrepService', editUserController]);


    function editUserController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource,
        RoleResource, RolePrepService, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService, ToastService,
        AreaPrepService, DepartmentPrepService) {

        blockUI.start("Loading...");

        $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        vm.area = [];
        if (EditUserPrepService.areaId == null) {
            vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
            vm.selectedAreaId = 0;
            vm.area = vm.area.concat(AreaPrepService.results)
        }
        else {
            vm.area = vm.area.concat(AreaPrepService.results)
            vm.selectedAreaId = EditUserPrepService.areaId;
            vm.branchList = ($filter('filter')(vm.area, { areaId: EditUserPrepService.areaId }))[0].branches;
            vm.selectedBranchId = EditUserPrepService.branchesId;
        }
        vm.department = [];
        if (EditUserPrepService.departmentId == null) {
            vm.department.push({ departmentId: 0, titleDictionary: { "en": "Select Department", "ar": "اختار أدارة" } });
            vm.selectedDepartmentId = 0;
            vm.department = vm.department.concat(DepartmentPrepService.results)
        }
        else {
            vm.department = vm.department.concat(DepartmentPrepService.results)
            vm.selectedDepartmentId = EditUserPrepService.departmentId;
            vm.categoryList = ($filter('filter')(vm.department, { departmentId: EditUserPrepService.departmentId }))[0].categories;
            vm.selectedCategoryId = EditUserPrepService.cateoriesId;
        }

        vm.resetDLL = function () {
            vm.area = [];
            vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
            vm.selectedAreaId = 0;
            vm.area = vm.area.concat(AreaPrepService.results)
            vm.branchList = [];

            vm.department = [];
            vm.department.push({ departmentId: 0, titleDictionary: { "en": "Select Department", "ar": "اختار أدارة" } });
            vm.selectedDepartmentId = 0;
            vm.department = vm.department.concat(DepartmentPrepService.results)
            vm.categoryList = [];
        }
        vm.departmentChange = function () {
            for (var i = vm.department.length - 1; i >= 0; i--) {
                if (vm.department[i].departmentId == 0) {
                    vm.department.splice(i, 1);
                }
            }
            vm.categoryList = [];
            vm.categoryList.push({ categoryId: 0, titleDictionary: { "en": "Select Category", "ar": "اختار الفئة" } });
            vm.selectedCategoryId = 0;
            vm.categoryList = vm.categoryList.concat(($filter('filter')(vm.department, { departmentId: vm.selectedDepartmentId }))[0].categories);
        }
        vm.categoryChange = function () {
            for (var i = vm.categoryList.length - 1; i >= 0; i--) {
                if (vm.categoryList[i].categoryId == 0) {
                    vm.categoryList.splice(i, 1);
                }
            }
        }

        vm.areaChange = function () {
            for (var i = vm.area.length - 1; i >= 0; i--) {
                if (vm.area[i].areaId == 0) {
                    vm.area.splice(i, 1);
                }
            }
            vm.branchList = [];
            vm.selectedBranchId = [0];
            vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
        }
        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }

        BindUserType();
        vm.show = true;
        $scope.roleList = RolePrepService.results;
        vm.selectedUserRoles = [];
        $scope.userObj = EditUserPrepService;
        $scope.userObj.confirmPassword = $scope.userObj.password;
        $scope.userTypeList = [];
        $scope.selectedType = "";
        console.log($scope.userObj);
        var i;
        for (i = 0; i < $scope.userObj.userRoles.length; i++) {
            var indexRate = $scope.roleList.indexOf($filter('filter')($scope.roleList, { 'roleId': $scope.userObj.userRoles[i].roleId }, true)[0]);
            vm.selectedUserRoles.push($scope.roleList[indexRate]);

        }



        function BindUserType() {
            blockUI.start("Loading...");

            var k = UserTypeResource.getAllUserTypes().$promise.then(function (results) {
                vm.getPageData = results;
                $scope.userTypeList = vm.getPageData.results;

                var indexRate = $scope.userTypeList.indexOf($filter('filter')($scope.userTypeList, { 'userTypeId': $scope.userObj.userTypeId }, true)[0]);
                $scope.selectedType = $scope.userTypeList[indexRate];
                blockUI.stop();


            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        $scope.Updateclient = function () {
            blockUI.start("Loading...");

            vm.show = false;
            var newClient = new UserResource();
            newClient.UserId = $scope.userObj.userId;
            newClient.firstName = $scope.userObj.firstName;
            newClient.lastName = $scope.userObj.lastName;
            newClient.Phone = $scope.userObj.phone;
            newClient.Email = $scope.userObj.email;
            newClient.Password = $scope.userObj.password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.departmentId = vm.selectedDepartmentId > 0 ? vm.selectedDepartmentId : null;
            newClient.areaId = vm.selectedAreaId > 0 ? vm.selectedAreaId : null;
            newClient.cateoriesId = vm.selectedCategoryId;
            newClient.branchesId = vm.selectedBranchId;
            newClient.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show = true;
                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();


    }

})();(function () {
    'use strict';

    angular
        .module('home')
        .controller('userController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource', 'UserTypeResource',
            'userPrepService', 'RoleResource', 'RolePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', 'userConsumedPrepService',
            'AreaPrepService', 'DepartmentPrepService', userController]);

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource, userPrepService, RoleResource,
        RolePrepService, $localStorage, authorizationService, appCONSTANTS, ToastService, userConsumedPrepService, AreaPrepService, DepartmentPrepService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[4].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;
        vm.userConsumed = userConsumedPrepService;
        vm.area = [];
        vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
        vm.selectedAreaId = 0;
        vm.area = vm.area.concat(AreaPrepService.results)
        vm.department = [];
        vm.department.push({ departmentId: 0, titleDictionary: { "en": "Select Department", "ar": "اختار أدارة" } });
        vm.selectedDepartmentId = 0;
        vm.department = vm.department.concat(DepartmentPrepService.results)
        $scope.totalCount = userPrepService.totalCount;
        $scope.userList = userPrepService.results;
        $scope.roleList = RolePrepService.results;
        BindUserType();
        console.log($scope.userList);

        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        $scope.userObj = "";
        $scope.selectedType = "";
        $scope.userTypeList = [];
        vm.resetDLL = function () {
            vm.area = [];
            vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
            vm.selectedAreaId = 0;
            vm.area = vm.area.concat(AreaPrepService.results)
            vm.branchList = [];

            vm.department = [];
            vm.department.push({ departmentId: 0, titleDictionary: { "en": "Select Department", "ar": "اختار أدارة" } });
            vm.selectedDepartmentId = 0;
            vm.department = vm.department.concat(DepartmentPrepService.results)
            vm.categoryList = [];
        }
        vm.departmentChange = function () {
            vm.department.splice(0, 1);
            vm.categoryList = [];
            vm.categoryList.push({ categoryId: 0, titleDictionary: { "en": "Select Category", "ar": "اختار الفئة" } });
            vm.selectedCategoryId = 0;
            vm.categoryList = vm.categoryList.concat(($filter('filter')(vm.department, { departmentId: vm.selectedDepartmentId }))[0].categories);
        }
        vm.categoryChange = function () {
            for (var i = vm.categoryList.length - 1; i >= 0; i--) {
                if (vm.categoryList[i].categoryId == 0) {
                    vm.categoryList.splice(i, 1);
                }
            }
        }

        vm.areaChange = function () {
            vm.area.splice(0, 1);
            vm.branchList = [];
            vm.selectedBranchId = [0];
            vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
        }
        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }
        function refreshUsers() {
            blockUI.start("Loading...");

            var k = UserResource.getAllUsers({ page: vm.currentPage }).$promise.then(function (results) {
                vm.getPageData = results;
                $scope.userList = vm.getPageData.results;
                console.log($scope.userList);
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        function BindUserType() {
            blockUI.start("Loading...");

            var k = UserTypeResource.getAllUserTypes().$promise.then(function (results) {
                vm.getPageData = results;
                $scope.userTypeList = vm.getPageData.results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        $scope.AddNewclient = function () {
            blockUI.start("Loading...");

            var newClient = new UserResource();
            newClient.FirstName = $scope.FirstName;
            newClient.LastName = $scope.LastName;
            newClient.Email = $scope.Email;
            newClient.Phone = $scope.Phone;
            newClient.Password = $scope.Password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.departmentId = vm.selectedDepartmentId > 0 ? vm.selectedDepartmentId : null;
            newClient.areaId = vm.selectedAreaId > 0 ? vm.selectedAreaId : null;
            newClient.cateoriesId = vm.selectedCategoryId;
            newClient.branchesId = vm.selectedBranchId;
            newClient.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUsers();
        }

        blockUI.stop();

    }

}());(function () {
    angular
        .module('home')
        .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/', {}, {
            getAllUsers: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllUsers', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true },
            getUserLimit: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetMaxAndConUsers', useToken: true },
            getUserDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Departments', useToken: true },
            getUserArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Area', useToken: true }
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('TicketDetailsController', ['blockUI', '$scope', '$state',
            'TicketPrepService', '$filter', 'authorizationService','$translate','TicketResource', TicketDetailsController]);

    function TicketDetailsController(blockUI, $scope, $state,
        TicketPrepService, $filter, authorizationService , $translate,TicketResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.user = authorizationService.getUser();

            vm.ticket = TicketPrepService;
            vm.ticket.creationTime = vm.ticket.creationTime + "Z";
            vm.ticket.creationTime = $filter('date')(new Date(vm.ticket.creationTime), "dd/MM/yyyy hh:mm a");

            vm.ticket.technacianUsers[0] = $translate.instant('selectTech')
            vm.ticket.assignedUserId = '0';
            vm.ticket.showAssign = false

            vm.ticket.lastModificationTime = vm.ticket.lastModificationTime + "Z";
            vm.ticket.lastModificationTime = $filter('date')(new Date(vm.ticket.lastModificationTime), "dd/MM/yyyy hh:mm a");

            vm.ticket.technicianModificationTime = vm.ticket.technicianModificationTime + "Z";
            vm.ticket.technicianModificationTime = $filter('date')(new Date(vm.ticket.technicianModificationTime), "dd/MM/yyyy hh:mm a");
        }
        init();
        vm.assignTicket = function (ticketId, assignedUserId) {
            TicketResource.assigned({ ticketId: ticketId, assignedUserId: assignedUserId }).$promise.then(function (results) {
                $state.go('Tickets');
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.approveTicket = function (ticketId) {
            TicketResource.approve({ ticketId: ticketId }).$promise.then(function (results) {
                $state.go('Tickets');
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.closeTicket = function (ticketId) {
            TicketResource.close({ ticketId: ticketId }).$promise.then(function (results) {
                $state.go('Tickets');
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.rejectTicket = function (ticketId, comment) {
            var newObj = new TicketResource();
            newObj.RejectionComment = comment;
            newObj.$reject({ ticketId: ticketId }).then(function (results) {
                $state.go('Tickets');
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        blockUI.stop();
    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('createTicketcontroller', ['blockUI', '$scope', '$translate', 'TicketResource', '$state', 'DepartmentPrepService',
            'ToastService', 'UserAreaPrepService', '$filter', '$http', 'appCONSTANTS', createTicketcontroller]);

    function createTicketcontroller(blockUI, $scope, $translate, TicketResource, $state, DepartmentPrepService,
        ToastService, UserAreaPrepService, $filter, $http, appCONSTANTS) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.areaList = [];
            vm.areaList.push(UserAreaPrepService);
            vm.selectedAreaId = UserAreaPrepService.areaId;
            vm.selectedRate = 0;
            vm.branchList = [];
            vm.selectedBranchId = 0;
            vm.branchList.push({ branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } });
            vm.branchList = vm.branchList.concat(UserAreaPrepService.branches);

            vm.departmentList = [];
            vm.selectedDepartmentId = 0;
            vm.departmentList.push({ departmentId: 0, titleDictionary: { "en": "Select Department", "ar": "اختار أدارة" } });
            vm.departmentList = vm.departmentList.concat(DepartmentPrepService.results);
        }
        init();
        vm.departmentChange = function () {
            vm.departmentList.splice(0, 1);
            vm.categoryList = [];
            vm.categoryList.push({ categoryId: 0, titleDictionary: { "en": "Select Category", "ar": "اختار الفئة" } });
            vm.selectedCategoryId = 0;
            vm.categoryList = vm.categoryList.concat(($filter('filter')(vm.departmentList, { departmentId: vm.selectedDepartmentId }))[0].categories);
        }
        vm.categoryChange = function () {
            for (var i = vm.categoryList.length - 1; i >= 0; i--) {
                if (vm.categoryList[i].categoryId == 0) {
                    vm.categoryList.splice(i, 1);
                }
            }
        }

        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }
        vm.isChanged = false;

        vm.LoadUploadImages = function () {
            $("#file").click();
            vm.fileExist = false;

        }
        vm.AddNewTicket = function () {
            vm.isChanged = true;
            var newTicket = new Object();
            newTicket.title = vm.title
            newTicket.description = vm.description;
            newTicket.departmentId = vm.selectedDepartmentId;
            newTicket.categoryId = vm.selectedCategoryId;
            newTicket.areaId = vm.selectedAreaId;
            newTicket.branchId = vm.selectedBranchId;


            var model = new FormData();
            model.append('data', JSON.stringify(newTicket));
            vm.files.forEach(function (element) {
                model.append('file', element);
            }, this);

            $http({
                method: 'POST',
                url: appCONSTANTS.API_URL + 'Tickets/',
                useToken: true,
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity,
                data: model
            }).then(
                function (data, status) {
                    vm.isChanged = false;
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Tickets')

                },
                function (data, status) {
                    vm.isChanged = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
                );
        }
        vm.files = [];
        $scope.AddFile = function (element) {
            var imageFile = element[0];

            var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

            vm.files.forEach(function (file) {
                if (file.name === imageFile.name) {
                    vm.fileExist = true;
                    ToastService.show("right", "bottom", "fadeInUp", "File is already exist", "error");
                    return
                }
            }, this);
            if (imageFile && imageFile.size >= 0 && ((imageFile.size / (1024 * 1000)) < 2)) {

                if (allowedImageTypes.indexOf(imageFile.type) !== -1) {
                    if (!vm.fileExist) {
                        $scope.newTicketForm.$dirty = true;
                        $scope.$apply(function () {

                            vm.files.push(imageFile);
                            var reader = new FileReader();

                            reader.onloadend = function () {
                                $scope.$apply();
                            };
                            if (imageFile) {
                                reader.readAsDataURL(imageFile);
                            }
                        })
                    }
                    else {
                        $("#file").val('');
                        $scope.$apply()
                    }
                } else {
                    $("#file").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
                }

            } else {
                if (imageFile) {
                    $("#file").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
                }

            }


        }

        vm.removeFile = function (index) {
            vm.files.splice(index, 1);
        }

        blockUI.stop();
    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('TicketsController', ['blockUI', '$scope', '$translate', 'TicketResource', '$state', 'AreaPrepService', 'DepartmentPrepService',
            'ToastService', 'TicketsPrepService', 'UserAreaPrepService', 'UserDepartmentPrepService', 'authorizationService', TicketsController]);

    function TicketsController(blockUI, $scope, $translate, TicketResource, $state, AreaPrepService, DepartmentPrepService,
        ToastService, TicketsPrepService, UserAreaPrepService, UserDepartmentPrepService, authorizationService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.areaList = vm.areaList.concat(AreaPrepService.results)
            vm.user = authorizationService.getUser();
            vm.tickets = TicketsPrepService;
            if (vm.tickets.results != null)
                vm.tickets.results.forEach(function (element) {
                    element.technacianUsers[0] = $translate.instant('selectTech')
                    element.assignedUserId = '0';
                    element.showAssign = false
                }, this);
            vm.selectedRate = 0;
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);
        }
        init();

        vm.areaChange = function () {
            vm.areaList.splice(0, 1);
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            vm.branchList.push(vm.selectedBranch);
            vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }

        vm.currentPage = 1;
        function refreshTickets() {
            blockUI.start("Loading...");
            TicketResource.getTickets({ page: vm.currentPage }).$promise.then(function (results) {
                vm.tickets = results;
                vm.tickets.results.forEach(function (element) {
                    element.technacianUsers[0] = $translate.instant('selectTech')
                    element.assignedUserId = '0';
                    element.showAssign = false
                }, this);
                blockUI.stop();


            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTickets();
        }

        vm.assignTicket = function (ticketId, assignedUserId) {
            TicketResource.assigned({ ticketId: ticketId, assignedUserId: assignedUserId }).$promise.then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.approveTicket = function (ticketId) {
            TicketResource.approve({ ticketId: ticketId }).$promise.then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.closeTicket = function (ticketId) {
            TicketResource.close({ ticketId: ticketId }).$promise.then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.rejectTicket = function (ticketId, comment) {
            var newObj = new TicketResource();
            newObj.RejectionComment = comment;
            newObj.$reject({ ticketId: ticketId }).then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        blockUI.stop();
    }

}());(function () {
    angular
        .module('home')
        .factory('TicketResource', ['$resource', 'appCONSTANTS', TicketResource])

    function TicketResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Tickets/', {}, {
            create: { method: 'POST', useToken: true },
            getTickets: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/', useToken: true },
            getTicket: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId', useToken: true },
            assigned: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Assigned/:assignedUserId', useToken: true },
            approve: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Approve', useToken: true },
            close: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Closed', useToken: true },
            reject: { method: 'POST', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Reject', useToken: true }
        })
    }

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'UserTypeResource', 'ToastService', '$rootScope', createDialogController])

    function createDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, UserTypeResource,
        ToastService, $rootScope) {
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('usertype');
		} 

		         vm.AddNewType = function () {
            blockUI.start("Saving..."); 
            var newObj = new UserTypeResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('usertype');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

  	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'UserTypeResource', 'ToastService',
            'UserTypeByIdPrepService', editDialogController])

    function editDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, UserTypeResource, ToastService, UserTypeByIdPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.usertype = UserTypeByIdPrepService;
        console.log(vm.product);
        vm.Close = function () {
            $state.go('usertype');
        }
		vm.UpdateType= function () {
            blockUI.start("Saving..."); 
            var updateObj = new UserTypeResource();
            updateObj.UserTypeId = vm.usertype.userTypeId;
            updateObj.titleDictionary = vm.usertype.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('usertype');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('usertypeController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'UserTypeResource', 'userTypePrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', usertypeController]);


    function usertypeController($rootScope, blockUI, $scope, $filter, $translate,
        $state, UserTypeResource, userTypePrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        blockUI.start("Loading..."); 

         $('.pmd-sidebar-nav>li>a').removeClass("active")
         $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = userTypePrepService.totalCount;
        $scope.usertypeList = userTypePrepService;

        function refreshUserTypes() {
            blockUI.start("Loading..."); 
            var k = UserTypeResource.getAllUserTypes({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.usertypeList = results
                blockUI.stop();
            },
            function (data, status) {
                blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUserTypes();
        }
       blockUI.stop();

    }

})();(function () {
    angular
      .module('home')
        .factory('UserTypeResource', ['$resource', 'appCONSTANTS', UserTypeResource])

    function UserTypeResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'UserTypes/', {}, {
            getAllUserTypes: { method: 'GET', url: appCONSTANTS.API_URL + 'UserTypes/GetAllUserTypes', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'UserTypes/EditUserType', useToken: true },
            getUserType: { method: 'GET', url: appCONSTANTS.API_URL + 'UserTypes/GetUserTypeById/:UserTypeId', useToken: true }
        })
    }





}());
