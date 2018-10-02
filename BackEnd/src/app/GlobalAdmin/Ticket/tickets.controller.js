(function () {
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
            /* vm.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
             vm.areaList = [];
             vm.areaList.push(vm.selectedArea);
             vm.areaList = vm.areaList.concat(AreaPrepService.results)*/
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
            vm.selectedTechnician = { userId: 0, userName: $translate.instant('allBranchesM') };
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
            /*vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);*/
        }
        init();
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
            if(vm.selectedArea.areaId > 0)
            vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        /*vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }*/
        vm.departmentChange = function () {
            // vm.areaList.splice(0, 1);

            vm.categories = [];
            vm.selectedCategory = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categories.push(vm.selectedCategory);
            if(vm.selectedDepartment.departmentId > 0)
            vm.categories = vm.categories.concat(vm.selectedDepartment.categories);
        }

        /*
                vm.areaChange = function () {
                    vm.areaList.splice(0, 1);
                    vm.branchList = [];
                    vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
                    vm.branchList.push(vm.selectedBranch);
                    vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
                }
        
                vm.branchChange = function () {
                    for (var i = vm.branchList.length - 1; i >= 0; i--) {
                        if (vm.branchList[i].branchId == 0) {
                            vm.branchList.splice(i, 1);
                        }
                    }
                }*/
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

        blockUI.stop();
    }

}());