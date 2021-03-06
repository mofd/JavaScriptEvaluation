///<reference path="../../typed/angularjs/angular.d.ts"/>
///<reference path="../../typed/angularjs/angular-route.d.ts"/>
///<reference path="../../platform/scripts/configuration/configuration.ts"/>
///<reference path="../../platform/scripts/dispatcher/dispatcher.ts"/>
///<reference path="../../platform/scripts/login/login.ts"/>
"use strict";
var app = angular.module('app', ['platform', 'ngRoute']);
app.run(function ($http, configurationService, sessionService, dispatcher, $location) {
    $http({ url: "http://localhost:8080/config/", method: "GET" }).success(function (data, status, headers, config) {
        configurationService.init(data);
        sessionService.initWithDispatcher(dispatcher);
        $location.url("/login");
    }).error(function (data, status, headers, config) {
        alert("MessageService failed " + data);
    });
});
//# sourceMappingURL=app.js.map