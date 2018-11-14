(function() {
    'use strict';

      angular
      .module('home')
      .config(config)
      .run(runBlock);

      config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$rootScope', 'ngProgressLite','$transitions','blockUI'];

      function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;

      }

      function runBlock($rootScope, ngProgressLite,$transitions,blockUI) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          startProgress();
      });
      $transitions.onStart({}, function(transition) {
        blockUI.start("Loading..."); 
      });
      $transitions.onSuccess({}, function(transition) {
        blockUI.stop();
      });
      $transitions.onError({  }, function(transition) {
        blockUI.stop();
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
                    controller: 'createDialogController',
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
                        allcategoryTypePrepService:allcategoryTypePrepService
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
                        allcategoryTypePrepService:allcategoryTypePrepService
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
                        
                        CountriesPrepService: CountriesPrepService,
                        AnswerQuestionPrepService: AnswerQuestionPrepService,
                        allcategoryTypePrepService: allcategoryTypePrepService
                    },
                    data: {
                        permissions: {
                            only: ['8','12'],
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
                        
                        TicketsPrepService: TicketsPrepService,
                        
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
    
    RolePrepService.$inject = ['RoleResource']
    function RolePrepService(RoleResource) {
        return RoleResource.getAllRoles().$promise;
    }
    AllRolePrepService.$inject = ['RoleResource']
    function AllRolePrepService(RoleResource) {
        return RoleResource.getAllRoles({pageSize:0}).$promise;
    }
    RoleByIdPrepService.$inject = ['RoleResource', '$stateParams']
    function RoleByIdPrepService(RoleResource, $stateParams) {
        return RoleResource.getRole({ roleId: $stateParams.roleId }).$promise;
    }

    PermissionPrepService.$inject = ['PermissionResource']
    function PermissionPrepService(PermissionResource) {
        return PermissionResource.getAllPermissions({ pageSize: 20 }).$promise;
    }
    
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

    AnswerQuestionDashBoardPrepService.$inject = ['AnswerQuestionResource']
    function AnswerQuestionDashBoardPrepService(AnswerQuestionResource) {
        return AnswerQuestionResource.getAllQuestions({ pageName: 'dashboard' }).$promise;
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
(function () {
    angular
        .module('home')
        .factory('AnswerResource', ['$resource', 'appCONSTANTS', AnswerResource])

    function AnswerResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Answers/', {}, {
            getAllAnswers: { method: 'GET', url: appCONSTANTS.API_URL + 'Answers/GetAllAnswers', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true,isArray:true }, 
            getAnswer: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/:questionId/answers', useToken: true }, 
            getAnswerByProjectId: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/:questionId/GetAnswersByProjectId', useToken: true }, 

                      })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswerQuestionDialogController', ['blockUI', '$stateParams', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource',
            'ToastService', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource', '$filter', 'allcategoryTypePrepService'
            , 'AnswerQuestionResource', AnswerQuestionDialogController]);

    function AnswerQuestionDialogController(blockUI, $stateParams, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource,
        ToastService, CountriesPrepService, RegionResource, CityResource, AreaResource, $filter, allcategoryTypePrepService,
        AnswerQuestionResource) {
        $scope.projectId = $stateParams.projectId;

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[7].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            $scope.likeText = "";
            vm.categoryTypes = [];
            vm.selectedCategoryType = { categoryTypeId: 0, titleDictionary: { "en": "All", "ar": "كل" } };
            vm.categoryTypes.push(vm.selectedCategoryType);
            vm.categoryTypes = vm.categoryTypes.concat(allcategoryTypePrepService.results)

            for (var i = 0; i < vm.categoryTypes.length; i++) {

                                 if (vm.categoryTypes[i].isStatic == true) {

                    var index = vm.categoryTypes.indexOf(vm.categoryTypes[i]);
                    vm.categoryTypes.splice(index, 1);
                    continue;
                }
            }


            vm.counties = [];
            vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } };
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            $scope.questionList = AnswerQuestionPrepService.results;
            $scope.IsLike = 0;
            $scope.isLikeSub = 0;
            $scope.selection = [];
            $scope.selectedRate = 0;


            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "Select Region", "ar": "اختار اقليم" } };
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } };
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            $scope.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
            $scope.areaList = [];
            $scope.areaList.push($scope.selectedArea);
            $scope.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            $scope.branchList = [];
            $scope.branchList.push($scope.selectedBranch);
        }
        init();
        if ($scope.projectId != 0) {


            vm.categoryTypes.push(vm.selectedCategoryType);
            vm.categoryTypes = vm.categoryTypes.concat(allcategoryTypePrepService.results);
            for (var i = 0; i < vm.categoryTypes.length; i++) {

                                 if (vm.categoryTypes[i].isStatic == true) {
                    vm.selectedCategoryType.categoryTypeId = vm.categoryTypes[i].categoryTypeId;
                    continue;
                }
            }

            AnswerQuestionResource.getAllQuestions({ catgoryTypeId: vm.selectedCategoryType.categoryTypeId }).$promise.then(function (results) {

                $scope.questionList = results.results;
                $scope.IsLike = 0;
                $scope.isLikeSub = 0;
                $scope.selection = [];
                $scope.selectedRate = 0;
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

                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.answers = []
        function CheckAnswersByProject() {
            blockUI.start("Loading...");
            AnswerQuestionResource.CheckAnswersByProjectId({ projectId: $scope.projectId }).$promise.then(function (results) {
                if (results.userId != 0) {
                    if (results.userId != undefined) {
                        $state.go('Answers', { projectId: $scope.projectId });
                    }
                }
                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

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
                    var exist = ($filter('filter')(element.answerDetails, { questionDetailsId: QuestionDetail.questionDetailsId }))
                    var idx = element.answerDetails.indexOf(exist[0]);
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
        vm.categoryTypeChange = function () {
            blockUI.start("Loading...");
            AnswerQuestionResource.getAllQuestions({ catgoryTypeId: vm.selectedCategoryType.categoryTypeId }).$promise.then(function (results) {

                $scope.questionList = results.results;
                $scope.IsLike = 0;
                $scope.isLikeSub = 0;
                $scope.selection = [];
                $scope.selectedRate = 0;
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

                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.countryChange = function () {
            for (var i = vm.counties.length - 1; i >= 0; i--) {
                if (vm.counties[i].countryId == 0) {
                    vm.counties.splice(i, 1);
                }
            }
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "Select Region", "ar": "اختار اقليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } };
            $scope.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            $scope.areaList = [$scope.selectedArea];
            vm.regions.push(vm.selectedRegion);
            RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionChange = function () {
            if (vm.selectedRegion.regionId != undefined) {
                for (var i = vm.regions.length - 1; i >= 0; i--) {
                    if (vm.regions[i].regionId == 0) {
                        vm.regions.splice(i, 1);
                    }
                }
                vm.cities = [];
                $scope.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } };
                $scope.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
                vm.cities.push(vm.selectedCity);
                $scope.areaList = [$scope.selectedArea];
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCity.cityId != undefined) {
                for (var i = vm.cities.length - 1; i >= 0; i--) {
                    if (vm.cities[i].cityId == 0) {
                        vm.cities.splice(i, 1);
                    }
                }
                $scope.areaList = [];
                $scope.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
                $scope.areaList.push($scope.selectedArea);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    $scope.areaList = $scope.areaList.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
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

                         var submitAnswer = new AnswerResource();
            vm.answers.forEach(function (element) {
                element.branchId = $scope.selectedBranch.branchId;
                var fromDate = $('#startdate').val().split('/')
                element.date = (new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
                element.projectId = $scope.projectId;
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
                        element.questionDetailses.forEach(function (QuestionDetail) {
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
            CheckAnswersByProjectId: { method: 'GET', url: appCONSTANTS.API_URL + 'Answers/CheckAnswersByProjectId/:ProjectId', useToken: true },
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswersController', ['blockUI', '$stateParams', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource',
            'ToastService', '$filter', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource', 'allcategoryTypePrepService', 'AnswerQuestionResource', AnswersController]);

    function AnswersController(blockUI, $stateParams, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource, ToastService, $filter,
        CountriesPrepService, RegionResource, CityResource, AreaResource, allcategoryTypePrepService, AnswerQuestionResource) {
        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")
        $scope.projectId = $stateParams.projectId;

        var vm = this;
        vm.categoryTypes = [];
        vm.selectedCategoryType = { categoryTypeId: 0, titleDictionary: { "en": "All", "ar": "كل" } };
        vm.categoryTypes.push(vm.selectedCategoryType);
        vm.categoryTypes = vm.categoryTypes.concat(allcategoryTypePrepService.results)

        vm.counties = [];
        vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
        vm.counties.push(vm.selectedCountry);
        vm.counties = vm.counties.concat(CountriesPrepService.results)
        debugger;

        vm.questionList = AnswerQuestionPrepService.results;

        vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
        vm.regions = [];
        vm.regions.push(vm.selectedRegion);
        vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
        vm.cities = [];
        vm.cities.push(vm.selectedCity);
        vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
        vm.areaList = [];
        vm.areaList.push(vm.selectedArea);
        vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
        vm.branchList = [];
        vm.branchList.push(vm.selectedBranch);


        console.log(vm.questionList);

        vm.questionList.forEach(function (element) {
            element.page = 1;
            element.answers = [];
            element.showAnswer = false
        }, this);

        vm.countryChange = function () {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionChange = function () {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];
                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);
                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);

                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.viewAnswer = function (ques) {
            ques.isloading = true;
            AnswerResource.getAnswer({
                questionId: ques.questionId, page: ques.page,
                countryId: vm.countryId, regionId: vm.regionId, cityId: vm.cityId,
                areaId: vm.areaId, branchId: vm.branchId, from: from, to: to
            }).$promise.then(function (results) {
                ques.isloading = false;
                ques.answers = results;
                ques.answers.results.forEach(function (element) {
                    element.date = element.date + "Z";
                    element.date = $filter('date')(new Date(element.date), "dd/MM/yyyy hh:mm a");
                }, this);
            },
                function (data, status) {
                    ques.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.viewAnswerByProjectId = function (ques) {
            ques.isloading = true;
            AnswerResource.getAnswerByProjectId({
                questionId: ques.questionId, projectId: $scope.projectId, page: ques.page
            }).$promise.then(function (results) {
                ques.isloading = false;
                ques.answers = results;
                ques.answers.results.forEach(function (element) {
                    element.date = element.date + "Z";
                    element.date = $filter('date')(new Date(element.date), "dd/MM/yyyy hh:mm a");
                }, this);
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
        if ($scope.projectId != 0) {

            debugger;
            GetQuestionByProject();

        }
        function GetQuestionByProject() {
            blockUI.start("Loading...");
            vm.selectedCategoryType.categoryTypeId = 14;
            AnswerQuestionResource.getAllQuestions({ catgoryTypeId: vm.selectedCategoryType.categoryTypeId }).$promise.then(function (results) {
                vm.questionList = results.results;
                vm.questionList.forEach(function (element) {
                    element.page = 1;
                    element.answers = [];
                    element.showAnswer = false
                }, this);
                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.applyFilter = function () {
            blockUI.start("Loading...");

            AnswerQuestionResource.getAllQuestions({ catgoryTypeId: vm.selectedCategoryType.categoryTypeId }).$promise.then(function (results) {
                vm.questionList = results.results;
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
                vm.countryId = vm.selectedCountry.countryId;
                vm.regionId = vm.selectedRegion.regionId;
                vm.cityId = vm.selectedCity.cityId;
                vm.areaId = vm.selectedArea.areaId;
                vm.branchId = vm.selectedBranch.branchId;

                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.changePage = function (page, ques) {
            ques.isloading = true;
            ques.page = page
            AnswerResource.getAnswer({
                questionId: ques.questionId, page: ques.page,
                countryId: vm.countryId, regionId: vm.regionId, cityId: vm.cityId,
                areaId: vm.areaId, branchId: vm.branchId, from: from, to: to
            }).$promise.then(function (results) {
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
            'BranchResource', 'ToastService', '$stateParams', 'AreaByIdPrepService','CityByIdPrepService', 'RegionByIdPrepService', createBranchDialogController])

    function createBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource,
        ToastService, $stateParams, AreaByIdPrepService,CityByIdPrepService, RegionByIdPrepService) {
		var vm = this;
		vm.Area = AreaByIdPrepService;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.areaName = AreaByIdPrepService.titleDictionary[$scope.selectedLanguage];
		vm.close = function(){
		    $state.go('Area',{ countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId });
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
                    $state.go('Area',{ countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId },{ reload: true });

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
            'BranchByIdPrepService','$stateParams','AreaByIdPrepService','CityByIdPrepService', 'RegionByIdPrepService', editBranchDialogController])

    function editBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource, ToastService,
         BranchByIdPrepService,$stateParams,AreaByIdPrepService,CityByIdPrepService, RegionByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Branch = BranchByIdPrepService;

                $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.areaName = AreaByIdPrepService.titleDictionary[$scope.selectedLanguage];

                    vm.close = function () {
            $state.go('Area', { countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId });
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

                    $state.go('Area', { countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId },{ reload: true });

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
        .controller('AreaController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AreaResource', 'AreaPrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService','CityByIdPrepService','RegionByIdPrepService','$stateParams', AreaController]);


    function AreaController($rootScope, blockUI, $scope, $filter, $translate,
        $state, AreaResource, AreaPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService,CityByIdPrepService,RegionByIdPrepService,$stateParams) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = AreaPrepService.totalCount;
        $scope.AreaList = AreaPrepService;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        function refreshAreas() {

            blockUI.start("Loading..."); 

                        var k = AreaResource.getAllAreas({cityId: $stateParams.cityId, page:vm.currentPage}).$promise.then(function (results) { 
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
            getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Areas/EditArea', useToken: true },
            getArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Areas/GetAreaById/:AreaId', useToken: true },
            getAllAreasForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Areas', useToken: true, isArray:true }
        })
    } 

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createAreaDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'AreaResource', 'ToastService', '$stateParams','CityByIdPrepService','RegionByIdPrepService', createAreaDialogController])

    function createAreaDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, AreaResource,
        ToastService, $stateParams,CityByIdPrepService, RegionByIdPrepService) {

                blockUI.start("Loading..."); 

            		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
		vm.close = function(){
			$state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});
		} 

		 		vm.AddNewArea = function () {
            blockUI.start("Loading..."); 

                        var newObj = new AreaResource();
            newObj.cityId= $stateParams.cityId;            
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId},{ reload: true });
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
            'AreaByIdPrepService','$stateParams','CityByIdPrepService','RegionByIdPrepService', editAreaDialogController])

    function editAreaDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, AreaResource, ToastService, 
        AreaByIdPrepService, $stateParams, CityByIdPrepService, RegionByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Area = AreaByIdPrepService; 
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        vm.Close = function () {
            $state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});
        }
        vm.UpdateArea = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new AreaResource();
            updateObj.AreaId = vm.Area.areaId;
            updateObj.cityId= $stateParams.cityId;                        
            updateObj.titleDictionary = vm.Area.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId},{ reload: true });

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
            'CategoryResource','RolePrepService', 'ToastService', '$rootScope', 'DepartmentByIdPrepService','allcategoryTypePrepService', createCategoryDialogController])

    function createCategoryDialogController($scope, $http, $state, appCONSTANTS, $translate, CategoryResource,RolePrepService,
        ToastService, $rootScope, DepartmentByIdPrepService,allcategoryTypePrepService) {
		var vm = this;
		vm.Department = DepartmentByIdPrepService;
		vm.language = appCONSTANTS.supportedLanguage;
        $scope.roleList = RolePrepService.results;
        vm.categoryTypes = allcategoryTypePrepService.results

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
            newObj.categoryTypes = [];            
            vm.selectedCategoryTypeId.forEach(function(element) {
                newObj.categoryTypes.push({categoryTypeId:element.categoryTypeId});
            }, this);
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
         'CategoryResource', 'RolePrepService','ToastService','CategoryByIdPrepService','allcategoryTypePrepService', editCategoryDialogController])

    function editCategoryDialogController($scope,$filter, $http, $state, appCONSTANTS, $translate, CategoryResource,RolePrepService,
         ToastService,CategoryByIdPrepService,allcategoryTypePrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Category = CategoryByIdPrepService; 
        $scope.roleList = RolePrepService.results; 
        vm.categoryTypes = allcategoryTypePrepService.results
        vm.selectedCategoryRoles = [];
        vm.selectedCategoryTypeId = [];
        console.log(vm.Category);

                 var i;
        for (i = 0; i < vm.Category.categoryRoles.length; i++) {
            var indexRate = $scope.roleList.indexOf($filter('filter')($scope.roleList, { 'roleId': vm.Category.categoryRoles[i].roleId }, true)[0]);
            vm.selectedCategoryRoles.push($scope.roleList[indexRate]);

        }
        var i;
        for (i = 0; i < vm.Category.categoryTypes.length; i++) {
            var indexRate = vm.categoryTypes.indexOf($filter('filter')(vm.categoryTypes, { 'categoryTypeId': vm.Category.categoryTypes[i].categoryTypeId }, true)[0]);
            vm.selectedCategoryTypeId.push(vm.categoryTypes[indexRate]);

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

                        updateObj.categoryTypes = [];            
            vm.selectedCategoryTypeId.forEach(function(element) {
                updateObj.categoryTypes.push({categoryTypeId:element.categoryTypeId});
            }, this);
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
        .controller('CityController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'CityResource', 'CitiesPrepService',  '$stateParams', 'appCONSTANTS',
            'ToastService','RegionByIdPrepService', CityController]);


    function CityController($rootScope, blockUI, $scope, $filter, $translate,
        $state, CityResource, CitiesPrepService, $stateParams, appCONSTANTS, ToastService,RegionByIdPrepService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = CitiesPrepService.totalCount;
        $scope.Cities  = CitiesPrepService;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        function refreshCities() {

            blockUI.start("Loading..."); 

                        var k = CityResource.getAllCities({regionId: $stateParams.regionId ,page:vm.currentPage}).$promise.then(function (results) { 
                $scope.Cities = results  
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
            refreshCities();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('CityResource', ['$resource', 'appCONSTANTS', CityResource]) 

    function CityResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
            getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Cities/EditCity', useToken: true },
            getCity: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId', useToken: true },
            getAllCitiesForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Cities', useToken: true, isArray:true }
        })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Cities', {
                    url: '/:regionId/City',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/City/templates/Cities.html',
                            controller: 'CityController',
                            'controllerAs': 'CityCtrl',
                        }
                    },
                    resolve: {
                        CitiesPrepService: CitiesPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent:"Regions",
                    ncyBreadcrumb: {
                        label: '{{regionName}}'
                    }
                })
                .state('newCity', {
                    url: '/:regionId/newCity',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/City/templates/new.html',
                            controller: 'createCityDialogController',
                            'controllerAs': 'newCityCtrl',
                        }
                    },
                    resolve: {
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent:"Regions",
                    ncyBreadcrumb: {
                        label: '{{regionName}}'
                    }

                })
                .state('editCity', {
                    url: '/:regionId/editCity/:cityId',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/City/templates/edit.html',
                            controller: 'editCityDialogController',
                            'controllerAs': 'editCityCtrl',
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
                    parent:"Regions",
                    ncyBreadcrumb: {
                        label: '{{regionName}}'
                    }

                })
        });

    CitiesPrepService.$inject = ['CityResource', '$stateParams']
    function CitiesPrepService(CityResource, $stateParams) {
        return CityResource.getAllCities({ regionId: $stateParams.regionId }).$promise;
    }

    CityByIdPrepService.$inject = ['CityResource', '$stateParams']
    function CityByIdPrepService(CityResource, $stateParams) {
        return CityResource.getCity({ cityId: $stateParams.cityId }).$promise;
    }

    RegionByIdPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionByIdPrepService(RegionResource, $stateParams) {
        return RegionResource.getRegion({ regionId: $stateParams.regionId }).$promise;
    }
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createCityDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'CityResource', 'ToastService', '$stateParams','RegionByIdPrepService', createCityDialogController])

    function createCityDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CityResource,
        ToastService, $stateParams,RegionByIdPrepService) {

                blockUI.start("Loading..."); 

            		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        vm.close = function(){
			$state.go('Cities',{countryId: $stateParams.countryId ,regionId: $stateParams.regionId});
		} 

		 		vm.AddNewCity = function () {
            blockUI.start("Loading..."); 

                        var newObj = new CityResource();
            newObj.regionId= $stateParams.regionId;            
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Cities',{countryId: $stateParams.countryId ,regionId: $stateParams.regionId},{ reload: true });
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
        .controller('editCityDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'CityResource', 'ToastService',
            'CityByIdPrepService','$stateParams','RegionByIdPrepService', editCityDialogController])

    function editCityDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CityResource, ToastService, 
        CityByIdPrepService,$stateParams,RegionByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.City = CityByIdPrepService;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];

                vm.Close = function () {
            $state.go('Cities',{countryId: $stateParams.countryId,regionId: $stateParams.regionId });
        }
        vm.UpdateCity  = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new CityResource();
            updateObj.cityId = vm.City.cityId;
            updateObj.regionId= $stateParams.regionId;
            updateObj.titleDictionary = vm.City.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Cities',{countryId: $stateParams.countryId,regionId: $stateParams.regionId},{ reload: true });

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
        .controller('ConfigController', ['blockUI', '$scope', '$state',
            'configTicketsPrepService', '$filter', 'authorizationService', '$translate', 'configResource', ConfigController]);

    function ConfigController(blockUI, $scope, $state,
        configTicketsPrepService, $filter, authorizationService, $translate, configResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[11].children[0]).addClass("active")
        var vm = this;
        vm.tickets = configTicketsPrepService;
        vm.changeActive = function (ticket) {
            if (ticket.isActive) {
                configResource.disableTicketScheduler({Id:ticket.id}).$promise.then(function (results) {
                    ticket.isActive = !ticket.isActive
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
            else {
                configResource.enableTicketScheduler({Id:ticket.id}).$promise.then(function (results) {
                    ticket.isActive = !ticket.isActive
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
    }

}());(function () {
    angular
        .module('home')
        .factory('configResource', ['$resource', 'appCONSTANTS', configResource])

    function configResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'TicketScheduler/', {}, {
            getAllTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/', useToken: true, isArray:true },
            createTicketScheduler: { method: 'POST', useToken: true },
            updateTicketScheduler: { method: 'PUT', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id', useToken: true },
            getTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id', useToken: true },
            disableTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id/Disable', useToken: true },
            enableTicketScheduler: { method: 'GET', url: appCONSTANTS.API_URL + 'TicketScheduler/:Id/Enable', useToken: true },
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Config', {
                    url: '/Config',
                    templateUrl: './app/GlobalAdmin/Config/templates/config.html',
                    controller: 'ConfigController',
                    'controllerAs': 'configCtrl',
                    resolve: {
                        configTicketsPrepService: configTicketsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['11'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('newTicketConfig', {
                    url: '/newTicketConfig',
                    templateUrl: './app/GlobalAdmin/Config/templates/newTicketConfig.html',
                    controller: 'createTicketConfigController',
                    'controllerAs': 'ticketConfigCtrl',
                    resolve: {
                        allEmailsPrepService: allEmailsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['11'],
                            redirectTo: 'root'
                        }
                    }
                })
                .state('editTicketConfig', {
                    url: '/TicketConfig/:Id',
                    templateUrl: './app/GlobalAdmin/Config/templates/editTicketConfig.html',
                    controller: 'updateTicketConfigController',
                    'controllerAs': 'ticketConfigCtrl',
                    resolve: {
                        ticketSchedulerPrepService: ticketSchedulerPrepService,
                        allEmailsPrepService: allEmailsPrepService
                    },
                    data: {
                        permissions: {
                            only: ['11'],
                            redirectTo: 'root'
                        }
                    }
                })
        });

    configTicketsPrepService.$inject = ['configResource']
    function configTicketsPrepService(configResource) {
        return configResource.getAllTicketScheduler().$promise;
    }

    allEmailsPrepService.$inject = ['UserResource']
    function allEmailsPrepService(UserResource) {
        return UserResource.GetAllEmails().$promise;
    }
    ticketSchedulerPrepService.$inject = ['configResource', '$stateParams']
    function ticketSchedulerPrepService(configResource, $stateParams) {
        return configResource.getTicketScheduler({ Id: $stateParams.Id }).$promise;
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createTicketConfigController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'configResource', 'ToastService', 'allEmailsPrepService', createTicketConfigController])

    function createTicketConfigController($scope, blockUI, $http, $state, appCONSTANTS, $translate, configResource,
        ToastService, allEmailsPrepService) {

        blockUI.start("Loading...");

        var vm = this;
        vm.users = allEmailsPrepService;
        vm.status = "Pending"
        vm.close = function () {
            $state.go('Config');
        }

        vm.AddNew = function () {
            blockUI.start("Loading...");

            var newObj = new configResource();
            newObj.status = vm.status;
            newObj.time = vm.time;
            newObj.emails = vm.emails.toString().replace(new RegExp(',', 'g'), ';');
            newObj.body = vm.body;
            newObj.$createTicketScheduler().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Config');
                    blockUI.stop();


                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.validateEmail = function () {
            var RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var valid = true;
            vm.emails.forEach(function (element) {
                valid = RegExp.test(element);
                if (!valid)
                    return valid;

            }, this);
            return valid
        }
        blockUI.stop();

    }
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('updateTicketConfigController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'configResource', 'ToastService', 'allEmailsPrepService','ticketSchedulerPrepService', updateTicketConfigController])

    function updateTicketConfigController($scope, blockUI, $http, $state, appCONSTANTS, $translate, configResource,
        ToastService, allEmailsPrepService,ticketSchedulerPrepService) {

                blockUI.start("Loading..."); 

                    var vm = this;
        vm.users = allEmailsPrepService;
        vm.ticketScheduler = ticketSchedulerPrepService;
        vm.ticketScheduler.emails = vm.ticketScheduler.emails.split(';')
		vm.close = function(){
			$state.go('Config');
		} 

		 		vm.update = function () {
            blockUI.start("Loading..."); 

                        var newObj = new configResource();
            newObj.id =  vm.ticketScheduler.id; 
            newObj.status =  vm.ticketScheduler.status; 
            newObj.time =  vm.ticketScheduler.time; 
            newObj.emails =  vm.ticketScheduler.emails.toString().replace(new RegExp(',', 'g'), ';');
            newObj.body =  vm.ticketScheduler.body;
            newObj.$updateTicketScheduler({Id:vm.ticketScheduler.id}).then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success"); 
                    $state.go('Config');
                     blockUI.stop();        


                },
                function (data, status) {
               blockUI.stop();        

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.validateEmail = function () {
            var RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var valid = true;
            vm.ticketScheduler.emails.forEach(function (element) {
                valid = RegExp.test(element);
                if (!valid)
                    return valid;

            }, this);
            return valid
        }
        blockUI.stop();

  	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('CountryController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'CountryResource', 'CountriesPrepService',  '$localStorage', 'appCONSTANTS',
            'ToastService', CountryController]);


    function CountryController($rootScope, blockUI, $scope, $filter, $translate,
        $state, CountryResource, CountriesPrepService, $localStorage, appCONSTANTS, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = CountriesPrepService.totalCount;
        $scope.Countries  = CountriesPrepService;
        function refreshCountries() {

            blockUI.start("Loading..."); 

                        var k = CountryResource.getAllCountries({page:vm.currentPage}).$promise.then(function (results) { 
                $scope.Countries = results  
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
            refreshCountries();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('CountryResource', ['$resource', 'appCONSTANTS', CountryResource]) 

    function CountryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Countries/', {}, {
            getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Countries/EditCountry', useToken: true },
            getCountry: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId', useToken: true }

                    })
    } 

}());
(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
            .state('Countries', {
                url: '/Country',
                templateUrl: './app/GlobalAdmin/Country/templates/Countries.html',
                controller: 'CountryController',
                'controllerAs': 'CountryCtrl',
                resolve: {
                    CountriesPrepService: CountriesPrepService
                },
                data: {
                    permissions: {
                        only: ['4'],
                        redirectTo: 'root'
                    }
                }

            })
            .state('newCountry', {
                url: '/newCountry',
                templateUrl: './app/GlobalAdmin/Country/templates/new.html',
                controller: 'createCountryDialogController',
                'controllerAs': 'newCountryCtrl',
                data: {
                    permissions: {
                        only: ['4'],
                        redirectTo: 'root'
                    }
                }

            })
            .state('editCountry', {
                url: '/editCountry/:countryId',
                templateUrl: './app/GlobalAdmin/Country/templates/edit.html',
                controller: 'editCountryDialogController',
                'controllerAs': 'editCountryCtrl',
                resolve: {
                    CountryByIdPrepService: CountryByIdPrepService
                },
                data: {
                    permissions: {
                        only: ['4'],
                        redirectTo: 'root'
                    }
                }

            })
        });

                CountriesPrepService.$inject = ['CountryResource']
        function CountriesPrepService(CountryResource) {
            return CountryResource.getAllCountries().$promise;
        }

        CountryByIdPrepService.$inject = ['CountryResource', '$stateParams']
        function CountryByIdPrepService(CountryResource, $stateParams) {
            return CountryResource.getCountry({ countryId: $stateParams.countryId }).$promise;
        }

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createCountryDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'CountryResource', 'ToastService', '$rootScope', createCountryDialogController])

    function createCountryDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CountryResource,
        ToastService, $rootScope) {

                blockUI.start("Loading..."); 

            		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Countries');
		} 

		 		vm.AddNewCountry = function () {
            blockUI.start("Loading..."); 

                        var newObj = new CountryResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Countries');
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
        .controller('editCountryDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'CountryResource', 'ToastService',
            'CountryByIdPrepService', editCountryDialogController])

    function editCountryDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CountryResource, ToastService, CountryByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Country = CountryByIdPrepService; 
        vm.Close = function () {
            $state.go('Countries');
        }
        vm.UpdateCountry  = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new CountryResource();
            updateObj.countryId = vm.Country.countryId;
            updateObj.titleDictionary = vm.Country.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Countries');

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
        .controller('DepartmentController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'DepartmentResource', 'DepartmentPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', DepartmentController]);


    function DepartmentController($rootScope, blockUI, $scope, $filter, $translate,
        $state, DepartmentResource,DepartmentPrepService,  $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

           $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[4].children[0]).addClass("active")

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
        .controller('QuestionController', [ 'blockUI', '$scope', 'appCONSTANTS', 'QuestionResource', 'QuestionPrepService',  
            'ToastService', QuestionController]);


    function QuestionController(  blockUI, $scope, appCONSTANTS,  QuestionResource, QuestionPrepService, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[6].children[0]).addClass("active")

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
        .controller('RegionController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'RegionResource', 'RegionsPrepService',  '$stateParams', 'appCONSTANTS',
            'ToastService','CountryByIdPrepService', RegionController]);


    function RegionController($rootScope, blockUI, $scope, $filter, $translate,
        $state, RegionResource, RegionsPrepService, $stateParams, appCONSTANTS, ToastService,CountryByIdPrepService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = RegionsPrepService.totalCount;
        $scope.Regions  = RegionsPrepService;
        $scope.countryName = CountryByIdPrepService.titleDictionary[$scope.selectedLanguage];
        function refreshRegions() {

            blockUI.start("Loading..."); 

                        var k = RegionResource.getAllRegions({countryId: $stateParams.countryId ,page:vm.currentPage}).$promise.then(function (results) { 
                $scope.Regions = results  
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
            refreshRegions();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('RegionResource', ['$resource', 'appCONSTANTS', RegionResource]) 

    function RegionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
            getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Regions/EditRegion', useToken: true },
            getRegion: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId', useToken: true },
            getAllRegionsForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Regions', useToken: true, isArray:true }

                    })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Regions', {
                    url: '/Country/:countryId/Region',
                    templateUrl: './app/GlobalAdmin/Region/templates/Regions.html',
                    controller: 'RegionController',
                    'controllerAs': 'RegionCtrl',
                    resolve: {
                        RegionsPrepService: RegionsPrepService,
                        CountryByIdPrepService: CountryByIdPrepService                        
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    ncyBreadcrumb: {
                        label: '{{countryName}}'
                    }
                })
                .state('newRegion', {
                    url: '/Country/:countryId/newRegion',
                    templateUrl: './app/GlobalAdmin/Region/templates/new.html',
                    controller: 'createRegionDialogController',
                    'controllerAs': 'newRegionCtrl',
                    resolve: {
                        CountryByIdPrepService: CountryByIdPrepService                        
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    ncyBreadcrumb: {
                        label: '{{countryName}}'
                    }

                })
                .state('editRegion', {
                    url: '/Country/:countryId/editRegion/:regionId',
                    templateUrl: './app/GlobalAdmin/Region/templates/edit.html',
                    controller: 'editRegionDialogController',
                    'controllerAs': 'editRegionCtrl',
                    resolve: {
                        RegionByIdPrepService: RegionByIdPrepService,
                        CountryByIdPrepService: CountryByIdPrepService                        
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    ncyBreadcrumb: {
                        label: '{{countryName}}'
                    }

                })
        });

    RegionsPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionsPrepService(RegionResource, $stateParams) {
        return RegionResource.getAllRegions({ countryId: $stateParams.countryId }).$promise;
    }

    RegionByIdPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionByIdPrepService(RegionResource, $stateParams) {
        return RegionResource.getRegion({ regionId: $stateParams.regionId }).$promise;
    }
    CountryByIdPrepService.$inject = ['CountryResource', '$stateParams']
    function CountryByIdPrepService(CountryResource, $stateParams) {
        return CountryResource.getCountry({ countryId: $stateParams.countryId }).$promise;
    }

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createRegionDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RegionResource', 'ToastService', '$stateParams','CountryByIdPrepService', createRegionDialogController])

    function createRegionDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RegionResource,
        ToastService, $stateParams,CountryByIdPrepService) {

                blockUI.start("Loading..."); 

            		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = CountryByIdPrepService.titleDictionary[$scope.selectedLanguage];

        		vm.close = function(){
			$state.go('Regions',{countryId: $stateParams.countryId });
		} 

		 		vm.AddNewRegion = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RegionResource();
            newObj.countryId= $stateParams.countryId;
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Regions',{countryId: $stateParams.countryId },{ reload: true });
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
        .controller('editRegionDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'RegionResource', 'ToastService',
            'RegionByIdPrepService','$stateParams','CountryByIdPrepService', editRegionDialogController])

    function editRegionDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RegionResource, ToastService, 
        RegionByIdPrepService,$stateParams,CountryByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Region = RegionByIdPrepService; 
        $scope.countryName = CountryByIdPrepService.titleDictionary[$scope.selectedLanguage];

                vm.Close = function () {
            $state.go('Regions',{countryId: $stateParams.countryId });
        }
        vm.UpdateRegion  = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new RegionResource();
            updateObj.regionId = vm.Region.regionId;
            updateObj.countryId= $stateParams.countryId;
            updateObj.titleDictionary = vm.Region.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Regions',{countryId: $stateParams.countryId },{ reload: true });

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

                        var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
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
        $($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")

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
        .controller('TicketDetailsController', ['blockUI', '$scope', '$state',
            'TicketPrepService', '$filter', 'authorizationService','$translate','TicketResource','TicketLogsPrepService', TicketDetailsController]);

    function TicketDetailsController(blockUI, $scope, $state,
        TicketPrepService, $filter, authorizationService , $translate,TicketResource,TicketLogsPrepService) {

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

            if(vm.ticket.technicianModificationTime!=null){
            vm.ticket.technicianModificationTime = vm.ticket.technicianModificationTime + "Z";
            vm.ticket.technicianModificationTime = $filter('date')(new Date(vm.ticket.technicianModificationTime), "dd/MM/yyyy hh:mm a");
            }

                        vm.ticketLogs = TicketLogsPrepService;
            vm.ticketLogs.forEach(function(element) {
                element.dateTime = element.dateTime + "Z";
                element.dateTime = $filter('date')(new Date(element.dateTime), "dd/MM/yyyy hh:mm a");
            }, this);
        }
        init();
        vm.assignTicket = function (ticketId, assignedUserId,comment) {
            var newObj = new TicketResource();
            newObj.assignComment = comment;
            newObj.$assigned({ ticketId: ticketId, assignedUserId: assignedUserId }).then(function (results) {
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
            vm.selectedPriority = "Critical";
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
            newTicket.priority = vm.selectedPriority;


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
        .controller('TicketsController', ['blockUI', '$scope', '$translate', 'TicketResource', '$state',
            'ToastService', 'TicketsPrepService', 'authorizationService', 'CountriesPrepService',
            'RegionResource', 'CityResource', 'AreaResource', 'DepartmentPrepService',
            'BranchManagerPrepService', 'TechnasianPrepService', TicketsController]);

    function TicketsController(blockUI, $scope, $translate, TicketResource, $state,
        ToastService, TicketsPrepService, authorizationService, CountriesPrepService,
        RegionResource, CityResource, AreaResource, DepartmentPrepService,
        BranchManagerPrepService, TechnasianPrepService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[9].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.counties = [];
            vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)

            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);

            vm.selectedDepartment = { departmentId: 0, titleDictionary: { "en": "All Departments", "ar": "كل الاقسام" } };
            vm.departments = [];
            vm.departments.push(vm.selectedDepartment);
            vm.departments = vm.departments.concat(DepartmentPrepService.results)
            vm.selectedCategory = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categories = [];
            vm.categories.push(vm.selectedCategory);

            vm.selectedBranchManager = { userId: 0, userName: $translate.instant('allBranchesM') };
            vm.BranchManagers = [];
            vm.BranchManagers.push(vm.selectedBranchManager);
            vm.BranchManagers = vm.BranchManagers.concat(BranchManagerPrepService.results)
            vm.selectedTechnician = { userId: 0, userName: $translate.instant('allTechnasian') };
            vm.Technicians = [];
            vm.Technicians.push(vm.selectedTechnician);
            vm.Technicians = vm.Technicians.concat(TechnasianPrepService.results)

            vm.user = authorizationService.getUser();
            vm.tickets = TicketsPrepService;
            if (vm.tickets.results != null)
                vm.tickets.results.forEach(function (element) {
                    element.technacianUsers[0] = $translate.instant('selectTech')
                    element.assignedUserId = '0';
                    element.showAssign = false
                }, this);
            vm.selectedRate = 0;
        }
        init();
        vm.countryChange = function () {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);

            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionChange = function () {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if(vm.selectedArea.areaId > 0)
            vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.departmentChange = function () {

            vm.categories = [];
            vm.selectedCategory = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categories.push(vm.selectedCategory);
            if(vm.selectedDepartment.departmentId > 0)
            vm.categories = vm.categories.concat(vm.selectedDepartment.categories);
        }

        vm.countryId = 0;
        vm.regionId = 0;
        vm.cityId = 0;
        vm.areaId = 0;
        vm.branchId = 0;
        vm.departmentId = 0;
        vm.categoryId = 0;

        vm.branchManagerId = 0;
        vm.technasianId = 0;
        vm.from = "";
        vm.to = "";
        vm.applyFilter = function () {
            vm.from = ""
            if ($('#fromdate').val() != "") {
                var fromDate = $('#fromdate').val().split('/')
                vm.from = (new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
            }
            vm.to = ""
            if ($('#todate').val() != "") {
                var toDate = $('#todate').val().split('/')
                vm.to = (new Date(toDate[1] + "/" + toDate[0] + "/" + toDate[2])).toISOString().replace('Z', '');
            }
            vm.countryId = vm.selectedCountry.countryId;
            vm.regionId = vm.selectedRegion.regionId;
            vm.cityId = vm.selectedCity.cityId;
            vm.areaId = vm.selectedArea.areaId;
            vm.branchId = vm.selectedBranch.branchId;
            vm.branchManagerId = vm.selectedBranchManager.userId;
            vm.technasianId = vm.selectedTechnician.userId;

            vm.departmentId = vm.selectedDepartment.departmentId;
            vm.categoryId = vm.selectedCategory.categoryId;
            vm.status = vm.selectedStatus;
            vm.currentPage = 1;
            refreshTickets();
        }
        vm.currentPage = 1;
        function refreshTickets() {
            blockUI.start("Loading...");
            TicketResource.getTickets({
                page: vm.currentPage,
                countryId: vm.countryId, regionId: vm.regionId, cityId: vm.cityId,
                areaId: vm.areaId, branchId: vm.branchId, from: vm.from, to: vm.to,
                departmentId: vm.departmentId, categoryId: vm.categoryId,
                branchManagerId: vm.branchManagerId, technasianId: vm.technasianId,
                status: vm.status
            }).$promise.then(function (results) {
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

        vm.assignTicket = function (ticketId, assignedUserId, comment) {
            var newObj = new TicketResource();
            newObj.assignComment = comment;
            newObj.$assigned({ ticketId: ticketId, assignedUserId: assignedUserId }).then(function (results) {
                refreshTickets();
            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.reassignTicket = function (ticketId, assignedUserId, comment) {
            var newObj = new TicketResource();
            newObj.assignComment = comment;
            newObj.$reassigned({ ticketId: ticketId, assignedUserId: assignedUserId }).then(function (results) {
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
        vm.completeTicket = function (ticketId) {
            TicketResource.complete({ ticketId: ticketId }).$promise.then(function (results) {
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
            assigned: { method: 'POST', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Assigned/:assignedUserId', useToken: true },
            approve: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Approve', useToken: true },
            close: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Closed', useToken: true },
            reject: { method: 'POST', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Reject', useToken: true },
            complete: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Complete', useToken: true },            
            reassigned: { method: 'POST', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/ReAssigned/:assignedUserId', useToken: true },
            getTicketLogs: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/:ticketId/Logs', useToken: true ,isArray:true}
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('AssetController', ['$rootScope', '$stateParams', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AssetResource', 'AssetPrepService', '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', 'AnswerQuestionResource', 'VendorPrepService', AssetController]);


    function AssetController($rootScope, $stateParams, blockUI, $scope, $filter, $translate,
        $state, AssetResource, AssetPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, AnswerQuestionResource, VendorPrepService) {
        blockUI.start("Loading...");
        $scope.projectId = $stateParams.projectId;

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = AssetPrepService.totalCount;
        $scope.AssetList = AssetPrepService;
        $scope.vendorList = VendorPrepService;
        console.log($scope.AssetList);
        function refreshAssets() {
            blockUI.start("Loading...");
            var k = AssetResource.getAllAssets({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.AssetList = results
                blockUI.stop();
            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.previousBtn = function (projectId) {
            CheckAnswersByProject(projectId);
        }
        function CheckAnswersByProject(projectId) {
            blockUI.start("Loading...");
            AnswerQuestionResource.CheckAnswersByProjectId({ projectId: projectId }).$promise.then(function (results) {
                if (results.userId != 0) {
                    if (results.userId != undefined) {
                        $state.go('Answers', { projectId: projectId });
                    }
                    else {
                        $state.go('AnswerQuestion', { projectId: projectId });
                    }
                }
                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshAssets();
        }
        blockUI.stop();

    }

})();(function () {
    angular
      .module('home') 
        .factory('AssetResource', ['$resource', 'appCONSTANTS', AssetResource])

         function AssetResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Assets/', {}, {
            getAllAssets: { method: 'GET', url: appCONSTANTS.API_URL + 'Assets/GetAllAssets/:ProjectId', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Assets/EditAsset', useToken: true },
            getAsset: { method: 'GET', url: appCONSTANTS.API_URL + 'Assets/GetAssetById/:AssetId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createDialogAssetController', ['$scope', '$stateParams', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'AssetResource', 'ToastService', 'VendorPrepService', createDialogAssetController])

    function createDialogAssetController($scope, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate, AssetResource,
        ToastService, VendorPrepService) { 
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results;
        vm.selectedVendor = null;
        $scope.assetStatus = "NotRecevied";
        $scope.paymentMethod = "Credit";
        vm.close = function () {
            $state.go('Asset', { projectId: $scope.projectId });

         }

        vm.AddNewAsset = function () {
            blockUI.start("Saving...");

                         var newObj = new AssetResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;
            newObj.price = vm.price;
            newObj.assetStatus = $scope.assetStatus;
            newObj.paymentMethod = $scope.paymentMethod;
            newObj.vendorId = vm.selectedVendor.vendorId;
            newObj.projectId = $scope.projectId;
            newObj.notes = vm.notes;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Asset', { projectId: $scope.projectId });

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
        .controller('editDialogAssetController', ['$scope', '$filter', '$stateParams', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'categoryTypeResource', 'ToastService',
            'AssetByIdPrepService', 'AssetResource', 'VendorPrepService', editDialogAssetController])

    function editDialogAssetController($scope, $filter, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource, ToastService,
        AssetByIdPrepService, AssetResource, VendorPrepService) {
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results; 
        vm.Asset = AssetByIdPrepService; 
        console.log(vm.Asset);

        if (vm.Asset.paymentMethod == 1)
            vm.Asset.paymentMethod = "Credit";
        else
            vm.Asset.paymentMethod = "Debit";

        if (vm.Asset.assetStatus == 1)
            vm.Asset.assetStatus = "NotRecevied";
        else
            vm.Asset.assetStatus = "Recevied";


        var indexVendor = vm.Vendors.indexOf($filter('filter')(vm.Vendors, { 'vendorId': vm.Asset.vendorId }, true)[0]);
        vm.vendor = vm.Vendors[indexVendor];



        vm.Close = function () {
            $state.go('Asset', { projectId: $scope.projectId });

        }
        vm.UpdateAsset = function () { 
            blockUI.start("Saving...");
            var updateObj = new AssetResource();
            updateObj.assetId = vm.Asset.assetId;
            updateObj.assetStatus = vm.Asset.assetStatus;
            updateObj.notes = vm.Asset.notes; 
            updateObj.$update().then(
                function (data, status) { 
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Asset', { projectId: $scope.projectId });

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
        .controller('categoryTypeController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'categoryTypeResource', 'categoryTypePrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', categoryTypeController]);


    function categoryTypeController($rootScope, blockUI, $scope, $filter, $translate,
        $state, categoryTypeResource, categoryTypePrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        blockUI.start("Loading..."); 

         $('.pmd-sidebar-nav>li>a').removeClass("active")
         $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = categoryTypePrepService.totalCount;
        $scope.categoryTypeList = categoryTypePrepService;

        function refreshCategoryTypes() {
            blockUI.start("Loading..."); 
            var k = categoryTypeResource.getAllcategoryTypes({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.categoryTypeList = results
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
            refreshCategoryTypes();
        }
       blockUI.stop();

    }

})();(function () {
    angular
      .module('home')
        .factory('UserTypeResource', ['$resource', 'appCONSTANTS', UserTypeResource])
        .factory('categoryTypeResource', ['$resource', 'appCONSTANTS', categoryTypeResource])

    function UserTypeResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'UserTypes/', {}, {
            getAllUserTypes: { method: 'GET', url: appCONSTANTS.API_URL + 'UserTypes/GetAllUserTypes', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'UserTypes/EditUserType', useToken: true },
            getUserType: { method: 'GET', url: appCONSTANTS.API_URL + 'UserTypes/GetUserTypeById/:UserTypeId', useToken: true }
        })
    }
    function categoryTypeResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'CategoriesTypes/', {}, {
            getAllcategoryTypes: { method: 'GET', url: appCONSTANTS.API_URL + 'CategoriesTypes/', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'CategoriesTypes/:categoryTypeId', useToken: true },
            getcategoryType: { method: 'GET', url: appCONSTANTS.API_URL + 'CategoriesTypes/:categoryTypeId', useToken: true }
        })
    }




}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'categoryTypeResource', 'ToastService', 'allEmailsPrepService', createDialogController])

    function createDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource,
        ToastService, allEmailsPrepService) {
		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.users = allEmailsPrepService;
		vm.close = function(){
			$state.go('categoryType');
		} 

		         vm.AddNewType = function () {
            blockUI.start("Saving..."); 
            var newObj = new categoryTypeResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.type =  vm.type; 
            newObj.time =  vm.time; 
            newObj.emails =  vm.emails.toString().replace(new RegExp(',', 'g'), ';');
            newObj.body =  vm.body;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('categoryType');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.validateEmail = function () {
            var RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var valid = true;
            vm.emails.forEach(function (element) {
                valid = RegExp.test(element);
                if (!valid)
                    return valid;

            }, this);
            return valid
        }

  	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editDialogCategoryController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'categoryTypeResource', 'ToastService',
            'categoryTypeByIdPrepService','allEmailsPrepService', editDialogCategoryController])

    function editDialogCategoryController($scope, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource, ToastService,
         categoryTypeByIdPrepService,allEmailsPrepService) {
		var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.categoryType = categoryTypeByIdPrepService;
        vm.users = allEmailsPrepService;
        vm.categoryType.emails = vm.categoryType.emails!=null?vm.categoryType.emails.split(';'):vm.categoryType.emails
        console.log(vm.product);
        vm.Close = function () {
            $state.go('categoryType');
        }
		vm.UpdateType= function () {
            blockUI.start("Saving..."); 
            var updateObj = new categoryTypeResource();
            updateObj.categoryTypeId = vm.categoryType.categoryTypeId;
            updateObj.titleDictionary = vm.categoryType.titleDictionary;
		    updateObj.IsDeleted = false;
            updateObj.IsStatic = false;
            
            updateObj.type =  vm.categoryType.type; 
            updateObj.time =  vm.categoryType.time; 
            updateObj.emails =  vm.categoryType.emails.toString().replace(new RegExp(',', 'g'), ';');
            updateObj.body =  vm.categoryType.body;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('categoryType');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.validateEmail = function () {
            var RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var valid = true;
            vm.categoryType.emails.forEach(function (element) {
                valid = RegExp.test(element);
                if (!valid)
                    return valid;

            }, this);
            return valid
        }
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('dashboardController', ['blockUI', '$scope', '$state',
            '$translate', 'dashboardResource', 'QuestionResource', 'TicketDashboardPrepService',
            'AnswerQuestionPrepService', '$filter', 'allcategoryTypePrepService', 'AnswerQuestionResource', 'CountriesPrepService',
            'BranchManagerPrepService', 'TechnasianPrepService', 'DepartmentPrepService',
            'RegionResource', 'CityResource', 'AreaResource', 'UsersAnswersQuestionPrepService', dashboardController]);

    function dashboardController(blockUI, $scope, $state,
        $translate, dashboardResource, QuestionResource, TicketDashboardPrepService,
        AnswerQuestionPrepService, $filter, allcategoryTypePrepService, AnswerQuestionResource, CountriesPrepService,
        BranchManagerPrepService, TechnasianPrepService, DepartmentPrepService,
        RegionResource, CityResource, AreaResource, UsersAnswersQuestionPrepService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[10].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.ticketsFilter = [
                {
                    name: $translate.instant('Country'),
                    value: "country"
                },
                {
                    name: $translate.instant('Region'),
                    value: "region"
                },
                {
                    name: $translate.instant('City'),
                    value: "city"
                },
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
            vm.categoryTypes = [];
            vm.selectedCategoryType = { categoryTypeId: 0, titleDictionary: { "en": "All", "ar": "كل" } };
            vm.categoryTypes.push(vm.selectedCategoryType);
            vm.categoryTypes = vm.categoryTypes.concat(allcategoryTypePrepService.results)

            vm.countiesSurvey = [];
            vm.selectedCountrySurvey = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
            vm.countiesSurvey.push(vm.selectedCountrySurvey);
            vm.countiesSurvey = vm.countiesSurvey.concat(CountriesPrepService.results)

            vm.selectedRegionSurvey = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.regionsSurvey = [];
            vm.regionsSurvey.push(vm.selectedRegionSurvey);
            vm.selectedCitySurvey = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.citiesSurvey = [];
            vm.citiesSurvey.push(vm.selectedCitySurvey);
            vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.areaListSurvey = [];
            vm.areaListSurvey.push(vm.selectedAreaSurvey);
            vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchListSurvey = [];
            vm.branchListSurvey.push(vm.selectedBranchSurvey);

            vm.selectedDepartmentSurvey = { departmentId: 0, titleDictionary: { "en": "All Departments", "ar": "كل الاقسام" } };
            vm.departmentsSurvey = [];
            vm.departmentsSurvey.push(vm.selectedDepartmentSurvey);
            vm.departmentsSurvey = vm.departmentsSurvey.concat(DepartmentPrepService.results)
            vm.selectedCategorySurvey = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categoriesSurvey = [];
            vm.categoriesSurvey.push(vm.selectedCategorySurvey);

            vm.selectedAnswersUser = { userId: 0, userName: $translate.instant('allUsers') };
            vm.AnswersUsers = [];
            vm.AnswersUsers.push(vm.selectedAnswersUser);
            vm.AnswersUsers = vm.AnswersUsers.concat(UsersAnswersQuestionPrepService)

            vm.counties = [];
            vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)

            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);

            vm.selectedDepartment = { departmentId: 0, titleDictionary: { "en": "All Departments", "ar": "كل الاقسام" } };
            vm.departments = [];
            vm.departments.push(vm.selectedDepartment);
            vm.departments = vm.departments.concat(DepartmentPrepService.results)
            vm.selectedCategory = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categories = [];
            vm.categories.push(vm.selectedCategory);

            vm.selectedBranchManager = { userId: 0, userName: $translate.instant('allBranchesM') };
            vm.BranchManagers = [];
            vm.BranchManagers.push(vm.selectedBranchManager);
            vm.BranchManagers = vm.BranchManagers.concat(BranchManagerPrepService.results)
            vm.selectedTechnician = { userId: 0, userName: $translate.instant('allTechnasian') };
            vm.Technicians = [];
            vm.Technicians.push(vm.selectedTechnician);
            vm.Technicians = vm.Technicians.concat(TechnasianPrepService.results)

        }
        vm.countryChange = function () {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);

            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionChange = function () {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.departmentChange = function () {

            vm.categories = [];
            vm.selectedCategory = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categories.push(vm.selectedCategory);
            if (vm.selectedDepartment.departmentId > 0)
                vm.categories = vm.categories.concat(vm.selectedDepartment.categories);
        }
        vm.countryId = 0;
        vm.regionId = 0;
        vm.cityId = 0;
        vm.areaId = 0;
        vm.branchId = 0;
        vm.departmentId = 0;
        vm.categoryId = 0;

        vm.branchManagerId = 0;
        vm.technasianId = 0;
        vm.from = "";
        vm.to = "";
        vm.applyFilter = function () {
            vm.from = ""
            if ($('#fromdate').val() != "") {
                var fromDate = $('#fromdate').val().split('/')
                vm.from = (new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
            }
            vm.to = ""
            if ($('#todate').val() != "") {
                var toDate = $('#todate').val().split('/')
                vm.to = (new Date(toDate[1] + "/" + toDate[0] + "/" + toDate[2])).toISOString().replace('Z', '');
            }
            vm.countryId = vm.selectedCountry.countryId;
            vm.regionId = vm.selectedRegion.regionId;
            vm.cityId = vm.selectedCity.cityId;
            vm.areaId = vm.selectedArea.areaId;
            vm.branchId = vm.selectedBranch.branchId;
            vm.branchManagerId = vm.selectedBranchManager.userId;
            vm.technasianId = vm.selectedTechnician.userId;

            vm.departmentId = vm.selectedDepartment.departmentId;
            vm.categoryId = vm.selectedCategory.categoryId;
            vm.status = vm.selectedStatus;
            vm.ticketFilterChange()
        }
        function loadTicketDashboard(tickets) {
            var assigned = [];
            var closed = [];
            var InProgress = [];
            var Pending = [];
            var Rejected = [];
            var Reassigned = [];
            var complete = [];
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
                Reassigned.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.reassignedCount
                })
                complete.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.completedCount
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
                },
                {
                    "key": $translate.instant('Reassigned'),
                    "values": Reassigned
                },
                {
                    "key": $translate.instant('completed'),
                    "values": complete
                }
            ];
        }
        init();

        vm.ticketFilterChange = function () {
            dashboardResource.getTicketsDashboard({
                xaxis: vm.selectedTicketFilter,
                countryId: vm.countryId, regionId: vm.regionId, cityId: vm.cityId,
                areaId: vm.areaId, branchId: vm.branchId, from: vm.from, to: vm.to,
                departmentId: vm.departmentId, categoryId: vm.categoryId,
                branchManagerId: vm.branchManagerId, technasianId: vm.technasianId,
                status: vm.status
            }).$promise
                .then(function (results) {
                    loadTicketDashboard(results)
                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.countrySurveyChange = function () {
            vm.selectedRegionSurvey = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCitySurvey = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regionsSurvey = [];
            vm.citiesSurvey = [vm.selectedCitySurvey];
            vm.areaListSurvey = [vm.selectedAreaSurvey];
            vm.regionsSurvey.push(vm.selectedRegionSurvey);

            vm.branchListSurvey = [];
            vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchListSurvey.push(vm.selectedBranchSurvey);
            RegionResource.getAllRegions({ countryId: vm.selectedCountrySurvey.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regionsSurvey = vm.regionsSurvey.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionSurveyChange = function () {
            if (vm.selectedRegionSurvey.regionId != undefined) {
                vm.citiesSurvey = [];
                vm.areaListSurvey = [];
                vm.selectedCitySurvey = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.citiesSurvey.push(vm.selectedCitySurvey);
                vm.areaListSurvey = [vm.selectedAreaSurvey];

                vm.branchListSurvey = [];
                vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchListSurvey.push(vm.selectedBranchSurvey);
                CityResource.getAllCities({ regionId: vm.selectedRegionSurvey.regionId, pageSize: 0 }).$promise.then(function (results) {
                    vm.citiesSurvey = vm.citiesSurvey.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.citySurveyChange = function () {
            if (vm.selectedCitySurvey.cityId != undefined) {
                vm.areaListSurvey = [];
                vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaListSurvey.push(vm.selectedAreaSurvey);

                vm.branchListSurvey = [];
                vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchListSurvey.push(vm.selectedBranchSurvey);
                AreaResource.getAllAreas({ cityId: vm.selectedCitySurvey.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaListSurvey = vm.areaListSurvey.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaSurveyChange = function () {
            vm.branchListSurvey = [];
            vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchListSurvey.push(vm.selectedBranchSurvey);
            if (vm.selectedAreaSurvey.areaId > 0)
                vm.branchListSurvey = vm.branchListSurvey.concat(vm.selectedAreaSurvey.branches);
        }

        vm.departmentSurveyChange = function () {
            vm.categoriesSurvey = [];
            vm.selectedCategorySurvey = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categoriesSurvey.push(vm.selectedCategorySurvey);
            if (vm.selectedDepartmentSurvey.departmentId > 0)
                vm.categoriesSurvey = vm.categoriesSurvey.concat(vm.selectedDepartmentSurvey.categories);
        }
        vm.countryIdSurvey = 0;
        vm.regionIdSurvey = 0;
        vm.cityIdSurvey = 0;
        vm.areaIdSurvey = 0;
        vm.branchIdSurvey = 0;
        vm.departmentIdSurvey = 0;
        vm.categoryIdSurvey = 0;

        vm.fromSurvey = "";
        vm.toSurvey = "";

        vm.applySurveyFilter = function () {
            blockUI.start("Loading...");
            vm.fromSurvey = ""
            if ($('#fromdateSurvey').val() != "") {
                var fromDateSurvey = $('#fromdateSurvey').val().split('/')
                vm.fromSurvey = (new Date(fromDateSurvey[1] + "/" + fromDateSurvey[0] + "/" + fromDateSurvey[2])).toISOString().replace('Z', '');
            }
            vm.toSurvey = ""
            if ($('#todateSurvey').val() != "") {
                var toDateSurvey = $('#todateSurvey').val().split('/')
                vm.toSurvey = (new Date(toDateSurvey[1] + "/" + toDateSurvey[0] + "/" + toDateSurvey[2])).toISOString().replace('Z', '');
            }
            vm.countryIdSurvey = vm.selectedCountrySurvey.countryId;
            vm.regionIdSurvey = vm.selectedRegionSurvey.regionId;
            vm.cityIdSurvey = vm.selectedCitySurvey.cityId;
            vm.areaIdSurvey = vm.selectedAreaSurvey.areaId;
            vm.branchIdSurvey = vm.selectedBranchSurvey.branchId;

            vm.departmentIdSurvey = vm.selectedDepartmentSurvey.departmentId;
            vm.categoryIdSurvey = vm.selectedCategorySurvey.categoryId;
            vm.AnsweredBy = vm.selectedAnswersUser.userId;

            AnswerQuestionResource.getAllQuestions({
                catgoryTypeId: vm.selectedCategoryType.categoryTypeId,
                departmentId: vm.departmentIdSurvey, categoryId: vm.categoryIdSurvey
            }).$promise.then(function (results) {
                vm.questionList = results.results;

                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.getQuestionDashbard = function (question) {
            question.isloading = true;
            QuestionResource.getQuestionDashBoard({
                questionId: question.questionId,
                countryId: vm.countryIdSurvey, regionId: vm.regionIdSurvey, cityId: vm.cityIdSurvey,
                areaId: vm.areaIdSurvey, branchId: vm.branchIdSurvey, from: vm.fromSurvey, to: vm.toSurvey,
                AnsweredBy: vm.AnsweredBy
            }).$promise
                .then(function (results) {
                    question.dashboard = results;
                    question.isloading = false;
                    if (question.questionTypeId == 0) {
                        question.data = []
                        if (question.dashboard.optionsCount != undefined) {
                            for (var element in question.dashboard.optionsCount) {
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

        vm.exportPDF = function(){

                        html2canvas(document.getElementById('surveyDiv')).then(function(canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        height:canvas.height,
                        width:500   
                    }],
                };
                pdfMake.createPdf(docDefinition).download("test.pdf");
            });
        }


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
        .controller('createProjectDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'ProjectResource', 'ToastService', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource','AnswerQuestionResource', createProjectDialogController])

    function createProjectDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, ProjectResource,
        ToastService, CountriesPrepService, RegionResource, CityResource, AreaResource,AnswerQuestionResource) {
        debugger
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        init();
        function init() {
            vm.counties = [];
            vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            console.log(vm.counties);
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);


        }
        vm.nextBtn = function () {
            blockUI.start("Saving...");

                         var newObj = new ProjectResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;
            newObj.branchId = vm.selectedBranch.branchId;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    CheckAnswersByProject(newObj);
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");

                                    },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        function CheckAnswersByProject(newObj) {
            blockUI.start("Loading...");
            AnswerQuestionResource.CheckAnswersByProjectId({ projectId: newObj.projectId }).$promise.then(function (results) {
                if (results.userId != 0) {
                    if (results.userId != undefined) {
                        $state.go('Answers', { projectId: newObj.projectId });
                    }
                    else {
                        $state.go('AnswerQuestion', { projectId: newObj.projectId });
                    }
                }
                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.countryChange = function () {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);

            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionChange = function () {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }
        vm.close = function () {
            $state.go('Project');
        }

        vm.AddNewProject = function () {
            blockUI.start("Saving...");

                         var newObj = new ProjectResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;
            newObj.branchId = vm.selectedBranch.branchId;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Project');

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
        .controller('editProjectDialogController', ['$scope', '$filter', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'ProjectResource', 'ProjectByIdPrepService', 'ToastService', 'CountriesPrepService', 'RegionResource', 'CityResource',
            'AreaResource', 'AnswerQuestionResource', editProjectDialogController])

    function editProjectDialogController($scope, $filter, blockUI, $http, $state, appCONSTANTS, $translate, ProjectResource, ProjectByIdPrepService,
        ToastService, CountriesPrepService, RegionResource, CityResource, AreaResource, AnswerQuestionResource) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Project = ProjectByIdPrepService;
        console.log(vm.Project);
        init();
        vm.nextBtn = function () {
            CheckAnswersByProject();
        }
        function CheckAnswersByProject() {
            blockUI.start("Loading...");
            AnswerQuestionResource.CheckAnswersByProjectId({ projectId: vm.Project.projectId }).$promise.then(function (results) {
                if (results.userId != 0) {
                    if (results.userId != undefined) {
                        $state.go('Answers', { projectId: vm.Project.projectId });
                    }
                    else {
                        $state.go('AnswerQuestion', { projectId: vm.Project.projectId });
                    }
                }
                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        function init() {
            vm.counties = [];
            vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);

            console.log(vm.counties);
            var indexCountry = vm.counties.indexOf($filter('filter')(vm.counties, { 'countryId': vm.Project.countryId }, true)[0]);
            vm.selectedCountry = vm.counties[indexCountry];

            funcCountryChange();

        }
        function funcCountryChange() {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);

            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);

                         RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);

                var indexregion = vm.regions.indexOf($filter('filter')(vm.regions, { 'regionId': vm.Project.regionId }, true)[0]);
                vm.selectedRegion = vm.regions[indexregion];
                funcregionChange();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }


        vm.countryChange = function () {
            funcCountryChange();
        }
        function funcregionChange() {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);

                                         var indexcity = vm.cities.indexOf($filter('filter')(vm.cities, { 'cityId': vm.Project.cityId }, true)[0]);
                    vm.selectedCity = vm.cities[indexcity];
                    funcCityChange();
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.regionChange = function () {
            funcregionChange();
        }
        function funcCityChange() {

            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);

                    var indexarea = vm.areaList.indexOf($filter('filter')(vm.areaList, { 'areaId': vm.Project.areaId }, true)[0]);
                    vm.selectedArea = vm.areaList[indexarea];
                    funcAreaChange();

                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            funcCityChange();
        }
        function funcAreaChange() {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);


            var indexbranch = vm.branchList.indexOf($filter('filter')(vm.branchList, { 'branchId': vm.Project.branchId }, true)[0]);
            vm.selectedBranch = vm.branchList[indexbranch];

        }
        vm.areaChange = function () {
            funcAreaChange();
        }

        vm.Close = function () {
            $state.go('Project');
        }
        vm.UpdateProject = function () {
            blockUI.start("Saving...");
            var updateObj = new ProjectResource();
            updateObj.projectId = vm.Project.projectId;
            updateObj.titleDictionary = vm.Project.titleDictionary;
            updateObj.branchId = vm.selectedBranch.branchId;
            updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Project', { projectId: vm.Project.projectId });

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
        .controller('ProjectController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'ProjectResource', 'ProjectPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', ProjectController]);


    function ProjectController($rootScope, blockUI, $scope, $filter, $translate,
        $state, ProjectResource, ProjectPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        blockUI.start("Loading...");

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = ProjectPrepService.totalCount;
        $scope.ProjectList = ProjectPrepService;
        console.log($scope.ProjectList)
        $scope.getTotal = function (projectObj) {


                         var total = 0;
            for (var i = 0; i < projectObj.assets.length; i++) {

                var product = projectObj.assets[i];
                if (product.paymentMethod == 1) { total += (product.price); }
                else { total -= (product.price); }

            }


            return total;
        }
        $scope.getServiceTotal = function (projectObj) {


                         var total = 0;
            for (var i = 0; i < projectObj.services.length; i++) {

                var product = projectObj.services[i]; 
                    total += (product.price);


                          }


            return total;
        }




        function refreshProjects() {
            blockUI.start("Loading...");
            var k = ProjectResource.getAllProjects({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.ProjectList = results
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
            refreshProjects();
        }
        blockUI.stop();

    }

})();(function () {
    angular
      .module('home') 
        .factory('ProjectResource', ['$resource', 'appCONSTANTS', ProjectResource])

         function ProjectResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Projects/', {}, {
            getAllProjects: { method: 'GET', url: appCONSTANTS.API_URL + 'Projects/GetAllProjects', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Projects/EditProject/', useToken: true },
            getProject: { method: 'GET', url: appCONSTANTS.API_URL + 'Projects/GetProjectById/:ProjectId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createDialogServiceController', ['$scope', '$stateParams', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'ServiceResource', 'ToastService', 'VendorPrepService', 'AssetPrepService', createDialogServiceController])

    function createDialogServiceController($scope, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate, ServiceResource,
        ToastService, VendorPrepService, AssetPrepService) {
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results;
        vm.Assets = AssetPrepService.results;
        vm.percentage = 0;
        vm.selectedVendor = null;
        vm.selectedAsset = null;
        vm.close = function () {
            $state.go('Service', { projectId: $scope.projectId });

        }

        vm.AddNewService = function () {
            blockUI.start("Saving...");

                         var newObj = new ServiceResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;
            newObj.price = vm.price;
            newObj.percentage = vm.percentage;
            newObj.vendorId = vm.selectedVendor.vendorId;
            newObj.assetId = vm.selectedAsset.assetId;
            newObj.projectId = $scope.projectId;
            newObj.notes = vm.notes;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Service', { projectId: $scope.projectId });

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
        .controller('editDialogServiceController', ['$scope', '$filter', '$stateParams', 'blockUI', '$http', '$state',
         'appCONSTANTS', '$translate', 'AssetPrepService', 'ToastService',
            'ServiceByIdPrepService', 'ServiceResource', 'VendorPrepService', editDialogServiceController])

    function editDialogServiceController($scope, $filter, $stateParams, blockUI, $http, $state, appCONSTANTS, $translate,
        AssetPrepService, ToastService,        ServiceByIdPrepService, ServiceResource, VendorPrepService) {
        var vm = this;
        $scope.projectId = $stateParams.projectId;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendors = VendorPrepService.results; 
        vm.Assets = AssetPrepService.results; 
        vm.Service = ServiceByIdPrepService; 
        console.log(vm.Service);


         var indexVendor = vm.Vendors.indexOf($filter('filter')(vm.Vendors, { 'vendorId': vm.Service.vendorId }, true)[0]);
        vm.vendor = vm.Vendors[indexVendor];

                var indexAsset = vm.Assets.indexOf($filter('filter')(vm.Assets, { 'AssetId': vm.Service.AssetId }, true)[0]);
        vm.Asset = vm.Assets[indexAsset];



        vm.Close = function () {
            $state.go('Service', { projectId: $scope.projectId });

        }
        vm.UpdateService = function () { 
            blockUI.start("Saving...");
            var updateObj = new ServiceResource();
            updateObj.serviceId = vm.Service.serviceId;
            updateObj.percentage = vm.Service.percentage;
            updateObj.price = vm.Service.price;
            updateObj.vendorId = vm.Service.vendorId;
            updateObj.notes = vm.Service.notes; 
            updateObj.$update().then(
                function (data, status) { 
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Service', { projectId: $scope.projectId });

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
        .controller('ServiceController', ['$rootScope', '$stateParams', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'ServiceResource', 'ServicePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', ServiceController])


        .directive('modal', function () {
            return {
                template: '<div class="modal fade">' +
                    '<div class="modal-dialog">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                    '<h4 class="modal-title">{{ title }}</h4>' +
                    '</div>' +
                    '<div class="modal-body" ng-transclude></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                restrict: 'E',
                transclude: true,
                replace: true,
                scope: true,
                link: function postLink(scope, element, attrs) {
                    scope.title = attrs.title;

                    scope.$watch(attrs.visible, function (value) {
                        if (value == true)
                            $(element).modal('show');
                        else
                            $(element).modal('hide');
                    });

                    $(element).on('shown.bs.modal', function () {
                        scope.$apply(function () {
                            scope.$parent[attrs.visible] = true;
                        });
                    });

                    $(element).on('hidden.bs.modal', function () {
                        scope.$apply(function () {
                            scope.$parent[attrs.visible] = false;
                        });
                    });
                }
            };
        });
    function ServiceController($rootScope, $stateParams, blockUI, $scope, $filter, $translate,
        $state, ServiceResource, ServicePrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {
        blockUI.start("Loading...");
        $scope.projectId = $stateParams.projectId;

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = ServicePrepService.totalCount;
        $scope.ServiceList = ServicePrepService;
        console.log($scope.ServiceList);
        function refreshServices() {
            blockUI.start("Loading...");
            var k = ServiceResource.getAllServices({ projectId:$scope.projectId,page: vm.currentPage }).$promise.then(function (results) {
                $scope.ServiceList = results
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
            refreshServices();
        }
        blockUI.stop();

        $scope.showModal = false;
        $scope.objInModel = "";
        $scope.toggleModal = function (obj) {
            $scope.showModal = !$scope.showModal;
            $scope.objInModel = obj;
        };
        $scope.ClickApprove = function () {
            vm.Approve($scope.objInModel, $scope.objInModel.requestId);
            $scope.showModal = !$scope.showModal;
        };
        vm.UpdateService = function () {
            blockUI.start("Saving...");
            var updateObj = new ServiceResource();
            updateObj.serviceId = $scope.objInModel.serviceId;
            updateObj.percentage = $scope.objInModel.percentage;
            updateObj.notes = $scope.objInModel.notes;
            updateObj.$update().then(
                function (data, status) {
                    $scope.showModal = !$scope.showModal;
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    refreshServices();

                },
                function (data, status) {

                                         ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }

})();(function () {
    angular
      .module('home') 
        .factory('ServiceResource', ['$resource', 'appCONSTANTS', ServiceResource])

         function ServiceResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Services/', {}, {
            getAllServices: { method: 'GET', url: appCONSTANTS.API_URL + 'Services/GetAllServices/:ProjectId', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Services/EditService', useToken: true },
            getService: { method: 'GET', url: appCONSTANTS.API_URL + 'Services/GetServiceById/:ServiceId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editUserController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource', 'UserTypeResource',
            'RoleResource', 'RolePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS', 'EditUserPrepService', 'ToastService',
            'DepartmentPrepService', 'CountriesPrepService', 'RegionsForUserPrepService', 'CitiesForUserPrepService', 'AreasForUserPrepService',
            'RegionResource', 'CityResource', 'AreaResource', editUserController]);


    function editUserController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource,
        RoleResource, RolePrepService, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService, ToastService,
        DepartmentPrepService, CountriesPrepService, RegionsForUserPrepService, CitiesForUserPrepService, AreasForUserPrepService,
        RegionResource, CityResource, AreaResource) {

        blockUI.start("Loading...");

        $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        vm.counties = [];
        if (EditUserPrepService.areaId == null) {
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
        }
        else {
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.selectedCountryId = EditUserPrepService.countryId;
            vm.regions = RegionsForUserPrepService
            vm.selectedRegionId = EditUserPrepService.regionId;
            vm.cities = CitiesForUserPrepService
            vm.selectedCityId = EditUserPrepService.cityId;
            vm.area = AreasForUserPrepService
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
            vm.counties = [];
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.regions = [];
            vm.cities = [];
            vm.area = [];

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
        vm.countryChange = function () {
            if (vm.selectedCountryId != undefined) {
                for (var i = vm.counties.length - 1; i >= 0; i--) {
                    if (vm.counties[i].countryId == 0) {
                        vm.counties.splice(i, 1);
                    }
                }
                vm.regions = [];
                vm.cities = [];
                vm.area = [];
                vm.regions.push({ regionId: 0, titleDictionary: { "en": "Select Region", "ar": "اختار اقليم" } });
                RegionResource.getAllRegions({ countryId: vm.selectedCountryId, pageSize: 0 }).$promise.then(function (results) {
                    vm.selectedRegionId = 0;
                    vm.regions = vm.regions.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
                blockUI.stop();
            }
        }
        vm.regionChange = function () {
            if (vm.selectedRegionId != undefined) {
                for (var i = vm.regions.length - 1; i >= 0; i--) {
                    if (vm.regions[i].regionId == 0) {
                        vm.regions.splice(i, 1);
                    }
                }
                vm.cities = [];
                vm.area = [];
                vm.cities.push({ cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } });
                CityResource.getAllCities({ regionId: vm.selectedRegionId, pageSize: 0 }).$promise.then(function (results) {
                    vm.selectedCityId = 0;
                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCityId != undefined) {
                for (var i = vm.cities.length - 1; i >= 0; i--) {
                    if (vm.cities[i].cityId == 0) {
                        vm.cities.splice(i, 1);
                    }
                }
                vm.area = [];
                vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
                AreaResource.getAllAreas({ cityId: vm.selectedCityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.selectedAreaId = 0;
                    vm.area = vm.area.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            if (vm.selectedAreaId != undefined && vm.selectedAreaId > 0) {
                for (var i = vm.area.length - 1; i >= 0; i--) {
                    if (vm.area[i].areaId == 0) {
                        vm.area.splice(i, 1);
                    }
                }
                vm.branchList = [];
                vm.selectedBranchId = [0];
                vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
            }
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
            'CountriesPrepService', 'DepartmentPrepService',
            'RegionResource', 'CityResource', 'AreaResource', userController]);

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource, userPrepService, RoleResource,
        RolePrepService, $localStorage, authorizationService, appCONSTANTS, ToastService, userConsumedPrepService, CountriesPrepService, DepartmentPrepService,
        RegionResource, CityResource, AreaResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;
        vm.userConsumed = userConsumedPrepService;
        vm.counties = [];
        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)
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
            vm.counties = [];
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.regions = [];
            vm.cities = [];
            vm.area = [];


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

        vm.countryChange = function () {
            for (var i = vm.counties.length - 1; i >= 0; i--) {
                if (vm.counties[i].countryId == 0) {
                    vm.counties.splice(i, 1);
                }
            }
            vm.regions = [];
            vm.cities = [];
            vm.area = [];
            vm.regions.push({ regionId: 0, titleDictionary: { "en": "Select Region", "ar": "اختار اقليم" } });
            RegionResource.getAllRegions({ countryId: vm.selectedCountryId, pageSize: 0 }).$promise.then(function (results) {
                vm.selectedRegionId = 0;
                vm.regions = vm.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionChange = function () {
            if (vm.selectedRegionId != undefined) {
                for (var i = vm.regions.length - 1; i >= 0; i--) {
                    if (vm.regions[i].regionId == 0) {
                        vm.regions.splice(i, 1);
                    }
                }
                vm.cities = [];
                vm.area = [];
                vm.cities.push({ cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } });
                CityResource.getAllCities({ regionId: vm.selectedRegionId, pageSize: 0 }).$promise.then(function (results) {
                    vm.selectedCityId = 0;
                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCityId != undefined) {
                for (var i = vm.cities.length - 1; i >= 0; i--) {
                    if (vm.cities[i].cityId == 0) {
                        vm.cities.splice(i, 1);
                    }
                }
                vm.area = [];
                vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
                AreaResource.getAllAreas({ cityId: vm.selectedCityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.selectedAreaId = 0;
                    vm.area = vm.area.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            if (vm.selectedAreaId != undefined && vm.selectedAreaId >0) {
                for (var i = vm.area.length - 1; i >= 0; i--) {
                    if (vm.area[i].areaId == 0) {
                        vm.area.splice(i, 1);
                    }
                }
                vm.branchList = [];
                vm.selectedBranchId = [0];
                vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
            }
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
            getUserArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Area', useToken: true },
            getUserByTypeName: { method: 'GET', url: appCONSTANTS.API_URL + 'Users', useToken: true },
            GetAllUsersWhoAnswer: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllUsersWhoAnswer',isArray:true , useToken: true },
            GetAllEmails: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Emails',isArray:true , useToken: true }
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'VendorResource', 'ToastService',  createDialogController])

    function createDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, VendorResource,
        ToastService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;


                   vm.close = function () {
        $state.go('Vendor');
    }

    vm.AddNewVendor = function () {
        blockUI.start("Saving...");

                var newObj = new VendorResource();
        newObj.titleDictionary = vm.titleDictionary;
        newObj.IsDeleted = false; 
        newObj.phone = vm.phone; 
        newObj.website = vm.website; 
        newObj.address = vm.address; 

        newObj.$create().then(
            function (data, status) {
                blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                $state.go('Vendor');

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
        .controller('editDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'categoryTypeResource', 'ToastService',
            'VendorByIdPrepService', 'VendorResource', editDialogController])

    function editDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, categoryTypeResource, ToastService,
        VendorByIdPrepService, VendorResource) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Vendor = VendorByIdPrepService;
        console.log(vm.Vendor);

        vm.Close = function () {
            $state.go('Vendor');
        }
        vm.UpdateVendor = function () {
            debugger
            blockUI.start("Saving...");
            var updateObj = new VendorResource();
            updateObj.vendorId = vm.Vendor.vendorId;
            updateObj.titleDictionary = vm.Vendor.titleDictionary;
            updateObj.phone = vm.Vendor.phone;
            updateObj.Website = vm.Vendor.website;
            updateObj.address = vm.Vendor.address;

                         updateObj.$update().then(
                function (data, status) {

                                         blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Vendor');

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
        .controller('VendorController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'VendorResource', 'VendorPrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', VendorController]);


    function VendorController($rootScope, blockUI, $scope, $filter, $translate,
        $state, VendorResource, VendorPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        blockUI.start("Loading..."); 

         $('.pmd-sidebar-nav>li>a').removeClass("active")
         $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
        var vm = this;
        $scope.totalCount = VendorPrepService.totalCount;
        $scope.VendorList = VendorPrepService;

        function refreshVendors() {
            blockUI.start("Loading..."); 
            var k = VendorResource.getAllVendors({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.VendorList = results
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
            refreshVendors();
        }
       blockUI.stop();

    }

})();(function () {
    angular
      .module('home') 
        .factory('VendorResource', ['$resource', 'appCONSTANTS', VendorResource])

         function VendorResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Vendors/', {}, {
            getAllVendors: { method: 'GET', url: appCONSTANTS.API_URL + 'Vendors/GetAllVendors', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Vendors/EditVendor', useToken: true },
            getVendor: { method: 'GET', url: appCONSTANTS.API_URL + 'Vendors/GetVendorById/:VendorId', useToken: true }
        })
    } 

}());
