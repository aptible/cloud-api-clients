/*
Cloud API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 0.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cloud_api_client

import (
	"bytes"
	"context"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"
)


type OperationsApi interface {

	/*
	GetOperationsApiV1OrganizationsOrganizationIdOperationsGet Get Operations

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param organizationId
	@return ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest
	*/
	GetOperationsApiV1OrganizationsOrganizationIdOperationsGet(ctx context.Context, organizationId string) ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest

	// GetOperationsApiV1OrganizationsOrganizationIdOperationsGetExecute executes the request
	//  @return []OperationOutput
	GetOperationsApiV1OrganizationsOrganizationIdOperationsGetExecute(r ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest) ([]OperationOutput, *http.Response, error)

	/*
	GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet Get Operations By Operation Id

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param operationId
	@param organizationId
	@return ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest
	*/
	GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(ctx context.Context, operationId string, organizationId string) ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest

	// GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetExecute executes the request
	//  @return []OperationOutput
	GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetExecute(r ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest) ([]OperationOutput, *http.Response, error)
}

// OperationsApiService OperationsApi service
type OperationsApiService service

type ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest struct {
	ctx context.Context
	ApiService OperationsApi
	organizationId string
	assetId *string
	environmentId *string
}

func (r ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest) AssetId(assetId string) ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest {
	r.assetId = &assetId
	return r
}

func (r ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest) EnvironmentId(environmentId string) ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest {
	r.environmentId = &environmentId
	return r
}

func (r ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest) Execute() ([]OperationOutput, *http.Response, error) {
	return r.ApiService.GetOperationsApiV1OrganizationsOrganizationIdOperationsGetExecute(r)
}

/*
GetOperationsApiV1OrganizationsOrganizationIdOperationsGet Get Operations

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param organizationId
 @return ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest
*/
func (a *OperationsApiService) GetOperationsApiV1OrganizationsOrganizationIdOperationsGet(ctx context.Context, organizationId string) ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest {
	return ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest{
		ApiService: a,
		ctx: ctx,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return []OperationOutput
func (a *OperationsApiService) GetOperationsApiV1OrganizationsOrganizationIdOperationsGetExecute(r ApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest) ([]OperationOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  []OperationOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "OperationsApiService.GetOperationsApiV1OrganizationsOrganizationIdOperationsGet")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/operations/"
	localVarPath = strings.Replace(localVarPath, "{"+"organization_id"+"}", url.PathEscape(parameterToString(r.organizationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if r.assetId != nil {
		localVarQueryParams.Add("asset_id", parameterToString(*r.assetId, ""))
	}
	if r.environmentId != nil {
		localVarQueryParams.Add("environment_id", parameterToString(*r.environmentId, ""))
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 422 {
			var v HTTPValidationError
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest struct {
	ctx context.Context
	ApiService OperationsApi
	operationId string
	organizationId string
}

func (r ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest) Execute() ([]OperationOutput, *http.Response, error) {
	return r.ApiService.GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetExecute(r)
}

/*
GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet Get Operations By Operation Id

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param operationId
 @param organizationId
 @return ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest
*/
func (a *OperationsApiService) GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(ctx context.Context, operationId string, organizationId string) ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest {
	return ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest{
		ApiService: a,
		ctx: ctx,
		operationId: operationId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return []OperationOutput
func (a *OperationsApiService) GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetExecute(r ApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest) ([]OperationOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  []OperationOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "OperationsApiService.GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/operations/{operation_id}"
	localVarPath = strings.Replace(localVarPath, "{"+"operation_id"+"}", url.PathEscape(parameterToString(r.operationId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"organization_id"+"}", url.PathEscape(parameterToString(r.organizationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 422 {
			var v HTTPValidationError
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}
