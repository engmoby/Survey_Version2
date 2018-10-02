(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswersController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource',
            'ToastService', '$filter', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource', 'allcategoryTypePrepService','AnswerQuestionResource', AnswersController]);

    function AnswersController(blockUI, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource, ToastService, $filter,
        CountriesPrepService, RegionResource, CityResource, AreaResource, allcategoryTypePrepService,AnswerQuestionResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")

        var vm = this;
        /*vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "جميع المناطق" } };
        vm.areaList = [];
        vm.areaList.push(vm.selectedArea);
        vm.areaList = vm.areaList.concat(AreaPrepService.results)*/
        vm.categoryTypes = [];
        vm.selectedCategoryType = { categoryTypeId: 0, titleDictionary: { "en": "All", "ar": "كل" } };
        vm.categoryTypes.push(vm.selectedCategoryType);
        vm.categoryTypes = vm.categoryTypes.concat(allcategoryTypePrepService.results)

        vm.counties = [];
        vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
        vm.counties.push(vm.selectedCountry);
        vm.counties = vm.counties.concat(CountriesPrepService.results)

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
        /*// Toggle selection for a given fruit by name*/

        vm.questionList.forEach(function (element) {
            element.page = 1;
            element.answers = [];
            element.showAnswer = false
        }, this);

        vm.countryChange = function () {
            /*for (var i = vm.counties.length - 1; i >= 0; i--) {
                if (vm.counties[i].countryId == 0) {
                    vm.counties.splice(i, 1);
                }
            }*/
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
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
                /*for (var i = vm.regions.length - 1; i >= 0; i--) {
                    if (vm.regions[i].regionId == 0) {
                        vm.regions.splice(i, 1);
                    }
                }*/
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];
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
                /*for (var i = vm.cities.length - 1; i >= 0; i--) {
                    if (vm.cities[i].cityId == 0) {
                        vm.cities.splice(i, 1);
                    }
                }*/
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            // vm.areaList.splice(0, 1);
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
                ques.answers.results.forEach(function (element) {
                    element.date = element.date + "Z";
                    element.date = $filter('date')(new Date(element.date), "dd/MM/yyyy hh:mm a");
                }, this);
                // $scope.$apply()
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
}());