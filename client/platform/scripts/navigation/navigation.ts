///<reference path="../platform.ts"/>
///<reference path="../dispatcher/dispatcher.ts"/>
///<reference path="../login/login.ts"/>

module navigation {
    export function loggedIn():void {
        angular.element("#navLogin").hide();
        angular.element("#navRegister").hide();
        angular.element("#navLogout").show();
    }

    export function loggedOut():void {
        angular.element("#navLogin").show();
        angular.element("#navRegister").show();
        angular.element("#navLogout").hide();
    }

    export class NavigationCtrl {
        constructor($scope, dispatcher:dispatcher.IDispatcher, sessionService:login.ISessionService) {

            $scope.onLogout = function ():void {
                sessionService.logout();
            }

            dispatcher.registerEvent(login.Events.LOGIN_SUCCESSED, function (session:login.SessionDTO) {
                navigation.loggedIn();
            });

            dispatcher.registerEvent(login.Events.LOGOUT_SUCCESSED, function (session:login.SessionDTO) {
                navigation.loggedOut();
            });

            if (sessionService.getCurrentSession()) {
                navigation.loggedIn();
            } else {
                navigation.loggedOut();
            }
        }
    }
}

define(['platform', /*'../../../platform/scripts/dispatcher/dispatcher', '../../../platform/scripts/login/login', '../../../platform/scripts/register/register'*/],
    function (platform:ng.IModule) {
        platform.controller("NavigationCtrl", navigation.NavigationCtrl);
    });
