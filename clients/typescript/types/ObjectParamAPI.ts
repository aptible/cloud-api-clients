import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AssetBundle } from '../models/AssetBundle';
import { AssetInput } from '../models/AssetInput';
import { AssetOutput } from '../models/AssetOutput';
import { AssetParametersOutput } from '../models/AssetParametersOutput';
import { EnvironmentInput } from '../models/EnvironmentInput';
import { EnvironmentOutput } from '../models/EnvironmentOutput';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HealthCheckFromWorker } from '../models/HealthCheckFromWorker';
import { LocationInner } from '../models/LocationInner';
import { OperationOutput } from '../models/OperationOutput';
import { OperationStatus } from '../models/OperationStatus';
import { OperationType } from '../models/OperationType';
import { OrganizationInput } from '../models/OrganizationInput';
import { OrganizationOutput } from '../models/OrganizationOutput';
import { TextResponse } from '../models/TextResponse';
import { ValidationError } from '../models/ValidationError';

import { ObservableAssetsApi } from "./ObservableAPI";
import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";

export interface AssetsApiCreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPostRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApicreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApicreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost
     */
    organizationId: string
    /**
     * 
     * @type AssetInput
     * @memberof AssetsApicreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost
     */
    assetInput: AssetInput
}

export interface AssetsApiDeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApideleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof AssetsApideleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApideleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete
     */
    organizationId: string
}

export interface AssetsApiGetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApigetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof AssetsApigetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApigetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet
     */
    organizationId: string
}

export interface AssetsApiGetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApigetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApigetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet
     */
    organizationId: string
}

export interface AssetsApiUpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPutRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApiupdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut
     */
    assetId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiupdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof AssetsApiupdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut
     */
    organizationId: string
    /**
     * 
     * @type AssetInput
     * @memberof AssetsApiupdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut
     */
    assetInput: AssetInput
}

export class ObjectAssetsApi {
    private api: ObservableAssetsApi

    public constructor(configuration: Configuration, requestFactory?: AssetsApiRequestFactory, responseProcessor?: AssetsApiResponseProcessor) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Asset
     * @param param the request object
     */
    public createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(param: AssetsApiCreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPostRequest, options?: Configuration): Promise<AssetOutput> {
        return this.api.createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(param.environmentId, param.organizationId, param.assetInput,  options).toPromise();
    }

    /**
     * Delete Asset By Id
     * @param param the request object
     */
    public deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(param: AssetsApiDeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDeleteRequest, options?: Configuration): Promise<number> {
        return this.api.deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(param.assetId, param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Get Asset By Id
     * @param param the request object
     */
    public getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(param: AssetsApiGetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGetRequest, options?: Configuration): Promise<AssetOutput> {
        return this.api.getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(param.assetId, param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Get Assets
     * @param param the request object
     */
    public getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(param: AssetsApiGetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGetRequest, options?: Configuration): Promise<Array<AssetOutput>> {
        return this.api.getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Update Asset By Id
     * @param param the request object
     */
    public updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(param: AssetsApiUpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPutRequest, options?: Configuration): Promise<AssetOutput> {
        return this.api.updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(param.assetId, param.environmentId, param.organizationId, param.assetInput,  options).toPromise();
    }

}

import { ObservableEnvironmentsApi } from "./ObservableAPI";
import { EnvironmentsApiRequestFactory, EnvironmentsApiResponseProcessor} from "../apis/EnvironmentsApi";

export interface EnvironmentsApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApicreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost
     */
    organizationId: string
    /**
     * 
     * @type EnvironmentInput
     * @memberof EnvironmentsApicreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost
     */
    environmentInput: EnvironmentInput
}

export interface EnvironmentsApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApideleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApideleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete
     */
    organizationId: string
}

export interface EnvironmentsApiGetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGetRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApigetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApigetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet
     */
    organizationId: string
}

export interface EnvironmentsApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApigetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApigetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet
     */
    organizationId: string
}

export interface EnvironmentsApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApigetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet
     */
    organizationId: string
}

export interface EnvironmentsApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest {
    /**
     * 
     * @type string
     * @memberof EnvironmentsApiupdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut
     */
    environmentId: string
    /**
     * 
     * @type string
     * @memberof EnvironmentsApiupdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut
     */
    organizationId: string
    /**
     * 
     * @type EnvironmentInput
     * @memberof EnvironmentsApiupdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut
     */
    environmentInput: EnvironmentInput
}

