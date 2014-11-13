///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../dispatcher/dispatcher.ts"/>
///<reference path="../configuration/configuration.ts"/>
"use strict";
var login;
(function (login) {
    var SessionService = (function () {
        function SessionService() {
        }
        SessionService.prototype.init = function (session) {
            this.session = session;
        };
        SessionService.prototype.getCurrentSession = function () {
            return this.session;
        };
        return SessionService;
    })();
    login.SessionService = SessionService;
    var SessionServiceProvider = (function () {
        function SessionServiceProvider() {
            this.sessionService = new SessionService();
        }
        SessionServiceProvider.prototype.$get = function () {
            return this.sessionService;
        };
        return SessionServiceProvider;
    })();
    login.SessionServiceProvider = SessionServiceProvider;
})(login || (login = {}));
platform.provider('sessionService', new login.SessionServiceProvider());
platform.controller("LoginCtrl", function ($scope, $http, dispatcher, configurationService, $location, sessionService) {
    $scope.doLogin = function () {
        var login = JSON.stringify({ benutzer: $scope.benutzer, passwort: $scope.passwort });
        $http.post(configurationService.getCurrentConfiguration().serverUrl + "login/", login).success(function (data, status, headers, config) {
            sessionService.init(data);
            $location.url("/welcome");
        }).error(function (data, status, headers, config) {
            if (status === 401) {
                alert('Sie sind nicht Authorisiert diese Applikation zu nutzen :|');
            }
            else if (status === 400) {
                alert('Upas das Login-Format passt nicht');
            }
            else {
                alert('Keine Ahung was passiert ist, aber Login geht nicht');
            }
        });
    };
});
//# sourceMappingURL=login.js.map