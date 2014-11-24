///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../../../typed/requirejs/require.d.ts"/>
///<reference path="../configuration/configuration.ts"/>
///<reference path="controller.ts"/>

"use strict";

module register {
    export var PASSWORT_PATTERN = /^[a-zA-ZäöüÄÖÜß0-9+-\_&\/\(\)\.\,\ ]*$/;

    export interface IRegisterScope extends ng.IScope {
        name:string;
        vorname:string;
        mail:string;
        benutzername:string;
        passwort:string;
        submitted:boolean;

        doRegister(valide:boolean):void;
    }
}

define(['angular', 'platform-configuration', 'platform/scripts/register/controller'], function (angular:ng.IAngularStatic) {
    angular.module('platform-register', ['platform-configuration'])
        .controller("RegisterCtrl", controller)
        .directive("passwort", function ():ng.IDirective {
            return {
                require: 'ngModel',
                link: function (scope:ng.IScope,
                                instanceElement:ng.IAugmentedJQuery,
                                instanceAttributes:ng.IAttributes,
                                controller:any,
                                transclude:ng.ITranscludeFunction) {
                    controller.$validators.passwort = function (modelValue, viewValue) {
                        if (controller.$isEmpty(modelValue)) {
                            return false;
                        } else if (register.PASSWORT_PATTERN.test(viewValue)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        });
});
