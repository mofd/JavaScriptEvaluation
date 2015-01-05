///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../configuration/configuration.ts"/>

"use strict";

module register {
    var PASSWORT_PATTERN = /^[a-zA-ZäöüÄÖÜß0-9+-\_&\/\(\)\.\,\ ]*$/;

    export interface IRegisterScope extends ng.IScope {
        name:string;
        vorname:string;
        mail:string;
        benutzername:string;
        passwort:string;
        passwortRepeat:string;
        submitted:boolean;

        doRegister(valide:boolean):void;
    }

    export var validatePasswort = function (controller, modelValue, viewValue) {
        if (controller.$isEmpty(modelValue)) {
            return false;
        } else if (PASSWORT_PATTERN.test(viewValue)) {
            return true;
        } else {
            return false;
        }
    }

    export var validatePasswortRepeat = function (passwort, passwortRepeat) {
        return angular.equals(passwort, passwortRepeat);
    }
}

platform.controller("RegisterCtrl", function ($scope:register.IRegisterScope, $http:ng.IHttpService, $location,
                                              configurationService:configuration.IConfigurationService) {

    $scope.doRegister = function (valide:boolean) {
        if (valide) {
            var register = JSON.stringify({
                name: $scope.name, vorname: $scope.vorname, mail: $scope.mail,
                benutzername: $scope.benutzername, passwort: $scope.passwort
            });
            $http.post(configurationService.getCurrentConfiguration().serverUrl + "register/", register)
                .success(function (data:number, status, headers, config) {
                    $location.url("/login");
                })
                .error(function (data, status, headers, config) {
                    console.log("Registrierung ist fehlgeschlagen: " + data)
                    alert('Registrierung ist fehlgeschlagen');
                })
        } else {
            $scope.submitted = true;
        }
    };

    $scope.$watch('passwort', function () {
        $scope.passwortRepeat = null;
    });
});

platform.directive("passwort", function ():ng.IDirective {
    return {
        require: 'ngModel',
        link: function (scope:ng.IScope,
                        instanceElement:ng.IAugmentedJQuery,
                        instanceAttributes:ng.IAttributes,
                        controller:any,
                        transclude:ng.ITranscludeFunction) {
            controller.$validators.passwort = function (modelValue, viewValue) {
                return register.validatePasswort(controller, modelValue, viewValue);
            }
        }
    }
});

platform.directive("passwortRepeat", function ():ng.IDirective {
    return {
        require: 'ngModel',
        link: function (scope:any,
                        instanceElement:ng.IAugmentedJQuery,
                        instanceAttributes:ng.IAttributes,
                        controller:any,
                        transclude:ng.ITranscludeFunction) {
            controller.$validators.passwortRepeat = function (modelValue, viewValue) {
                if (register.validatePasswortRepeat(scope.register.passwort.$viewValue, viewValue)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
});
