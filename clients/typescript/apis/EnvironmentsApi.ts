// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AssetBundle } from '../models/AssetBundle';
import { EnvironmentInput } from '../models/EnvironmentInput';
import { EnvironmentOutput } from '../models/EnvironmentOutput';
import { HTTPValidationError } from '../models/HTTPValidationError';

/**
 * no description
 */
export class EnvironmentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Environment
     * @param organizationId 
     * @param environmentInput 
     */
    public async createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnvironmentsApi", "createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost", "organizationId");
        }


        // verify required parameter 'environmentInput' is not null or undefined
        if (environmentInput === null || environmentInput === undefined) {
            throw new RequiredError("EnvironmentsApi", "createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost", "environmentInput");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments'
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
            ObjectSerializer.serialize(environmentInput, "EnvironmentInput", ""),
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
     * Delete Environment By Id
     * @param environmentId 
     * @param organizationId 
     */
    public async deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(environmentId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentsApi", "deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnvironmentsApi", "deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}'
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
     * Get Environment Allowed Assets
     * @param environmentId 
     * @param organizationId 
     */
    public async getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(environmentId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentsApi", "getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnvironmentsApi", "getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles'
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
     * Get Environment By Id
     * @param environmentId 
     * @param organizationId 
     */
    public async getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(environmentId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentsApi", "getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnvironmentsApi", "getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}'
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
     * Get Environments
     * @param organizationId 
     */
    public async getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnvironmentsApi", "getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments'
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
     * Update Environment
     * @param environmentId 
     * @param organizationId 
     * @param environmentInput 
     */
    public async updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(environmentId: string, organizationId: string, environmentInput: EnvironmentInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentsApi", "updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnvironmentsApi", "updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut", "organizationId");
        }


        // verify required parameter 'environmentInput' is not null or undefined
        if (environmentInput === null || environmentInput === undefined) {
            throw new RequiredError("EnvironmentsApi", "updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut", "environmentInput");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}'
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
            ObjectSerializer.serialize(environmentInput, "EnvironmentInput", ""),
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

export class EnvironmentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(response: ResponseContext): Promise<EnvironmentOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EnvironmentOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentOutput", ""
            ) as EnvironmentOutput;
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
            const body: EnvironmentOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentOutput", ""
            ) as EnvironmentOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(response: ResponseContext): Promise<number > {
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
     * @params response Response returned by the server for a request to getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(response: ResponseContext): Promise<Array<AssetBundle> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AssetBundle> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AssetBundle>", ""
            ) as Array<AssetBundle>;
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
            const body: Array<AssetBundle> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AssetBundle>", ""
            ) as Array<AssetBundle>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(response: ResponseContext): Promise<EnvironmentOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnvironmentOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentOutput", ""
            ) as EnvironmentOutput;
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
            const body: EnvironmentOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentOutput", ""
            ) as EnvironmentOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(response: ResponseContext): Promise<Array<EnvironmentOutput> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EnvironmentOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EnvironmentOutput>", ""
            ) as Array<EnvironmentOutput>;
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
            const body: Array<EnvironmentOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EnvironmentOutput>", ""
            ) as Array<EnvironmentOutput>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(response: ResponseContext): Promise<EnvironmentOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnvironmentOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentOutput", ""
            ) as EnvironmentOutput;
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
            const body: EnvironmentOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentOutput", ""
            ) as EnvironmentOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
