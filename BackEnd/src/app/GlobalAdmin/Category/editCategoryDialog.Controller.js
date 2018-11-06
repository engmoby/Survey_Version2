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
