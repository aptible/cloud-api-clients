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

import { ObservableActionsApi } from "./ObservableAPI";
import { ActionsApiRequestFactory, ActionsApiResponseProcessor} from "../apis/ActionsApi";

export interface ActionsApiActionCreateRequest {
    /**
     * 
     * @type string
     * @memberof ActionsApiactionCreate
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof ActionsApiactionCreate
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof ActionsApiactionCreate
     */
    organizationId: string
    /**
     * 
     * @type ActionRequest
     * @memberof ActionsApiactionCreate
     */
    actionRequest: ActionRequest
}

export interface ActionsApiActionGetRequest {
    /**
     * 
     * @type string
     * @memberof ActionsApiactionGet
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof ActionsApiactionGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof ActionsApiactionGet
     */
    actionId: string
    /**
     * 
     * @type string
     * @memberof ActionsApiactionGet
     */
    organizationId: string
}

export class ObjectActionsApi {
    private api: ObservableActionsApi

    public constructor(configuration: Configuration, requestFactory?: ActionsApiRequestFactory, responseProcessor?: ActionsApiResponseProcessor) {
        this.api = new ObservableActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Action Create
     * @param param the request object
     */
    public actionCreate(param: ActionsApiActionCreateRequest, options?: Configuration): Promise<ActionResponse> {
        return this.api.actionCreate(param.assetId, param.environmentId, param.organizationId, param.actionRequest,  options).toPromise();
    }

    /**
     * Action Get
     * @param param the request object
     */
    public actionGet(param: ActionsApiActionGetRequest, options?: Configuration): Promise<ActionResponse> {
        return this.api.actionGet(param.assetId, param.environmentId, param.actionId, param.organizationId,  options).toPromise();
    }

}

import { ObservableAssetsApi } from "./ObservableAPI";
import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";

export interface AssetsApiAssetCreateRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApiassetCreate
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiassetCreate
     */
    organizationId: string
    /**
     * 
     * @type AssetInput
     * @memberof AssetsApiassetCreate
     */
    assetInput: AssetInput
}

export interface AssetsApiAssetDeleteRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApiassetDelete
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiassetDelete
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiassetDelete
     */
    organizationId: string
}

export interface AssetsApiAssetGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApiassetGet
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiassetGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiassetGet
     */
    organizationId: string
}

export interface AssetsApiAssetUpdateRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApiassetUpdate
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiassetUpdate
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiassetUpdate
     */
    organizationId: string
    /**
     * 
     * @type AssetInput
     * @memberof AssetsApiassetUpdate
     */
    assetInput: AssetInput
}

export class ObjectAssetsApi {
    private api: ObservableAssetsApi

    public constructor(configuration: Configuration, requestFactory?: AssetsApiRequestFactory, responseProcessor?: AssetsApiResponseProcessor) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asset Create
     * @param param the request object
     */
    public assetCreate(param: AssetsApiAssetCreateRequest, options?: Configuration): Promise<AssetOutput> {
        return this.api.assetCreate(param.environmentId, param.organizationId, param.assetInput,  options).toPromise();
    }

