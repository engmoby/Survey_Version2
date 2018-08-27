(function () {
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
        // vm.areaChange = function () {
        //     vm.areaList.splice(0, 1);
        //     vm.branchList = [];
        //     vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } };
        //     vm.branchList.push(vm.selectedBranch);
        //     vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        // }

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

}());