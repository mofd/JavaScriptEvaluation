///<reference path="../platform.ts"/>
///<reference path="../../../typed/angularjs/angular.d.ts"/>

module configuration {

    export interface ConfigurationDTO {
        currentTime:string;
        appName:string;
        remoteAddr:string;
        serverName:string;
        serverUrl:string;
    }

    export interface IConfigurationService {
        getCurrentConfiguration():ConfigurationDTO;
    }

    export interface IConfigurationInitialisationService {
        init(configuration:ConfigurationDTO):void;
    }

    export class ConfigurationService implements IConfigurationService, IConfigurationInitialisationService {

        private configuration:ConfigurationDTO;

        init(configuration:ConfigurationDTO):void {
            this.configuration = configuration;
        }

        getCurrentConfiguration():ConfigurationDTO {
            return this.configuration;
        }

    }

    export class ConfigurationServiceProvider implements ng.IServiceProvider {

        private configurationService:IConfigurationService = new ConfigurationService();

        $get():IConfigurationService {
            return this.configurationService;
        }
    }

}

platform.provider('configurationService', new configuration.ConfigurationServiceProvider());
