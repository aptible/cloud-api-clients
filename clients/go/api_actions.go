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


type ActionsApi interface {

	/*
	ActionCreate Action Create

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param assetId
	@param environmentId
	@param organizationId
	@return ApiActionCreateRequest
	*/
	ActionCreate(ctx context.Context, assetId string, environmentId string, organizationId string) ApiActionCreateRequest

	// ActionCreateExecute executes the request
	//  @return ActionResponse
	ActionCreateExecute(r ApiActionCreateRequest) (*ActionResponse, *http.Response, error)

	/*
	ActionGet Action Get

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param assetId
	@param environmentId
	@param actionId
	@param organizationId
	@return ApiActionGetRequest
	*/
	ActionGet(ctx context.Context, assetId string, environmentId string, actionId string, organizationId string) ApiActionGetRequest

	// ActionGetExecute executes the request
	//  @return ActionResponse
	ActionGetExecute(r ApiActionGetRequest) (*ActionResponse, *http.Response, error)
}

// ActionsApiService ActionsApi service
type ActionsApiService service

type ApiActionCreateRequest struct {
	ctx context.Context
	ApiService ActionsApi
	assetId string
	environmentId string
	organizationId string
	actionRequest *ActionRequest
}

func (r ApiActionCreateRequest) ActionRequest(actionRequest ActionRequest) ApiActionCreateRequest {
	r.actionRequest = &actionRequest
	return r
}

func (r ApiActionCreateRequest) Execute() (*ActionResponse, *http.Response, error) {
	return r.ApiService.ActionCreateExecute(r)
}

/*
ActionCreate Action Create

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param assetId
 @param environmentId
 @param organizationId
 @return ApiActionCreateRequest
*/
func (a *ActionsApiService) ActionCreate(ctx context.Context, assetId string, environmentId string, organizationId string) ApiActionCreateRequest {
	return ApiActionCreateRequest{
		ApiService: a,
		ctx: ctx,
		assetId: assetId,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return ActionResponse
func (a *ActionsApiService) ActionCreateExecute(r ApiActionCreateRequest) (*ActionResponse, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *ActionResponse
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ActionsApiService.ActionCreate")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action"
	localVarPath = strings.Replace(localVarPath, "{"+"asset_id"+"}", url.PathEscape(parameterToString(r.assetId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"environment_id"+"}", url.PathEscape(parameterToString(r.environmentId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"organization_id"+"}", url.PathEscape(parameterToString(r.organizationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.actionRequest == nil {
		return localVarReturnValue, nil, reportError("actionRequest is required and must be specified")
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
	localVarPostBody = r.actionRequest
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

type ApiActionGetRequest struct {
	ctx context.Context
	ApiService ActionsApi
	assetId string
	environmentId string
	actionId string
	organizationId string
}

func (r ApiActionGetRequest) Execute() (*ActionResponse, *http.Response, error) {
	return r.ApiService.ActionGetExecute(r)
}

/*
ActionGet Action Get

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param assetId
 @param environmentId
 @param actionId
 @param organizationId
 @return ApiActionGetRequest
*/
func (a *ActionsApiService) ActionGet(ctx context.Context, assetId string, environmentId string, actionId string, organizationId string) ApiActionGetRequest {
	return ApiActionGetRequest{
		ApiService: a,
		ctx: ctx,
		assetId: assetId,
		environmentId: environmentId,
		actionId: actionId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return ActionResponse
func (a *ActionsApiService) ActionGetExecute(r ApiActionGetRequest) (*ActionResponse, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *ActionResponse
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ActionsApiService.ActionGet")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id}"
	localVarPath = strings.Replace(localVarPath, "{"+"asset_id"+"}", url.PathEscape(parameterToString(r.assetId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"environment_id"+"}", url.PathEscape(parameterToString(r.environmentId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"action_id"+"}", url.PathEscape(parameterToString(r.actionId, "")), -1)
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