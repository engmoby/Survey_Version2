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
                  url: '/newCategory/:departmentId',
                  templateUrl: './app/GlobalAdmin/Category/templates/new.html',
                  controller: 'createCategoryDialogController',
                  'controllerAs': 'newCategoryCtrl',
                  resolve: {
                      DepartmentByIdPrepService: DepartmentByIdPrepService,
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
                    url: '/editQuestion/:questionId',
                    templateUrl: './app/GlobalAdmin/Question/templates/edit.html',
                    controller: 'editQuestionDialogController',
                    'controllerAs': 'editQuestionCtrl',
                    resolve: {
                        QuestionByIdPrepService: QuestionByIdPrepService,
                        DepartmentPrepService: DepartmentPrepService
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


    QuestionPrepService.$inject = ['QuestionResource']
    function QuestionPrepService(QuestionResource) {
        return QuestionResource.getAllQuestions().$promise;
    }

    QuestionByIdPrepService.$inject = ['QuestionResource', '$stateParams']
    function QuestionByIdPrepService(QuestionResource, $stateParams) {
        return QuestionResource.getQuestion({ questionId: $stateParams.questionId }).$promise;
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
            create: { method: 'POST', useToken: true }, 
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswerQuestionDialogController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'QuestionPrepService', 'QuestionResource', 'AreaPrepService',
         'ToastService', AnswerQuestionDialogController]);

    function AnswerQuestionDialogController(blockUI, $scope, $translate, AnswerResource, $state, QuestionPrepService, QuestionResource, AreaPrepService, ToastService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;
        $scope.likeText = "";
        $scope.selectedArea = "";
        $scope.areaList = AreaPrepService.results;
        $scope.questionList = QuestionPrepService.results;
        $scope.IsLike = 0;
        $scope.isLikeSub = 0;
        $scope.selection = [];
        $scope.selectedRate = 0;
        $scope.selectedBranch = ""; 

           console.log($scope.questionList);
        $scope.toggleSelection = function toggleSelection(fruitName) {
            var idx = $scope.selection.indexOf(fruitName);

            if (idx > -1) {
                $scope.selection.splice(idx, 1);
            }

            else {
                $scope.selection.push(fruitName);
            }
        };
        $scope.rate = 3;
        $scope.onItemRating = function (rating, questionId, note) {
            $scope.selectedRate = rating;
            quesObject.question = questionId;
            quesObject.value = rating;
            quesObject.note = note;
        };


        $scope.areaChange = function () {
            $scope.branchList = $scope.selectedArea.branches;
        }


        $scope.AddAnswer = function (list) {
            blockUI.start("Loading...");
            debugger;
            var submitAnswer = new AnswerResource();
            submitAnswer.Date = new Date($('#startdate').data('date'));
            submitAnswer.branchId = $scope.selectedBranch.branchId;
           submitAnswer.questionModel = list;
            submitAnswer.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    $state.go('AnswerQuestion');

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
        .factory('QuestionResource', ['$resource', 'appCONSTANTS', UserResource])

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Questions/', {}, {
            getAllQuestions: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/GetAllQuestionsByUserId', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true }
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editUserController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource', 'UserTypeResource',
            'RoleResource', 'RolePrepService','$localStorage', 'authorizationService', 'appCONSTANTS', 'EditUserPrepService', 'ToastService', editUserController]);


    function editUserController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource,
        RoleResource,RolePrepService, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService, ToastService) {

        blockUI.start("Loading..."); 

                $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        BindUserType();
        vm.show = true;
        $scope.roleList = RolePrepService.results; 
        vm.selectedUserRoles = [];
        $scope.userObj = EditUserPrepService;
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

                        vm.show=false;
            var newClient = new UserResource();
            newClient.UserId =$scope.userObj.userId;             
            newClient.Phone = $scope.userObj.phone;
            newClient.Email = $scope.userObj.email;
            newClient.Password = $scope.userObj.password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show=true;
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
        .controller('AreaController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AreaResource', 'AreaPrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', AreaController]);


    function AreaController($rootScope, blockUI, $scope, $filter, $translate,
        $state, AreaResource, AreaPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

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
		vm.Close = function(){
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
        vm.Close = function () {
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
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

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
            getQuestion: { method: 'GET', url: appCONSTANTS.API_URL + 'Questions/GetQuestionById/:QuestionId', useToken: true }
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
        .controller('editUserController', ['$rootScope', '$scope', '$filter', '$translate', '$state',    'UserResource', 'AddUserResource', 'UserProductResource', 'GetUserResource', '$localStorage', 'authorizationService', 'appCONSTANTS','EditUserPrepService', 'ToastService', editUserController]);


    function editUserController($rootScope, $scope, $filter, $translate, $state,   UserResource, AddUserResource, UserProductResource, GetUserResource, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService,ToastService) {
        $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        vm.show=true;
        $scope.userObj = "";
        $scope.productList = [];
        $scope.checkradioasd = -1;
        $scope.productDetails = "";
        $scope.userObj =  EditUserPrepService; 
        console.log($scope.userObj );
        localStorage.setItem('data', JSON.stringify($scope.userObj.userId));

        refreshuserProducts();

        function refreshuserProducts() {
            var k = UserProductResource.getUserProductList({ userId: $scope.userObj.userId }).$promise.then(function (results) {
                $scope.userProductList = results 
                $scope.isPaneShown = false;
			$scope.$emit('UNLOAD')
            },
            function (data, status) {
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        } 
        $scope.Updateclient = function () {
            vm.show=false;
            var newClient = new AddUserResource();
            newClient.UserId =$scope.userObj.userId;             
            newClient.Phone1 = $scope.userObj.phone1;
            newClient.Phone2 = $scope.userObj.phone2;
            newClient.Password = $scope.userObj.password;
            newClient.IsActive = $scope.userObj.isActive;
            newClient.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show=true;
                    localStorage.setItem('data', JSON.stringify(data.userId));

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();(function () {
    'use strict';

    angular
        .module('home')
        .controller('editUserController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource', 'UserTypeResource',
            'RoleResource', 'RolePrepService','$localStorage', 'authorizationService', 'appCONSTANTS', 'EditUserPrepService', 'ToastService', editUserController]);


    function editUserController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource,
        RoleResource,RolePrepService, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService, ToastService) {

        blockUI.start("Loading..."); 

                $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        BindUserType();
        vm.show = true;
        $scope.roleList = RolePrepService.results; 
        vm.selectedUserRoles = [];
        $scope.userObj = EditUserPrepService;
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

                        vm.show=false;
            var newClient = new UserResource();
            newClient.UserId =$scope.userObj.userId;             
            newClient.Phone = $scope.userObj.phone;
            newClient.Email = $scope.userObj.email;
            newClient.Password = $scope.userObj.password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show=true;
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
            'userPrepService', 'RoleResource', 'RolePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', userController]);

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, UserTypeResource, userPrepService, RoleResource,
        RolePrepService, $localStorage, authorizationService, appCONSTANTS, ToastService) {

                $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")

        blockUI.start("Loading..."); 

            var vm = this;
        $scope.totalCount = userPrepService.totalCount;
        $scope.userList = userPrepService.results;
        $scope.roleList = RolePrepService.results;
        BindUserType();
        console.log($scope.userList);

        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        $scope.userObj = "";
        $scope.selectedType = "";
        $scope.userTypeList = [];

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
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true }
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
