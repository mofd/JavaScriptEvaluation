///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../../../typed/requirejs/require.d.ts"/>
///<reference path="../configuration/configuration.ts"/>
"use strict";
var register;
(function (register) {
    register.PASSWORT_PATTERN = /^[a-zA-ZäöüÄÖÜß0-9+-\_&\/\(\)\.\,\ ]*$/;
})(register || (register = {}));
define(['angular', 'platform-configuration'], function (angular) {
    angular.module('platform-register', ['platform-configuration']).controller("RegisterCtrl", function ($scope, $http, $location, configurationService) {
        $scope.doRegister = function (valide) {
            if (valide) {
                var register = JSON.stringify({
                    name: $scope.name,
                    vorname: $scope.vorname,
                    mail: $scope.mail,
                    benutzername: $scope.benutzername,
                    passwort: $scope.passwort
                });
                $http.post(configurationService.getCurrentConfiguration().serverUrl + "register/", register).success(function (data, status, headers, config) {
                    $location.url("/login");
                }).error(function (data, status, headers, config) {
                    console.log("Registrierung ist fehlgeschlagen: " + data);
                    alert('Registrierung ist fehlgeschlagen');
                });
            }
            else {
                $scope.submitted = true;
            }
        };
    }).directive("passwort", function () {
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