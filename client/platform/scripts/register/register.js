///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../configuration/configuration.ts"/>
"use strict";
platform.controller("RegisterCtrl", function ($scope, $http, $location, configurationService) {
    $scope.doRegister = function () {
        var register = JSON.stringify({
            name: $scope.name,
            vorname: $scope.vorname,
            mail: $scope.mail,
            benutzername: $scope.benutzername,
            passwort: $scope.passwort
        });
        $http.post(configurationService.getCurrentConfiguration().serverUrl + "register/", register).success(function (data, status, headers, config) {
            $location.url("/login");
        }).error(function (data, status, headers, config) {
            console.log("Registrierung ist fehlgeschlagen: " + data);
            alert('Registrierung ist fehlgeschlagen');
        });
    };
});
//# sourceMappingURL=register.js.map