export class ObjectEnvironmentsApi {
    private api: ObservableEnvironmentsApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentsApiRequestFactory, responseProcessor?: EnvironmentsApiResponseProcessor) {
        this.api = new ObservableEnvironmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Environment
     * @param param the request object
     */
    public createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(param: EnvironmentsApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest, options?: Configuration): Promise<EnvironmentOutput> {
        return this.api.createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(param.organizationId, param.environmentInput,  options).toPromise();
    }

    /**
     * Delete Environment By Id
     * @param param the request object
     */
    public deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(param: EnvironmentsApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest, options?: Configuration): Promise<number> {
        return this.api.deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Get Environment Allowed Assets
     * @param param the request object
     */
    public getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(param: EnvironmentsApiGetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGetRequest, options?: Configuration): Promise<Array<AssetBundle>> {
        return this.api.getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Get Environment By Id
     * @param param the request object
     */
    public getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(param: EnvironmentsApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest, options?: Configuration): Promise<EnvironmentOutput> {
        return this.api.getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(param.environmentId, param.organizationId,  options).toPromise();
    }

    /**
     * Get Environments
     * @param param the request object
     */
    public getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(param: EnvironmentsApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest, options?: Configuration): Promise<Array<EnvironmentOutput>> {
        return this.api.getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(param.organizationId,  options).toPromise();
    }

    /**
     * Update Environment
     * @param param the request object
     */
    public updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(param: EnvironmentsApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest, options?: Configuration): Promise<EnvironmentOutput> {
        return this.api.updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(param.environmentId, param.organizationId, param.environmentInput,  options).toPromise();
    }

}

import { ObservableOperationsApi } from "./ObservableAPI";
import { OperationsApiRequestFactory, OperationsApiResponseProcessor} from "../apis/OperationsApi";

export interface OperationsApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest {
    /**
     * 
     * @type string
     * @memberof OperationsApigetOperationsApiV1OrganizationsOrganizationIdOperationsGet
     */
    organizationId: string
    /**
     * 
     * @type string
     * @memberof OperationsApigetOperationsApiV1OrganizationsOrganizationIdOperationsGet
     */
    assetId?: string
    /**
     * 
     * @type string
     * @memberof OperationsApigetOperationsApiV1OrganizationsOrganizationIdOperationsGet
     */
    environmentId?: string
}

export interface OperationsApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest {
    /**
     * 
     * @type string
     * @memberof OperationsApigetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet
     */
    operationId: string
    /**
     * 
     * @type string
     * @memberof OperationsApigetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet
     */
    organizationId: string
}

export class ObjectOperationsApi {
    private api: ObservableOperationsApi

    public constructor(configuration: Configuration, requestFactory?: OperationsApiRequestFactory, responseProcessor?: OperationsApiResponseProcessor) {
        this.api = new ObservableOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Operations
     * @param param the request object
     */
    public getOperationsApiV1OrganizationsOrganizationIdOperationsGet(param: OperationsApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest, options?: Configuration): Promise<Array<OperationOutput>> {
        return this.api.getOperationsApiV1OrganizationsOrganizationIdOperationsGet(param.organizationId, param.assetId, param.environmentId,  options).toPromise();
    }

    /**
     * Get Operations By Operation Id
     * @param param the request object
     */
    public getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(param: OperationsApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest, options?: Configuration): Promise<Array<OperationOutput>> {
        return this.api.getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(param.operationId, param.organizationId,  options).toPromise();
    }

}

import { ObservableOrganizationsApi } from "./ObservableAPI";
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";

export interface OrganizationsApiDeleteApiV1OrganizationsOrganizationIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApideleteApiV1OrganizationsOrganizationIdDelete
     */
    organizationId: string
}

export interface OrganizationsApiGetOrganizationByIdApiV1OrganizationsOrganizationIdGetRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApigetOrganizationByIdApiV1OrganizationsOrganizationIdGet
     */
    organizationId: string
}

export interface OrganizationsApiGetOrganizationsApiV1OrganizationsGetRequest {
}

export interface OrganizationsApiPutOrganizationApiV1OrganizationsOrganizationIdPutRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApiputOrganizationApiV1OrganizationsOrganizationIdPut
     */
    organizationId: string
    /**
     * 
     * @type OrganizationInput
     * @memberof OrganizationsApiputOrganizationApiV1OrganizationsOrganizationIdPut
     */
    organizationInput: OrganizationInput
}

