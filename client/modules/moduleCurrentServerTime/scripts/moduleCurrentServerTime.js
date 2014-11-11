/// <reference path="../../../typed/angularjs/angular.d.ts"/>
var moduleCurrentServerTime = angular.module('moduleCurrentServerTime', ['platform']);
moduleCurrentServerTime.controller("ModuleCurrentServerTimeCtrl", function ($scope, dispatcher, $http) {
    dispatcher.registerEvent("time", function () {
        $http({ url: "http://localhost:8080/currentTime/", method: "GET" }).success(function (data, status, headers, config) {
            $scope.currentTime = data.currentTime;
        }).error(function (data, status, headers, config) {
            alert("MessageService failed " + data);
        });
    });
});
//# sourceMappingURL=moduleCurrentServerTime.js.map