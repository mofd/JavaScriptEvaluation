///<reference path="../platform.ts"/>
///<reference path="../dispatcher/dispatcher.ts"/>
///<reference path="../login/login.ts"/>

module navigation {
    export function loggedIn() {
        angular.element("#navLogin").hide();
        angular.element("#navRegister").hide();
        angular.element("#navLogout").show();
    }

    export function loggedOut() {
        angular.element("#navLogin").show();
        angular.element("#navRegister").show();
        angular.element("#navLogout").hide();
    }
}

platform.controller("NavigationCtrl", function($scope, dispatcher:dispatcher.IDispatcher, sessionService:login.ISessionService){

    $scope.onLogout = function(){
        sessionService.logout();
    }

    dispatcher.registerEvent(login.Events.LOGIN_SUCCESSED, function(session:login.SessionDTO){
        navigation.loggedIn();
    });

    dispatcher.registerEvent(login.Events.LOGOUT_SUCCESSED, function(session:login.SessionDTO){
        navigation.loggedOut();
    });

    if(sessionService.getCurrentSession()){
        navigation.loggedIn();
    } else {
        navigation.loggedOut();
    }
});
