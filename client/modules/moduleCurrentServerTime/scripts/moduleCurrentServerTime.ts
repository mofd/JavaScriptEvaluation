/// <reference path="../../../typed/angularjs/angular.d.ts"/>

interface CurrentTime extends ng.IScope {
    currentTime:string;
}

var moduleCurrentServerTime = angular.module('moduleCurrentServerTime', ['platform']);

moduleCurrentServerTime.controller("moduleCurrentServerTimeCtrl", function ($scope:CurrentTime, dispatcher, $http) {

    dispatcher.registerEvent("time", function (message) {
        $http({url: "http://localhost:8080/currentTime/", method: "GET"})
            .success(function (data, status, headers, config) {
                $scope.currentTime = data.currentTime;
            })
            .error(function (data, status, headers, config) {
                alert("MessageService failed " + data);
            });
    });

});
