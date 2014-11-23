///<reference path="../../typed/angularjs/angular.d.ts"/>
///<reference path="../../typed/angularjs/angular-route.d.ts"/>
///<reference path="../../typed/requirejs/require.d.ts"/>
"use strict";
define(['angular', 'angular-route', 'platform-login', 'platform-register'], function (angular) {
    angular.module('platform', ['ngRoute', 'platform-login', 'platform-register']).config(function ($routeProvider) {
        $routeProvider.when("/login", {
            controller: 'LoginCtrl',
            templateUrl: '../platform/views/login.html'
        }).when("/welcome", {
            templateUrl: '../platform/views/welcome.html'
        }).when("/register", {
            controller: 'RegisterCtrl',
            templateUrl: '../platform/views/register.html'
        }).otherwise({
            templateUrl: '../platform/views/welcome.html'
        });
    });
});
//# sourceMappingURL=platform.js.map