///<reference path="../../typed/angularjs/angular.d.ts"/>
///<reference path="../../typed/angularjs/angular-route.d.ts"/>
///<reference path="../../platform/scripts/configuration/configuration.ts"/>
///<reference path="../../platform/scripts/dispatcher/dispatcher.ts"/>
"use strict";

var app = angular.module('app', ['platform', 'ngRoute']);

app.run(function ($http:ng.IHttpService, configurationService:configuration.IConfigurationInitialisationService,
                  dispatcher:dispatcher.IDispatcher, $location) {
    $http({url: "http://localhost:8080/config/", method: "GET"})
        .success(function (data:configuration.ConfigurationDTO, status, headers, config) {
            configurationService.init(data);
            $location.url("/login");
        })
        .error(function (data, status, headers, config) {
            alert("MessageService failed " + data);
        });
});



