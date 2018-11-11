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
