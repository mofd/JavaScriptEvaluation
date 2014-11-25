///<reference path='../../typed/angularjs/angular.d.ts' />
///<reference path='../../typed/requirejs/require.d.ts' />

require.config({
    paths: {
        'jquery': '../../lib/jquery/dist/jquery.min',
        'angular': '../../lib/angular/angular.min',
        'angular-route': '../../lib/angular-route/angular-route.min',
        'angular-resource': '../../lib/angular-resource/angular-resource.min',

        'app': '../../app/scripts/app',
        'platform': '../../platform/scripts/platform',
        'platformInit': '../../platform/scripts/platformInit'
    },

    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {exports: 'angular-route', deps: ['angular']},
        'angular-resource': {exports: 'angular-resource', deps: ['angular']},

        'app': {exports: 'app'},
        'platform': {exports: 'platform', deps: ['angular', 'angular-route']},
        'platformInit': {exports: 'platformInit', deps: ['platform']}
    }
});

// startup the application
require(['angular', 'app'],

    function (angular:ng.IAngularStatic) {
        // bootstrap the document, since we are loading asynchronously
        angular.bootstrap(document, ['app']);
    }
);
