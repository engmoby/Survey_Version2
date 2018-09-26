(function () {
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
        $($('.pmd-sidebar-nav').children()[4].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;
        vm.userConsumed = userConsumedPrepService;
        // vm.area = [];
        // vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
        // vm.selectedAreaId = 0;
        // vm.area = vm.area.concat(AreaPrepService.results)
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
            // vm.area = [];
            // vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
            // vm.selectedAreaId = 0;
            // vm.area = vm.area.concat(AreaPrepService.results)
            // vm.branchList = [];
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
            // vm.counties.splice(0, 1);
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
            // vm.regions.splice(0, 1);
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
            // vm.cities.splice(0, 1);
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
            // vm.area.splice(0, 1);
            if (vm.selectedAreaId != undefined && vm.selectedAreaId >0) {
                for (var i = vm.area.length - 1; i >= 0; i--) {
                    if (vm.area[i].areaId == 0) {
                        vm.area.splice(i, 1);
                    }
                }
                vm.branchList = [];
                // vm.branchList.push({ branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } });
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

}());