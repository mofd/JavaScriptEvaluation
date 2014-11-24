///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="register.ts"/>

module navigationController {
    export class Controller {

        constructor($scope:register.IRegisterScope, $http:ng.IHttpService, $location,
                    configurationService:configuration.IConfigurationService){
            $scope.doRegister = function (valide:boolean) {
                if (valide) {
                    var register = JSON.stringify({
                        name: $scope.name, vorname: $scope.vorname, mail: $scope.mail,
                        benutzername: $scope.benutzername, passwort: $scope.passwort
                    });
                    $http.post(configurationService.getCurrentConfiguration().serverUrl + "register/", register)
                        .success(function (data:number, status, headers, config) {
                            $location.url("/login");
                        })
                        .error(function (data, status, headers, config) {
                            console.log("Registrierung ist fehlgeschlagen: " + data)
                            alert('Registrierung ist fehlgeschlagen');
                        })
                } else {
                    $scope.submitted = true;
                }
            };
        }
    }
}

define([], function (angular:ng.IAngularStatic) {

});
