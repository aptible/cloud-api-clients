import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ActionOutput } from '../models/ActionOutput';
import { ActionRequest } from '../models/ActionRequest';
import { AssetAction } from '../models/AssetAction';
import { AssetBundle } from '../models/AssetBundle';
import { AssetInput } from '../models/AssetInput';
import { AssetOutput } from '../models/AssetOutput';
import { AssetParametersOutput } from '../models/AssetParametersOutput';
import { AssetStatus } from '../models/AssetStatus';
import { ConnectionInput } from '../models/ConnectionInput';
import { ConnectionOutput } from '../models/ConnectionOutput';
import { ConnectionStatus } from '../models/ConnectionStatus';
import { Data } from '../models/Data';
import { EnvironmentInput } from '../models/EnvironmentInput';
import { EnvironmentOutput } from '../models/EnvironmentOutput';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HealthCheckFromWorker } from '../models/HealthCheckFromWorker';
import { LocationInner } from '../models/LocationInner';
import { OperationActionUpdate } from '../models/OperationActionUpdate';
import { OperationAssetUpdate } from '../models/OperationAssetUpdate';
import { OperationFailure } from '../models/OperationFailure';
import { OperationOutput } from '../models/OperationOutput';
import { OperationStatus } from '../models/OperationStatus';
import { OperationTerraformRunUpdate } from '../models/OperationTerraformRunUpdate';
import { OperationType } from '../models/OperationType';
import { OperationUpdate } from '../models/OperationUpdate';
import { OrganizationInput } from '../models/OrganizationInput';
import { OrganizationOutput } from '../models/OrganizationOutput';
import { TextResponse } from '../models/TextResponse';
import { ValidationError } from '../models/ValidationError';

import { ActionsApiRequestFactory, ActionsApiResponseProcessor} from "../apis/ActionsApi";
export class ObservableActionsApi {
    private requestFactory: ActionsApiRequestFactory;
    private responseProcessor: ActionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ActionsApiRequestFactory,
        responseProcessor?: ActionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ActionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ActionsApiResponseProcessor();
    }

    /**
     * Create Action
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param actionRequest 
     */
    public createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(assetId: string, environmentId: string, organizationId: string, actionRequest: ActionRequest, _options?: Configuration): Observable<ActionOutput> {
        const requestContextPromise = this.requestFactory.createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(assetId, environmentId, organizationId, actionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(rsp)));
            }));
    }

    /**
     * Get Action
     * @param assetId 
     * @param environmentId 
     * @param actionId 
     * @param organizationId 
     */
    public getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(assetId: string, environmentId: string, actionId: string, organizationId: string, _options?: Configuration): Observable<ActionOutput> {
        const requestContextPromise = this.requestFactory.getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(assetId, environmentId, actionId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(rsp)));
            }));
    }

}

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class ObservableAssetsApi {
    private requestFactory: AssetsApiRequestFactory;
    private responseProcessor: AssetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetsApiResponseProcessor();
    }

    /**
     * Create Asset
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Observable<AssetOutput> {
        const requestContextPromise = this.requestFactory.createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(environmentId, organizationId, assetInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(rsp)));
            }));
    }

    /**
     * Delete Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Observable<number> {
        const requestContextPromise = this.requestFactory.deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(assetId, environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(rsp)));
            }));
    }

    /**
     * Get Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Observable<AssetOutput> {
        const requestContextPromise = this.requestFactory.getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(assetId, environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(rsp)));
            }));
    }

    /**
     * Update Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(assetId: string, environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Observable<AssetOutput> {
        const requestContextPromise = this.requestFactory.updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(assetId, environmentId, organizationId, assetInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(rsp)));
            }));
    }

}

import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi";
export class ObservableConnectionsApi {
    private requestFactory: ConnectionsApiRequestFactory;
    private responseProcessor: ConnectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectionsApiRequestFactory,
        responseProcessor?: ConnectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConnectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConnectionsApiResponseProcessor();
    }

    /**
     * Create Connection
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param connectionInput 
     */
    public createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(assetId: string, environmentId: string, organizationId: string, connectionInput: ConnectionInput, _options?: Configuration): Observable<ConnectionOutput> {
        const requestContextPromise = this.requestFactory.createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(assetId, environmentId, organizationId, connectionInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(rsp)));
            }));
    }

    /**
     * Delete Connection
     * @param assetId 
     * @param connectionId 
     * @param environmentId 
     * @param organizationId 
     */
    public deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(assetId: string, connectionId: string, environmentId: string, organizationId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(assetId, connectionId, environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(rsp)));
            }));
    }

    /**
     * Get Connection By Id
     * @param assetId 
     * @param environmentId 
     * @param connectionId 
     * @param organizationId 
     */
    public getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(assetId: string, environmentId: string, connectionId: string, organizationId: string, _options?: Configuration): Observable<ConnectionOutput> {
        const requestContextPromise = this.requestFactory.getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(assetId, environmentId, connectionId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(rsp)));
            }));
    }

}

