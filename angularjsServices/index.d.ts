export interface IFeatureFlagConfiguration {
    ServiceEndpoint: string;
}

export declare class FeatureFlagAngular1Module {
    private static _moduleName;
    static registerModule(): any;
    static readonly FlightingNg1ModuleName: string;
}

import { IFeatureFlagConfiguration } from "../interface/IFeatureFlagConfiguration";
export declare class FeatureFlagService {
    private $http;
    context: any;
    static $inject: string[];
    private endpoint;
    constructor($http: angular.IHttpService, featureFlagContext: IFeatureFlagConfiguration, context: any);
    getFeatureFlags(appName: any, env: any, features: String[], params?: {}): angular.IPromise<any>;
}
export declare class FeatureFlagServiceProvider implements angular.IServiceProvider {
    private _featureFlagConfig;
    private _context;
    constructor();
    $get($http: angular.IHttpService): FeatureFlagService;
    configure(featureFlagConfig: IFeatureFlagConfiguration, context: any): void;
}
