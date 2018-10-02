(function () {
    'use strict';

    angular
        .module('home')
        .controller('AnswerQuestionDialogController', ['blockUI', '$scope', '$translate', 'AnswerResource', '$state', 'AnswerQuestionPrepService', 'QuestionResource',
            'ToastService', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource', '$filter', 'allcategoryTypePrepService'
            , 'AnswerQuestionResource', AnswerQuestionDialogController]);

    function AnswerQuestionDialogController(blockUI, $scope, $translate, AnswerResource, $state, AnswerQuestionPrepService, QuestionResource,
        ToastService, CountriesPrepService, RegionResource, CityResource, AreaResource, $filter, allcategoryTypePrepService,
        AnswerQuestionResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[7].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        console.log($scope.questionList);
        /*// Toggle selection for a given fruit by name*/
        function init() {
            $scope.likeText = "";
            /* $scope.selectedArea = { areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } };
             $scope.areaList = [];
             $scope.areaList.push($scope.selectedArea);
            $scope.areaList = $scope.areaList.concat(AreaPrepService.results)*/
            vm.categoryTypes = [];
            vm.selectedCategoryType = { categoryTypeId: 0, titleDictionary: { "en": "All", "ar": "كل" } };
            vm.categoryTypes.push(vm.selectedCategoryType);
            vm.categoryTypes = vm.categoryTypes.concat(allcategoryTypePrepService.results)


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
        $scope.toggleSelection = function toggleSelection(QuestionDetail, questionId) {

            vm.answers.forEach(function (element) {
                if (element.questionId == questionId) {
                    var exist = ($filter('filter')(element.answerDetails, { questionDetailsId: QuestionDetail.questionDetailsId }))
                    var idx = element.answerDetails.indexOf(exist[0]);
                    /*// Is currently selected*/
                    if (idx > -1) {
                        /*$scope.selection.splice(idx, 1);*/
                        element.answerDetails.splice(idx, 1);

                    }

                    /* // Is newly selected*/
                    else {
                        /* $scope.selection.push({ questionDetailsId: QuestionDetail.questionDetailsId });*/
                        element.answerDetails.push({ questionDetailsId: QuestionDetail.questionDetailsId });
                    }
                }
            }, this);

        };
        $scope.rate = 3;
        $scope.onItemRating = function (rating, questionId) {
            /*$scope.selectedRate = rating;*/
            vm.answers.forEach(function (element) {
                if (element.questionId == questionId) {
                    element.answerDetails = [];
                    element.answerDetails.push({ value: rating });
                }
            }, this);
            /*quesObject.question = questionId;
            quesObject.value = rating;
            quesObject.note = note;*/
            /* //  vm.selectedAnswerDetails.push(quesObject)
             // alert('On Rating: ' + rating);*/
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
        /*vm.areaChange = function () {
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
        }*/
        $scope.areaChange = function () {
            /*$scope.areaList.splice(0, 1);*/
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
            debugger;
            var submitAnswer = new AnswerResource();
            vm.answers.forEach(function (element) {
                element.branchId = $scope.selectedBranch.branchId;
                var fromDate = $('#startdate').val().split('/')
                element.date = (new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
                /*element.date = new Date($('#startdate').data('date'));*/
            }, this);
            /*   // submitAnswer.Date = new Date($('#startdate').data('date'));
               // submitAnswer.branchId = $scope.selectedBranch.branchId;
           //    submitAnswer.questionModel = list;*/
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

}());