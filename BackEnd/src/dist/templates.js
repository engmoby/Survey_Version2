angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/AnswerQuestion/templates/AnswerQuestion.html',
    '<style>\n' +
    '    .my-custom-stars .button .material-icons {\n' +
    '        font-size: 30px;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-on .material-icons {\n' +
    '        color: #003399;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-off .material-icons {\n' +
    '        color: #99ccff;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .button .material-icons a:focus,\n' +
    '    a:hover {\n' +
    '        text-decoration: none;\n' +
    '    }\n' +
    '\n' +
    '    .hideMinus a:first-child {\n' +
    '        display: none;\n' +
    '    }\n' +
    '\n' +
    '    .accordion {\n' +
    '        background-color: #eee;\n' +
    '        color: #444;\n' +
    '        cursor: pointer;\n' +
    '        padding: 18px;\n' +
    '        width: 100%;\n' +
    '        border: none;\n' +
    '        text-align: left;\n' +
    '        outline: none;\n' +
    '        font-size: 15px;\n' +
    '        transition: 0.4s;\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '    .active,\n' +
    '    .accordion:hover {\n' +
    '        background-color: #ccc;\n' +
    '    }\n' +
    '\n' +
    '    .like {\n' +
    '        color: green;\n' +
    '    }\n' +
    '\n' +
    '    .dislike {\n' +
    '        color: red;\n' +
    '    }\n' +
    '\n' +
    '    /* .panel {\n' +
    '    padding: 0 18px;\n' +
    '    background-color: white;\n' +
    '    max-height: 0;\n' +
    '    overflow: hidden;\n' +
    '    transition: max-height 0.2s ease-out;\n' +
    '}  */\n' +
    '</style>\n' +
    '\n' +
    '\n' +
    '{{\'AnswerQuestion\' | translate}}\n' +
    '<form class="form-horizontal" name="newclientForm">\n' +
    '    <div class="row">\n' +
    '        <div  class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"\n' +
    '            <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '            <select  required style="width:50% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '                ng-change="AnswerQuestionCtrl.countryChange()" ng-model="AnswerQuestionCtrl.selectedCountry"\n' +
    '                 ng-options="group as group.titleDictionary[selectedLanguage] for group in AnswerQuestionCtrl.counties">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div  class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"\n' +
    '            <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '            <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '            ng-change="AnswerQuestionCtrl.regionChange()" ng-model="AnswerQuestionCtrl.selectedRegion"\n' +
    '                ng-options="group as group.titleDictionary[selectedLanguage] for group in AnswerQuestionCtrl.regions">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"\n' +
    '            <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '            <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="AnswerQuestionCtrl.cityChange()" ng-model="AnswerQuestionCtrl.selectedCity"\n' +
    '                ng-options="group as group.titleDictionary[selectedLanguage] for group in AnswerQuestionCtrl.cities">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '\n' +
    '            <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="areaChange()"\n' +
    '                ng-model="selectedArea" ng-options="a as a.titleDictionary[selectedLanguage] for a in areaList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '\n' +
    '            <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="branchChange()"\n' +
    '                ng-model="selectedBranch" ng-options="a as a.titleDictionary[selectedLanguage] for a in branchList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div style="direction: ltr;" class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label>{{\'startDateLbl\' | translate}}</label>\n' +
    '            <input style="width:50% !important" type="text" id="startdate" class="form-control" required />\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</form>\n' +
    '<form name="FormAnswer" novalidate autocomplete="off">\n' +
    '    <div ng-repeat="(k,v) in questionList| groupBy: \'categoryId\'">\n' +
    '        <!-- <div style="cursor: pointer;    background-color: #ccc;"> -->\n' +
    '\n' +
    '        <!-- <h1 style="padding: 7px" ng-init="t = false" ng-click="t=!t"> -->\n' +
    '        <h1 style="padding: 7px">\n' +
    '            {{v[0].category.titleDictionary[selectedLanguage]}}\n' +
    '        </h1>\n' +
    '        <!-- </div> -->\n' +
    '        <!-- <div style="font-weight:bold; color:#1C2B36;cursor: pointer;" ng-init="t = false" ng-click="t=!t">\n' +
    '            {{v[0].category.titleDictionary[selectedLanguage]}}\n' +
    '        </div> -->\n' +
    '        <!-- ng-show="t" -->\n' +
    '        <ul>\n' +
    '            <li ng-repeat="ques in v">\n' +
    '                <!-- <button class="accordion">{{ques.titleDictionary[selectedLanguage]}}</button> -->\n' +
    '                <!-- <div style="cursor: pointer;    background-color: #ccc;"> -->\n' +
    '                <!-- <h3 style="padding: 4px" ng-init="showAnswerForm = false" ng-click="showAnswerForm=!showAnswerForm"> -->\n' +
    '                <h3 style="padding: 4px">\n' +
    '                    {{ques.titleDictionary[selectedLanguage]}}\n' +
    '                </h3>\n' +
    '                <!-- </div> -->\n' +
    '                <!--submit answers-->\n' +
    '                <!--  ng-show="showAnswerForm" -->\n' +
    '                <div class="panel">\n' +
    '                    <div ng-if="ques.questionTypeId == 0">\n' +
    '                        <!--checkbox ng-model="ques.answer.value=selection" value="{{QuestionDetail.QuestionDetailsId}}"-->\n' +
    '                        <label ng-repeat="QuestionDetail in ques.questionDetailses" style="    display: block;">\n' +
    '                            <input type="checkbox" name="selectedDetails[]" ng-model="QuestionDetail.values" value="{{QuestionDetail.QuestionDetailsId}}"\n' +
    '                                ng-checked="selection.indexOf(QuestionDetail) > -1" ng-click="toggleSelection(QuestionDetail,ques.questionId)"> {{QuestionDetail.titleDictionary[selectedLanguage]}}\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div ng-if="ques.questionTypeId == 1">\n' +
    '                        <!--Rate-->\n' +
    '                        <jk-rating-stars rating="(AnswerQuestionCtrl.answers|filter:{questionId:ques.questionId})[0].answerDetails[0].value" on-rating="onItemRating(rating,ques.questionId)"\n' +
    '                            class="my-custom-stars hideMinus"></jk-rating-stars>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div ng-if="ques.questionTypeId == 2" ng-init="ques.l = null">\n' +
    '                        <!--Like / DisLike-->\n' +
    '                        <!-- <i ng-init="ques.answer.value=1" ng-model="ques.answer.value" required name="likeDis" ng-click="ques.answer.ques.IsLike = LikeDisLikeSubmit(1)" class="fa fa-thumbs-up" style="font-size:24px"></i> -->\n' +
    '                        <i required name="likeDis" ng-class="{\'like\':ques.l == true}" ng-click="ques.l=true;onItemRating(1,ques.questionId)" class="fa fa-thumbs-up"\n' +
    '                            style="font-size:38px;cursor: pointer"></i>\n' +
    '                        <i required name="like" ng-class="{\'dislike\':ques.l == false}" ng-click="ques.l=false;onItemRating(0,ques.questionId)" class="fa fa-thumbs-down"\n' +
    '                            style="font-size:38px;cursor: pointer"></i>\n' +
    '\n' +
    '                        <div ng-if="ques.answer.value == 1">Like</div>\n' +
    '                        <div ng-if="ques.answer.value == 0">Disike</div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                    <textarea class="form-control" ng-model="(AnswerQuestionCtrl.answers|filter:{questionId:ques.questionId})[0].note" placeholder="{{\'note\'|translate}}"\n' +
    '                        name="comment"></textarea>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '\n' +
    '        </ul>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <button ng-disabled="AnswerQuestionCtrl.answersValid() || newclientForm.$invalid " ng-click="AddAnswer(questionList)" type="button"\n' +
    '        class="btn btn-primary btn-with-icon">\n' +
    '        <i class="ion-android-checkmark-circle"></i>{{\'saveChangesBtn\'|translate}}\n' +
    '    </button>\n' +
    '</form>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
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
    '                format: \'DD/MM/YYYY\',\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '<script>\n' +
    '    var acc = document.getElementsByClassName("accordion");\n' +
    '    var i;\n' +
    '\n' +
    '    for (i = 0; i < acc.length; i++) {\n' +
    '        acc[i].addEventListener("click", function () {\n' +
    '            this.classList.toggle("active");\n' +
    '            var panel = this.nextElementSibling;\n' +
    '            if (panel.style.maxHeight) {\n' +
    '                panel.style.maxHeight = null;\n' +
    '            } else {\n' +
    '                panel.style.maxHeight = panel.scrollHeight + "px";\n' +
    '            }\n' +
    '        });\n' +
    '    }\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Answers/templates/answers.html',
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#fromdate\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '        $(\'#todate\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date(),\n' +
    '                useCurrent: false\n' +
    '            }\n' +
    '        );\n' +
    '        $("#fromdate").on("dp.change", function (e) {\n' +
    '            $(\'#todate\').data("DateTimePicker").minDate(e.date);\n' +
    '        });\n' +
    '        // Start date picke on chagne event [select maxmimum date for start date datepicker]\n' +
    '        $("#todate").on("dp.change", function (e) {\n' +
    '            $(\'#fromdate\').data("DateTimePicker").maxDate(e.date);\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '<style>\n' +
    '    .my-custom-stars .button .material-icons {\n' +
    '        font-size: 20px;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-on .material-icons {\n' +
    '        color: #003399;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-off .material-icons {\n' +
    '        color: #99ccff;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .button .material-icons a:focus,\n' +
    '    a:hover {\n' +
    '        text-decoration: none;\n' +
    '    }\n' +
    '\n' +
    '    .like {\n' +
    '        color: green;\n' +
    '    }\n' +
    '\n' +
    '    .dislike {\n' +
    '        color: red;\n' +
    '    }\n' +
    '</style>\n' +
    '<div class="row">\n' +
    '        <div  class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select  class="form-control select-with-search pmd-select2-tags"\n' +
    '            ng-change="answersCtrl.countryChange()" ng-model="answersCtrl.selectedCountry"\n' +
    '             ng-options="group as group.titleDictionary[selectedLanguage] for group in answersCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div  class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select  class="form-control select-with-search pmd-select2-tags"\n' +
    '        ng-change="answersCtrl.regionChange()" ng-model="answersCtrl.selectedRegion"\n' +
    '            ng-options="group as group.titleDictionary[selectedLanguage] for group in answersCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select class="form-control select-with-search pmd-select2-tags" \n' +
    '        ng-change="answersCtrl.cityChange()" ng-model="answersCtrl.selectedCity"\n' +
    '            ng-options="group as group.titleDictionary[selectedLanguage] for group in answersCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '\n' +
    '        <select required class="form-control select-with-search pmd-select2-tags" ng-change="answersCtrl.areaChange()" ng-model="answersCtrl.selectedArea"\n' +
    '            ng-options="a as a.titleDictionary[selectedLanguage] for a in answersCtrl.areaList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '\n' +
    '        <select required class="form-control select-with-search pmd-select2-tags" ng-change="answersCtrl.branchChange()" ng-model="answersCtrl.selectedBranch"\n' +
    '            ng-options="a as a.titleDictionary[selectedLanguage] for a in answersCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div  style="direction: ltr;"  class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label>{{\'fromLbl\' | translate}}</label>\n' +
    '        <input type="text" id="fromdate" class="form-control" required />\n' +
    '    </div>\n' +
    '\n' +
    '    <div style="direction: ltr;"  class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label>{{\'toLbl\' | translate}}</label>\n' +
    '        <input type="text" id="todate" class="form-control" required />\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-md-2 ">\n' +
    '        <button ng-click="answersCtrl.applyFilter()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'filterBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div ng-repeat="(k,v) in answersCtrl.questionList| groupBy: \'categoryId\'">\n' +
    '    <div style="cursor: pointer;    background-color: #ccc;">\n' +
    '\n' +
    '        <h1 style="padding: 7px" ng-init="t = false" ng-click="t=!t">\n' +
    '            {{v[0].category.titleDictionary[selectedLanguage]}}\n' +
    '        </h1>\n' +
    '    </div>\n' +
    '    <ul ng-show="t">\n' +
    '        <li ng-repeat="ques in v">\n' +
    '            <!-- <button class="accordion">{{ques.titleDictionary[selectedLanguage]}}</button> -->\n' +
    '            <div style="cursor: pointer;    background-color: #ccc;">\n' +
    '\n' +
    '                <h3 style="padding: 4px" ng-click="ques.showAnswer=!ques.showAnswer;ques.showAnswer?answersCtrl.viewAnswer(ques):ques.showAnswer=ques.showAnswer">\n' +
    '                    {{ques.titleDictionary[selectedLanguage]}}\n' +
    '                </h3>\n' +
    '            </div>\n' +
    '            <div ng-show="ques.showAnswer">\n' +
    '                <div style="text-align: center;">\n' +
    '                    <img ng-show="ques.isloading" src="assets/img/loading.gif" style="height: 80px;">\n' +
    '                </div>\n' +
    '                <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-show="!ques.isloading" ng-if="ques.answers.results.length > 0">\n' +
    '                    <div class="table-responsive"></div>\n' +
    '                    <table class="table pmd-table table-hover">\n' +
    '                        <thead>\n' +
    '                            <tr>\n' +
    '                                <th>{{\'Name\' | translate}}</th>\n' +
    '                                <th>{{\'value\' | translate}}</th>\n' +
    '                                <th>{{\'note\' | translate}}</th>\n' +
    '                                <th>{{\'dateLbl\' | translate}}</th>\n' +
    '                                <th></th>\n' +
    '                            </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody>\n' +
    '                            <tr ng-repeat="answer in ques.answers.results">\n' +
    '                                <td data-title="Name">{{answer.userName}}</td>\n' +
    '\n' +
    '                                <td>\n' +
    '                                    <span ng-repeat="answerDetail in answer.answerDetails">\n' +
    '                                        <div ng-if="ques.questionTypeId ==0">\n' +
    '                                            {{answerDetail.titleDictionary[selectedLanguage]}}\n' +
    '                                        </div>\n' +
    '                                        <div ng-if="ques.questionTypeId == 1">\n' +
    '                                            <!--Rate-->\n' +
    '                                            <jk-rating-stars rating="answerDetail.value" max-rating="5" name="{{answerDetail.answerDetailsId}}" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                        </div>\n' +
    '                                        <div ng-if="ques.questionTypeId == 2">\n' +
    '                                            <i required name="likeDis" ng-if="answerDetail.value == 1" class="fa fa-thumbs-up like" style="font-size:38px;"></i>\n' +
    '                                            <i required name="like" ng-if="answerDetail.value == 0" class="fa fa-thumbs-down dislike" style="font-size:38px;"></i>\n' +
    '                                        </div>\n' +
    '                                    </span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                    {{answer.note}}\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                    {{answer.date}}\n' +
    '                                </td>\n' +
    '\n' +
    '                            </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="ques.answers.totalCount" paging-action="answersCtrl.changePage(page,ques)" flex="nogrow"\n' +
    '                        show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div ng-if="ques.answers.results.length <= 0" ng-show="!ques.isloading">\n' +
    '                    <span>{{\'noAnswersLbl\' | translate}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </li>\n' +
    '\n' +
    '    </ul>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/Area.html',
    '\n' +
    '<div>\n' +
    '        <div ncy-breadcrumb></div>  \n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'newArea\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
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
    '                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                    <th>{{\'Branch\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="Area in AreaList.results">\n' +
    '                    <td data-title="Name">{{Area.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <!-- <td>\n' +
    '                        <p ng-show="Area.isStatic"> Static</p>\n' +
    '                    </td> -->\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'newBranch\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId,areaId: Area.areaId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNewBranch\' | translate}}</button>\n' +
    '                        <span href="javascript:void(0);" ng-click="Area.show=!Area.show;AreaCtrl.showMore($event)" ng-show="Area.branches.length != 0"\n' +
    '                              class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" ng-show="!Area.isStatic">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editArea\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId,areaId: Area.areaId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                <tr ng-repeat-end ng-show="Area.show">\n' +
    '                    <td>\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="Branch in Area.branches">\n' +
    '                                    <td data-title="Name">{{Branch.titleDictionary[selectedLanguage]}}</td> \n' +
    '                                    <!-- <td>\n' +
    '                                        <p ng-show="Branch.isStatic"> Static</p>\n' +
    '                                    </td> -->\n' +
    '                                    <td width="30%" ng-show="!Branch.isStatic">\n' +
    '                                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editBranch\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId,areaId: Area.areaId,branchId: Branch.branchId});">mode_edit</i>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/edit.html',
    '<div ncy-breadcrumb></div>  \n' +
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
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editAreaCtrl.Area.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '<div ncy-breadcrumb></div>  \n' +
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
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newAreaCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Area\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Branch/templates/edit.html',
    '<div ncy-breadcrumb></div>  \n' +
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
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editBranchCtrl.Branch.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editBranchCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Branch/templates/new.html',
    '<div ncy-breadcrumb></div>  \n' +
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
    '                                    <input required Branch="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newBranchCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '        <button class="btn pmd-ripple-effect btn-default" Branch="button" ng-click="newBranchCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'CategoryLbl\' | translate}}</h2>\n' +
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
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editCategoryCtrl.Category.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                \n' +
    '        \n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label> {{ \'Role\' | translate}} </label>\n' +
    '                                            <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
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
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'CategoryLbl\' | translate}}</h2>\n' +
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
    '                                    <input required Category="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newCategoryCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label> {{ \'Role\' | translate}} </label>\n' +
    '                                    <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
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
    '        <button class="btn pmd-ripple-effect btn-default" Category="button" ng-click="newCategoryCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
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
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/City/templates/Cities.html',
    '\n' +
    '<div>\n' +
    '        <div ncy-breadcrumb></div>  \n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'newCity\',{ countryId: $stateParams.countryId,regionId: $stateParams.regionId });" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '        \n' +
    '    </div> \n' +
    '    <div ng-if="Cities.results.length == 0">\n' +
    '        <span>{{\'NoCitiesAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="Cities.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                    <!-- <th>{{\'Branch\' | translate}}</th> -->\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="city in Cities.results">\n' +
    '                    <td data-title="Name">{{city.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <!-- <td>\n' +
    '                        <p ng-show="Area.isStatic"> Static</p>\n' +
    '                    </td> -->\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'Area\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:city.cityId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'viewAreas\' | translate}}</button>\n' +
    '                        <!-- <span href="javascript:void(0);" ng-click="Area.show=!Area.show;AreaCtrl.showMore($event)" ng-show="Area.branches.length != 0"\n' +
    '                              class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i class="material-icons md-dark pmd-sm"></i></span> -->\n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" >\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editCity\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId: city.cityId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                \n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/City/templates/edit.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'City\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCityCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCityCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editCityCtrl.City.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editCityCtrl.UpdateCity()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editCityCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/City/templates/new.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewCity\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCityCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCityCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newCityCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '        <button ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newCityCtrl.AddNewCity()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Cities\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId });">{{\'DiscardBtn\' | translate}}</button>\n' +
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
    '                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                    <th>{{\'CategoryLbl\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="Department in DepartmentList.results">\n' +
    '                    <td data-title="Name">{{Department.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <!-- <td>\n' +
    '                        <p ng-show="Department.isStatic">{{\'Static\' | translate}}</p>\n' +
    '                    </td> -->\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'newCategory\',{departmentId: Department.departmentId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNewCategoryBtn\' | translate}}</button>\n' +
    '                        <span href="javascript:void(0);" ng-click="Department.show=!Department.show;DepartmentCtrl.showMore($event)" \n' +
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
    '                                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="category in Department.categories">\n' +
    '                                    <td data-title="Name">{{category.titleDictionary[selectedLanguage]}}</td> \n' +
    '                                    <!-- <td>\n' +
    '                                        <p ng-show="category.isStatic">{{\'Static\' | translate}}</p>\n' +
    '                                    </td> -->\n' +
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
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
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
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editDepartmentCtrl.Department.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '                                    <input required Department="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newDepartmentCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newDepartmentForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
  $templateCache.put('./app/GlobalAdmin/Country/templates/Countries.html',
    '\n' +
    '<div>\n' +
    '        \n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'newCountry\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '\n' +
    '    </div> \n' +
    '    <div ng-if="Countries.results.length == 0">\n' +
    '        <span>{{\'NoCountriesAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="Countries.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                    <!-- <th>{{\'Branch\' | translate}}</th> -->\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="country in Countries.results">\n' +
    '                    <td data-title="Name">{{country.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <!-- <td>\n' +
    '                        <p ng-show="Area.isStatic"> Static</p>\n' +
    '                    </td> -->\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'Regions\',{countryId: country.countryId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'viewRegions\' | translate}}</button>\n' +
    '                        <!-- <span href="javascript:void(0);" ng-click="Area.show=!Area.show;AreaCtrl.showMore($event)" ng-show="Area.branches.length != 0"\n' +
    '                              class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i class="material-icons md-dark pmd-sm"></i></span> -->\n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" >\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editCountry\',{countryId: country.countryId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                \n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Country/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Country\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCountryCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCountryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editCountryCtrl.Country.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editCountryCtrl.UpdateCountry()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editCountryCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Country/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewCountry\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCountryCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCountryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newCountryCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '        <button ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newCountryCtrl.AddNewCountry()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Countries\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
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
    '                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                    <th>{{\'Type\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="Question in QuestionList.results">\n' +
    '                    <td data-title="Name">{{Question.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <!-- <td>\n' +
    '                        <p ng-show="Question.isStatic"> Static</p>\n' +
    '                    </td> -->\n' +
    '                    <td>\n' +
    '                    {{(QuestionTypeList  |filter: {id: key})[Question.questionTypeId].text | translate}}\n' +
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
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
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
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editQuestionCtrl.Question.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                            <div class="row">\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select ng-disabled="true" style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="editQuestionCtrl.departmentChange()"\n' +
    '                                            ng-model="editQuestionCtrl.selectedDepartment" ng-options="a as a.titleDictionary[selectedLanguage] \n' +
    '                                            for a in editQuestionCtrl.DepartmentList"></select>\n' +
    '                                </div> \n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'CategoryLbl\' | translate}}</label>\n' +
    '\n' +
    '                                    <select ng-disabled="true" style="width:50% !important" class="form-control select-with-search pmd-select2-tags"   \n' +
    '                                            ng-model="editQuestionCtrl.selectedCategory" ng-options="a as a.titleDictionary[selectedLanguage] \n' +
    '                                            for a in editQuestionCtrl.categoryList"></select>\n' +
    '                            \n' +
    '                             </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'QuestionType\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select ng-disabled="true" style="width:50% !important" class="form-control select-with-search pmd-select2-tags"  \n' +
    '                                            ng-model="editQuestionCtrl.selectedQuestionType" ng-options="a as a.text | translate for a in editQuestionCtrl.QuestionTypeList"></select>\n' +
    '                                </div> \n' +
    '                            </div> \n' +
    '                            <div class="row" ng-show="editQuestionCtrl.selectedQuestionType.id==0">\n' +
    '                                <ul>\n' +
    '                                    <li ng-repeat="elemnt in questionelemnt">\n' +
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
    '                                                    <input type="text" class="mat-input form-control" style="display: inline;width: 30%;" ng-model="elemnt.questionEn" placeholder="{{\'questionEn\' | translate}}" required/>\n' +
    '                                                    <input type="text" class="mat-input form-control" style="display: inline;width: 30%;" ng-model="elemnt.questionAr" placeholder="{{\'questionAr\' | translate}}" required/>\n' +
    '                                                </span>\n' +
    '                                            </div> \n' +
    '                                            <span ng-hide="elemnt.length == 1">\n' +
    '                                                <!-- <a  href ng-click="questionelemnt.splice($index, 1)">Remove</a> -->\n' +
    '                                        <a href ng-click="newItem($event)">{{\'AddBtn\' | translate}}</a>\n' +
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
    '        <h2 class="pmd-card-title-text">{{\'Question\' | translate}}</h2>\n' +
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
    '                                    <input required Question="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newQuestionCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newQuestionForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="row">\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="newQuestionCtrl.departmentChange()"\n' +
    '                                            ng-model="newQuestionCtrl.selectedDepartment" ng-options="a as a.titleDictionary[selectedLanguage] for a in newQuestionCtrl.DepartmentList"></select>\n' +
    '                                </div> \n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'CategoryLbl\' | translate}}</label>\n' +
    '                                    <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags"   \n' +
    '                                            ng-model="newQuestionCtrl.selectedCategory" ng-options="a as a.titleDictionary[selectedLanguage] for a in newQuestionCtrl.categoryList"></select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'QuestionType\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags"  \n' +
    '                                            ng-model="newQuestionCtrl.selectedQuestionType" ng-options="a as a.text | translate for a in newQuestionCtrl.QuestionTypeList"></select>\n' +
    '                                </div> \n' +
    '                            </div> \n' +
    '                            <div class="row" ng-if="newQuestionCtrl.selectedQuestionType.id==0">\n' +
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
    '                                                    <input type="text" ng-model="elemnt.questionEn" placeholder="{{\'questionEn\' | translate}}" required/>\n' +
    '                                                    <input type="text" ng-model="elemnt.questionAr" placeholder="{{\'questionAr\' | translate}}" required/>\n' +
    '                                                </span>\n' +
    '                                            </div>\n' +
    '                                         \n' +
    '                                            <span ng-hide="elemnt.length == 1">\n' +
    '                                                <a  href ng-click="questionelemnt.length>1?questionelemnt.splice($index, 1):void()">{{\'RemoveBtn\' | translate}}</a>\n' +
    '                                        <a href ng-click="newItem($event)">{{\'AddBtn\' |translate}}</a>\n' +
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
  $templateCache.put('./app/GlobalAdmin/Region/templates/Regions.html',
    '\n' +
    '<div>\n' +
    '        <div ncy-breadcrumb></div>        \n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'newRegion\',{ countryId: $stateParams.countryId });" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '\n' +
    '    </div> \n' +
    '    <div ng-if="Regions.results.length == 0">\n' +
    '        <span>{{\'NoRegionsAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="Regions.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                    <!-- <th>{{\'Branch\' | translate}}</th> -->\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="region in Regions.results">\n' +
    '                    <td data-title="Name">{{region.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <!-- <td>\n' +
    '                        <p ng-show="Area.isStatic"> Static</p>\n' +
    '                    </td> -->\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'Cities\',{countryId: $stateParams.countryId,regionId: region.regionId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'viewCities\' | translate}}</button>\n' +
    '                        <!-- <span href="javascript:void(0);" ng-click="Area.show=!Area.show;AreaCtrl.showMore($event)" ng-show="Area.branches.length != 0"\n' +
    '                              class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i class="material-icons md-dark pmd-sm"></i></span> -->\n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" >\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editRegion\',{countryId: $stateParams.countryId ,regionId: region.regionId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                \n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Region/templates/edit.html',
    '<div ncy-breadcrumb></div>        \n' +
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Region\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRegionCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRegionCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editRegionCtrl.Region.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '		<button ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editRegionCtrl.UpdateRegion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editRegionCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Region/templates/new.html',
    '<div ncy-breadcrumb></div>                \n' +
    '<div class="modal-content">\n' +
    '        \n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRegion\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRegionCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRegionCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRegionCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
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
    '        <button ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newRegionCtrl.AddNewRegion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Regions\',{countryId: $stateParams.countryId });">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
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
    '                             <p  ng-show="!role.isStatic">{{\'Dynamic\' | translate}}</p> \n' +
    '                        </td> \n' +
    '                        <td width="30%" ng-show="!role.isStatic">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editrole\',{roleId: role.roleId});">mode_edit</i> \n' +
    '                         </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '           </div>\n' +
    '    </div> \n' +
    '\n' +
    ' ');
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
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editRoleCtrl.Role.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                 \n' +
    '                                </div>\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                    <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"   multiple\n' +
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
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
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
  $templateCache.put('./app/GlobalAdmin/Ticket/templates/TicketDetails.html',
    '\n' +
    '<div>\n' +
    '    <button ng-click="ticketDetailsCtrl.ticket.showAssign= true;ticketDetailsCtrl.ticket.assignedUserId =\'0\';" ng-if="ticketDetailsCtrl.ticket.status === \'Pending\' && !ticketDetailsCtrl.ticket.showAssign && ticketDetailsCtrl.user.userTypeId == \'2\'"\n' +
    '        class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AssignedBtn\' | translate}}</button>\n' +
    '    <button ng-click="ticketDetailsCtrl.approveTicket(ticketDetailsCtrl.ticket.ticketId)" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '        ng-if="ticketDetailsCtrl.user.userTypeId == \'4\' && ticketDetailsCtrl.ticket.status == \'Assigned\' && !ticketDetailsCtrl.ticket.showReject" type="button">{{\'ApproveBtn\' | translate}}</button>\n' +
    '    <button ng-click="ticketDetailsCtrl.closeTicket(ticketDetailsCtrl.ticket.ticketId)" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '        ng-if="ticketDetailsCtrl.user.userTypeId == \'4\' && ticketDetailsCtrl.ticket.status == \'InProgress\'" type="button">{{\'CloseBtn\' | translate}}</button>\n' +
    '    <button ng-click="ticketDetailsCtrl.ticket.showReject = true;" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '        ng-if="ticketDetailsCtrl.user.userTypeId == \'4\' && ticketDetailsCtrl.ticket.status == \'Assigned\' && !ticketDetailsCtrl.ticket.showReject " type="button">{{\'RejectBtn\' | translate}}</button>\n' +
    '\n' +
    '    <button ng-click="ticketDetailsCtrl.ticket.showAssign= true;ticketDetailsCtrl.assignTicket(ticketDetailsCtrl.ticket.ticketId,ticketDetailsCtrl.ticket.assignedUserId,ticket.comment)" ng-disabled="ticketDetailsCtrl.ticket.assignedUserId <=0"\n' +
    '        ng-show="ticketDetailsCtrl.ticket.showAssign" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '    <button ng-click="ticketDetailsCtrl.ticket.showAssign= false;" ng-show="ticketDetailsCtrl.ticket.showAssign" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '        type="button">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    <div ng-show="ticketDetailsCtrl.ticket.showAssign">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="createTicketCtrl.departmentChange()"\n' +
    '                ng-model="ticketDetailsCtrl.ticket.assignedUserId" ng-options="key as value for (key, value)  in ticketDetailsCtrl.ticket.technacianUsers">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <button ng-click="ticketDetailsCtrl.ticket.showReject= true;ticketDetailsCtrl.rejectTicket(ticketDetailsCtrl.ticket.ticketId,ticketDetailsCtrl.ticket.comment)" ng-disabled="ticketDetailsCtrl.ticket.comment==null || ticketDetailsCtrl.ticket.comment.trim().length<3"\n' +
    '        ng-show="ticketDetailsCtrl.ticket.showReject" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '    <button ng-click="ticketDetailsCtrl.ticket.showReject= false;" ng-show="ticketDetailsCtrl.ticket.showReject" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '        type="button">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    <div ng-show="ticketDetailsCtrl.ticket.showReject || ticketDetailsCtrl.ticket.showAssign">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <input required type="text" placeholder="{{\'commentLbl\'|translate}}" class="mat-input form-control" name="title" ng-model="ticketDetailsCtrl.ticket.comment">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<table class="table pmd-table table-hover">\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr>\n' +
    '            <td data-title="Name">{{\'Name\' | translate}}</td>\n' +
    '            <td data-title="Name">{{ticketDetailsCtrl.ticket.title}}</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>{{\'descLbl\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.description}}</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>{{\'Department\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.departmentTitleDictionary[selectedLanguage]}}</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>{{\'CategoryLbl\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.categoryTitleDictionary[selectedLanguage]}}</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>{{\'Area\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.areaTitleDictionary[selectedLanguage]}}</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>{{\'Branch\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.branchTitleDictionary[selectedLanguage]}}</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>{{\'status\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.status | translate}}\n' +
    '                <span ng-if="ticketDetailsCtrl.ticket.status === \'Assigned\' \n' +
    '                || ticketDetailsCtrl.ticket.status === \'Closed\' \n' +
    '                || ticketDetailsCtrl.ticket.status === \'Rejected\' \n' +
    '                || ticketDetailsCtrl.ticket.status === \'InProgress\'">{{ticketDetailsCtrl.ticket.assignedUser}} {{ticketDetailsCtrl.ticket.technicianModificationTime}}</span>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '        <tr ng-if="ticketDetailsCtrl.ticket.status === \'Rejected\'">\n' +
    '            <td>{{\'commentLbl\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.rejectionComment}}</td>\n' +
    '        </tr>\n' +
    '\n' +
    '        <tr>\n' +
    '            <td>{{\'Creator\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.creatorUser}}</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>{{\'CreatTime\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.creationTime}}</td>\n' +
    '        </tr>\n' +
    '        <tr >\n' +
    '            <td>{{\'commentLbl\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.assignComment}}</td>\n' +
    '        </tr>\n' +
    '        <tr ng-if="ticketDetailsCtrl.ticket.status !== \'Pending\'">\n' +
    '            <td>{{\'AssignedBy\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.modifierUser}}</td>\n' +
    '        </tr>\n' +
    '        <tr ng-if="ticketDetailsCtrl.ticket.status !== \'Pending\'">\n' +
    '            <td>{{\'AssignedTime\' | translate}}</td>\n' +
    '            <td>{{ticketDetailsCtrl.ticket.lastModificationTime}}</td>\n' +
    '        </tr>\n' +
    '        <tr ng-if="ticketDetailsCtrl.ticket.imagesURL.length >0">\n' +
    '            <td>{{\'imageLbl\' | translate}}</td>\n' +
    '            <td>\n' +
    '                <div style="width:530px">\n' +
    '                    <ui-carousel slides="ticketDetailsCtrl.ticket.imagesURL" dots="true">\n' +
    '                        <carousel-item>\n' +
    '                            <div style="text-align: center !important;">\n' +
    '                            <img ng-src="{{item}}" height="100%" width="100%" />\n' +
    '\n' +
    '                            </div>\n' +
    '                            <!-- <h3>{{ item + 1 }}</h3> -->\n' +
    '\n' +
    '                        </carousel-item>\n' +
    '                    </ui-carousel>\n' +
    '                </div>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Ticket/templates/newTicket.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewTicketLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTicketForm">\n' +
    '            <div ng-disabled="true" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select ng-disabled="true" style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-model="createTicketCtrl.selectedAreaId"\n' +
    '                    ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in createTicketCtrl.areaList">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                <select required class="form-control select-tags pmd-select2-tags" ng-change="createTicketCtrl.branchChange()" ng-model="createTicketCtrl.selectedBranchId"\n' +
    '                    ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in createTicketCtrl.branchList"></select>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="createTicketCtrl.departmentChange()"\n' +
    '                    ng-model="createTicketCtrl.selectedDepartmentId" ng-options="group.departmentId as group.titleDictionary[selectedLanguage] for group in createTicketCtrl.departmentList">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show="createTicketCtrl.selectedDepartmentId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Category\' | translate}}</label>\n' +
    '                <select ng-required="createTicketCtrl.selectedDepartmentId > 0" ng-change="createTicketCtrl.categoryChange()" class="form-control select-tags pmd-select2-tags"\n' +
    '                    ng-model="createTicketCtrl.selectedCategoryId" ng-options="a.categoryId as a.titleDictionary[selectedLanguage] for a in createTicketCtrl.categoryList"></select>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name"> {{ \'titleLbl\' | translate}} </label>\n' +
    '                <input required type="text" class="mat-input form-control" name="title" ng-model="createTicketCtrl.title" ng-minlength="3" ng-maxlength="255">\n' +
    '                <div ng-messages="newTicketForm.title.$error">\n' +
    '                    <div ng-show="newTicketForm.title.$error.required && !newTicketForm.title.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                    <div ng-show="(newTicketForm.title.$error.minlength || newTicketForm.title.$error.maxlength) && !newTicketForm.title.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name"> {{ \'descLbl\' | translate}} </label>\n' +
    '                <textarea class="form-control" ng-model="createTicketCtrl.description" name="description" ng-minlength="3" ng-maxlength="255"></textarea>\n' +
    '                <!-- <input required type="text" class="mat-input form-control" name="description" ng-model="createTicketCtrl.description" ng-minlength="3"> -->\n' +
    '                <div ng-messages="newTicketForm.description.$error">\n' +
    '                    <div ng-show="newTicketForm.description.$error.required && !newTicketForm.description.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                    <div ng-show="(newTicketForm.description.$error.minlength || newTicketForm.description.$error.maxlength) && !newTicketForm.description.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <input id="file" name="file" style="display: none;" onchange="angular.element(this).scope().AddFile(this.files)" type="file">\n' +
    '                <button ng-click="createTicketCtrl.LoadUploadImages()">{{\'AddImageBtn\' |translate}}</button>\n' +
    '                <!-- <span style="color:red;" ng-show="newBlogCtrl.fileExist">File is already selected.</span> -->\n' +
    '                <br>\n' +
    '                <div>\n' +
    '                    <table>\n' +
    '                        <tbody>\n' +
    '                            <tr ng-repeat="file in createTicketCtrl.files">\n' +
    '                                <td>\n' +
    '                                    {{file.name}}\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                    <i class="material-icons pmd-md deleteButton cursorPointer font25" style="font-size: 20px;color: grey;cursor: pointer;" ng-click="createTicketCtrl.removeFile($index)">delete</i>\n' +
    '                                </td>\n' +
    '                            </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newTicketForm.$invalid || createTicketCtrl.selectedBranchId <=0 \n' +
    '        || createTicketCtrl.selectedDepartmentId <=0|| createTicketCtrl.selectedCategoryId<=0" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="createTicketCtrl.AddNewTicket()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Tickets\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        })\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Ticket/templates/tickets.html',
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#fromdate\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '        $(\'#todate\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date(),\n' +
    '                useCurrent: false\n' +
    '            }\n' +
    '        );\n' +
    '        $("#fromdate").on("dp.change", function (e) {\n' +
    '            $(\'#todate\').data("DateTimePicker").minDate(e.date);\n' +
    '        });\n' +
    '        // Start date picke on chagne event [select maxmimum date for start date datepicker]\n' +
    '        $("#todate").on("dp.change", function (e) {\n' +
    '            $(\'#fromdate\').data("DateTimePicker").maxDate(e.date);\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '<div ng-init="showMoreFilter = false">\n' +
    '    <div style="margin-bottom:10px" ng-if="ticketsCtrl.user.userTypeId == \'3\'">\n' +
    '        <button ng-click="$state.go(\'newTicket\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '\n' +
    '        <div style="direction: ltr;" class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label>{{\'fromLbl\' | translate}}</label>\n' +
    '            <input type="text" id="fromdate" class="form-control" required />\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div style="direction: ltr;" class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label>{{\'toLbl\' | translate}}</label>\n' +
    '            <input type="text" id="todate" class="form-control" required />\n' +
    '        </div>\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '            for="first-name">{{\'Status\' | translate}}</label>\n' +
    '            <select class="form-control select-with-search pmd-select2-tags" ng-model="ticketsCtrl.selectedStatus">\n' +
    '                <option value="">All</option>\n' +
    '                <option value="Pending">{{\'Pending\'|translate}}</option>\n' +
    '                <option value="Assigned">{{\'Assigned\'|translate}}</option>\n' +
    '                <option value="InProgress">{{\'InProgress\'|translate}}</option>\n' +
    '                <option value="Closed">{{\'Closed\'|translate}}</option>\n' +
    '                <option value="Rejected">{{\'Rejected\'|translate}}</option>\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="row" ng-show="showMoreFilter">\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '            for="first-name">{{\'Country\' | translate}}</label>\n' +
    '            <select class="form-control select-with-search pmd-select2-tags" ng-change="ticketsCtrl.countryChange()" ng-model="ticketsCtrl.selectedCountry"\n' +
    '                ng-options="group as group.titleDictionary[selectedLanguage] for group in ticketsCtrl.counties">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '            for="first-name">{{\'Region\' | translate}}</label>\n' +
    '            <select class="form-control select-with-search pmd-select2-tags" ng-change="ticketsCtrl.regionChange()" ng-model="ticketsCtrl.selectedRegion"\n' +
    '                ng-options="group as group.titleDictionary[selectedLanguage] for group in ticketsCtrl.regions">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '            for="first-name">{{\'City\' | translate}}</label>\n' +
    '            <select class="form-control select-with-search pmd-select2-tags" ng-change="ticketsCtrl.cityChange()" ng-model="ticketsCtrl.selectedCity"\n' +
    '                ng-options="group as group.titleDictionary[selectedLanguage] for group in ticketsCtrl.cities">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '\n' +
    '            <select required class="form-control select-with-search pmd-select2-tags" ng-change="ticketsCtrl.areaChange()" ng-model="ticketsCtrl.selectedArea"\n' +
    '                ng-options="a as a.titleDictionary[selectedLanguage] for a in ticketsCtrl.areaList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '\n' +
    '            <select required class="form-control select-with-search pmd-select2-tags" ng-model="ticketsCtrl.selectedBranch" ng-options="a as a.titleDictionary[selectedLanguage] for a in ticketsCtrl.branchList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '\n' +
    '            <select required class="form-control select-with-search pmd-select2-tags" ng-change="ticketsCtrl.departmentChange()" ng-model="ticketsCtrl.selectedDepartment"\n' +
    '                ng-options="a as a.titleDictionary[selectedLanguage] for a in ticketsCtrl.departments"></select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'CategoryLbl\' | translate}}</label>\n' +
    '\n' +
    '            <select required class="form-control select-with-search pmd-select2-tags" ng-model="ticketsCtrl.selectedCategory" ng-options="a as a.titleDictionary[selectedLanguage] for a in ticketsCtrl.categories"></select>\n' +
    '        </div>\n' +
    '        <div  ng-if="ticketsCtrl.user.userTypeId != \'3\'" class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'branchManager\' | translate}}</label>\n' +
    '\n' +
    '            <select required class="form-control select-with-search pmd-select2-tags" ng-model="ticketsCtrl.selectedBranchManager" ng-options="a as a.userName for a in ticketsCtrl.BranchManagers"></select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Tech\' | translate}}</label>\n' +
    '\n' +
    '            <select required class="form-control select-with-search pmd-select2-tags" ng-model="ticketsCtrl.selectedTechnician" ng-options="a as a.userName for a in ticketsCtrl.Technicians"></select>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row" style="padding-bottom: 5px;">\n' +
    '        <div class="col-md-2 ">\n' +
    '            <button ng-click="ticketsCtrl.applyFilter()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'filterBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '        <span ng-show="!showMoreFilter" ng-click="showMoreFilter = !showMoreFilter" style="cursor: pointer">Show More Fiter</span>\n' +
    '        <span ng-show="showMoreFilter" ng-click="showMoreFilter = !showMoreFilter" style="cursor: pointer">Show Less Fiter</span>\n' +
    '    </div>\n' +
    '    <div ng-if="ticketsCtrl.tickets.results.length == 0">\n' +
    '        <span>{{\'NoTicketAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="ticketsCtrl.tickets.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'descLbl\' | translate}}</th>\n' +
    '                    <th>{{\'CategoryLbl\' | translate}}</th>\n' +
    '                    <th>{{\'status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="ticket in ticketsCtrl.tickets.results">\n' +
    '                    <td data-title="Name" style="width:15%">{{ticket.title}}</td>\n' +
    '                    <td style="width:20%">{{ticket.description | limitTo :50}}</td>\n' +
    '                    <td>{{ticket.categoryTitleDictionary[selectedLanguage]}}</td>\n' +
    '                    <td>{{ticket.status | translate}}\n' +
    '                        <span ng-if="ticket.status === \'Assigned\' || ticket.status === \'Closed\' || ticket.status === \'Rejected\' || ticket.status === \'InProgress\'">{{ticket.assignedUser}}</span>\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                        <button ng-click="$state.go(\'TicketDetails\',{ticketId: ticket.ticketId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '                            type="button">{{\'DetailsBtn\' | translate}}</button>\n' +
    '                        <button ng-click="ticket.showAssign= true;ticket.assignedUserId =\'0\';" ng-if="ticket.status === \'Pending\' && !ticket.showAssign && ticketsCtrl.user.userTypeId == \'2\'"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AssignedBtn\' | translate}}</button>\n' +
    '                        <button ng-click="ticketsCtrl.approveTicket(ticket.ticketId)" class="btn pmd-ripple-effect btn-primary pmd-z-depth" ng-if="ticketsCtrl.user.userTypeId == \'4\' && ticket.status == \'Assigned\' && !ticket.showReject"\n' +
    '                            type="button">{{\'ApproveBtn\' | translate}}</button>\n' +
    '                        <button ng-click="ticketsCtrl.closeTicket(ticket.ticketId)" class="btn pmd-ripple-effect btn-primary pmd-z-depth" ng-if="ticketsCtrl.user.userTypeId == \'4\' && ticket.status == \'InProgress\'"\n' +
    '                            type="button">{{\'CloseBtn\' | translate}}</button>\n' +
    '                        <button ng-click="ticket.showReject = true;" class="btn pmd-ripple-effect btn-primary pmd-z-depth" ng-if="ticketsCtrl.user.userTypeId == \'4\' && ticket.status == \'Assigned\' && !ticket.showReject "\n' +
    '                            type="button">{{\'RejectBtn\' | translate}}</button>\n' +
    '\n' +
    '                        <button ng-click="ticket.showAssign= true;ticketsCtrl.assignTicket(ticket.ticketId,ticket.assignedUserId,ticket.comment)"\n' +
    '                            ng-disabled="ticket.assignedUserId <=0" ng-show="ticket.showAssign" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '                            type="button">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '                        <button ng-click="ticket.showAssign= false;" ng-show="ticket.showAssign" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '                            type="button">{{\'DiscardBtn\' | translate}}</button>\n' +
    '                        <div ng-show="ticket.showAssign">\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="createTicketCtrl.departmentChange()"\n' +
    '                                    ng-model="ticket.assignedUserId" ng-options="key as value for (key, value)  in ticket.technacianUsers">\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <button ng-click="ticket.showReject= true;ticketsCtrl.rejectTicket(ticket.ticketId,ticket.comment)" ng-disabled="ticket.comment==null || ticket.comment.trim().length<3"\n' +
    '                            ng-show="ticket.showReject" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '                        <button ng-click="ticket.showReject= false;" ng-show="ticket.showReject" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '                            type="button">{{\'DiscardBtn\' | translate}}</button>\n' +
    '                        <div ng-show="ticket.showReject || ticket.showAssign">\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                <input required type="text" placeholder="{{\'commentLbl\'|translate}}" class="mat-input form-control" name="title" ng-model="ticket.comment">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="ticketsCtrl.tickets.totalCount" paging-action="ticketsCtrl.changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/dashboard/templates/dashboard.html',
    '<style>\n' +
    '    .my-custom-stars .button .material-icons {\n' +
    '        font-size: 20px;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-on .material-icons {\n' +
    '        color: #003399;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-off .material-icons {\n' +
    '        color: #99ccff;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .button .material-icons a:focus,\n' +
    '    a:hover {\n' +
    '        text-decoration: none;\n' +
    '    }\n' +
    '</style>\n' +
    '<div style="cursor: pointer;    background-color: #ccc;">\n' +
    '    <h1 style="padding: 4px" ng-init="showTicket = false" ng-click="showTicket=!showTicket">\n' +
    '        {{\'Tickets\' | translate}}\n' +
    '    </h1>\n' +
    '</div>\n' +
    '<div ng-show="showTicket">\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <select style="width:15% !important" class="select-tags form-control pmd-select2-tags" ng-change="dashboardCtrl.ticketFilterChange()"\n' +
    '            ng-model="dashboardCtrl.selectedTicketFilter" ng-options="f.value as f.name for f  in dashboardCtrl.ticketsFilter">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <nvd3 style="direction: ltr" options="dashboardCtrl.options" data="dashboardCtrl.data"></nvd3>\n' +
    '</div>\n' +
    '\n' +
    '<div style="cursor: pointer;    background-color: #ccc;">\n' +
    '    <h1 style="padding: 4px" ng-init="showSurvey = false" ng-click="showSurvey=!showSurvey">\n' +
    '        {{\'Survey\' | translate}}\n' +
    '    </h1>\n' +
    '</div>\n' +
    '<div ng-show="showSurvey">\n' +
    '    <ul>\n' +
    '\n' +
    '        <li ng-repeat="(k,v) in dashboardCtrl.questionList| groupBy: \'categoryId\'">\n' +
    '            <div style="cursor: pointer;    background-color: #ccc;">\n' +
    '\n' +
    '                <h2 style="padding: 7px" ng-init="t = false" ng-click="t=!t">\n' +
    '                    {{v[0].category.titleDictionary[selectedLanguage]}}\n' +
    '                </h2>\n' +
    '            </div>\n' +
    '            <ul ng-show="t">\n' +
    '                <li ng-repeat="ques in v">\n' +
    '                    <!-- <button class="accordion">{{ques.titleDictionary[selectedLanguage]}}</button> -->\n' +
    '                    <div style="cursor: pointer;    background-color: #ccc;">\n' +
    '\n' +
    '                        <h3 style="padding: 4px" ng-click="ques.showAnswer=!ques.showAnswer;ques.showAnswer?dashboardCtrl.getQuestionDashbard(ques):ques.showAnswer=ques.showAnswer">\n' +
    '                            {{ques.titleDictionary[selectedLanguage]}} \n' +
    '                        </h3>\n' +
    '                    </div>\n' +
    '                    <div ng-show="ques.showAnswer">\n' +
    '                        <div style="text-align: center;">\n' +
    '                            <img ng-show="ques.isloading" src="assets/img/loading.gif" style="height: 80px;">\n' +
    '                        </div>\n' +
    '                        <span ng-if="!ques.isloading"\n' +
    '                         ng-show="(ques.data.length == 0 && ques.questionTypeId ==0) \n' +
    '                         || (ques.questionTypeId == 1 && ques.dashboard.oneStartCount == 0 && ques.dashboard.twoStartCount == 0 && ques.dashboard.threeStartCount == 0 && ques.dashboard.fourStartCount == 0 && ques.dashboard.fiveStartCount == 0)\n' +
    '                         || (ques.questionTypeId == 2 && ques.dashboard.likeCount == 0 && ques.dashboard.disLikeCount == 0 )\n' +
    '                         ">{{\'noAnswersLbl\'|translate}}</span>\n' +
    '                        <div ng-if="!ques.isloading &&  \n' +
    '                        ((ques.questionTypeId == 1 && (ques.dashboard.oneStartCount != 0 || ques.dashboard.twoStartCount != 0 || ques.dashboard.threeStartCount != 0 || ques.dashboard.fourStartCount != 0 || ques.dashboard.fiveStartCount != 0))\n' +
    '                        ||(ques.questionTypeId == 2 && (ques.dashboard.likeCount != 0 || ques.dashboard.disLikeCount != 0 ))\n' +
    '                        || (ques.data.length > 0 && ques.questionTypeId ==0))">\n' +
    '                            <nvd3 style="direction: ltr" options="ques.options" data="ques.data"></nvd3>\n' +
    '                        </div>\n' +
    '                        <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-show="!ques.isloading  && \n' +
    '                        (ques.questionTypeId == 1 && (ques.dashboard.oneStartCount != 0 || ques.dashboard.twoStartCount != 0 || ques.dashboard.threeStartCount != 0 || ques.dashboard.fourStartCount != 0 || ques.dashboard.fiveStartCount != 0))" ng-if="ques.questionTypeId == 1">\n' +
    '                            <div class="table-responsive">\n' +
    '                                <table class="table pmd-table table-hover">\n' +
    '                                    <thead>\n' +
    '                                        <tr>\n' +
    '                                            <th>\n' +
    '                                                <jk-rating-stars rating="1" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                            </th>\n' +
    '                                            <th>\n' +
    '                                                <jk-rating-stars rating="2" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                            </th>\n' +
    '                                            <th>\n' +
    '                                                <jk-rating-stars rating="3" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                            </th>\n' +
    '                                            <th>\n' +
    '                                                <jk-rating-stars rating="4" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                            </th>\n' +
    '                                            <th>\n' +
    '                                                <jk-rating-stars rating="5" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                            </th>\n' +
    '                                            <th>{{\'averageLbl\' | translate}}</th>\n' +
    '                                            <th></th>\n' +
    '                                        </tr>\n' +
    '                                    </thead>\n' +
    '                                    <tbody>\n' +
    '                                        <tr>\n' +
    '                                            <td>{{ques.dashboard.oneStartCount}}</td>\n' +
    '                                            <td>{{ques.dashboard.twoStartCount}}</td>\n' +
    '                                            <td>{{ques.dashboard.threeStartCount}}</td>\n' +
    '                                            <td>{{ques.dashboard.fourStartCount}}</td>\n' +
    '                                            <td>{{ques.dashboard.fiveStartCount}}</td>\n' +
    '                                            <td>{{ques.dashboard.average | number:2}}</td>\n' +
    '                                        </tr>\n' +
    '                                    </tbody>\n' +
    '                                </table>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </li>\n' +
    '\n' +
    '            </ul>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</div>');
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
    '                            <p  ng-show="!usertype.isStatic">{{\'Dynamic\' | translate}}</p>                             \n' +
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
  $templateCache.put('./app/GlobalAdmin/user/templates/addUser.html',
    '{{\'BasicInfoLbl\' | translate}}\n' +
    '<form class="form-horizontal" name="newclientForm">\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="firstName" ng-pattern="/^(\\D)+$/" ng-model="FirstName" ng-minlength="3"\n' +
    '            ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.firstName.$error" class="error">\n' +
    '            <div ng-show="newclientForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) ">{{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="lastName" ng-pattern="/^(\\D)+$/" ng-model="LastName" ng-minlength="3"\n' +
    '            ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.lastName.$error">\n' +
    '            <div ng-show="newclientForm.lastName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength)">{{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="userEmail" ng-model="Email" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '        <span class="error" ng-show="newclientForm.userEmail.$error.pattern">{{\'WrongMail\' | translate}} </span>\n' +
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
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="userCtrl.resetDLL()"\n' +
    '            ng-model="selectedType" ng-options="group as group.titleDictionary[selectedLanguage] for group in userTypeList">\n' +
    '\n' +
    '        </select>\n' +
    '\n' +
    '    </div>\n' +
    '    <div ng-show="selectedType.userTypeId == 2 || selectedType.userTypeId == 4" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 2 || selectedType.userTypeId == 4)" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="userCtrl.departmentChange()" ng-model="userCtrl.selectedDepartmentId" ng-options="group.departmentId as group.titleDictionary[selectedLanguage] for group in userCtrl.department">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 2 ||selectedType.userTypeId == 4) && userCtrl.selectedDepartmentId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CategoryLbl\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 2 ||selectedType.userTypeId == 4) && userCtrl.selectedDepartmentId > 0" ng-change="userCtrl.categoryChange()" multiple\n' +
    '            class="form-control select-with-search pmd-select2-tags" ng-model="userCtrl.selectedCategoryId" ng-options="a.categoryId as a.titleDictionary[selectedLanguage] for a in userCtrl.categoryList"></select>\n' +
    '    </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="userCtrl.countryChange()" ng-model="userCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in userCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& userCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& userCtrl.selectedCountryId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="userCtrl.regionChange()" ng-model="userCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in userCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& userCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '            <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& userCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="userCtrl.cityChange()" ng-model="userCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in userCtrl.cities">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& userCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '            <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& userCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="userCtrl.areaChange()" ng-model="userCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in userCtrl.area">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 3 ||selectedType.userTypeId == 4)&& userCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4) && userCtrl.selectedAreaId > 0 "\n' +
    '            class="form-control select-with-search pmd-select2-tags" multiple ng-change="userCtrl.branchChange()" ng-model="userCtrl.selectedBranchId" \n' +
    '            ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in userCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label> {{ \'Role\' | translate}} </label>\n' +
    '        <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple ng-model="userCtrl.selectedUserRoles"\n' +
    '            ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '\n' +
    '    </div>\n' +
    '</form>\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button ng-disabled="newclientForm.$invalid || \n' +
    '    ((selectedType.userTypeId == 2 || selectedType.userTypeId == 4) && (userCtrl.selectedDepartmentId <= 0 || userCtrl.selectedCategoryId <= 0))\n' +
    '    ||((selectedType.userTypeId == 3 || selectedType.userTypeId == 4) && (userCtrl.selectedAreaId <= 0 || userCtrl.selectedBranchId <= 0))"\n' +
    '     class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewclient()">{{\'NextLbl\' | translate}}</button>\n' +
    '</div>\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        // $(".select-add-tags").select2({\n' +
    '        //     tags: true,\n' +
    '        //     theme: "bootstrap",\n' +
    '        //     insertTag: function (data, tag) { \n' +
    '        //         data.push(tag); \n' +
    '        //     }\n' +
    '        // });\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        })\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/editUser.html',
    ' {{\'BasicInfoLbl\' | translate}}\n' +
    '<br/>\n' +
    '<form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" name="firstName" ng-model="userObj.firstName" ng-minlength="3"\n' +
    '            ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.firstName.$error">\n' +
    '            <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" name="lastName" ng-model="userObj.lastName" ng-minlength="3" ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.lastName.$error">\n' +
    '            <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" name="email" ng-model="userObj.email" ng-minlength="3" ng-maxlength="50">\n' +
    '        <div ng-messages="newclientForm.email.$error">\n' +
    '            <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" numbers-only name="phone" ng-model="userObj.phone" ng-pattern="phoneNumbr"\n' +
    '            ng-minlength="10" ng-maxlength="50">\n' +
    '        <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}} </span>\n' +
    '        <div ng-messages="newclientForm.phone.$error">\n' +
    '            <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '\n' +
    '        <input required type="password" class="mat-input form-control" name="password" ng-model="userObj.password" ng-minlength="8"\n' +
    '            ng-maxlength="25">\n' +
    '        <div ng-messages="newclientForm.password.$error">\n' +
    '            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password length must be 8-25 char.</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '        <input required type="password" class="mat-input form-control" name="confirmPassword" ng-model="userObj.confirmPassword" equalto="newclientForm.password">\n' +
    '        <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '        <label for="first-name">{{\'UserType\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="form-control select-tags pmd-select2-tags" ng-model="selectedType" ng-change="editUserCtrl.resetDLL()"\n' +
    '            ng-options="group as group.titleDictionary[selectedLanguage] for group in userTypeList track by group.userTypeId">\n' +
    '\n' +
    '        </select>\n' +
    '    </div>\n' +
    '<div ng-show="selectedType.userTypeId == 2 || selectedType.userTypeId == 4" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 2 || selectedType.userTypeId == 4)" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="editUserCtrl.departmentChange()" ng-model="editUserCtrl.selectedDepartmentId" ng-options="group.departmentId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.department">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 2 ||selectedType.userTypeId == 4) && editUserCtrl.selectedDepartmentId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CategoryLbl\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 2 ||selectedType.userTypeId == 4) && editUserCtrl.selectedDepartmentId > 0" ng-change="editUserCtrl.categoryChange()" multiple\n' +
    '            class="form-control select-with-search pmd-select2-tags" ng-model="editUserCtrl.selectedCategoryId" ng-options="a.categoryId as a.titleDictionary[selectedLanguage] for a in editUserCtrl.categoryList"></select>\n' +
    '    </div>\n' +
    '    <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '            <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="editUserCtrl.countryChange()" ng-model="editUserCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.counties">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '            <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedCountryId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="editUserCtrl.regionChange()" ng-model="editUserCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.regions">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="editUserCtrl.cityChange()" ng-model="editUserCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.cities">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '        <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="editUserCtrl.areaChange()" ng-model="editUserCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.area">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '        <div ng-show="(selectedType.userTypeId == 3 ||selectedType.userTypeId == 4)&& editUserCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '            <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4) && editUserCtrl.selectedAreaId > 0 "\n' +
    '                class="form-control select-with-search pmd-select2-tags" multiple ng-change="editUserCtrl.branchChange()" ng-model="editUserCtrl.selectedBranchId" \n' +
    '                ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in editUserCtrl.branchList"></select>\n' +
    '        </div>\n' +
    '    <!-- <div ng-show="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="editUserCtrl.areaChange()" ng-model="editUserCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="(selectedType.userTypeId == 3 ||selectedType.userTypeId == 4)&& editUserCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4) && editUserCtrl.selectedAreaId > 0 "\n' +
    '            class="form-control select-with-search pmd-select2-tags" multiple ng-change="editUserCtrl.branchChange()" ng-model="editUserCtrl.selectedBranchId" \n' +
    '            ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in editUserCtrl.branchList"></select>\n' +
    '    </div> -->\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        \n' +
    '        <label> {{ \'Role\' | translate}} </label>\n' +
    '        <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="editUserCtrl.selectedUserRoles"\n' +
    '            ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '\n' +
    '    </div>\n' +
    '</form>\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button ng-disabled="newclientForm.$invalid || !editUserCtrl.show ||\n' +
    '    ((selectedType.userTypeId == 2 || selectedType.userTypeId == 4) && (editUserCtrl.selectedDepartmentId <= 0 || editUserCtrl.selectedCategoryId <= 0))\n' +
    '    ||((selectedType.userTypeId == 3 || selectedType.userTypeId == 4) && (editUserCtrl.selectedAreaId <= 0 || editUserCtrl.selectedBranchId <= 0))" class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '        ng-click="Updateclient()">{{\'Edit\' | translate}}</button>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        })\n' +
    '        \n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/user.html',
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-click="$state.go(\'addUser\');" ng-disabled="userCtrl.userConsumed.consumedUsers >= userCtrl.userConsumed.maxNumUsers" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddUserBtn\' | translate}}</button>\n' +
    '        <span>{{userCtrl.userConsumed.consumedUsers}}</span>/\n' +
    '        <span>{{userCtrl.userConsumed.maxNumUsers}}</span>\n' +
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
    '                        <td data-title="Name" width="20%">{{user.firstName}} {{user.lastName}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.email}}  </td>\n' +
    '\n' +
    '                        <td  data-title="Description">{{user.phone}}</td> \n' +
    '                       \n' +
    '                        <td  width="15%">  \n' +
    '                            <i class="cursorPointer" ng-click="$state.go(\'editUser\', {userId: user.userId});">{{\'Edit\' | translate}} </i>\n' +
    '\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
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
