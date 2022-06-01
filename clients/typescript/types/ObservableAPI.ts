import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AssetInput } from '../models/AssetInput';
import { AssetOutput } from '../models/AssetOutput';
import { AssetVariablesOutput } from '../models/AssetVariablesOutput';
import { EnvironmentInput } from '../models/EnvironmentInput';
import { EnvironmentOutput } from '../models/EnvironmentOutput';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { LocationInner } from '../models/LocationInner';
import { OperationOutput } from '../models/OperationOutput';
import { OperationStatus } from '../models/OperationStatus';
import { OperationType } from '../models/OperationType';
import { OrganizationInput } from '../models/OrganizationInput';
import { OrganizationOutput } from '../models/OrganizationOutput';
import { TextResponse } from '../models/TextResponse';
import { ValidationError } from '../models/ValidationError';

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
     * Get Environment By Id
     * @param environmentId 
     * @param organizationId 
     */
    public getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(environmentId: string, organizationId: string, _options?: Configuration): Observable<Array<EnvironmentOutput>> {
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
