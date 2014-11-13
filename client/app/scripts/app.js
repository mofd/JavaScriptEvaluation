///<reference path="../../typed/angularjs/angular.d.ts"/>
// /<reference path="../../platform/scripts/configuration/configuration.ts"/>
"use strict";
var app = angular.module('app', ['platform']);
app.run(function ($http, configurationService) {
    $http({ url: "http://localhost:8080/config/", method: "GET" }).success(function (data, status, headers, config) {
        configurationService.init(data);
    }).error(function (data, status, headers, config) {
        alert("MessageService failed " + data);
    });
});
//# sourceMappingURL=app.js.map