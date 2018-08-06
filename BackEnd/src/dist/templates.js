angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/editUser/editUser.html',
    '\n' +
    '  \n' +
    '    <div class="container" > \n' +
    '        {{\'BasicInfoLbl\' | translate}}         \n' +
    '            <form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="firstName" ng-model="userObj.firstName" ng-minlength="3" ng-maxlength="50" readonly="readonly">\n' +
    '                    <div ng-messages="newclientForm.firstName.$error" >\n' +
    '                        <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'LastNameLbl\' | translate}}</label>                     \n' +
    '                    <input required type="text" class="mat-input form-control" name="lastName" ng-model="userObj.lastName" ng-minlength="3" ng-maxlength="50" readonly="readonly">\n' +
    '                    <div ng-messages="newclientForm.lastName.$error" >\n' +
    '                        <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '                    \n' +
    '                    <input required type="text" class="mat-input form-control" name="email" ng-model="userObj.email" ng-minlength="3" ng-maxlength="50" readonly="readonly">\n' +
    '                    <div ng-messages="newclientForm.email.$error" >\n' +
    '                        <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Phone1Lbl\' | translate}}</label>\n' +
    '                    \n' +
    '                    <input required type="text" class="mat-input form-control" numbers-only name="phone1" ng-model="userObj.phone1" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <span class="error" ng-show="newclientForm.phone1.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span>\n' +
    '                    <div ng-messages="newclientForm.phone1.$error" >\n' +
    '                      <div ng-if="newclientForm.phone1.$error.required && !newclientForm.phone1.$pristine">{{\'PhoneReqError\' | translate}}</div>\n' +
    '                      <div ng-if="(newclientForm.phone1.$error.minlength || newclientForm.phone1.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Phone2Lbl\' | translate}}</label>\n' +
    '                    \n' +
    '                    <input required type="text" class="mat-input form-control" name="phone2" ng-model="userObj.phone2"  ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <span class="error" ng-show="newclientForm.phone2.$error.pattern">{{\'NotPhoneNumber\' | translate}}  </span>\n' +
    '                    \n' +
    '                                        <div ng-messages="newclientForm.phone2.$error" >\n' +
    '                                            <div ng-if="(newclientForm.phone2.$error.minlength || newclientForm.phone2.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '                                            \n' +
    '                                        </div>                  \n' +
    '                </div>   -->\n' +
    '\n' +
    '                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Phone2Lbl\' | translate}}</label>\n' +
    '                    <input   type="text" class="mat-input form-control" name="phone2" numbers-only ng-model="userObj.phone2"  ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <span class="error" ng-show="newclientForm.phone2.$error.pattern">{{\'NotPhoneNumber\' | translate}}  </span>\n' +
    '\n' +
    '                    <div ng-messages="newclientForm.phone2.$error" >\n' +
    '                        <div ng-if="(newclientForm.phone2.$error.minlength || newclientForm.phone2.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '                        \n' +
    '                    </div>\n' +
    '                </div> -->\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed" >\n' +
    '                    <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '                    \n' +
    '                        <input required type="password" class="mat-input form-control" name="password" ng-model="userObj.password" ng-minlength="8" ng-maxlength="25">\n' +
    '                        <div ng-messages="newclientForm.password.$error" >\n' +
    '                            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                            <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password length must be 8-25 char.</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label-completed" >\n' +
    '                        <label for="first-name">{{\'StatusLbl\' | translate}}</label>\n' +
    '                        <input type="checkbox" ng-model="userObj.isActive"  name="name"   >\n' +
    '                       \n' +
    '                    </div> -->\n' +
    '            </form> \n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newclientForm.$invalid || !editUserCtrl.show" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'Edit\' | translate}}</button>\n' +
    '                </div>\n' +
    '    \n' +
    '    </div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '		<button  ng-click="$state.go(\'product\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddProductBtn\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <!-- <div class="alert alert-info" ng-show="loading">Loading</div> -->\n' +
    '      <div class="table-responsive" loading-pane="isPaneShown">\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th >{{\'ProductTitleLbl\' | translate}}</th>\n' +
    '                    <th >{{\'userlimitLbl\' | translate}}</th> \n' +
    '                    <th >{{\'concumerLbl\' | translate}}</th> \n' +
    '                    <th >{{\'startDateLbl\' | translate}}</th>\n' +
    '                    <th >{{\'enddateLbl\' | translate}}</th> \n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="userProduct in userProductList.results"> \n' +
    '                    <td data-title="logo" >{{userProduct.productTitle}}\n' +
    '                        <td data-title="Description" >{{userProduct.userLimit}}</td>  \n' +
    '                        <td data-title="Description" >{{userProduct.userConsumer}}</td>  \n' +
    '                        <td data-title="logo" >{{userProduct.startDate | date:\'dd MMM yyyy\'}}\n' +
    '                    <td data-title="Description" >{{userProduct.endDate | date:\'dd MMM yyyy\'}}</td>  \n' +
    '                    <td width="15%" >\n' +
    '                         \n' +
    '                        <!-- <i class="cursorPointer" ng-click="$state.go(\'editProduct\', {backageGuid: {userProduct.backageGuid}});">Edit Product</i>  -->\n' +
    '                        <i class="cursorPointer" ng-click="$state.go(\'editProduct\', {backageGuid: userProduct.backageGuid});">{{\'Edit\' | translate}}</i> \n' +
    '                        \n' +
    '                        \n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/AnswerQuestion/templates/AnswerQuestion.html',
    '\n' +
    ' <style>\n' +
    '.my-custom-stars .button .material-icons {\n' +
    ' font-size: 30px; \n' +
    '}\n' +
    '.my-custom-stars .star-button.star-on .material-icons {\n' +
    '  color: #003399; \n' +
    '}\n' +
    '\n' +
    '.my-custom-stars .star-button.star-off .material-icons {\n' +
    '  color: #99ccff; \n' +
    '}\n' +
    '.my-custom-stars .button .material-icons a:focus, a:hover{\n' +
    '   text-decoration: none;\n' +
    '}\n' +
    '.hideMinus a:first-child{\n' +
    '   display: none;\n' +
    '}\n' +
    '.accordion {\n' +
    '    background-color: #eee;\n' +
    '    color: #444;\n' +
    '    cursor: pointer;\n' +
    '    padding: 18px;\n' +
    '    width: 100%;\n' +
    '    border: none;\n' +
    '    text-align: left;\n' +
    '    outline: none;\n' +
    '    font-size: 15px;\n' +
    '    transition: 0.4s;\n' +
    '}\n' +
    '\n' +
    '\n' +
    '.active, .accordion:hover {\n' +
    '    background-color: #ccc;\n' +
    '}  \n' +
    ' /* .panel {\n' +
    '    padding: 0 18px;\n' +
    '    background-color: white;\n' +
    '    max-height: 0;\n' +
    '    overflow: hidden;\n' +
    '    transition: max-height 0.2s ease-out;\n' +
    '}  */\n' +
    '    </style>\n' +
    ' \n' +
    '\n' +
    '{{\'AnswerQuestion\' | translate}}\n' +
    '<form class="form-horizontal" name="newclientForm">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '\n' +
    '            <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="areaChange()"\n' +
    '                    ng-model="selectedArea" ng-options="a as a.titleDictionary[selectedLanguage] for a in areaList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '\n' +
    '            <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags"   \n' +
    '                    ng-model="selectedBranch" ng-options="a as a.titleDictionary[selectedLanguage] for a in branchList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '   \n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label >{{\'startDateLbl\' | translate}}</label>\n' +
    '            <input style="width:50% !important" type="text" id="startdate" class="form-control" required />\n' +
    '        </div>\n' +
    '    </div>\n' +
    ' \n' +
    '</form> \n' +
    '<form name="FormAnswer" novalidate autocomplete="off" style="width: 50%;"> \n' +
    '        <div ng-repeat="(k,v) in questionList| groupBy: \'categoryId\'"> \n' +
    '              <div style="font-weight:bold; color:#1C2B36"> \n' +
    '                    {{v[0].category.titleDictionary[selectedLanguage]}} \n' +
    '            </div> \n' +
    '            <ul>\n' +
    '                <li  ng-repeat="ques in v">\n' +
    '                        <button class="accordion"  >{{ques.titleDictionary[selectedLanguage]}}</button>\n' +
    '\n' +
    '                        <!--submit answers-->\n' +
    '                        <div class="panel">\n' +
    '                            <div ng-if="ques.questionTypeId == 1"> \n' +
    '                                <!--checkbox-->\n' +
    '                                <label ng-repeat="QuestionDetail in ques.questionDetailses" style="    display: block;">\n' +
    '                                    <input \n' +
    '                                      type="checkbox"\n' +
    '                                      name="selectedDetails[]"\n' +
    '                                      ng-model="ques.answer.value=selection"\n' +
    '                                       value="{{QuestionDetail.QuestionDetailsId}}"\n' +
    '                                      ng-checked="selection.indexOf(QuestionDetail) > -1"\n' +
    '                                      ng-click="toggleSelection(QuestionDetail)">\n' +
    '                                     {{QuestionDetail.titleDictionary[selectedLanguage]}} \n' +
    '                                  </label>\n' +
    '                            </div>\n' +
    '        \n' +
    '                            <div ng-if="ques.questionTypeId == 2">\n' +
    '                                <!--Rate-->\n' +
    '                <jk-rating-stars rating="rate" ng-model="ques.answer.value==rate" on-rating="onItemRating(rating,ques.questionId,ques.Comment)" class="my-custom-stars hideMinus"></jk-rating-stars>\n' +
    '                            </div>\n' +
    '        \n' +
    '                            <div ng-if="ques.questionTypeId == 3">\n' +
    '                         \n' +
    '                            <!--Like / DisLike-->\n' +
    '                                <!-- <i ng-init="ques.answer.value=1" ng-model="ques.answer.value" required name="likeDis" ng-click="ques.answer.ques.IsLike = LikeDisLikeSubmit(1)" class="fa fa-thumbs-up" style="font-size:24px"></i> -->\n' +
    '           <i ng-model="ques.answer.value" required name="likeDis" ng-click="ques.answer.value = 1" class="fa fa-thumbs-up" style="font-size:24px"></i>\n' +
    '          <i ng-model="ques.answer.value" required name="like" ng-click="ques.answer.value = 0" class="fa fa-thumbs-down" style="font-size:24px"></i>\n' +
    '                              \n' +
    '                                <div ng-if="ques.answer.value == 1">Like</div>\n' +
    '                                <div ng-if="ques.answer.value == 0">Disike</div>\n' +
    '        \n' +
    '                            </div> \n' +
    '                            <textarea class="form-control" ng-model="ques.answer.note" placeholder="Type Notes" name="comment"></textarea>\n' +
    '                        </div>\n' +
    '                </li>\n' +
    '                     \n' +
    '            </ul>   \n' +
    '          \n' +
    '     \n' +
    '\n' +
    '        </div> \n' +
    '\n' +
    ' \n' +
    '    <button ng-click="AddAnswer(questionList)" type="button" class="btn btn-primary btn-with-icon" >\n' +
    '        <i class="ion-android-checkmark-circle"></i>Save\n' +
    '    </button>\n' +
    '</form>\n' +
    ' \n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>\n' +
    '<script type="text/javascript">\n' +
    '    // $(function () {\n' +
    '    //     $(\'#startdate\').datetimepicker();\n' +
    '    // });\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                //   viewMode: \'years\',\n' +
    '                  format: \'DD/MM/YYYY\',\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '    );\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '<script>\n' +
    'var acc = document.getElementsByClassName("accordion");\n' +
    'var i;\n' +
    '\n' +
    'for (i = 0; i < acc.length; i++) {\n' +
    '  acc[i].addEventListener("click", function() {\n' +
    '    this.classList.toggle("active");\n' +
    '    var panel = this.nextElementSibling;\n' +
    '    if (panel.style.maxHeight){\n' +
    '      panel.style.maxHeight = null;\n' +
    '    } else {\n' +
    '      panel.style.maxHeight = panel.scrollHeight + "px";\n' +
    '    } \n' +
    '  });\n' +
    '}\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/AnswerQuestion/templates/editUser.html',
    '\n' +
    ' \n' +
    '{{\'BasicInfoLbl\' | translate}}\n' +
    '<br/>\n' +
    '    <form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="firstName" ng-model="userObj.firstName" ng-minlength="3" ng-maxlength="50" >\n' +
    '            <div ng-messages="newclientForm.firstName.$error">\n' +
    '                <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="lastName" ng-model="userObj.lastName" ng-minlength="3" ng-maxlength="50" >\n' +
    '            <div ng-messages="newclientForm.lastName.$error">\n' +
    '                <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '\n' +
    '            <input required type="text" class="mat-input form-control" name="email" ng-model="userObj.email" ng-minlength="3" ng-maxlength="50" >\n' +
    '            <div ng-messages="newclientForm.email.$error">\n' +
    '                <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '\n' +
    '            <input required type="text" class="mat-input form-control" numbers-only name="phone" ng-model="userObj.phone" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '            <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span>\n' +
    '            <div ng-messages="newclientForm.phone.$error">\n' +
    '                <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '\n' +
    '            <input required type="password" class="mat-input form-control" name="password" ng-model="userObj.password" ng-minlength="8" ng-maxlength="25">\n' +
    '            <div ng-messages="newclientForm.password.$error">\n' +
    '                <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password length must be 8-25 char.</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '     \n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '             \n' +
    '              <label for="first-name">{{\'selectedType\' | translate}}</label>\n' +
    '            <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"  ng-model="selectedType"\n' +
    '                    ng-options="group as group.titleDictionary[selectedLanguage] for group in userTypeList track by group.userTypeId">\n' +
    '                         \n' +
    '            </select> \n' +
    '        </div> \n' +
    '        \n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            role   <label> {{ role | translate}} </label>\n' +
    '            <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                    ng-model="editUserCtrl.selectedUserRoles" ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    ' \n' +
    '        </div>\n' +
    '    </form>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newclientForm.$invalid || !editUserCtrl.show" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'Edit\' | translate}}</button>\n' +
    '    </div>\n' +
    '     \n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() { \n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/AnswerQuestion/templates/user.html',
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'addUser\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddUserBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '    <div ng-if="userCtrl.userList.results.length == 0">\n' +
    '        <span>{{\'NouserAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="userList.length >0">\n' +
    '\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'userName\' | translate}}</th>\n' +
    '                        <th>{{\'EmailLbl\' | translate}}</th>\n' +
    '\n' +
    '                        <th>{{\'Phone1Lbl\' | translate}}</th> \n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="user in userList">\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" data-title="Name" width="20%">{{user.firstName}} {{user.lastName}}</td>\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" data-title="Name" width="20%">{{user.email}}  </td>\n' +
    '\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" data-title="Description">{{user.phone}}</td> \n' +
    '                       \n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" width="15%">  \n' +
    '                            <i class="cursorPointer" ng-click="$state.go(\'editUser\', {userId: user.userId});">{{\'Edit\' | translate}} </i>\n' +
    '\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/Area.html',
    '\n' +
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'newArea\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '\n' +
    '    </div> \n' +
    '    <div ng-if="AreaList.results.length == 0">\n' +
    '        <span>{{\'NoAreasAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="AreaList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'status\' | translate}}</th>\n' +
    '                    <th>Branches</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="Area in AreaList.results">\n' +
    '                    <td data-title="Name">{{Area.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <td>\n' +
    '                        <p ng-show="Area.isStatic"> Static</p>\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'newBranch\',{areaId: Area.areaId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNewBranch\' | translate}}</button>\n' +
    '                        <span href="javascript:void(0);" ng-click="Area.show=!Area.show;editAreaCtrl.showMore($event)" ng-show="Area.branches.length != 0"\n' +
    '                              class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" ng-show="!Area.isStatic">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editArea\',{areaId: Area.areaId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                <tr ng-repeat-end ng-show="Area.show">\n' +
    '                    <td>\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <th>{{\'status\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="Branch in Area.branches">\n' +
    '                                    <td data-title="Name">{{Branch.titleDictionary[selectedLanguage]}}</td> \n' +
    '                                    <td>\n' +
    '                                        <p ng-show="Branch.isStatic"> Static</p>\n' +
    '                                    </td>\n' +
    '                                    <td width="30%" ng-show="!Branch.isStatic">\n' +
    '                                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editBranch\',{branchId: Branch.branchId});">mode_edit</i>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Area\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editAreaCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editAreaCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editAreaCtrl.Area.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editAreaCtrl.UpdateArea()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editAreaCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewArea\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newAreaCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newAreaCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newAreaCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newAreaCtrl.AddNewArea()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Area\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Branch/templates/Area.html',
    '\n' +
    '<div >\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button  ng-click="$state.go(\'newArea\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '        \n' +
    '    </div>\n' +
    '    \n' +
    '    <div ng-if="AreaList.results.length == 0">\n' +
    '            <span>{{\'NoAreasAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="AreaList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th >{{\'Name\' | translate}}</th> \n' +
    '                        <th >{{\'status\' | translate}}</th>\n' +
    '                        <th ></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="Area in AreaList.results">\n' +
    '                        <td data-title="Name" >{{Area.titleDictionary[selectedLanguage]}}</td>\n' +
    '                         \n' +
    '                        \n' +
    '                        <td>\n' +
    '                            <p  ng-show="Area.isStatic"> Static</p> \n' +
    '                        </td> \n' +
    '                        <td width="30%" ng-show="!Area.isStatic">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editArea\',{areaId: Area.areaId});">mode_edit</i>  \n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="AreaCtrl.Areas.totalCount" paging-action="AreaCtrl.changePage( page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '           </div>\n' +
    '    </div> \n' +
    '\n' +
    ' ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Branch/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Branch\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editBranchCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editBranchCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editBranchCtrl.Branch.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editBranchCtrl.UpdateBranch()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editBranchCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Branch/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'Branch\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newBranchForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newBranchCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newBranchCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Branch="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newBranchCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newBranchForm.$invalid" class="btn pmd-ripple-effect btn-primary" Branch="button" ng-click="newBranchCtrl.AddNewBranch()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Branch="button" ng-click="$state.go(\'Branch\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Department/templates/Department.html',
    '\n' +
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'newDepartment\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="DepartmentList.results.length == 0">\n' +
    '        <span>{{\'NoDepartmentsAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="DepartmentList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'status\' | translate}}</th>\n' +
    '                    <th>{{\'category\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="Department in DepartmentList.results">\n' +
    '                    <td data-title="Name">{{Department.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <td>\n' +
    '                        <p ng-show="Department.isStatic">{{\'Static\' | translate}}</p>\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'newCategory\',{departmentId: Department.departmentId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNewBranch\' | translate}}</button>\n' +
    '                        <span href="javascript:void(0);" ng-click="Department.show=!Department.show;editDepartmentCtrl.showMore($event)" \n' +
    '                              ng-show="Department.categories.length != 0"\n' +
    '                              class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" ng-show="!Department.isStatic">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editDepartment\',{departmentId: Department.departmentId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                <tr ng-repeat-end ng-show="Department.show">\n' +
    '                    <td>\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <th>{{\'status\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="category in Department.categories">\n' +
    '                                    <td data-title="Name">{{category.titleDictionary[selectedLanguage]}}</td> \n' +
    '                                    <td>\n' +
    '                                        <p ng-show="category.isStatic">{{\'Static\' | translate}}</p>\n' +
    '                                    </td>\n' +
    '                                    <td width="30%" ng-show="!category.isStatic">\n' +
    '                                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editCategory\',{categoryId: category.categoryId});">mode_edit</i>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Department/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Department\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editDepartmentCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editDepartmentCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editDepartmentCtrl.Department.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editDepartmentCtrl.UpdateDepartment()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editDepartmentCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Department/templates/new.html',
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewDepartment\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newDepartmentForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newDepartmentCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newDepartmentCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Department="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newDepartmentCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newDepartmentForm.$invalid" class="btn pmd-ripple-effect btn-primary" Department="button" ng-click="newDepartmentCtrl.AddNewDepartment()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Department="button" ng-click="$state.go(\'Department\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/Area.html',
    '\n' +
    '<div >\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button  ng-click="$state.go(\'newArea\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '        \n' +
    '    </div>\n' +
    '    \n' +
    '    <div ng-if="AreaList.results.length == 0">\n' +
    '            <span>{{\'NoAreasAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="AreaList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th >{{\'Name\' | translate}}</th> \n' +
    '                        <th >{{\'status\' | translate}}</th>\n' +
    '                        <th ></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="Area in AreaList.results">\n' +
    '                        <td data-title="Name" >{{Area.titleDictionary[selectedLanguage]}}</td>\n' +
    '                         \n' +
    '                        \n' +
    '                        <td>\n' +
    '                            <p  ng-show="Area.isStatic">{{\'Static\' | translate}}</p> \n' +
    '                        </td> \n' +
    '                        <td width="30%" ng-show="!Area.isStatic">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editArea\',{areaId: Area.areaId});">mode_edit</i>  \n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="AreaCtrl.Areas.totalCount" paging-action="AreaCtrl.changePage( page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '           </div>\n' +
    '    </div> \n' +
    '\n' +
    ' ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Category\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCategoryCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCategoryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editCategoryCtrl.Category.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                \n' +
    '        \n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        role   <label> {{ role | translate}} </label>\n' +
    '                                        <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                                                ng-model="editCategoryCtrl.selectedCategoryRoles" ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '                            \n' +
    '                                    </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editCategoryCtrl.UpdateCategory()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editCategoryCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    ' \n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() { \n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'Category\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newCategoryForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCategoryCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCategoryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Category="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newCategoryCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                role   <label> {{ role | translate}} </label>\n' +
    '                                <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                                        ng-model="newCategoryCtrl.selectedCategoryRoles" ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '                         \n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newCategoryForm.$invalid" class="btn pmd-ripple-effect btn-primary" Category="button" ng-click="newCategoryCtrl.AddNewCategory()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Category="button" ng-click="$state.go(\'Category\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() { \n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) { \n' +
    '                data.push(tag); \n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Question/templates/Question.html',
    '\n' +
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'newQuestion\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '\n' +
    '    </div> \n' +
    '    <div ng-if="QuestionList.results.length == 0">\n' +
    '        <span>{{\'NoQuestionsAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="QuestionList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'status\' | translate}}</th>\n' +
    '                    <th>{{\'Type\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="Question in QuestionList.results">\n' +
    '                    <td data-title="Name">{{Question.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <td>\n' +
    '                        <p ng-show="Question.isStatic"> Static</p>\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                    {{(QuestionTypeList  |filter: {id: key})[Question.questionTypeId].text}}\n' +
    ' \n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" ng-show="!Question.isStatic">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editQuestion\',{questionId: Question.questionId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '               \n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Question/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Question\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editQuestionForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editQuestionCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editQuestionCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editQuestionCtrl.Question.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                            <div class="row">\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="editQuestionCtrl.departmentChange()"\n' +
    '                                            ng-model="editQuestionCtrl.selectedDepartment" ng-options="a as a.titleDictionary[selectedLanguage] \n' +
    '                                            for a in editQuestionCtrl.DepartmentList"></select>\n' +
    '                                </div> \n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Category\' | translate}}</label>\n' +
    '\n' +
    '                                    <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags"   \n' +
    '                                            ng-model="editQuestionCtrl.selectedCategory" ng-options="a as a.titleDictionary[selectedLanguage] \n' +
    '                                            for a in editQuestionCtrl.categoryList"></select>\n' +
    '                            \n' +
    '                             </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'QuestionType\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags"  \n' +
    '                                            ng-model="editQuestionCtrl.selectedQuestionType" ng-options="a as a.text for a in editQuestionCtrl.QuestionTypeList"></select>\n' +
    '                                </div> \n' +
    '                            </div> \n' +
    '                            <div class="row" ng-show="editQuestionCtrl.selectedQuestionType.id==0">\n' +
    '              \n' +
    '                                \n' +
    '                                <ul>\n' +
    '                                    <li ng-repeat="elemnt in questionelemnt">\n' +
    '                                         \n' +
    '                                        <div>\n' +
    '                                            <div id={{elemnt.id}} style="display:inline" >\n' +
    '                                                <span  ng-model="elemnt.question" ng-hide="editorEnabled" ng-click="editorEnabled=true">\n' +
    '                                                    {{elemnt.question}}\n' +
    '                                                </span>\n' +
    '                                                <div  ng-show="editorEnabled">\n' +
    '                                                    <input  ng-model="elemnt.question" ng-show="editorEnabled" >\n' +
    '                                                    <button href="#" ng-click="editorEnabled=false">Done editing</button>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div style="display:inline">\n' +
    '                                                <span>\n' +
    '                                                    <input type="text" class="mat-input form-control" style="display: inline;width: 30%;" ng-model="elemnt.questionEn" placeholder="questionEn" required/>\n' +
    '                                                    <input type="text" class="mat-input form-control" style="display: inline;width: 30%;" ng-model="elemnt.questionAr" placeholder="questionAr" required/>\n' +
    '                                                </span>\n' +
    '                                            </div> \n' +
    '                                            <span ng-hide="elemnt.length == 1">\n' +
    '                                                <a  href ng-click="questionelemnt.splice($index, 1)">Remove</a>\n' +
    '                                        <a href ng-click="newItem($event)">Add</a>\n' +
    '                                    </span>\n' +
    '                                        </div>\n' +
    '                                        <hr/>\n' +
    '                                    </li>\n' +
    '                                    <!-- <li>\n' +
    '                                        <a href ng-click="newItem($event)">New Item</a>\n' +
    '                                    </li> -->\n' +
    '                                </ul>\n' +
    '                                <!-- <div>\n' +
    '                                    <button ng-click="showitems($event)">Submit</button>\n' +
    '                                </div> -->\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editQuestionCtrl.UpdateQuestion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editQuestionCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Question/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'New\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newQuestionForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newQuestionCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newQuestionCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Question="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newQuestionCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="row">\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="newQuestionCtrl.departmentChange()"\n' +
    '                                            ng-model="newQuestionCtrl.selectedDepartment" ng-options="a as a.titleDictionary[selectedLanguage] for a in newQuestionCtrl.DepartmentList"></select>\n' +
    '                                </div> \n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Category\' | translate}}</label>\n' +
    '                                    <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags"   \n' +
    '                                            ng-model="newQuestionCtrl.selectedCategory" ng-options="a as a.titleDictionary[selectedLanguage] for a in newQuestionCtrl.categoryList"></select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'QuestionType\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select style="width:50% !important" class="form-control select-with-search pmd-select2-tags"  \n' +
    '                                            ng-model="newQuestionCtrl.selectedQuestionType" ng-options="a as a.text for a in newQuestionCtrl.QuestionTypeList"></select>\n' +
    '                                </div> \n' +
    '                            </div> \n' +
    '                            <div class="row" ng-show="newQuestionCtrl.selectedQuestionType.id==0">\n' +
    '                                \n' +
    '                                <ul>\n' +
    '                                    <li ng-repeat="elemnt in questionelemnt">\n' +
    '                    \n' +
    '                                        <div>\n' +
    '                                            <div id={{elemnt.id}} style="display:inline" >\n' +
    '                                                <span  ng-model="elemnt.question" ng-hide="editorEnabled" ng-click="editorEnabled=true">\n' +
    '                                                    {{elemnt.question}}\n' +
    '                                                </span>\n' +
    '                                                <div  ng-show="editorEnabled">\n' +
    '                                                    <input  ng-model="elemnt.question" ng-show="editorEnabled" >\n' +
    '                                                    <button href="#" ng-click="editorEnabled=false">Done editing</button>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div style="display:inline">\n' +
    '                                                <span>\n' +
    '                                                    <input type="text" ng-model="elemnt.questionEn" placeholder="questionEn" required/>\n' +
    '                                                    <input type="text" ng-model="elemnt.questionAr" placeholder="questionAr" required/>\n' +
    '                                                </span>\n' +
    '                                            </div>\n' +
    '                                         \n' +
    '                                            <span ng-hide="elemnt.length == 1">\n' +
    '                                                <!-- <a  href ng-click="questionelemnt.splice($index, 1)">Remove</a> -->\n' +
    '                                        <a href ng-click="newItem($event)">Add</a>\n' +
    '                                    </span>\n' +
    '                                        </div>\n' +
    '                                        <hr/>\n' +
    '                                    </li>\n' +
    '                                    <!-- <li>\n' +
    '                                        <a href ng-click="newItem($event)">New Item</a>\n' +
    '                                    </li> -->\n' +
    '                                </ul>\n' +
    '                                <!-- <div>\n' +
    '                                    <button ng-click="showitems($event)">Submit</button>\n' +
    '                                </div> -->\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newQuestionForm.$invalid" class="btn pmd-ripple-effect btn-primary" Question="button" ng-click="newQuestionCtrl.AddNewQuestion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Question="button" ng-click="$state.go(\'Question\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Role/templates/Role.html',
    '\n' +
    '<div >\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button  ng-click="$state.go(\'newRole\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '        \n' +
    '    </div>\n' +
    '    \n' +
    '    <div ng-if="RoleList.results.length == 0">\n' +
    '            <span>{{\'NoRolesAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="RoleList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th >{{\'Name\' | translate}}</th> \n' +
    '                        <th >{{\'status\' | translate}}</th>\n' +
    '                        <th ></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="role in RoleList.results">\n' +
    '                        <td data-title="Name" >{{role.titleDictionary[selectedLanguage]}}</td>\n' +
    '                         \n' +
    '                         <td>\n' +
    '                             <p  ng-show="role.isStatic">{{\'Static\' | translate}}</p> \n' +
    '                        </td> \n' +
    '                        <td width="30%" ng-show="!role.isStatic">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editrole\',{roleId: role.roleId});">mode_edit</i> \n' +
    '                         </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '           </div>\n' +
    '    </div> \n' +
    '\n' +
    ' ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Role/templates/_new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRestaurantTypeLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    Permission   <label  > {{ Permission | translate}} </label>\n' +
    '                                    <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                                            ng-model="newRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in permissionList">\n' +
    '                         \n' +
    '                                    </select> \n' +
    '                                   \n' +
    '                                     \n' +
    '                                </div>\n' +
    '                         \n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newRoleCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Role\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() {\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() {\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Role/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Role\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRoleCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editRoleCtrl.Role.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                 \n' +
    '                                </div>\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                    <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"   multiple\n' +
    '                                            ng-model="editRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in editRoleCtrl.permissionList">\n' +
    '                         \n' +
    '                                    </select>   \n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editRoleCtrl.UpdateType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editRoleCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Role/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRoleLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                <select style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
    '                                        ng-model="newRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in permissionList"></select>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newRoleCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Role\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/editUser/templates/editUser.html',
    '\n' +
    '  \n' +
    '    <div class="container" > \n' +
    '        {{\'BasicInfoLbl\' | translate}}         \n' +
    '            <form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="firstName" ng-model="userObj.firstName" ng-minlength="3" ng-maxlength="50" readonly="readonly">\n' +
    '                    <div ng-messages="newclientForm.firstName.$error" >\n' +
    '                        <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'LastNameLbl\' | translate}}</label>                     \n' +
    '                    <input required type="text" class="mat-input form-control" name="lastName" ng-model="userObj.lastName" ng-minlength="3" ng-maxlength="50" readonly="readonly">\n' +
    '                    <div ng-messages="newclientForm.lastName.$error" >\n' +
    '                        <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '                    \n' +
    '                    <input required type="text" class="mat-input form-control" name="email" ng-model="userObj.email" ng-minlength="3" ng-maxlength="50" readonly="readonly">\n' +
    '                    <div ng-messages="newclientForm.email.$error" >\n' +
    '                        <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                        <div ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Phone1Lbl\' | translate}}</label>\n' +
    '                    \n' +
    '                    <input required type="text" class="mat-input form-control" numbers-only name="phone1" ng-model="userObj.phone1" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <span class="error" ng-show="newclientForm.phone1.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span>\n' +
    '                    <div ng-messages="newclientForm.phone1.$error" >\n' +
    '                      <div ng-if="newclientForm.phone1.$error.required && !newclientForm.phone1.$pristine">{{\'PhoneReqError\' | translate}}</div>\n' +
    '                      <div ng-if="(newclientForm.phone1.$error.minlength || newclientForm.phone1.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Phone2Lbl\' | translate}}</label>\n' +
    '                    \n' +
    '                    <input required type="text" class="mat-input form-control" name="phone2" ng-model="userObj.phone2"  ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <span class="error" ng-show="newclientForm.phone2.$error.pattern">{{\'NotPhoneNumber\' | translate}}  </span>\n' +
    '                    \n' +
    '                                        <div ng-messages="newclientForm.phone2.$error" >\n' +
    '                                            <div ng-if="(newclientForm.phone2.$error.minlength || newclientForm.phone2.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '                                            \n' +
    '                                        </div>                  \n' +
    '                </div>   -->\n' +
    '\n' +
    '                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Phone2Lbl\' | translate}}</label>\n' +
    '                    <input   type="text" class="mat-input form-control" name="phone2" numbers-only ng-model="userObj.phone2"  ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <span class="error" ng-show="newclientForm.phone2.$error.pattern">{{\'NotPhoneNumber\' | translate}}  </span>\n' +
    '\n' +
    '                    <div ng-messages="newclientForm.phone2.$error" >\n' +
    '                        <div ng-if="(newclientForm.phone2.$error.minlength || newclientForm.phone2.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '                        \n' +
    '                    </div>\n' +
    '                </div> -->\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed" >\n' +
    '                    <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '                    \n' +
    '                        <input required type="password" class="mat-input form-control" name="password" ng-model="userObj.password" ng-minlength="8" ng-maxlength="25">\n' +
    '                        <div ng-messages="newclientForm.password.$error" >\n' +
    '                            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                            <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password length must be 8-25 char.</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label-completed" >\n' +
    '                        <label for="first-name">{{\'StatusLbl\' | translate}}</label>\n' +
    '                        <input type="checkbox" ng-model="userObj.isActive"  name="name"   >\n' +
    '                       \n' +
    '                    </div> -->\n' +
    '            </form> \n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newclientForm.$invalid || !editUserCtrl.show" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'Edit\' | translate}}</button>\n' +
    '                </div>\n' +
    '    \n' +
    '    </div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '		<button  ng-click="$state.go(\'product\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddProductBtn\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <!-- <div class="alert alert-info" ng-show="loading">Loading</div> -->\n' +
    '      <div class="table-responsive" loading-pane="isPaneShown">\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th >{{\'ProductTitleLbl\' | translate}}</th>\n' +
    '                    <th >{{\'userlimitLbl\' | translate}}</th> \n' +
    '                    <th >{{\'concumerLbl\' | translate}}</th> \n' +
    '                    <th >{{\'startDateLbl\' | translate}}</th>\n' +
    '                    <th >{{\'enddateLbl\' | translate}}</th> \n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="userProduct in userProductList.results"> \n' +
    '                    <td data-title="logo" >{{userProduct.productTitle}}\n' +
    '                        <td data-title="Description" >{{userProduct.userLimit}}</td>  \n' +
    '                        <td data-title="Description" >{{userProduct.userConsumer}}</td>  \n' +
    '                        <td data-title="logo" >{{userProduct.startDate | date:\'dd MMM yyyy\'}}\n' +
    '                    <td data-title="Description" >{{userProduct.endDate | date:\'dd MMM yyyy\'}}</td>  \n' +
    '                    <td width="15%" >\n' +
    '                         \n' +
    '                        <!-- <i class="cursorPointer" ng-click="$state.go(\'editProduct\', {backageGuid: {userProduct.backageGuid}});">Edit Product</i>  -->\n' +
    '                        <i class="cursorPointer" ng-click="$state.go(\'editProduct\', {backageGuid: userProduct.backageGuid});">{{\'Edit\' | translate}}</i> \n' +
    '                        \n' +
    '                        \n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/addUser.html',
    '{{\'BasicInfoLbl\' | translate}}\n' +
    '<form class="form-horizontal" name="newclientForm">\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="firstName" ng-pattern="/^(\\D)+$/" ng-model="FirstName" ng-minlength="3" ng-maxlength="50">\n' +
    '        <div ng-messages="newclientForm.firstName.$error" class="error">\n' +
    '            <div ng-show="newclientForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) ">{{\'NameLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="lastName" ng-pattern="/^(\\D)+$/" ng-model="LastName" ng-minlength="3" ng-maxlength="50">\n' +
    '        <div ng-messages="newclientForm.lastName.$error">\n' +
    '            <div ng-show="newclientForm.lastName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength)">{{\'NameLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="userEmail" ng-model="Email" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '        <span class="error" ng-show="newclientForm.userEmail.$error.pattern">{{\'WrongMail\' | translate}}   </span>\n' +
    '        <!--\n' +
    '                            <div ng-if="!newclientForm.email.$error.required &amp;&amp;\n' +
    '                            newclientForm.userEmail.$error.email" class="error">{{\'WrongMail\' | translate}}\n' +
    '                            </div> -->\n' +
    '        <div ng-messages="newclientForm.email.$error">\n' +
    '            <div ng-if="newclientForm.userEmail.$error.required && !newclientForm.userEmail.$pristine">{{\'EmailLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '\n' +
    '\n' +
    '        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="phone" numbers-only ng-model="Phone" ng-minlength="10" ng-maxlength="50">\n' +
    '        <!-- <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '        <div ng-messages="newclientForm.phone.$error">\n' +
    '            <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '        <input required type="password" class="mat-input form-control" name="password" ng-model="Password" ng-minlength="8" ng-maxlength="25">\n' +
    '        <div ng-messages="newclientForm.password.$error">\n' +
    '            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password length must be 8-25 char.</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '        <input required type="password" class="mat-input form-control" name="confirmPassword" ng-model="confirmPassword" equalto="newclientForm.password">\n' +
    '        <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'UserType\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"  ng-model="selectedType" \n' +
    '                ng-options="group as group.titleDictionary[selectedLanguage] for group in userTypeList">\n' +
    '                         \n' +
    '        </select>\n' +
    '\n' +
    '    </div> \n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label> {{ \'Role\' | translate}} </label>\n' +
    '        <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                ng-model="userCtrl.selectedUserRoles" ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    ' \n' +
    '    </div>\n' +
    '</form>\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button ng-disabled="newclientForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewclient()">{{\'NextLbl\' | translate}}</button>\n' +
    '</div>\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() { \n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) { \n' +
    '                data.push(tag); \n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/editUser.html',
    '\n' +
    ' \n' +
    '{{\'BasicInfoLbl\' | translate}}\n' +
    '<br/>\n' +
    '    <form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="firstName" ng-model="userObj.firstName" ng-minlength="3" ng-maxlength="50" >\n' +
    '            <div ng-messages="newclientForm.firstName.$error">\n' +
    '                <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="lastName" ng-model="userObj.lastName" ng-minlength="3" ng-maxlength="50" >\n' +
    '            <div ng-messages="newclientForm.lastName.$error">\n' +
    '                <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '\n' +
    '            <input required type="text" class="mat-input form-control" name="email" ng-model="userObj.email" ng-minlength="3" ng-maxlength="50" >\n' +
    '            <div ng-messages="newclientForm.email.$error">\n' +
    '                <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '\n' +
    '            <input required type="text" class="mat-input form-control" numbers-only name="phone" ng-model="userObj.phone" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '            <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span>\n' +
    '            <div ng-messages="newclientForm.phone.$error">\n' +
    '                <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '\n' +
    '            <input required type="password" class="mat-input form-control" name="password" ng-model="userObj.password" ng-minlength="8" ng-maxlength="25">\n' +
    '            <div ng-messages="newclientForm.password.$error">\n' +
    '                <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password length must be 8-25 char.</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '     \n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '             \n' +
    '              <label for="first-name">{{\'selectedType\' | translate}}</label>\n' +
    '            <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"  ng-model="selectedType"\n' +
    '                    ng-options="group as group.titleDictionary[selectedLanguage] for group in userTypeList track by group.userTypeId">\n' +
    '                         \n' +
    '            </select> \n' +
    '        </div> \n' +
    '        \n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            role   <label> {{ role | translate}} </label>\n' +
    '            <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                    ng-model="editUserCtrl.selectedUserRoles" ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    ' \n' +
    '        </div>\n' +
    '    </form>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newclientForm.$invalid || !editUserCtrl.show" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'Edit\' | translate}}</button>\n' +
    '    </div>\n' +
    '     \n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() { \n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/user.html',
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'addUser\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddUserBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '    <div ng-if="userCtrl.userList.results.length == 0">\n' +
    '        <span>{{\'NouserAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="userList.length >0">\n' +
    '\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'userName\' | translate}}</th>\n' +
    '                        <th>{{\'EmailLbl\' | translate}}</th>\n' +
    '\n' +
    '                        <th>{{\'Phone1Lbl\' | translate}}</th> \n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="user in userList">\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" data-title="Name" width="20%">{{user.firstName}} {{user.lastName}}</td>\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" data-title="Name" width="20%">{{user.email}}  </td>\n' +
    '\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" data-title="Description">{{user.phone}}</td> \n' +
    '                       \n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" width="15%">  \n' +
    '                            <i class="cursorPointer" ng-click="$state.go(\'editUser\', {userId: user.userId});">{{\'Edit\' | translate}} </i>\n' +
    '\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/userType/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'UserType\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editusertypeCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editusertypeCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editusertypeCtrl.usertype.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editusertypeCtrl.UpdateType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editusertypeCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/userType/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewUserTypeLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newusertypeCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newusertypeCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newusertypeCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="40">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newusertypeCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'usertype\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/userType/templates/userType.html',
    '\n' +
    '<div >\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button  ng-click="$state.go(\'newusertype\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '        \n' +
    '    </div>\n' +
    '    \n' +
    '    <div ng-if="usertypeList.results.length == 0">\n' +
    '            <span>{{\'NousertypesAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="usertypeList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th >{{\'Name\' | translate}}</th> \n' +
    '                        <th >{{\'status\' | translate}}</th>\n' +
    '                        <th ></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="usertype in usertypeList.results">\n' +
    '                        <td data-title="Name" >{{usertype.titleDictionary[selectedLanguage]}}</td>\n' +
    '                         \n' +
    '                        \n' +
    '                        <td>\n' +
    '                            <p ng-show="usertype.isStatic">{{\'Static\' | translate}}</p> \n' +
    '                        </td> \n' +
    '                        <td width="30%" ng-show="!usertype.isStatic">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editusertype\',{userTypeId: usertype.userTypeId});">mode_edit</i> \n' +
    '                            <!-- <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="usertypeCtrl.openDeleteusertypeDialog(usertype.usertypeNameDictionary[selectedLanguage],usertype.usertypeId)">delete</i> -->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '           </div>\n' +
    '    </div> \n' +
    '\n' +
    ' ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/Delete/templates/ConfirmDeleteDialog.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-body">{{\'deleteConfirmationLbl\' | translate}}<strong>{{deleteDlCtrl.itemName}}</strong> {{deleteDlCtrl.message}}? </div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button class="btn pmd-ripple-effect btn-primary pmd-btn-flat" type="button" ng-click="deleteDlCtrl.Confirm()">{{\'deleteBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default pmd-btn-flat" type="button" ng-click="deleteDlCtrl.close()">{{\'cancelBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/login/templates/login.html',
    '<div class="logincard" ng-if="!isLoggedIn()">\n' +
    '  	<div class="pmd-card card-default pmd-z-depth">\n' +
    '		<div class="login-card">\n' +
    '			<form ng-submit="submit(username,password)" name="loginForm">	\n' +
    '				<div class="pmd-card-body">\n' +
    '					<div class="alert alert-success" role="alert"> Oh snap! Change a few things up and try submitting again. </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="inputError1" class="control-label pmd-input-group-label">Email</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>\n' +
    '                            <input type="text" class="form-control" id="exampleInputAmount" required name="username" ng-model="username" ng-change="reset()">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="inputError1" class="control-label pmd-input-group-label">Password</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">lock_outline</i></div>\n' +
    '                            <input required type="password" name="password" ng-model="password" ng-change="reset()" minlength="6"  class="form-control" >\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div ng-if="invalidLoginInfo" class="loginFailed">\n' +
    '                    <span>Incorrect username or password.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="inActiveUser" class="loginFailed">\n' +
    '                    <span>Your account is deleted.</span>\n' +
    '                </div>\n' +
    '				<div class="pmd-card-footer card-footer-no-border card-footer-p16 text-center">\n' +
    '					<button  type="submit" class="btn pmd-ripple-effect btn-primary btn-block">Login</button>\n' +
    '				</div>\n' +
    '			</form>\n' +
    '		</div>\n' +
    '		\n' +
    '		\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
