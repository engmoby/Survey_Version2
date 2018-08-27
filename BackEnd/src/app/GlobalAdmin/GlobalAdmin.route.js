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
                /*.state('usertype', {
                    url: '/usertype',
                    templateUrl: './app/GlobalAdmin/userType/templates/userType.html',
                    controller: 'usertypeController',
                    'controllerAs': 'usertypeCtrl',
                    resolve: {
                        userTypePrepService: userTypePrepService
                    },
                    data: {
                        permissions: {
                            only: ['2'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newusertype', {
                    url: '/newusertype',
                    templateUrl: './app/GlobalAdmin/userType/templates/new.html',
                    controller: 'createDialogController',
                    'controllerAs': 'newusertypeCtrl',
                    data: {
                        permissions: {
                            only: ['2'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editusertype', {
                    url: '/editusertype/:userTypeId',
                    templateUrl: './app/GlobalAdmin/userType/templates/edit.html',
                    controller: 'editDialogController',
                    'controllerAs': 'editusertypeCtrl',
                    resolve: {
                        UserTypeByIdPrepService: UserTypeByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['2'],
                            redirectTo: 'root'
                        }
                    }

                })*/

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
                        /* BranchPrepService:BranchPrepService,*/
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
    /*User */
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

    /*User Type*/
    userTypePrepService.$inject = ['UserTypeResource']
    function userTypePrepService(UserTypeResource) {
        return UserTypeResource.getAllUserTypes().$promise;
    }


    UserTypeByIdPrepService.$inject = ['UserTypeResource', '$stateParams']
    function UserTypeByIdPrepService(UserTypeResource, $stateParams) {
        return UserTypeResource.getUserType({ userTypeId: $stateParams.userTypeId }).$promise;
    }

    /*Role */
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
    /*Area */
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


    /*Branch */
    BranchPrepService.$inject = ['BranchResource']
    function BranchPrepService(BranchResource) {
        return BranchResource.getAllBranchs().$promise;
    }

    BranchByIdPrepService.$inject = ['BranchResource', '$stateParams']
    function BranchByIdPrepService(BranchResource, $stateParams) {
        return BranchResource.getBranch({ branchId: $stateParams.branchId }).$promise;
    }

    /*Department */
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



    /*Category */
    CategoryPrepService.$inject = ['CategoryResource']
    function CategoryPrepService(CategoryResource) {
        return CategoryResource.getAllCategorys().$promise;
    }

    CategoryByIdPrepService.$inject = ['CategoryResource', '$stateParams']
    function CategoryByIdPrepService(CategoryResource, $stateParams) {
        return CategoryResource.getCategory({ categoryId: $stateParams.categoryId }).$promise;
    }

    /*AnswerQuestionResource */
    AnswerQuestionPrepService.$inject = ['AnswerQuestionResource']
    function AnswerQuestionPrepService(AnswerQuestionResource) {
        return AnswerQuestionResource.getAllQuestions().$promise;
    }




    /*Question */
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
