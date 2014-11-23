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
        'platform': '../platform/scripts/platform',
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
        'platform': { exports: 'platform' },
        'platform-dispatcher': { exports: 'platform-dispatcher', dep: ['platform'] },
        'platform-configuration': { exports: 'platform-configuration', dep: ['platform'] },
        'platform-navigation': { exports: 'platform-navigation', dep: ['platform'] },
        'platform-login': { exports: 'platform-login', dep: ['platform'] },
        'platform-register': { exports: 'platform-register', dep: ['platform'] }
    }
});
// startup the application
require(['angular', 'app'], function (angular, document) {
    // bootstrap the document, since we are loading asynchronously
    angular.bootstrap(document, ['app']);
});
//# sourceMappingURL=main.js.map