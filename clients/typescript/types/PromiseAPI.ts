import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActionOutput } from '../models/ActionOutput';
import { ActionRequest } from '../models/ActionRequest';
import { ActionResponse } from '../models/ActionResponse';
import { AssetAction } from '../models/AssetAction';
import { AssetBundle } from '../models/AssetBundle';
import { AssetInput } from '../models/AssetInput';
import { AssetOutput } from '../models/AssetOutput';
import { AssetParametersOutput } from '../models/AssetParametersOutput';
import { AssetStatus } from '../models/AssetStatus';
import { AssetTerraformOutput } from '../models/AssetTerraformOutput';
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
import { ObservableActionsApi } from './ObservableAPI';

import { ActionsApiRequestFactory, ActionsApiResponseProcessor} from "../apis/ActionsApi";
export class PromiseActionsApi {
    private api: ObservableActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ActionsApiRequestFactory,
        responseProcessor?: ActionsApiResponseProcessor
    ) {
        this.api = new ObservableActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Action Create
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param actionRequest 
     */
    public actionCreate(assetId: string, environmentId: string, organizationId: string, actionRequest: ActionRequest, _options?: Configuration): Promise<ActionResponse> {
        const result = this.api.actionCreate(assetId, environmentId, organizationId, actionRequest, _options);
        return result.toPromise();
    }

    /**
     * Action Get
     * @param assetId 
     * @param environmentId 
     * @param actionId 
     * @param organizationId 
     */
    public actionGet(assetId: string, environmentId: string, actionId: string, organizationId: string, _options?: Configuration): Promise<ActionResponse> {
        const result = this.api.actionGet(assetId, environmentId, actionId, organizationId, _options);
        return result.toPromise();
    }


}



