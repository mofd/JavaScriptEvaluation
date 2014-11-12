/// <reference path="../../../typed/angularjs/angular.d.ts"/>
/// <reference path="../../../platform/scripts/dispatcher/dispatcher.ts"/>

interface CurrentTime extends ng.IScope {
    currentTime:string;
}

interface CurrentTimeDTO {
    currentTime:string;
}

var moduleCurrentServerTime = angular.module('moduleCurrentServerTime', ['platform']);

moduleCurrentServerTime.controller("ModuleCurrentServerTimeCtrl", function ($scope:CurrentTime, dispatcher:dispatcher.IDispatcher, $http:ng.IHttpService) {

    dispatcher.registerEvent("time", function () {
        $http({url: "http://localhost:8080/currentTime/", method: "GET"})
            .success(function (data:CurrentTimeDTO, status, headers, config) {
                $scope.currentTime = data.currentTime;
            })
            .error(function (data, status, headers, config) {
                alert("MessageService failed " + data);
            });
    });

});
