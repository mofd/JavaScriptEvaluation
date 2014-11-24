///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../../../typed/requirejs/require.d.ts"/>
///<reference path="../configuration/configuration.ts"/>
///<reference path="controller.ts"/>
"use strict";
var register;
(function (register) {
    register.PASSWORT_PATTERN = /^[a-zA-ZäöüÄÖÜß0-9+-\_&\/\(\)\.\,\ ]*$/;
})(register || (register = {}));
define(['angular', 'platform-configuration', 'platform/scripts/register/controller'], function (angular) {
    angular.module('platform-register', ['platform-configuration']).controller("RegisterCtrl", controller).directive("passwort", function () {
        return {
            require: 'ngModel',
            link: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                controller.$validators.passwort = function (modelValue, viewValue) {
                    if (controller.$isEmpty(modelValue)) {
                        return false;
                    }
                    else if (register.PASSWORT_PATTERN.test(viewValue)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
            }
        };
    });
});
//# sourceMappingURL=register.js.map