angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/product/templates/product.html',
    ' \n' +
    '    <div class="container" > \n' +
    '       Products\n' +
    '       <div>  \n' +
    '       \n' +
    '        <div ng-repeat="(key,val) in productList.results">\n' +
    '            <input type="radio"  ng-click="radioProductClick(val)" ng-model="$parent.checkradioasd" ng-value=\'val.productId\'  >\n' +
    '            \n' +
    '            <span>{{val.productTitle}}</span>\n' +
    '            <P>{{val.productDesc}}</P>\n' +
    '       </div>\n' +
    '\n' +
    '       </div>\n' +
    '<div ng-show="productDetails">\n' +
    '           <div>\n' +
    '               Product Title : <span>{{productDetails.productTitle}}</span>\n' +
    '              <br>  Product Description<span>{{productDetails.productDesc}}</span>\n' +
    '                 <br>   Price Per user : <span>{{productDetails.price}} SAR</span>\n' +
    '               \n' +
    '           </div>\n' +
    '           <br>\n' +
    '      <form class="form-horizontal" name="productForm" >\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">User Count</label>\n' +
    '                    <input required type="number" ng-change="getTotal()" class="mat-input form-control" name="UserLimit" ng-model="UserLimit" ng-minlength="1" ng-maxlength="10">\n' +
    '                    <div ng-messages="productForm.UserLimit.$error" >\n' +
    '                        <div ng-if="productForm.UserLimit.$error.required && !productForm.UserLimit.$pristine">{{\'UserLimitLengthError\' | translate}}</div>\n' +
    '                        <div ng-if="(productForm.UserLimit.$error.minlength || productForm.UserLimit.$error.maxlength) && !productForm.UserLimit.$error.required">{{\'UserLimitLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '               {{totalPrice}} SAR\n' +
    '            </form> \n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="productForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddProductRequest()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '                </div>\n' +
    '       </div>\n' +
    '      \n' +
    '    </div>\n' +
    '    </div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/login/templates/login.html',
    ' \n' +
    '  	<div class="header">\n' +
    '        <img class="logo" src="assets/img/logo.png" alt="logo" />\n' +
    '    </div>\n' +
    '   \n' +
    '    <div class="container">\n' +
    '         <form ng-submit="submit(username,password)">\n' +
    '            <div class="col-md-6 col-sm-12 col-xs-12 main_form">\n' +
    '                <h3>Sign In</h3>\n' +
    '                <div class="name main_field">\n' +
    '                <input type="text" required ng-change="reset()" name="username" ng-model="username" placeholder="Name" class=" main_input" />\n' +
    '                </div>\n' +
    '                \n' +
    '                <div class="pass main_field">\n' +
    '                 <input type="password" required ng-change="reset()" name="password" ng-model="password"  placeholder="......" class=" main_input" />\n' +
    '                 </div>\n' +
    '                 <div ng-if="invalidLoginInfo" style="width: 70%;margin-left: auto;color:red">\n' +
    '                    <span>Incorrect username or password.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="inActiveUser" class="loginFailed"  style="width: 70%;margin-left: auto;color:red">\n' +
    '                    <span>Your account is deleted.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="restaurantInActiveUser" class="loginFailed"  style="margin-left: auto;color:red">\n' +
    '                    <span>Restaurant is not activated, please contact your admin.</span>\n' +
    '                </div>\n' +
    '                \n' +
    '                <input type="submit" class="login" value="Sign In" >\n' +
    '                \n' +
    '            </div>\n' +
    '        </form>\n' +
    '    \n' +
    '    </div> \n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/register/templates/register.html',
    ' \n' +
    '    <div class="container" > \n' +
    '        Basic Info\n' +
    '            <form class="form-horizontal" name="newclientForm">\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'FirstName\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="firstName" ng-model="FirstName" ng-minlength="3" ng-maxlength="50">\n' +
    '                    <div ng-messages="newclientForm.firstName.$error" >\n' +
    '                        <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'LastName\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="lastName" ng-model="LastName" ng-minlength="3" ng-maxlength="50">\n' +
    '                    <div ng-messages="newclientForm.lastName.$error" >\n' +
    '                        <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Email\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="email" ng-model="Email" ng-minlength="3" ng-maxlength="50">\n' +
    '                    <div ng-messages="newclientForm.email.$error" >\n' +
    '                        <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'phone1\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="phone1" ng-model="Phone1" ng-minlength="3" ng-maxlength="50">\n' +
    '                    <div ng-messages="newclientForm.phone1.$error" >\n' +
    '                        <div ng-if="newclientForm.phone1.$error.required && !newclientForm.phone1.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.phone1.$error.minlength || newclientForm.phone1.$error.maxlength) && !newclientForm.phone1.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'phone1\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="phone2" ng-model="Phone2" ng-minlength="3" ng-maxlength="50">\n' +
    '                    <div ng-messages="newclientForm.phone1.$error" >\n' +
    '                        <div ng-if="newclientForm.phone1.$error.required && !newclientForm.phone1.$pristine">{{\'phone1\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.phone1.$error.minlength || newclientForm.phone1.$error.maxlength) && !newclientForm.phone1.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label" >\n' +
    '                        <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '                        <input required type="password" class="mat-input form-control" name="password" ng-model="Password" ng-minlength="8" ng-maxlength="25">\n' +
    '                        <div ng-messages="newclientForm.password.$error" >\n' +
    '                            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                            <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password length must be 8-25 char.</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label" >\n' +
    '                        <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '                        <input required type="password" class="mat-input form-control" name="confirmPassword"  ng-model="confirmPassword"   >\n' +
    '                        <div ng-messages="newclientForm.confirmPassword.$error" >\n' +
    '                            <div ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                            <div ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">Passwords don\'t match.</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '            </form> \n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newclientForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewclient()">Next</button>\n' +
    '                </div>\n' +
    '    \n' +
    '    </div>\n' +
    '');
}]);
