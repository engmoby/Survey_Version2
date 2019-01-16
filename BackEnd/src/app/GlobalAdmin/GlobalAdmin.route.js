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
                        CountriesPrepService: CountriesPrepService,
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
                        RolePrepService: AllRolePrepService,
                        userConsumedPrepService: userConsumedPrepService,
                        CountriesPrepService: CountriesPrepService,
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
                        RolePrepService: AllRolePrepService,
                        /*AreaPrepService: AllAreaPrepService,*/
                        DepartmentPrepService: AllDepartmentPrepService,
                        CountriesPrepService: CountriesPrepService,
                        RegionsForUserPrepService: RegionsForUserPrepService,
                        CitiesForUserPrepService: CitiesForUserPrepService,
                        AreasForUserPrepService: AreasForUserPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('categoryType', {
                    url: '/categoryType',
                    templateUrl: './app/GlobalAdmin/categoryType/templates/categoryType.html',
                    controller: 'categoryTypeController',
                    'controllerAs': 'categoryTypeCtrl',
                    resolve: {
                        categoryTypePrepService: categoryTypePrepService
                    },
                    data: {
                        permissions: {
                            only: ['2'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newcategoryType', {
                    url: '/newcategoryType',
                    templateUrl: './app/GlobalAdmin/categoryType/templates/new.html',
                    controller: 'createcategoryTypeDialogController',
                    'controllerAs': 'newcategoryTypeCtrl',
                    resolve: {
                        allEmailsPrepService: allEmailsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['2'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editcategoryType', {
                    url: '/editcategoryType/:categoryTypeId',
                    templateUrl: './app/GlobalAdmin/categoryType/templates/edit.html',
                    controller: 'editDialogCategoryController',
                    'controllerAs': 'editcategoryTypeCtrl',
                    resolve: {
                        categoryTypeByIdPrepService: categoryTypeByIdPrepService,
                        allEmailsPrepService: allEmailsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['2'],
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

                    url: '/:cityId/Area',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Area/templates/Area.html',
                            controller: 'AreaController',
                            'controllerAs': 'AreaCtrl',
                        }
                    },
                    resolve: {
                        AreaPrepService: AreaPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Cities",
                    ncyBreadcrumb: {
                        label: '{{cityName}}'
                    }

                })
                .state('newArea', {
                    url: '/:cityId/newArea',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Area/templates/new.html',
                            controller: 'createAreaDialogController',
                            'controllerAs': 'newAreaCtrl',
                        }
                    },
                    resolve: {
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Cities",
                    ncyBreadcrumb: {
                        label: '{{cityName}}'
                    }

                })
                .state('editArea', {
                    url: '/:cityId/editArea/:areaId',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Area/templates/edit.html',
                            controller: 'editAreaDialogController',
                            'controllerAs': 'editAreaCtrl',
                        }
                    },
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Cities",
                    ncyBreadcrumb: {
                        label: '{{cityName}}'
                    }

                })

                .state('newBranch', {
                    url: '/:areaId/newBranch',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Branch/templates/new.html',
                            controller: 'createBranchDialogController',
                            'controllerAs': 'newBranchCtrl',
                        }
                    },
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Area",
                    ncyBreadcrumb: {
                        label: '{{areaName}}'
                    }

                })
                .state('editBranch', {
                    url: '/:areaId/editBranch/:branchId',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Branch/templates/edit.html',
                            controller: 'editBranchDialogController',
                            'controllerAs': 'editBranchCtrl',
                        }
                    },
                    resolve: {
                        BranchByIdPrepService: BranchByIdPrepService,
                        AreaByIdPrepService: AreaByIdPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Area",
                    ncyBreadcrumb: {
                        label: '{{areaName}}'
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
                        RolePrepService: AllRolePrepService,
                        allcategoryTypePrepService: allcategoryTypePrepService
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
                        RolePrepService: AllRolePrepService,
                        allcategoryTypePrepService: allcategoryTypePrepService
                    },
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('AnswerQuestion', {
                    url: '/AnswerQuestion/:projectId',
                    templateUrl: './app/GlobalAdmin/AnswerQuestion/templates/AnswerQuestion.html',
                    controller: 'AnswerQuestionDialogController',
                    'controllerAs': 'AnswerQuestionCtrl',
                    resolve: {
                        /*AreaPrepService: AllAreaPrepService,
                         BranchPrepService:BranchPrepService,*/
                        AnswerQuestionPrepService: AnswerQuestionPrepService,
                        CountriesPrepService: CountriesPrepService,
                        allcategoryTypePrepService: allcategoryTypePrepService
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
                    url: '/Answers/:projectId',
                    templateUrl: './app/GlobalAdmin/Answers/templates/answers.html',
                    controller: 'AnswersController',
                    'controllerAs': 'answersCtrl',
                    resolve: {
                        /*AreaPrepService: AllAreaPrepService,*/
                        CountriesPrepService: CountriesPrepService,
                        AnswerQuestionPrepService: AnswerQuestionPrepService,
                        allcategoryTypePrepService: allcategoryTypePrepService
                    },
                    data: {
                        permissions: {
                            only: ['8', '12'],
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
                        /*AreaPrepService: UserAreaPrepService,
                        DepartmentPrepService: UserDepartmentPrepService,*/
                        TicketsPrepService: TicketsPrepService,
                        /*UserAreaPrepService: UserAreaPrepService,
                        UserDepartmentPrepService: UserDepartmentPrepService*/
                        CountriesPrepService: CountriesPrepService,
                        DepartmentPrepService: AllDepartmentPrepService,
                        BranchManagerPrepService: BranchManagerPrepService,
                        TechnasianPrepService: TechnasianPrepService
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
                        TicketPrepService: TicketPrepService,
                        TicketLogsPrepService: TicketLogsPrepService

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
                        AnswerQuestionPrepService: AnswerQuestionDashBoardPrepService,
                        allcategoryTypePrepService: allcategoryTypePrepService,
                        CountriesPrepService: CountriesPrepService,
                        BranchManagerPrepService: BranchManagerPrepService,
                        TechnasianPrepService: TechnasianPrepService,
                        DepartmentPrepService: DepartmentPrepService,
                        UsersAnswersQuestionPrepService: UsersAnswersQuestionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['10'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('Project', {
                    url: '/Project',
                    templateUrl: './app/GlobalAdmin/project/templates/project.html',
                    controller: 'ProjectController',
                    'controllerAs': 'ProjectCtrl',
                    resolve: {
                        ProjectPrepService: ProjectPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newProject', {
                    url: '/newProject',
                    templateUrl: './app/GlobalAdmin/project/templates/new.html',
                    controller: 'createProjectDialogController',
                    'controllerAs': 'newProjectCtrl',
                    resolve: {
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editProject', {
                    url: '/editProject/:projectId',
                    templateUrl: './app/GlobalAdmin/project/templates/edit.html',
                    controller: 'editProjectDialogController',
                    'controllerAs': 'editProjectCtrl',
                    resolve: {
                        ProjectByIdPrepService: ProjectByIdPrepService,
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('Vendor', {
                    url: '/Vendor',
                    templateUrl: './app/GlobalAdmin/vendor/templates/vendor.html',
                    controller: 'VendorController',
                    'controllerAs': 'VendorCtrl',
                    resolve: {
                        VendorPrepService: VendorPrepService
                    },
                    data: {
                        permissions: {
                            only: ['13'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newVendor', {
                    url: '/newVendor',
                    templateUrl: './app/GlobalAdmin/vendor/templates/new.html',
                    controller: 'createDialogController',
                    'controllerAs': 'newVendorCtrl',
                    data: {
                        permissions: {
                            only: ['13'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editVendor', {
                    url: '/editVendor/:vendorId',
                    templateUrl: './app/GlobalAdmin/vendor/templates/edit.html',
                    controller: 'editDialogController',
                    'controllerAs': 'editVendorCtrl',
                    resolve: {
                        VendorByIdPrepService: VendorByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['13'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('Asset', {
                    url: '/Asset/:projectId',
                    templateUrl: './app/GlobalAdmin/asset/templates/asset.html',
                    controller: 'AssetController',
                    'controllerAs': 'AssetCtrl',
                    resolve: {
                        AssetPrepService: AssetPrepService,
                        VendorPrepService: VendorPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newAsset', {
                    url: '/newAsset/:projectId',
                    templateUrl: './app/GlobalAdmin/asset/templates/new.html',
                    controller: 'createDialogAssetController',
                    'controllerAs': 'newAssetCtrl',
                    resolve: {
                        AssetPrepService: AssetPrepService,
                        VendorPrepService: VendorPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editAsset', {
                    url: '/editAsset/:projectId/:assetId',
                    templateUrl: './app/GlobalAdmin/asset/templates/edit.html',
                    controller: 'editDialogAssetController',
                    'controllerAs': 'editAssetCtrl',
                    resolve: {
                        AssetByIdPrepService: AssetByIdPrepService,
                        VendorPrepService: VendorPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('Service', {
                    url: '/Service/:projectId',
                    templateUrl: './app/GlobalAdmin/service/templates/service.html',
                    controller: 'ServiceController',
                    'controllerAs': 'ServiceCtrl',
                    resolve: {
                        ServicePrepService: ServicePrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newService', {
                    url: '/newService/:projectId',
                    templateUrl: './app/GlobalAdmin/service/templates/new.html',
                    controller: 'createDialogServiceController',
                    'controllerAs': 'newServiceCtrl',
                    resolve: {
                        ServicePrepService: ServicePrepService,
                        AssetPrepService: AssetPrepService,
                        VendorPrepService: VendorPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editService', {
                    url: '/editService/:projectId/:serviceId',
                    templateUrl: './app/GlobalAdmin/service/templates/edit.html',
                    controller: 'editDialogServiceController',
                    'controllerAs': 'editServiceCtrl',
                    resolve: {
                        ServiceByIdPrepService: ServiceByIdPrepService,
                        AssetPrepService: AssetPrepService,
                        VendorPrepService: VendorPrepService
                    },
                    data: {
                        permissions: {
                            only: ['12'],
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
    categoryTypePrepService.$inject = ['categoryTypeResource']
    function categoryTypePrepService(categoryTypeResource) {
        return categoryTypeResource.getAllcategoryTypes().$promise;
    }

    allcategoryTypePrepService.$inject = ['categoryTypeResource']
    function allcategoryTypePrepService(categoryTypeResource) {
        return categoryTypeResource.getAllcategoryTypes({ pageSize: 0 }).$promise;
    }

    categoryTypeByIdPrepService.$inject = ['categoryTypeResource', '$stateParams']
    function categoryTypeByIdPrepService(categoryTypeResource, $stateParams) {
        return categoryTypeResource.getcategoryType({ categoryTypeId: $stateParams.categoryTypeId }).$promise;
    }
    allEmailsPrepService.$inject = ['UserResource']
    function allEmailsPrepService(UserResource) {
        return UserResource.GetAllEmails().$promise;
    }
    /*Role */
    RolePrepService.$inject = ['RoleResource']
    function RolePrepService(RoleResource) {
        return RoleResource.getAllRoles().$promise;
    }
    AllRolePrepService.$inject = ['RoleResource']
    function AllRolePrepService(RoleResource) {
        return RoleResource.getAllRoles({ pageSize: 0 }).$promise;
    }
    RoleByIdPrepService.$inject = ['RoleResource', '$stateParams']
    function RoleByIdPrepService(RoleResource, $stateParams) {
        return RoleResource.getRole({ roleId: $stateParams.roleId }).$promise;
    }

    PermissionPrepService.$inject = ['PermissionResource']
    function PermissionPrepService(PermissionResource) {
        return PermissionResource.getAllPermissions({ pageSize: 20 }).$promise;
    }
    /*Area */
    AreaPrepService.$inject = ['AreaResource', '$stateParams']
    function AreaPrepService(AreaResource, $stateParams) {
        return AreaResource.getAllAreas({ cityId: $stateParams.cityId }).$promise;
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

    AnswerQuestionDashBoardPrepService.$inject = ['AnswerQuestionResource']
    function AnswerQuestionDashBoardPrepService(AnswerQuestionResource) {
        return AnswerQuestionResource.getAllQuestions({ pageName: 'dashboard' }).$promise;
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

    TicketLogsPrepService.$inject = ['TicketResource', '$stateParams']
    function TicketLogsPrepService(TicketResource, $stateParams) {
        return TicketResource.getTicketLogs({ ticketId: $stateParams.ticketId }).$promise;
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


    CityByIdPrepService.$inject = ['CityResource', '$stateParams']
    function CityByIdPrepService(CityResource, $stateParams) {
        return CityResource.getCity({ cityId: $stateParams.cityId }).$promise;
    }

    RegionByIdPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionByIdPrepService(RegionResource, $stateParams) {
        return RegionResource.getRegion({ regionId: $stateParams.regionId }).$promise;
    }
    CountriesPrepService.$inject = ['CountryResource']
    function CountriesPrepService(CountryResource) {
        return CountryResource.getAllCountries({ pageSize: 0 }).$promise;
    }

    RegionsForUserPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionsForUserPrepService(RegionResource, $stateParams) {
        return RegionResource.getAllRegionsForUser({ userId: $stateParams.userId }).$promise;
    }
    CitiesForUserPrepService.$inject = ['CityResource', '$stateParams']
    function CitiesForUserPrepService(CityResource, $stateParams) {
        return CityResource.getAllCitiesForUser({ userId: $stateParams.userId }).$promise;
    }
    AreasForUserPrepService.$inject = ['AreaResource', '$stateParams']
    function AreasForUserPrepService(AreaResource, $stateParams) {
        return AreaResource.getAllAreasForUser({ userId: $stateParams.userId }).$promise;
    }
    BranchManagerPrepService.$inject = ['UserResource']
    function BranchManagerPrepService(UserResource) {
        return UserResource.getUserByTypeName({ type: 'branchmanager' }).$promise;
    }
    TechnasianPrepService.$inject = ['UserResource']
    function TechnasianPrepService(UserResource) {
        return UserResource.getUserByTypeName({ type: 'technician' }).$promise;
    }

    UsersAnswersQuestionPrepService.$inject = ["UserResource"]
    function UsersAnswersQuestionPrepService(UserResource) {
        return UserResource.GetAllUsersWhoAnswer().$promise;
    }


    /*Project*/
    ProjectPrepService.$inject = ['ProjectResource']
    function ProjectPrepService(ProjectResource) {
        return ProjectResource.getAllProjects().$promise;
    }

    allProjectPrepService.$inject = ['ProjectResource']
    function allProjectPrepService(ProjectResource) {
        return ProjectResource.getAllProjects({ pageSize: 0 }).$promise;
    }

    ProjectByIdPrepService.$inject = ['ProjectResource', '$stateParams']
    function ProjectByIdPrepService(ProjectResource, $stateParams) {
        return ProjectResource.getProject({ projectId: $stateParams.projectId }).$promise;
    }

    /*Vendor*/
    VendorPrepService.$inject = ['VendorResource']
    function VendorPrepService(VendorResource) {
        return VendorResource.getAllVendors().$promise;
    }

    allVendorPrepService.$inject = ['VendorResource']
    function allVendorPrepService(VendorResource) {
        return VendorResource.getAllVendors({ pageSize: 0 }).$promise;
    }

    VendorByIdPrepService.$inject = ['VendorResource', '$stateParams']
    function VendorByIdPrepService(VendorResource, $stateParams) {
        return VendorResource.getVendor({ vendorId: $stateParams.vendorId }).$promise;
    }


    /*Asset*/
    AssetPrepService.$inject = ['AssetResource', '$stateParams']
    function AssetPrepService(AssetResource, $stateParams) {
        return AssetResource.getAllAssets({ projectId: $stateParams.projectId }).$promise;
    }

    allAssetPrepService.$inject = ['AssetResource']
    function allAssetPrepService(AssetResource) {
        return AssetResource.getAllAssets({ pageSize: 0 }).$promise;
    }

    AssetByIdPrepService.$inject = ['AssetResource', '$stateParams']
    function AssetByIdPrepService(AssetResource, $stateParams) {
        return AssetResource.getAsset({ assetId: $stateParams.assetId }).$promise;
    }

    /*Service*/
    ServicePrepService.$inject = ['ServiceResource', '$stateParams']
    function ServicePrepService(ServiceResource, $stateParams) {
        return ServiceResource.getAllServices({ projectId: $stateParams.projectId }).$promise;
    }

    allServicePrepService.$inject = ['ServiceResource']
    function allServicePrepService(ServiceResource) {
        return ServiceResource.getAllServices({ pageSize: 0 }).$promise;
    }

    ServiceByIdPrepService.$inject = ['ServiceResource', '$stateParams']
    function ServiceByIdPrepService(ServiceResource, $stateParams) {
        return ServiceResource.getService({ serviceId: $stateParams.serviceId }).$promise;
    }
}());
