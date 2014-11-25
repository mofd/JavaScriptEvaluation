///<reference path="../../typed/angularjs/angular.d.ts"/>
///<reference path="../../typed/angularjs/angular-route.d.ts"/>
///<reference path="../../typed/requirejs/require.d.ts"/>
///<reference path="../../platform/scripts/configuration/configuration.ts"/>
///<reference path="../../platform/scripts/dispatcher/dispatcher.ts"/>
///<reference path="../../platform/scripts/login/login.ts"/>
"use strict";
define(['angular', 'platformInit'], function (angular) {
    return angular.module('app', ['ngRoute', 'platform']).config(function ($routeProvider) {
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
    }).run(function ($http, configurationService, sessionService, dispatcher, $location) {
        $http({ url: "http://localhost:8080/config/", method: "GET" }).success(function (data, status, headers, config) {
            configurationService.init(data);
            sessionService.initWithDispatcher(dispatcher);
            $location.url("/login");
        }).error(function (data, status, headers, config) {
            alert("MessageService failed " + data);
        });
    });
});
//# sourceMappingURL=app.js.map