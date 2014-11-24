///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="register.ts"/>
var navigationController;
(function (navigationController) {
    var Controller = (function () {
        function Controller($scope, $http, $location, configurationService) {
            $scope.doRegister = function (valide) {
                if (valide) {
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
                }
                else {
                    $scope.submitted = true;
                }
            };
        }
        return Controller;
    })();
    navigationController.Controller = Controller;
})(navigationController || (navigationController = {}));
define([], function (angular) {
});
//# sourceMappingURL=controller.js.map