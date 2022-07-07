// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPValidationError } from '../models/HTTPValidationError';
import { OperationStatus } from '../models/OperationStatus';

/**
 * no description
 */
export class WorkerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Update Operation
     * @param operationId 
     * @param operationStatus 
     */
    public async updateOperationApiV1OperationsOperationIdOperationStatusPut(operationId: string, operationStatus: OperationStatus, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'operationId' is not null or undefined
        if (operationId === null || operationId === undefined) {
            throw new RequiredError("WorkerApi", "updateOperationApiV1OperationsOperationIdOperationStatusPut", "operationId");
        }


        // verify required parameter 'operationStatus' is not null or undefined
        if (operationStatus === null || operationStatus === undefined) {
            throw new RequiredError("WorkerApi", "updateOperationApiV1OperationsOperationIdOperationStatusPut", "operationStatus");
        }


        // Path Params
        const localVarPath = '/api/v1/operations/{operation_id}/{operation_status}'
            .replace('{' + 'operation_id' + '}', encodeURIComponent(String(operationId)))
            .replace('{' + 'operation_status' + '}', encodeURIComponent(String(operationStatus)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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

export class WorkerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOperationApiV1OperationsOperationIdOperationStatusPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateOperationApiV1OperationsOperationIdOperationStatusPut(response: ResponseContext): Promise<any > {
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

}
