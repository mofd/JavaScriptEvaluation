///<reference path="../../typed/angularjs/angular.d.ts"/>
///<reference path="../../typed/requirejs/require.d.ts"/>

"use strict";

define(['angular', 'angular-route'], function (angular:ng.IAngularStatic) {
    var platform:ng.IModule = angular.module('platform', ['ngRoute']);
    return platform;
});
