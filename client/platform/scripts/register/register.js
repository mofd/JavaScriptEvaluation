///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../configuration/configuration.ts"/>
"use strict";
var register;
(function (register) {
    var PASSWORT_PATTERN = /^[a-zA-ZäöüÄÖÜß0-9+-\_&\/\(\)\.\,\ ]*$/;
    register.validatePasswort = function (controller, modelValue, viewValue) {
        if (controller.$isEmpty(modelValue)) {
            return false;
        }
        else if (PASSWORT_PATTERN.test(viewValue)) {
            return true;
        }
        else {
            return false;
        }
    };
    register.validatePasswortRepeat = function (passwort, passwortRepeat) {
        return angular.equals(passwort, passwortRepeat);
    };
})(register || (register = {}));
platform.controller("RegisterCtrl", function ($scope, $http, $location, configurationService) {
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
    $scope.$watch('passwort', function () {
        $scope.passwortRepeat = null;
    });
});
platform.directive("passwort", function () {
    return {
        require: 'ngModel',
        link: function (scope, instanceElement, instanceAttributes, controller, transclude) {
            controller.$validators.passwort = function (modelValue, viewValue) {
                return register.validatePasswort(controller, modelValue, viewValue);
            };
        }
    };
});
platform.directive("passwortRepeat", function () {
    return {
        require: 'ngModel',
        link: function (scope, instanceElement, instanceAttributes, controller, transclude) {
            controller.$validators.passwortRepeat = function (modelValue, viewValue) {
                if (register.validatePasswortRepeat(scope.register.passwort.$viewValue, viewValue)) {
                    return true;
                }
                else {
                    return false;
                }
            };
        }
    };
});
//# sourceMappingURL=register.js.map