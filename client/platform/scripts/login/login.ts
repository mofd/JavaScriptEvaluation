///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../dispatcher/dispatcher.ts"/>
///<reference path="../configuration/configuration.ts"/>

"use strict";

module login {
    export interface ILoginScope extends ng.IScope {
        benutzer:string;
        passwort:string;

        doLogin():void;
    }

    export interface SessionDTO {
        id:string;
        active:boolean;
    }

    export interface ISessionServiceInitialisation {
        init(session:SessionDTO):void;
    }

    export interface ISessionService {
        getCurrentSession():SessionDTO;
    }

    export class SessionService implements ISessionService, ISessionServiceInitialisation {
        private session:SessionDTO;

        init(session:login.SessionDTO):void {
            this.session = session;
        }


        getCurrentSession():login.SessionDTO {
            return this.session;
        }

    }

    export class SessionServiceProvider implements ng.IServiceProvider {

        private sessionService:ISessionService = new SessionService();

        $get():ISessionService {
            return this.sessionService;
        }
    }
}

platform.provider('sessionService', new login.SessionServiceProvider());

platform.controller("LoginCtrl", function ($scope:login.ILoginScope, $http:ng.IHttpService, dispatcher:dispatcher.IDispatcher,
                                           configurationService:configuration.IConfigurationService, $location,
                                           sessionService:login.ISessionServiceInitialisation) {

    $scope.doLogin = function () {
        var login = JSON.stringify({benutzer: $scope.benutzer, passwort: $scope.passwort});
        $http.post(configurationService.getCurrentConfiguration().serverUrl + "login/", login)
            .success(function (data:login.SessionDTO, status, headers, config) {
                sessionService.init(data);
                $location.url("/welcome");
            })
            .error(function (data, status, headers, config) {
                if (status === 401) {
                    alert('Sie sind nicht Authorisiert diese Applikation zu nutzen :|');
                } else if (status === 400) {
                    alert('Upas das Login-Format passt nicht');
                } else {
                    alert('Keine Ahung was passiert ist, aber Login geht nicht');
                }
            })
    };
});