import { EnvironmentsApiRequestFactory, EnvironmentsApiResponseProcessor} from "../apis/EnvironmentsApi";
export class ObservableEnvironmentsApi {
    private requestFactory: EnvironmentsApiRequestFactory;
    private responseProcessor: EnvironmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentsApiRequestFactory,
        responseProcessor?: EnvironmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentsApiResponseProcessor();
    }

    /**
     * Create Environment
     * @param organizationId 
     * @param environmentInput 
     */
    public createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Observable<EnvironmentOutput> {
        const requestContextPromise = this.requestFactory.createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(organizationId, environmentInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(rsp)));
            }));
    }

    /**
     * Delete Environment By Id
     * @param environmentId 
     * @param organizationId 
     */
    public deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(environmentId: string, organizationId: string, _options?: Configuration): Observable<number> {
        const requestContextPromise = this.requestFactory.deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(rsp)));
            }));
    }

    /**
     * Get Assets
     * @param environmentId 
     * @param organizationId 
     */
    public getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(environmentId: string, organizationId: string, _options?: Configuration): Observable<Array<AssetOutput>> {
        const requestContextPromise = this.requestFactory.getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(rsp)));
            }));
    }

    /**
     * Get Environment Allowed Assets
     * @param environmentId 
     * @param organizationId 
     */
    public getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(environmentId: string, organizationId: string, _options?: Configuration): Observable<Array<AssetBundle>> {
        const requestContextPromise = this.requestFactory.getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(rsp)));
            }));
    }

    /**
     * Get Environment By Id
     * @param environmentId 
     * @param organizationId 
     */
    public getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(environmentId: string, organizationId: string, _options?: Configuration): Observable<EnvironmentOutput> {
        const requestContextPromise = this.requestFactory.getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(rsp)));
            }));
    }

    /**
     * Get Environment Connections
     * @param environmentId 
     * @param organizationId 
     */
    public getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet(environmentId: string, organizationId: string, _options?: Configuration): Observable<Array<ConnectionOutput>> {
        const requestContextPromise = this.requestFactory.getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet(environmentId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet(rsp)));
            }));
    }

    /**
     * Get Environments
     * @param organizationId 
     */
    public getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(organizationId: string, _options?: Configuration): Observable<Array<EnvironmentOutput>> {
        const requestContextPromise = this.requestFactory.getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(rsp)));
            }));
    }

    /**
     * Update Environment
     * @param environmentId 
     * @param organizationId 
     * @param environmentInput 
     */
    public updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(environmentId: string, organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Observable<EnvironmentOutput> {
        const requestContextPromise = this.requestFactory.updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(environmentId, organizationId, environmentInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(rsp)));
            }));
    }

}

import { OperationsApiRequestFactory, OperationsApiResponseProcessor} from "../apis/OperationsApi";
export class ObservableOperationsApi {
    private requestFactory: OperationsApiRequestFactory;
    private responseProcessor: OperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OperationsApiRequestFactory,
        responseProcessor?: OperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OperationsApiResponseProcessor();
    }

    /**
     * Get Operations
     * @param organizationId 
     * @param assetId 
     * @param environmentId 
     */
    public getOperationsApiV1OrganizationsOrganizationIdOperationsGet(organizationId: string, assetId?: string, environmentId?: string, _options?: Configuration): Observable<Array<OperationOutput>> {
        const requestContextPromise = this.requestFactory.getOperationsApiV1OrganizationsOrganizationIdOperationsGet(organizationId, assetId, environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOperationsApiV1OrganizationsOrganizationIdOperationsGet(rsp)));
            }));
    }

    /**
     * Get Operations By Operation Id
     * @param operationId 
     * @param organizationId 
     */
    public getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(operationId: string, organizationId: string, _options?: Configuration): Observable<Array<OperationOutput>> {
        const requestContextPromise = this.requestFactory.getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(operationId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(rsp)));
            }));
    }

}

