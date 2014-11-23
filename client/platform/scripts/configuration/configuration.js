///<reference path="../../../typed/angularjs/angular.d.ts"/>
///<reference path="../../../typed/requirejs/require.d.ts"/>
var configuration;
(function (_configuration) {
    var ConfigurationService = (function () {
        function ConfigurationService() {
        }
        ConfigurationService.prototype.init = function (configuration) {
            this.configuration = configuration;
        };
        ConfigurationService.prototype.getCurrentConfiguration = function () {
            return this.configuration;
        };
        return ConfigurationService;
    })();
    _configuration.ConfigurationService = ConfigurationService;
    var ConfigurationServiceProvider = (function () {
        function ConfigurationServiceProvider() {
            this.configurationService = new ConfigurationService();
        }
        ConfigurationServiceProvider.prototype.$get = function () {
            return this.configurationService;
        };
        return ConfigurationServiceProvider;
    })();
    _configuration.ConfigurationServiceProvider = ConfigurationServiceProvider;
})(configuration || (configuration = {}));
define(['angular'], function (angular) {
    angular.module('platform-configuration', []).provider('configurationService', new configuration.ConfigurationServiceProvider());
});
//# sourceMappingURL=configuration.js.map