///<reference path="../platform.ts"/>
///<reference path="../dispatcher/dispatcher.ts"/>
///<reference path="../login/login.ts"/>
platform.controller("NavigationCtrl", function ($scope, dispatcher, sessionService) {
    $scope.onLogout = function () {
        sessionService.logout();
    };
    dispatcher.registerEvent(login.Events.LOGIN_SUCCESSED, function (session) {
        angular.element("#navLogin").hide();
        angular.element("#navRegister").hide();
        angular.element("#navLogout").show();
    });
    dispatcher.registerEvent(login.Events.LOGOUT_SUCCESSED, function (session) {
        angular.element("#navLogin").show();
        angular.element("#navRegister").show();
        angular.element("#navLogout").hide();
    });
});
//# sourceMappingURL=navigation.js.map