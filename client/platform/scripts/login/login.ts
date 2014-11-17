///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../dispatcher/dispatcher.ts"/>
///<reference path="../configuration/configuration.ts"/>

"use strict";

module login {

    export class Events {
        static LOGIN_SUCCESSED:string = "login_successed";
        static LOGOUT_SUCCESSED:string = "logout_successed";
    }

    export interface ILoginScope extends ng.IScope {
        benutzer:string;
        passwort:string;

        doLogin():void;
    }

    export interface SessionDTO {
        id:string;
        active:boolean;
        userId:number;
    }

    export interface ISessionServiceInitialisation {
        init(session:SessionDTO):void;

        initWithDispatcher(dispatcher:dispatcher.IDispatcher):void
    }

    export interface ISessionService {
        getCurrentSession():SessionDTO;

        logout():void;
    }

    export class SessionService implements ISessionService, ISessionServiceInitialisation {
        private session:SessionDTO;

        private dispatcher:dispatcher.IDispatcher;

        initWithDispatcher(dispatcher:dispatcher.IDispatcher):void {
            this.dispatcher = dispatcher;
        }

        init(session:login.SessionDTO):void {
            this.session = session;
        }


        getCurrentSession():login.SessionDTO {
            return this.session;
        }

        logout():void {
            this.session = null;
            if(this.dispatcher){
                this.dispatcher.fireEvent(Events.LOGOUT_SUCCESSED);
            }
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
        var loginData = JSON.stringify({benutzer: $scope.benutzer, passwort: $scope.passwort});
        $http.post(configurationService.getCurrentConfiguration().serverUrl + "login/", loginData)
            .success(function (data:login.SessionDTO, status, headers, config) {
                sessionService.init(data);
                $location.url("/welcome");
                dispatcher.fireEvent(login.Events.LOGIN_SUCCESSED, data);
            })
            .error(function (data, status, headers, config) {
                if (status === 401) {
                    alert('Sie sind nicht Authorisiert diese Applikation zu nutzen :|');
                } else if (status === 400) {
                    alert('Ups das Login-Format passt nicht');
                } else {
                    alert('Keine Ahung was passiert ist, aber Login geht nicht');
                }
            })
    };
});
