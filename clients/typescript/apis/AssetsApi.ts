// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AssetInput } from '../models/AssetInput';
import { AssetOutput } from '../models/AssetOutput';
import { HTTPValidationError } from '../models/HTTPValidationError';

/**
 * no description
 */
export class AssetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Asset
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public async createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("AssetsApi", "createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("AssetsApi", "createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost", "organizationId");
        }


        // verify required parameter 'assetInput' is not null or undefined
        if (assetInput === null || assetInput === undefined) {
            throw new RequiredError("AssetsApi", "createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost", "assetInput");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets'
            .replace('{' + 'environment_id' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetInput, "AssetInput", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public async deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete", "assetId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("AssetsApi", "deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("AssetsApi", "deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'environment_id' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     */
    public async getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(assetId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet", "assetId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("AssetsApi", "getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("AssetsApi", "getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'environment_id' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Asset By Id
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param assetInput 
     */
    public async updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(assetId: string, environmentId: string, organizationId: string, assetInput: AssetInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut", "assetId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("AssetsApi", "updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("AssetsApi", "updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut", "organizationId");
        }


        // verify required parameter 'assetInput' is not null or undefined
        if (assetInput === null || assetInput === undefined) {
            throw new RequiredError("AssetsApi", "updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut", "assetInput");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'environment_id' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetInput, "AssetInput", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(response: ResponseContext): Promise<AssetOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AssetOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetOutput", ""
            ) as AssetOutput;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetOutput", ""
            ) as AssetOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(response: ResponseContext): Promise<number > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "number", ""
            ) as number;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "number", ""
            ) as number;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(response: ResponseContext): Promise<AssetOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetOutput", ""
            ) as AssetOutput;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetOutput", ""
            ) as AssetOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(response: ResponseContext): Promise<AssetOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetOutput", ""
            ) as AssetOutput;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetOutput", ""
            ) as AssetOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
