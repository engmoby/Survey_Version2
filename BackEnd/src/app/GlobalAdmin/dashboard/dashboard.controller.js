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
                        // axisLabel: 'X Axis',
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

            //init survey filter
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

            //init tickets filter
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
        //start ticket filter functions
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
                /*for (var i = vm.cities.length - 1; i >= 0; i--) {
                    if (vm.cities[i].cityId == 0) {
                        vm.cities.splice(i, 1);
                    }
                }*/
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
            // vm.areaList.splice(0, 1);
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.departmentChange = function () {
            // vm.areaList.splice(0, 1);

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
        //end ticket filter

        //start survey filter
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
        //end survey filter
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
                                    // labelThreshold: 0.01,
                                    // labelSunbeamLayout: true,
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
                                // labelThreshold: 0.01,
                                // labelSunbeamLayout: true,
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
                                // labelThreshold: 0.01,
                                // labelSunbeamLayout: true,
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
         //   canvg(document.getElementById('cc'),document.getElementById('surveyDiv').innerHTML)
            
            html2canvas(document.getElementById('surveyDiv')).then(function(canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        height:canvas.height,
                        width:500   
                    }],
                    // pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
                    //     return currentNode.startPosition.top >= 650;
                    //     }
                };
                pdfMake.createPdf(docDefinition).download("test.pdf");
            });
//             html2canvas(document.getElementById('surveyDiv'), {
//                 renderer:function(canvas){
// var k = canvas;
//                 },
//                 onrendered: function (canvas) {
//                     var data = canvas.toDataURL();
//                     var docDefinition = {
//                         content: [{
//                             image: data,
//                             width: 500,
//                         }]
//                     };
//                     pdfMake.createPdf(docDefinition).download("test.pdf");
//                 }
//             });
        }


    }

}());