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
                      RolePrepService: RolePrepService
                  }

              })

              .state('addUser', {
                  url: '/addUser',
                  templateUrl: './app/GlobalAdmin/user/templates/addUser.html',
                  controller: 'userController',
                  'controllerAs': 'userCtrl',

                  resolve: {
                      userPrepService: userPrepService,
                      RolePrepService: RolePrepService

                  }


              })

            .state('editUser', {
                url: '/editUser/:userId',
                templateUrl: './app/GlobalAdmin/user/templates/editUser.html',
                controller: 'editUserController',
                'controllerAs': 'editUserCtrl',
                resolve: {
                    EditUserPrepService: EditUserPrepService,
                    RolePrepService: RolePrepService

                } 

            })
              .state('usertype', {
                  url: '/usertype',
                  templateUrl: './app/GlobalAdmin/userType/templates/userType.html',
                  controller: 'usertypeController',
                  'controllerAs': 'usertypeCtrl',
                  resolve: {
                      userTypePrepService: userTypePrepService
                  }

              })
                .state('newusertype', {
                    url: '/newusertype',
                    templateUrl: './app/GlobalAdmin/userType/templates/new.html',
                    controller: 'createDialogController',
                    'controllerAs': 'newusertypeCtrl'

                })
                .state('editusertype', {
                    url: '/editusertype/:userTypeId',
                    templateUrl: './app/GlobalAdmin/userType/templates/edit.html',
                    controller: 'editDialogController',
                    'controllerAs': 'editusertypeCtrl',
                    resolve: {
                        UserTypeByIdPrepService: UserTypeByIdPrepService
                    }

                })

                .state('Role', {
                    url: '/Role',
                    templateUrl: './app/GlobalAdmin/Role/templates/Role.html',
                    controller: 'RoleController',
                    'controllerAs': 'RoleCtrl',
                    resolve: {
                        RolePrepService: RolePrepService
                    }

                })
                .state('newRole', {
                    url: '/newRole',
                    templateUrl: './app/GlobalAdmin/Role/templates/new.html',
                    controller: 'createRoleDialogController',
                    'controllerAs': 'newRoleCtrl',
                    resolve: { 
                        PermissionPrepService: PermissionPrepService
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
                    }

                })


                .state('Area', {
                    url: '/Area',
                    templateUrl: './app/GlobalAdmin/Area/templates/Area.html',
                    controller: 'AreaController',
                    'controllerAs': 'AreaCtrl',
                    resolve: {
                        AreaPrepService: AreaPrepService
                    }

                })
                .state('newArea', {
                    url: '/newArea',
                    templateUrl: './app/GlobalAdmin/Area/templates/new.html',
                    controller: 'createAreaDialogController',
                    'controllerAs': 'newAreaCtrl'

                })
                .state('editArea', {
                    url: '/editArea/:areaId',
                    templateUrl: './app/GlobalAdmin/Area/templates/edit.html',
                    controller: 'editAreaDialogController',
                    'controllerAs': 'editAreaCtrl',
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService
                    }

                })

                .state('newBranch', {
                    url: '/newBranch/:areaId',
                    templateUrl: './app/GlobalAdmin/Branch/templates/new.html',
                    controller: 'createBranchDialogController',
                    'controllerAs': 'newBranchCtrl',
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService
                    }

                })
                .state('editBranch', {
                    url: '/editBranch/:branchId',
                    templateUrl: './app/GlobalAdmin/Branch/templates/edit.html',
                    controller: 'editBranchDialogController',
                    'controllerAs': 'editBranchCtrl',
                    resolve: {
                        BranchByIdPrepService: BranchByIdPrepService
                    }

                })

                .state('Department', {
                    url: '/Department',
                    templateUrl: './app/GlobalAdmin/Department/templates/Department.html',
                    controller: 'DepartmentController',
                    'controllerAs': 'DepartmentCtrl',
                    resolve: {
                        DepartmentPrepService: DepartmentPrepService
                    }

                })
                .state('newDepartment', {
                    url: '/newDepartment',
                    templateUrl: './app/GlobalAdmin/Department/templates/new.html',
                    controller: 'createDepartmentDialogController',
                    'controllerAs': 'newDepartmentCtrl'

                })
                .state('editDepartment', {
                    url: '/editDepartment/:departmentId',
                    templateUrl: './app/GlobalAdmin/Department/templates/edit.html',
                    controller: 'editDepartmentDialogController',
                    'controllerAs': 'editDepartmentCtrl',
                    resolve: {
                        DepartmentByIdPrepService: DepartmentByIdPrepService
                    }

                })
                .state('newCategory', {
                    url: '/newCategory/:QuestionId',
                    templateUrl: './app/GlobalAdmin/Category/templates/new.html',
                    controller: 'createCategoryDialogController',
                    'controllerAs': 'newCategoryCtrl',
                    resolve: {
                        QuestionByIdPrepService: QuestionByIdPrepService,
                        RolePrepService:RolePrepService
                    }

                })
                .state('editCategory', {
                    url: '/editCategory/:categoryId',
                    templateUrl: './app/GlobalAdmin/Category/templates/edit.html',
                    controller: 'editCategoryDialogController',
                    'controllerAs': 'editCategoryCtrl',
                    resolve: {
                        CategoryByIdPrepService: CategoryByIdPrepService,
                        RolePrepService:RolePrepService
                    }

                })

                .state('AnswerQuestion', {
                    url: '/AnswerQuestion',
                    templateUrl: './app/GlobalAdmin/AnswerQuestion/templates/AnswerQuestion.html',
                    controller: 'AnswerQuestionDialogController',
                    'controllerAs': 'AnswerQuestionCtrl',
                    resolve: {
                        AreaPrepService: AreaPrepService,
                        BranchPrepService:BranchPrepService,
                        QuestionPrepService:QuestionPrepService 
                    }

                })
                

                .state('Question', {
                    url: '/Question',
                    templateUrl: './app/GlobalAdmin/Question/templates/Question.html',
                    controller: 'QuestionController',
                    'controllerAs': 'QuestionCtrl',
                    resolve: {
                        QuestionPrepService: QuestionPrepService
                    }

                })
                .state('newQuestion', {
                    url: '/newQuestion',
                    templateUrl: './app/GlobalAdmin/Question/templates/new.html',
                    controller: 'createQuestionDialogController',
                    'controllerAs': 'newQuestionCtrl',
                    resolve: {
                        DepartmentPrepService: DepartmentPrepService
                    }

                })
                .state('editQuestion', {
                    url: '/editQuestion/:QuestionId',
                    templateUrl: './app/GlobalAdmin/Question/templates/edit.html',
                    controller: 'editQuestionDialogController',
                    'controllerAs': 'editQuestionCtrl',
                    resolve: {
                        QuestionByIdPrepService: QuestionByIdPrepService
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


    /*Question */
    QuestionPrepService.$inject = ['QuestionResource']
    function QuestionPrepService(QuestionResource) {
        return QuestionResource.getAllQuestions().$promise;
    }

    QuestionByIdPrepService.$inject = ['QuestionResource', '$stateParams']
    function QuestionByIdPrepService(QuestionResource, $stateParams) {
        return QuestionResource.getQuestion({ QuestionId: $stateParams.QuestionId }).$promise;
    }

}());
