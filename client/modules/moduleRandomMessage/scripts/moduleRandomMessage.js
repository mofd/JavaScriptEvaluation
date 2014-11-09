/**
 * Created by steuer.konstantin on 07.11.2014.
 */
var moduleY = angular.module('moduleRandomMessage', ['platform']);

moduleY.controller("ModuleRandomMessageCtrl", function ($scope, dispatcher, $http) {

    //$scope.receivedMessage = "";

    dispatcher.registerEvent("message", function (message) {
        $http.get("http://localhost:8080/message/", {params: {message: message}})
            .success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.receivedMessage = data;
            })
            .error(function (data, status, headers, config) {
                alert("MessegService failed " + data);
            });
    });

});
