///<reference path="../../typed/angularjs/angular.d.ts"/>
///<reference path="../../typed/angularjs/angular-route.d.ts"/>
///<reference path="../../platform/scripts/configuration/configuration.ts"/>
///<reference path="../../platform/scripts/dispatcher/dispatcher.ts"/>
"use strict";
var app = angular.module('app', ['platform', 'ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when("/login", {
        controller: 'LoginCtrl',
        templateUrl: '../platform/views/login.html'
    }).when("/welcome", {
        //controller: 'LoginCtrl',
        templateUrl: '../platform/views/welcome.html'
    });
});
app.run(function ($http, configurationService, dispatcher, $location) {
    $http({ url: "http://localhost:8080/config/", method: "GET" }).success(function (data, status, headers, config) {
        configurationService.init(data);
        $location.url("/login");
    }).error(function (data, status, headers, config) {
        alert("MessageService failed " + data);
    });
});
//# sourceMappingURL=app.js.map