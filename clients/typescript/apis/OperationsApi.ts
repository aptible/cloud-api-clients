// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPValidationError } from '../models/HTTPValidationError';
import { OperationOutput } from '../models/OperationOutput';

/**
 * no description
 */
export class OperationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get Operations
     * @param organizationId 
     * @param assetId 
     * @param environmentId 
     */
    public async getOperationsApiV1OrganizationsOrganizationIdOperationsGet(organizationId: string, assetId?: string, environmentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OperationsApi", "getOperationsApiV1OrganizationsOrganizationIdOperationsGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/operations/'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (assetId !== undefined) {
            requestContext.setQueryParam("asset_id", ObjectSerializer.serialize(assetId, "string", "uuid"));
        }

        // Query Params
        if (environmentId !== undefined) {
            requestContext.setQueryParam("environment_id", ObjectSerializer.serialize(environmentId, "string", "uuid"));
        }


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
     * Get Operations By Operation Id
     * @param operationId 
     * @param organizationId 
     */
    public async getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(operationId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'operationId' is not null or undefined
        if (operationId === null || operationId === undefined) {
            throw new RequiredError("OperationsApi", "getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet", "operationId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OperationsApi", "getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/operations/{operation_id}'
            .replace('{' + 'operation_id' + '}', encodeURIComponent(String(operationId)))
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

export class OperationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOperationsApiV1OrganizationsOrganizationIdOperationsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOperationsApiV1OrganizationsOrganizationIdOperationsGet(response: ResponseContext): Promise<Array<OperationOutput> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OperationOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OperationOutput>", ""
            ) as Array<OperationOutput>;
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
            const body: Array<OperationOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OperationOutput>", ""
            ) as Array<OperationOutput>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(response: ResponseContext): Promise<Array<OperationOutput> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OperationOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OperationOutput>", ""
            ) as Array<OperationOutput>;
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
            const body: Array<OperationOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OperationOutput>", ""
            ) as Array<OperationOutput>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
