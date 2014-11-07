/**
 * Created by steuer.konstantin on 07.11.2014.
 */
var moduleX = angular.module('moduleX', ['platform']);

moduleX.controller("ModuleXCtrl", function ($scope, dispatcher) {

    //$scope.receivedMessage = "";

    dispatcher.registerEvent("x", function (message){
        var info = "(x) Message : " + message;
        console.log(info);
        window.confirm(info);
        $scope.receivedMessage = message;
    });

    $scope.fireEvent = function(){
        dispatcher.fireEvent($scope.eventName, $scope.message);
    }

});
