// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ConnectionInput } from '../models/ConnectionInput';
import { ConnectionOutput } from '../models/ConnectionOutput';
import { HTTPValidationError } from '../models/HTTPValidationError';

/**
 * no description
 */
export class ConnectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Connection
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param connectionInput 
     */
    public async createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(assetId: string, environmentId: string, organizationId: string, connectionInput: ConnectionInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ConnectionsApi", "createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost", "assetId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("ConnectionsApi", "createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ConnectionsApi", "createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost", "organizationId");
        }


        // verify required parameter 'connectionInput' is not null or undefined
        if (connectionInput === null || connectionInput === undefined) {
            throw new RequiredError("ConnectionsApi", "createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost", "connectionInput");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
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
            ObjectSerializer.serialize(connectionInput, "ConnectionInput", ""),
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
     * Delete Connection
     * @param assetId 
     * @param connectionId 
     * @param environmentId 
     * @param organizationId 
     */
    public async deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(assetId: string, connectionId: string, environmentId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ConnectionsApi", "deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete", "assetId");
        }


        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError("ConnectionsApi", "deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete", "connectionId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("ConnectionsApi", "deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ConnectionsApi", "deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id}'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'connection_id' + '}', encodeURIComponent(String(connectionId)))
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
     * Get Connection By Id
     * @param assetId 
     * @param environmentId 
     * @param connectionId 
     * @param organizationId 
     */
    public async getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(assetId: string, environmentId: string, connectionId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ConnectionsApi", "getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet", "assetId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("ConnectionsApi", "getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet", "environmentId");
        }


        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError("ConnectionsApi", "getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet", "connectionId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ConnectionsApi", "getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id}'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'environment_id' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'connection_id' + '}', encodeURIComponent(String(connectionId)))
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

}

export class ConnectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(response: ResponseContext): Promise<ConnectionOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ConnectionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectionOutput", ""
            ) as ConnectionOutput;
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
            const body: ConnectionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectionOutput", ""
            ) as ConnectionOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(response: ResponseContext): Promise<ConnectionOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConnectionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectionOutput", ""
            ) as ConnectionOutput;
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
            const body: ConnectionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectionOutput", ""
            ) as ConnectionOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