    /**
     * Asset Delete
     * @param param the request object
     */
    public assetDelete(param: AssetsApiAssetDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.assetDelete(param.assetId, param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Asset Get
     * @param param the request object
     */
    public assetGet(param: AssetsApiAssetGetRequest, options?: Configuration): Promise<AssetOutput> {
        return this.api.assetGet(param.assetId, param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Asset Update
     * @param param the request object
     */
    public assetUpdate(param: AssetsApiAssetUpdateRequest, options?: Configuration): Promise<AssetOutput> {
        return this.api.assetUpdate(param.assetId, param.environmentId, param.organizationId, param.assetInput,  options).toPromise();
    }

}

import { ObservableConnectionsApi } from "./ObservableAPI";
import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi";

export interface ConnectionsApiConnectionCreateRequest {
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionCreate
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionCreate
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionCreate
     */
    organizationId: string
    /**
     * 
     * @type ConnectionInput
     * @memberof ConnectionsApiconnectionCreate
     */
    connectionInput: ConnectionInput
}

export interface ConnectionsApiConnectionDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionDelete
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionDelete
     */
    connectionId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionDelete
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionDelete
     */
    organizationId: string
}

export interface ConnectionsApiConnectionGetRequest {
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionGet
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionGet
     */
    connectionId: string
    /**
     * 
     * @type string
     * @memberof ConnectionsApiconnectionGet
     */
    organizationId: string
}

export class ObjectConnectionsApi {
    private api: ObservableConnectionsApi

    public constructor(configuration: Configuration, requestFactory?: ConnectionsApiRequestFactory, responseProcessor?: ConnectionsApiResponseProcessor) {
        this.api = new ObservableConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connection Create
     * @param param the request object
     */
    public connectionCreate(param: ConnectionsApiConnectionCreateRequest, options?: Configuration): Promise<ConnectionOutput> {
        return this.api.connectionCreate(param.assetId, param.environmentId, param.organizationId, param.connectionInput,  options).toPromise();
    }

    /**
     * Connection Delete
     * @param param the request object
     */
    public connectionDelete(param: ConnectionsApiConnectionDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.connectionDelete(param.assetId, param.connectionId, param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Connection Get
     * @param param the request object
     */
    public connectionGet(param: ConnectionsApiConnectionGetRequest, options?: Configuration): Promise<ConnectionOutput> {
        return this.api.connectionGet(param.assetId, param.environmentId, param.connectionId, param.organizationId,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetHealthcheckRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Healthcheck
     * @param param the request object
     */
    public getHealthcheck(param: DefaultApiGetHealthcheckRequest = {}, options?: Configuration): Promise<TextResponse> {
        return this.api.getHealthcheck( options).toPromise();
    }

}

import { ObservableEnvironmentsApi } from "./ObservableAPI";
import { EnvironmentsApiRequestFactory, EnvironmentsApiResponseProcessor} from "../apis/EnvironmentsApi";

export interface EnvironmentsApiEnvironmentCreateRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentCreate
     */
    organizationId: string
    /**
     * 
     * @type EnvironmentInput
     * @memberof EnvironmentsApienvironmentCreate
     */
    environmentInput: EnvironmentInput
}

export interface EnvironmentsApiEnvironmentDeleteRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentDelete
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentDelete
     */
    organizationId: string
}

export interface EnvironmentsApiEnvironmentGetRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGet
     */
    organizationId: string
}

export interface EnvironmentsApiEnvironmentGetAllowedAssetBundlesRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGetAllowedAssetBundles
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGetAllowedAssetBundles
     */
    organizationId: string
}

export interface EnvironmentsApiEnvironmentGetAssetsRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGetAssets
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGetAssets
     */
    organizationId: string
}

export interface EnvironmentsApiEnvironmentGetConnectionsRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGetConnections
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentGetConnections
     */
    organizationId: string
}

export interface EnvironmentsApiEnvironmentUpdateRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentUpdate
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApienvironmentUpdate
     */
    organizationId: string
    /**
     * 
     * @type EnvironmentInput
     * @memberof EnvironmentsApienvironmentUpdate
     */
    environmentInput: EnvironmentInput
}

export class ObjectEnvironmentsApi {
    private api: ObservableEnvironmentsApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentsApiRequestFactory, responseProcessor?: EnvironmentsApiResponseProcessor) {
        this.api = new ObservableEnvironmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Environment Create
     * @param param the request object
     */
    public environmentCreate(param: EnvironmentsApiEnvironmentCreateRequest, options?: Configuration): Promise<EnvironmentOutput> {
        return this.api.environmentCreate(param.organizationId, param.environmentInput,  options).toPromise();
    }

    /**
     * Environment Delete
     * @param param the request object
     */
    public environmentDelete(param: EnvironmentsApiEnvironmentDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.environmentDelete(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Environment Get
     * @param param the request object
     */
    public environmentGet(param: EnvironmentsApiEnvironmentGetRequest, options?: Configuration): Promise<EnvironmentOutput> {
        return this.api.environmentGet(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Environment Get Allowed Asset Bundles
     * @param param the request object
     */
    public environmentGetAllowedAssetBundles(param: EnvironmentsApiEnvironmentGetAllowedAssetBundlesRequest, options?: Configuration): Promise<Array<AssetBundle>> {
        return this.api.environmentGetAllowedAssetBundles(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Environment Get Assets
     * @param param the request object
     */
    public environmentGetAssets(param: EnvironmentsApiEnvironmentGetAssetsRequest, options?: Configuration): Promise<Array<AssetOutput>> {
        return this.api.environmentGetAssets(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Environment Get Connections
     * @param param the request object
     */
    public environmentGetConnections(param: EnvironmentsApiEnvironmentGetConnectionsRequest, options?: Configuration): Promise<Array<ConnectionOutput>> {
        return this.api.environmentGetConnections(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Environment Update
     * @param param the request object
     */
    public environmentUpdate(param: EnvironmentsApiEnvironmentUpdateRequest, options?: Configuration): Promise<EnvironmentOutput> {
        return this.api.environmentUpdate(param.environmentId, param.organizationId, param.environmentInput,  options).toPromise();
    }

}

import { ObservableOperationsApi } from "./ObservableAPI";
import { OperationsApiRequestFactory, OperationsApiResponseProcessor} from "../apis/OperationsApi";

export interface OperationsApiOperationGetRequest {
    /**
     * 
     * @type string
     * @memberof OperationsApioperationGet
     */
    operationId: string
    /**
     * 
     * @type string
     * @memberof OperationsApioperationGet
     */
    organizationId: string
}

export interface OperationsApiOperationUpdateRequest {
    /**
     * 
     * @type string
     * @memberof OperationsApioperationUpdate
     */
    operationId: string
    /**
     * 
     * @type OperationUpdate
     * @memberof OperationsApioperationUpdate
     */
    operationUpdate: OperationUpdate
}

export class ObjectOperationsApi {
    private api: ObservableOperationsApi

    public constructor(configuration: Configuration, requestFactory?: OperationsApiRequestFactory, responseProcessor?: OperationsApiResponseProcessor) {
        this.api = new ObservableOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Operation Get
     * @param param the request object
     */
    public operationGet(param: OperationsApiOperationGetRequest, options?: Configuration): Promise<OperationOutput> {
        return this.api.operationGet(param.operationId, param.organizationId,  options).toPromise();
    }

    /**
     * Operation Update
     * @param param the request object
     */
    public operationUpdate(param: OperationsApiOperationUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.operationUpdate(param.operationId, param.operationUpdate,  options).toPromise();
    }

}

import { ObservableOrganizationsApi } from "./ObservableAPI";
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";

export interface OrganizationsApiOrganizationDeleteRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApiorganizationDelete
     */
    organizationId: string
}

export interface OrganizationsApiOrganizationGetRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApiorganizationGet
     */
    organizationId: string
}

export interface OrganizationsApiOrganizationGetEnvironmentsRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApiorganizationGetEnvironments
     */
    organizationId: string
}

export interface OrganizationsApiOrganizationGetOperationsRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApiorganizationGetOperations
     */
    organizationId: string
    /**
     * 
     * @type string
     * @memberof OrganizationsApiorganizationGetOperations
     */
    assetId?: string
    /**
     * 
     * @type string
     * @memberof OrganizationsApiorganizationGetOperations
     */
    environmentId?: string
}

export interface OrganizationsApiOrganizationListRequest {
}

export interface OrganizationsApiOrganizationUpdateRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApiorganizationUpdate
     */
    organizationId: string
    /**
     * 
     * @type OrganizationInput
     * @memberof OrganizationsApiorganizationUpdate
     */
    organizationInput: OrganizationInput
}

export class ObjectOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Organization Delete
     * @param param the request object
     */
    public organizationDelete(param: OrganizationsApiOrganizationDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.organizationDelete(param.organizationId,  options).toPromise();
    }

    /**
     * Organization Get
     * @param param the request object
     */
    public organizationGet(param: OrganizationsApiOrganizationGetRequest, options?: Configuration): Promise<OrganizationOutput> {
        return this.api.organizationGet(param.organizationId,  options).toPromise();
    }

    /**
     * Organization Get Environments
     * @param param the request object
     */
    public organizationGetEnvironments(param: OrganizationsApiOrganizationGetEnvironmentsRequest, options?: Configuration): Promise<Array<EnvironmentOutput>> {
        return this.api.organizationGetEnvironments(param.organizationId,  options).toPromise();
    }

    /**
     * Organization Get Operations
     * @param param the request object
     */
    public organizationGetOperations(param: OrganizationsApiOrganizationGetOperationsRequest, options?: Configuration): Promise<Array<OperationOutput>> {
        return this.api.organizationGetOperations(param.organizationId, param.assetId, param.environmentId,  options).toPromise();
    }

    /**
     * Organization List
     * @param param the request object
     */
    public organizationList(param: OrganizationsApiOrganizationListRequest = {}, options?: Configuration): Promise<Array<OrganizationOutput>> {
        return this.api.organizationList( options).toPromise();
    }

    /**
     * Organization Update
     * @param param the request object
     */
    public organizationUpdate(param: OrganizationsApiOrganizationUpdateRequest, options?: Configuration): Promise<OrganizationOutput> {
        return this.api.organizationUpdate(param.organizationId, param.organizationInput,  options).toPromise();
    }

}

import { ObservableUtilitiesApi } from "./ObservableAPI";
import { UtilitiesApiRequestFactory, UtilitiesApiResponseProcessor} from "../apis/UtilitiesApi";

export interface UtilitiesApiGetUserRequest {
}

export interface UtilitiesApiGetUserRoleRequest {
    /**
     * 
     * @type string
     * @memberof UtilitiesApigetUserRole
     */
    organizationId: string
}

export class ObjectUtilitiesApi {
    private api: ObservableUtilitiesApi

    public constructor(configuration: Configuration, requestFactory?: UtilitiesApiRequestFactory, responseProcessor?: UtilitiesApiResponseProcessor) {
        this.api = new ObservableUtilitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get User
     * @param param the request object
     */
    public getUser(param: UtilitiesApiGetUserRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getUser( options).toPromise();
    }

    /**
     * Get User Role
     * @param param the request object
     */
    public getUserRole(param: UtilitiesApiGetUserRoleRequest, options?: Configuration): Promise<any> {
        return this.api.getUserRole(param.organizationId,  options).toPromise();
    }

}

import { ObservableWorkerApi } from "./ObservableAPI";
import { WorkerApiRequestFactory, WorkerApiResponseProcessor} from "../apis/WorkerApi";

export interface WorkerApiWorkerHealthCheckRequest {
    /**
     * 
     * @type HealthCheckFromWorker
     * @memberof WorkerApiworkerHealthCheck
     */
    healthCheckFromWorker: HealthCheckFromWorker
}

export class ObjectWorkerApi {
    private api: ObservableWorkerApi

    public constructor(configuration: Configuration, requestFactory?: WorkerApiRequestFactory, responseProcessor?: WorkerApiResponseProcessor) {
        this.api = new ObservableWorkerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Worker Health Check
     * @param param the request object
     */
    public workerHealthCheck(param: WorkerApiWorkerHealthCheckRequest, options?: Configuration): Promise<any> {
        return this.api.workerHealthCheck(param.healthCheckFromWorker,  options).toPromise();
    }

}
