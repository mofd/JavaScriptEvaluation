/**
 * Created by steuer.konstantin on 07.11.2014.
 */
var moduleY = angular.module('moduleY', ['platform']);

moduleY.controller("ModuleYCtrl", function ($scope, dispatcher) {

    //$scope.receivedMessage = "";

    dispatcher.registerEvent("y", function (message){
        var info = "(y) Message : " + message;
        console.log(info);
        //window.confirm(info);
        $scope.receivedMessage = message;
    });

    $scope.fireEvent = function(){
        dispatcher.fireEvent($scope.eventName, $scope.message);
    }

});