import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asset Create
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public assetCreate(environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Promise<AssetOutput> {
        const result = this.api.assetCreate(environmentId, organizationId, assetInput, _options);
        return result.toPromise();
    }

    /**
     * Asset Delete
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public assetDelete(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<AssetOutput> {
        const result = this.api.assetDelete(assetId, environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Asset Get
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public assetGet(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<AssetOutput> {
        const result = this.api.assetGet(assetId, environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Asset Update
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public assetUpdate(assetId: string, environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Promise<AssetOutput> {
        const result = this.api.assetUpdate(assetId, environmentId, organizationId, assetInput, _options);
        return result.toPromise();
    }


}



import { ObservableConnectionsApi } from './ObservableAPI';

import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi";
export class PromiseConnectionsApi {
    private api: ObservableConnectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectionsApiRequestFactory,
        responseProcessor?: ConnectionsApiResponseProcessor
    ) {
        this.api = new ObservableConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connection Create
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param connectionInput 
     */
    public connectionCreate(assetId: string, environmentId: string, organizationId: string, connectionInput: ConnectionInput, _options?: Configuration): Promise<ConnectionOutput> {
        const result = this.api.connectionCreate(assetId, environmentId, organizationId, connectionInput, _options);
        return result.toPromise();
    }

    /**
     * Connection Delete
     * @param assetId 
     * @param connectionId 
     * @param environmentId 
     * @param organizationId 
     */
    public connectionDelete(assetId: string, connectionId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.connectionDelete(assetId, connectionId, environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Connection Get
     * @param assetId 
     * @param environmentId 
     * @param connectionId 
     * @param organizationId 
     */
    public connectionGet(assetId: string, environmentId: string, connectionId: string, organizationId: string, _options?: Configuration): Promise<ConnectionOutput> {
        const result = this.api.connectionGet(assetId, environmentId, connectionId, organizationId, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Healthcheck
     */
    public getHealthcheck(_options?: Configuration): Promise<TextResponse> {
        const result = this.api.getHealthcheck(_options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentsApi } from './ObservableAPI';

import { EnvironmentsApiRequestFactory, EnvironmentsApiResponseProcessor} from "../apis/EnvironmentsApi";
export class PromiseEnvironmentsApi {
    private api: ObservableEnvironmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentsApiRequestFactory,
        responseProcessor?: EnvironmentsApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Environment Create
     * @param organizationId 
     * @param environmentInput 
     */
    public environmentCreate(organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Promise<EnvironmentOutput> {
        const result = this.api.environmentCreate(organizationId, environmentInput, _options);
        return result.toPromise();
    }

    /**
     * Environment Delete
     * @param environmentId 
     * @param organizationId 
     */
    public environmentDelete(environmentId: string, organizationId: string, _options?: Configuration): Promise<EnvironmentOutput> {
        const result = this.api.environmentDelete(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Environment Get
     * @param environmentId 
     * @param organizationId 
     */
    public environmentGet(environmentId: string, organizationId: string, _options?: Configuration): Promise<EnvironmentOutput> {
        const result = this.api.environmentGet(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Environment Get Allowed Asset Bundles
     * @param environmentId 
     * @param organizationId 
     */
    public environmentGetAllowedAssetBundles(environmentId: string, organizationId: string, _options?: Configuration): Promise<Array<AssetBundle>> {
        const result = this.api.environmentGetAllowedAssetBundles(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Environment Get Assets
     * @param environmentId 
     * @param organizationId 
     */
    public environmentGetAssets(environmentId: string, organizationId: string, _options?: Configuration): Promise<Array<AssetOutput>> {
        const result = this.api.environmentGetAssets(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Environment Get Connections
     * @param environmentId 
     * @param organizationId 
     */
    public environmentGetConnections(environmentId: string, organizationId: string, _options?: Configuration): Promise<Array<ConnectionOutput>> {
        const result = this.api.environmentGetConnections(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Environment Update
     * @param environmentId 
     * @param organizationId 
     * @param environmentInput 
     */
    public environmentUpdate(environmentId: string, organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Promise<EnvironmentOutput> {
        const result = this.api.environmentUpdate(environmentId, organizationId, environmentInput, _options);
        return result.toPromise();
    }


}



import { ObservableOperationsApi } from './ObservableAPI';

import { OperationsApiRequestFactory, OperationsApiResponseProcessor} from "../apis/OperationsApi";
export class PromiseOperationsApi {
    private api: ObservableOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OperationsApiRequestFactory,
        responseProcessor?: OperationsApiResponseProcessor
    ) {
        this.api = new ObservableOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Operation Get
     * @param operationId 
     * @param organizationId 
     */
    public operationGet(operationId: string, organizationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.operationGet(operationId, organizationId, _options);
        return result.toPromise();
    }


}



import { ObservableOrganizationsApi } from './ObservableAPI';

import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class PromiseOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Organization Delete
     * @param organizationId 
     */
    public organizationDelete(organizationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.organizationDelete(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Organization Get
     * @param organizationId 
     */
    public organizationGet(organizationId: string, _options?: Configuration): Promise<OrganizationOutput> {
        const result = this.api.organizationGet(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Organization Get Environments
     * @param organizationId 
     */
    public organizationGetEnvironments(organizationId: string, _options?: Configuration): Promise<Array<EnvironmentOutput>> {
        const result = this.api.organizationGetEnvironments(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Organization Get Operations
     * @param organizationId 
     * @param assetId 
     * @param environmentId 
     */
    public organizationGetOperations(organizationId: string, assetId?: string, environmentId?: string, _options?: Configuration): Promise<any> {
        const result = this.api.organizationGetOperations(organizationId, assetId, environmentId, _options);
        return result.toPromise();
    }

    /**
     * Organization List
     */
    public organizationList(_options?: Configuration): Promise<Array<OrganizationOutput>> {
        const result = this.api.organizationList(_options);
        return result.toPromise();
    }

    /**
     * Organization Update
     * @param organizationId 
     * @param organizationInput 
     */
    public organizationUpdate(organizationId: string, organizationInput: OrganizationInput, _options?: Configuration): Promise<OrganizationOutput> {
        const result = this.api.organizationUpdate(organizationId, organizationInput, _options);
        return result.toPromise();
    }


}



import { ObservableUtilitiesApi } from './ObservableAPI';

import { UtilitiesApiRequestFactory, UtilitiesApiResponseProcessor} from "../apis/UtilitiesApi";
export class PromiseUtilitiesApi {
    private api: ObservableUtilitiesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UtilitiesApiRequestFactory,
        responseProcessor?: UtilitiesApiResponseProcessor
    ) {
        this.api = new ObservableUtilitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get User
     */
    public getUser(_options?: Configuration): Promise<any> {
        const result = this.api.getUser(_options);
        return result.toPromise();
    }

    /**
     * Get User Role
     * @param organizationId 
     */
    public getUserRole(organizationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.getUserRole(organizationId, _options);
        return result.toPromise();
    }


}



import { ObservableWorkerApi } from './ObservableAPI';

import { WorkerApiRequestFactory, WorkerApiResponseProcessor} from "../apis/WorkerApi";
export class PromiseWorkerApi {
    private api: ObservableWorkerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkerApiRequestFactory,
        responseProcessor?: WorkerApiResponseProcessor
    ) {
        this.api = new ObservableWorkerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Operation Update
     * @param operationId 
     * @param operationUpdate 
     */
    public operationUpdate(operationId: string, operationUpdate: OperationUpdate, _options?: Configuration): Promise<any> {
        const result = this.api.operationUpdate(operationId, operationUpdate, _options);
        return result.toPromise();
    }

    /**
     * Worker Health Check
     * @param healthCheckFromWorker 
     */
    public workerHealthCheck(healthCheckFromWorker: HealthCheckFromWorker, _options?: Configuration): Promise<any> {
        const result = this.api.workerHealthCheck(healthCheckFromWorker, _options);
        return result.toPromise();
    }


}



