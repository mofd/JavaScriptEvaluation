///<reference path="../../typed/angularjs/angular.d.ts"/>
///<reference path="../../typed/angularjs/angular-route.d.ts"/>

"use strict";

var platform = angular.module('platform', ['ngRoute']);

platform.config(function ($routeProvider:ng.route.IRouteProvider) {
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
