///<reference path="../platform.ts"/>
///<reference path="../dispatcher/dispatcher.ts"/>
///<reference path="../login/login.ts"/>
var navigation;
(function (navigation) {
    function loggedIn() {
        angular.element("#navLogin").hide();
        angular.element("#navRegister").hide();
        angular.element("#navLogout").show();
    }
    navigation.loggedIn = loggedIn;
    function loggedOut() {
        angular.element("#navLogin").show();
        angular.element("#navRegister").show();
        angular.element("#navLogout").hide();
    }
    navigation.loggedOut = loggedOut;
})(navigation || (navigation = {}));
define(['angular', 'platform-dispatcher', 'platform-login'], function (angular) {
    angular.module('platform-navigation', ['platform-dispatcher', 'platform-login']).controller("NavigationCtrl", function ($scope, dispatcher, sessionService) {
        $scope.onLogout = function () {
            sessionService.logout();
        };
        dispatcher.registerEvent(login.Events.LOGIN_SUCCESSED, function (session) {
            navigation.loggedIn();
        });
        dispatcher.registerEvent(login.Events.LOGOUT_SUCCESSED, function (session) {
            navigation.loggedOut();
        });
        if (sessionService.getCurrentSession()) {
            navigation.loggedIn();
        }
        else {
            navigation.loggedOut();
        }
    });
});
//# sourceMappingURL=navigation.js.map