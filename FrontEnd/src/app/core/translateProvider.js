(function() {
  'use strict';

  angular
  .module('core').config(["$translateProvider","appCONSTANTS",function($translateProvider,appCONSTANTS){
        
        var en_translations = { 
            "FirstNameLengthError" : "FirstName is required",
            "LastNameLengthError" : "LastName is required",
            "EmailLengthError" : "Email is required",
            "PhoneLengthError" : "Phone is required",
            "PasswordLengthError" : "Password is required",
            "UserPasswordLbl":"password",
            "ConfirmPasswordLbl":"Confirm password",
            "saveChangesBtn":"save changes",
            "DiscardBtn":"Discard",
            "ClientAddSuccess":"Client Add Success",

        }
        
        var ar_translations = {
            "FirstNameLengthError" : "اسم المستخدم الاول مطلوب",
            "LastNameLengthError" : "اسم المستخدم الثاني مطلوب",
            "EmailLengthError" : "البريد الالكتروني مطلوب",
            "PhoneLengthError" : "رقم الهاتف مطلوب",
            "PasswordLengthError" : "كلمه المرور مطلوبه", 
            "UserPasswordLbl":"كلمة مرور  ",
            "ConfirmPasswordLbl":"تأكيد كلمه المرور",
            "saveChangesBtn":"حفظ",
            "DiscardBtn":"تجاهل",
            "ClientAddSuccess":"Client Add Success",
            
        }
        
        $translateProvider.translations('en',en_translations);
        
        $translateProvider.translations('ar',ar_translations);
        
        $translateProvider.preferredLanguage(appCONSTANTS.defaultLanguage);
        
        }]);

}());