import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class ObservableOrganizationsApi {
    private requestFactory: OrganizationsApiRequestFactory;
    private responseProcessor: OrganizationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationsApiResponseProcessor();
    }

    /**
     * Delete
     * @param organizationId 
     */
    public deleteApiV1OrganizationsOrganizationIdDelete(organizationId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteApiV1OrganizationsOrganizationIdDelete(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApiV1OrganizationsOrganizationIdDelete(rsp)));
            }));
    }

    /**
     * Get Organization By Id
     * @param organizationId 
     */
    public getOrganizationByIdApiV1OrganizationsOrganizationIdGet(organizationId: string, _options?: Configuration): Observable<OrganizationOutput> {
        const requestContextPromise = this.requestFactory.getOrganizationByIdApiV1OrganizationsOrganizationIdGet(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationByIdApiV1OrganizationsOrganizationIdGet(rsp)));
            }));
    }

    /**
     * Get Organizations
     */
    public getOrganizationsApiV1OrganizationsGet(_options?: Configuration): Observable<Array<OrganizationOutput>> {
        const requestContextPromise = this.requestFactory.getOrganizationsApiV1OrganizationsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationsApiV1OrganizationsGet(rsp)));
            }));
    }

    /**
     * Put Organization
     * @param organizationId 
     * @param organizationInput 
     */
    public putOrganizationApiV1OrganizationsOrganizationIdPut(organizationId: string, organizationInput: OrganizationInput, _options?: Configuration): Observable<OrganizationOutput> {
        const requestContextPromise = this.requestFactory.putOrganizationApiV1OrganizationsOrganizationIdPut(organizationId, organizationInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putOrganizationApiV1OrganizationsOrganizationIdPut(rsp)));
            }));
    }

}

import { UtilitiesApiRequestFactory, UtilitiesApiResponseProcessor} from "../apis/UtilitiesApi";
export class ObservableUtilitiesApi {
    private requestFactory: UtilitiesApiRequestFactory;
    private responseProcessor: UtilitiesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UtilitiesApiRequestFactory,
        responseProcessor?: UtilitiesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UtilitiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UtilitiesApiResponseProcessor();
    }

    /**
     * Get Ping
     */
    public getPingApiV1DebugPingGet(_options?: Configuration): Observable<TextResponse> {
        const requestContextPromise = this.requestFactory.getPingApiV1DebugPingGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPingApiV1DebugPingGet(rsp)));
            }));
    }

    /**
     * Get User
     */
    public getUserApiV1DebugUserAuthGet(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getUserApiV1DebugUserAuthGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserApiV1DebugUserAuthGet(rsp)));
            }));
    }

    /**
     * Get User Role
     * @param organizationId 
     */
    public getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(organizationId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(rsp)));
            }));
    }

}

import { WorkerApiRequestFactory, WorkerApiResponseProcessor} from "../apis/WorkerApi";
export class ObservableWorkerApi {
    private requestFactory: WorkerApiRequestFactory;
    private responseProcessor: WorkerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkerApiRequestFactory,
        responseProcessor?: WorkerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkerApiResponseProcessor();
    }

    /**
     * Update Operation
     * @param operationId 
     * @param operationUpdate 
     */
    public updateOperationApiV1OperationsOperationIdPut(operationId: string, operationUpdate: OperationUpdate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateOperationApiV1OperationsOperationIdPut(operationId, operationUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOperationApiV1OperationsOperationIdPut(rsp)));
            }));
    }

    /**
     * Worker Health Check
     * @param healthCheckFromWorker 
     */
    public workerHealthCheckApiV1WorkerHealthCheckPost(healthCheckFromWorker: HealthCheckFromWorker, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.workerHealthCheckApiV1WorkerHealthCheckPost(healthCheckFromWorker, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workerHealthCheckApiV1WorkerHealthCheckPost(rsp)));
            }));
    }

}