export class ObjectOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete
     * @param param the request object
     */
    public deleteApiV1OrganizationsOrganizationIdDelete(param: OrganizationsApiDeleteApiV1OrganizationsOrganizationIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteApiV1OrganizationsOrganizationIdDelete(param.organizationId,  options).toPromise();
    }

    /**
     * Get Organization By Id
     * @param param the request object
     */
    public getOrganizationByIdApiV1OrganizationsOrganizationIdGet(param: OrganizationsApiGetOrganizationByIdApiV1OrganizationsOrganizationIdGetRequest, options?: Configuration): Promise<OrganizationOutput> {
        return this.api.getOrganizationByIdApiV1OrganizationsOrganizationIdGet(param.organizationId,  options).toPromise();
    }

    /**
     * Get Organizations
     * @param param the request object
     */
    public getOrganizationsApiV1OrganizationsGet(param: OrganizationsApiGetOrganizationsApiV1OrganizationsGetRequest = {}, options?: Configuration): Promise<Array<OrganizationOutput>> {
        return this.api.getOrganizationsApiV1OrganizationsGet( options).toPromise();
    }

    /**
     * Put Organization
     * @param param the request object
     */
    public putOrganizationApiV1OrganizationsOrganizationIdPut(param: OrganizationsApiPutOrganizationApiV1OrganizationsOrganizationIdPutRequest, options?: Configuration): Promise<OrganizationOutput> {
        return this.api.putOrganizationApiV1OrganizationsOrganizationIdPut(param.organizationId, param.organizationInput,  options).toPromise();
    }

}

import { ObservableUtilitiesApi } from "./ObservableAPI";
import { UtilitiesApiRequestFactory, UtilitiesApiResponseProcessor} from "../apis/UtilitiesApi";

export interface UtilitiesApiGetPingApiV1DebugPingGetRequest {
}

export interface UtilitiesApiGetUserApiV1DebugUserAuthGetRequest {
}

export interface UtilitiesApiGetUserRoleApiV1DebugUserRoleMiddlewareCheckGetRequest {
    /**
     * 
     * @type string
     * @memberof UtilitiesApigetUserRoleApiV1DebugUserRoleMiddlewareCheckGet
     */
    organizationId: string
}

export class ObjectUtilitiesApi {
    private api: ObservableUtilitiesApi

    public constructor(configuration: Configuration, requestFactory?: UtilitiesApiRequestFactory, responseProcessor?: UtilitiesApiResponseProcessor) {
        this.api = new ObservableUtilitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Ping
     * @param param the request object
     */
    public getPingApiV1DebugPingGet(param: UtilitiesApiGetPingApiV1DebugPingGetRequest = {}, options?: Configuration): Promise<TextResponse> {
        return this.api.getPingApiV1DebugPingGet( options).toPromise();
    }

    /**
     * Get User
     * @param param the request object
     */
    public getUserApiV1DebugUserAuthGet(param: UtilitiesApiGetUserApiV1DebugUserAuthGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getUserApiV1DebugUserAuthGet( options).toPromise();
    }

    /**
     * Get User Role
     * @param param the request object
     */
    public getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(param: UtilitiesApiGetUserRoleApiV1DebugUserRoleMiddlewareCheckGetRequest, options?: Configuration): Promise<any> {
        return this.api.getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(param.organizationId,  options).toPromise();
    }

}

import { ObservableWorkerApi } from "./ObservableAPI";
import { WorkerApiRequestFactory, WorkerApiResponseProcessor} from "../apis/WorkerApi";

export interface WorkerApiUpdateOperationApiV1OperationsOperationIdOperationStatusPutRequest {
    /**
     * 
     * @type string
     * @memberof WorkerApiupdateOperationApiV1OperationsOperationIdOperationStatusPut
     */
    operationId: string
    /**
     * 
     * @type OperationStatus
     * @memberof WorkerApiupdateOperationApiV1OperationsOperationIdOperationStatusPut
     */
    operationStatus: OperationStatus
}

export interface WorkerApiWorkerHealthCheckApiV1WorkerHealthCheckPostRequest {
    /**
     * 
     * @type HealthCheckFromWorker
     * @memberof WorkerApiworkerHealthCheckApiV1WorkerHealthCheckPost
     */
    healthCheckFromWorker: HealthCheckFromWorker
}

export class ObjectWorkerApi {
    private api: ObservableWorkerApi

    public constructor(configuration: Configuration, requestFactory?: WorkerApiRequestFactory, responseProcessor?: WorkerApiResponseProcessor) {
        this.api = new ObservableWorkerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update Operation
     * @param param the request object
     */
    public updateOperationApiV1OperationsOperationIdOperationStatusPut(param: WorkerApiUpdateOperationApiV1OperationsOperationIdOperationStatusPutRequest, options?: Configuration): Promise<any> {
        return this.api.updateOperationApiV1OperationsOperationIdOperationStatusPut(param.operationId, param.operationStatus,  options).toPromise();
    }

    /**
     * Worker Health Check
     * @param param the request object
     */
    public workerHealthCheckApiV1WorkerHealthCheckPost(param: WorkerApiWorkerHealthCheckApiV1WorkerHealthCheckPostRequest, options?: Configuration): Promise<any> {
        return this.api.workerHealthCheckApiV1WorkerHealthCheckPost(param.healthCheckFromWorker,  options).toPromise();
    }

}
