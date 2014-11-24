///<reference path='../../typed/angularjs/angular.d.ts' />
///<reference path='../../typed/requirejs/require.d.ts' />
require.config({
    baseUrl: '',
    paths: {
        'jquery': '../lib/jquery/dist/jquery.min',
        'angular': '../lib/angular/angular.min',
        'angular-route': '../lib/angular-route/angular-route.min',
        'angular-resource': '../lib/angular-resource/angular-resource.min',
        'app': '../app/scripts/app',
        'platform-dispatcher': '../platform/scripts/dispatcher/dispatcher',
        'platform-configuration': '../platform/scripts/configuration/configuration',
        'platform-navigation': '../platform/scripts/navigation/navigation',
        'platform-login': '../platform/scripts/login/login',
        'platform-register': '../platform/scripts/register/register'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': { exports: 'angular-route', deps: ['angular'] },
        'angular-resource': { exports: 'angular-resource', deps: ['angular'] },
        'app': { exports: 'app' },
        'platform-dispatcher': { exports: 'platform-dispatcher' },
        'platform-configuration': { exports: 'platform-configuration' },
        'platform-navigation': { exports: 'platform-navigation' },
        'platform-login': { exports: 'platform-login' },
        'platform-register': { exports: 'platform-register' }
    }
});
// startup the application
require(['angular', 'app', 'platform-navigation'], function (angular) {
    // bootstrap the document, since we are loading asynchronously
    angular.bootstrap(document, ['app', 'platform-navigation']);
});
//# sourceMappingURL=main.js.map