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
            // vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
            // vm.selectedAreaId = 0;
            // vm.area = vm.area.concat(AreaPrepService.results)
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
        }
        else {
            // vm.area = vm.area.concat(AreaPrepService.results)
            // vm.selectedAreaId = EditUserPrepService.areaId;
            // vm.branchList = ($filter('filter')(vm.area, { areaId: EditUserPrepService.areaId }))[0].branches;
            // vm.selectedBranchId = EditUserPrepService.branchesId;
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
            // vm.counties.splice(0, 1);
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
            if (vm.selectedAreaId != undefined && vm.selectedAreaId > 0) {
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
        /*vm.areaChange = function () {
            for (var i = vm.area.length - 1; i >= 0; i--) {
                if (vm.area[i].areaId == 0) {
                    vm.area.splice(i, 1);
                }
            }
            vm.branchList = [];
           // vm.branchList.push({ branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } });
            vm.selectedBranchId = [0];
            vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
        }*/
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

})();