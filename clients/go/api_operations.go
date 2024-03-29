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
	OperationGet Operation Get

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param operationId
	@param organizationId
	@return ApiOperationGetRequest
	*/
	OperationGet(ctx context.Context, operationId string, organizationId string) ApiOperationGetRequest

	// OperationGetExecute executes the request
	//  @return OperationOutput
	OperationGetExecute(r ApiOperationGetRequest) (*OperationOutput, *http.Response, error)

	/*
	OperationUpdate Operation Update

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param operationId
	@return ApiOperationUpdateRequest
	*/
	OperationUpdate(ctx context.Context, operationId string) ApiOperationUpdateRequest

	// OperationUpdateExecute executes the request
	//  @return interface{}
	OperationUpdateExecute(r ApiOperationUpdateRequest) (interface{}, *http.Response, error)
}

// OperationsApiService OperationsApi service
type OperationsApiService service

type ApiOperationGetRequest struct {
	ctx context.Context
	ApiService OperationsApi
	operationId string
	organizationId string
}

func (r ApiOperationGetRequest) Execute() (*OperationOutput, *http.Response, error) {
	return r.ApiService.OperationGetExecute(r)
}

/*
OperationGet Operation Get

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param operationId
 @param organizationId
 @return ApiOperationGetRequest
*/
func (a *OperationsApiService) OperationGet(ctx context.Context, operationId string, organizationId string) ApiOperationGetRequest {
	return ApiOperationGetRequest{
		ApiService: a,
		ctx: ctx,
		operationId: operationId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return OperationOutput
func (a *OperationsApiService) OperationGetExecute(r ApiOperationGetRequest) (*OperationOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *OperationOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "OperationsApiService.OperationGet")
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

type ApiOperationUpdateRequest struct {
	ctx context.Context
	ApiService OperationsApi
	operationId string
	operationUpdate *OperationUpdate
}

func (r ApiOperationUpdateRequest) OperationUpdate(operationUpdate OperationUpdate) ApiOperationUpdateRequest {
	r.operationUpdate = &operationUpdate
	return r
}

func (r ApiOperationUpdateRequest) Execute() (interface{}, *http.Response, error) {
	return r.ApiService.OperationUpdateExecute(r)
}

/*
OperationUpdate Operation Update

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param operationId
 @return ApiOperationUpdateRequest
*/
func (a *OperationsApiService) OperationUpdate(ctx context.Context, operationId string) ApiOperationUpdateRequest {
	return ApiOperationUpdateRequest{
		ApiService: a,
		ctx: ctx,
		operationId: operationId,
	}
}

// Execute executes the request
//  @return interface{}
func (a *OperationsApiService) OperationUpdateExecute(r ApiOperationUpdateRequest) (interface{}, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  interface{}
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "OperationsApiService.OperationUpdate")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/operations/{operation_id}"
	localVarPath = strings.Replace(localVarPath, "{"+"operation_id"+"}", url.PathEscape(parameterToString(r.operationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.operationUpdate == nil {
		return localVarReturnValue, nil, reportError("operationUpdate is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

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
	// body params
	localVarPostBody = r.operationUpdate
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
