// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ActionOutput } from '../models/ActionOutput';
import { ActionRequest } from '../models/ActionRequest';
import { HTTPValidationError } from '../models/HTTPValidationError';

/**
 * no description
 */
export class ActionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Action
     * @param assetId 
     * @param environmentId 
     * @param organizationId 
     * @param actionRequest 
     */
    public async createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(assetId: string, environmentId: string, organizationId: string, actionRequest: ActionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ActionsApi", "createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost", "assetId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("ActionsApi", "createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost", "environmentId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ActionsApi", "createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost", "organizationId");
        }


        // verify required parameter 'actionRequest' is not null or undefined
        if (actionRequest === null || actionRequest === undefined) {
            throw new RequiredError("ActionsApi", "createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost", "actionRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action'
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
            ObjectSerializer.serialize(actionRequest, "ActionRequest", ""),
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
     * Get Action
     * @param assetId 
     * @param environmentId 
     * @param actionId 
     * @param organizationId 
     */
    public async getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(assetId: string, environmentId: string, actionId: string, organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ActionsApi", "getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet", "assetId");
        }


        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("ActionsApi", "getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet", "environmentId");
        }


        // verify required parameter 'actionId' is not null or undefined
        if (actionId === null || actionId === undefined) {
            throw new RequiredError("ActionsApi", "getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet", "actionId");
        }


        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ActionsApi", "getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id}'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'environment_id' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'action_id' + '}', encodeURIComponent(String(actionId)))
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

export class ActionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(response: ResponseContext): Promise<ActionOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionOutput", ""
            ) as ActionOutput;
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
            const body: ActionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionOutput", ""
            ) as ActionOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(response: ResponseContext): Promise<ActionOutput > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionOutput", ""
            ) as ActionOutput;
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
            const body: ActionOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionOutput", ""
            ) as ActionOutput;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
