import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

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
     * Create Asset
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Promise<AssetOutput> {
        const result = this.api.createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(environmentId, organizationId, assetInput, _options);
        return result.toPromise();
    }

    /**
     * Delete Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<number> {
        const result = this.api.deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(assetId, environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<AssetOutput> {
        const result = this.api.getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(assetId, environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get Assets
     * @param environmentId 
     * @param organizationId 
     */
    public getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(environmentId: string, organizationId: string, _options?: Configuration): Promise<Array<AssetOutput>> {
        const result = this.api.getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Update Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(assetId: string, environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Promise<AssetOutput> {
        const result = this.api.updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(assetId, environmentId, organizationId, assetInput, _options);
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
     * Create Environment
     * @param organizationId 
     * @param environmentInput 
     */
    public createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Promise<EnvironmentOutput> {
        const result = this.api.createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(organizationId, environmentInput, _options);
        return result.toPromise();
    }

    /**
     * Delete Environment By Id
     * @param environmentId 
     * @param organizationId 
     */
    public deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(environmentId: string, organizationId: string, _options?: Configuration): Promise<number> {
        const result = this.api.deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get Environment By Id
     * @param environmentId 
     * @param organizationId 
     */
    public getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(environmentId: string, organizationId: string, _options?: Configuration): Promise<Array<EnvironmentOutput>> {
        const result = this.api.getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(environmentId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get Environments
     * @param organizationId 
     */
    public getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(organizationId: string, _options?: Configuration): Promise<Array<EnvironmentOutput>> {
        const result = this.api.getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Update Environment
     * @param environmentId 
     * @param organizationId 
     * @param environmentInput 
     */
    public updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(environmentId: string, organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Promise<EnvironmentOutput> {
        const result = this.api.updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(environmentId, organizationId, environmentInput, _options);
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
     * Get Operations
     * @param organizationId 
     * @param assetId 
     * @param environmentId 
     */
    public getOperationsApiV1OrganizationsOrganizationIdOperationsGet(organizationId: string, assetId?: string, environmentId?: string, _options?: Configuration): Promise<Array<OperationOutput>> {
        const result = this.api.getOperationsApiV1OrganizationsOrganizationIdOperationsGet(organizationId, assetId, environmentId, _options);
        return result.toPromise();
    }

    /**
     * Get Operations By Operation Id
     * @param operationId 
     * @param organizationId 
     */
    public getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(operationId: string, organizationId: string, _options?: Configuration): Promise<Array<OperationOutput>> {
        const result = this.api.getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(operationId, organizationId, _options);
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
     * Get Organization By Id
     * @param organizationId 
     */
    public getOrganizationByIdApiV1OrganizationsOrganizationIdGet(organizationId: string, _options?: Configuration): Promise<OrganizationOutput> {
        const result = this.api.getOrganizationByIdApiV1OrganizationsOrganizationIdGet(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get Organizations
     */
    public getOrganizationsApiV1OrganizationsGet(_options?: Configuration): Promise<Array<OrganizationOutput>> {
        const result = this.api.getOrganizationsApiV1OrganizationsGet(_options);
        return result.toPromise();
    }

    /**
     * Put Organization
     * @param organizationId 
     * @param organizationInput 
     */
    public putOrganizationApiV1OrganizationsOrganizationIdPut(organizationId: string, organizationInput: OrganizationInput, _options?: Configuration): Promise<OrganizationOutput> {
        const result = this.api.putOrganizationApiV1OrganizationsOrganizationIdPut(organizationId, organizationInput, _options);
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
     * Get Ping
     */
    public getPingApiV1DebugPingGet(_options?: Configuration): Promise<TextResponse> {
        const result = this.api.getPingApiV1DebugPingGet(_options);
        return result.toPromise();
    }

    /**
     * Get User
     */
    public getUserApiV1DebugUserAuthGet(_options?: Configuration): Promise<any> {
        const result = this.api.getUserApiV1DebugUserAuthGet(_options);
        return result.toPromise();
    }

    /**
     * Get User Role
     * @param organizationId 
     */
    public getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(organizationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(organizationId, _options);
        return result.toPromise();
    }


}



