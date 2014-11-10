/**
 * Created by steuer.konstantin on 07.11.2014.
 */
var moduleMessage = angular.module('moduleMessage', ['platform']);

moduleY.controller("ModuleMessageCtrl", function ($scope, dispatcher, $http) {

    //$scope.receivedMessage = "";

    dispatcher.registerEvent("message", function (message) {
        $http({url:"http://localhost:8080/message/", method:"GET", params: {messagePart: message}})
            .success(function (data, status, headers, config) {
                $scope.receivedMessage = data.messageBody;
                $scope.receivedMessageTimestamp = data.messageHeader['timestamp'];
            })
            .error(function (data, status, headers, config) {
                alert("MessageService failed " + data);
            });
    });

});
