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


type AssetsApi interface {

	/*
	AssetCreate Asset Create

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param environmentId
	@param organizationId
	@return ApiAssetCreateRequest
	*/
	AssetCreate(ctx context.Context, environmentId string, organizationId string) ApiAssetCreateRequest

	// AssetCreateExecute executes the request
	//  @return AssetOutput
	AssetCreateExecute(r ApiAssetCreateRequest) (*AssetOutput, *http.Response, error)

	/*
	AssetDelete Asset Delete

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param assetId
	@param environmentId
	@param organizationId
	@return ApiAssetDeleteRequest
	*/
	AssetDelete(ctx context.Context, assetId string, environmentId string, organizationId string) ApiAssetDeleteRequest

	// AssetDeleteExecute executes the request
	//  @return AssetOutput
	AssetDeleteExecute(r ApiAssetDeleteRequest) (*AssetOutput, *http.Response, error)

	/*
	AssetGet Asset Get

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param assetId
	@param environmentId
	@param organizationId
	@return ApiAssetGetRequest
	*/
	AssetGet(ctx context.Context, assetId string, environmentId string, organizationId string) ApiAssetGetRequest

	// AssetGetExecute executes the request
	//  @return AssetOutput
	AssetGetExecute(r ApiAssetGetRequest) (*AssetOutput, *http.Response, error)

	/*
	AssetUpdate Asset Update

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param assetId
	@param environmentId
	@param organizationId
	@return ApiAssetUpdateRequest
	*/
	AssetUpdate(ctx context.Context, assetId string, environmentId string, organizationId string) ApiAssetUpdateRequest

	// AssetUpdateExecute executes the request
	//  @return AssetOutput
	AssetUpdateExecute(r ApiAssetUpdateRequest) (*AssetOutput, *http.Response, error)
}

// AssetsApiService AssetsApi service
type AssetsApiService service

type ApiAssetCreateRequest struct {
	ctx context.Context
	ApiService AssetsApi
	environmentId string
	organizationId string
	assetInput *AssetInput
}

func (r ApiAssetCreateRequest) AssetInput(assetInput AssetInput) ApiAssetCreateRequest {
	r.assetInput = &assetInput
	return r
}

func (r ApiAssetCreateRequest) Execute() (*AssetOutput, *http.Response, error) {
	return r.ApiService.AssetCreateExecute(r)
}

/*
AssetCreate Asset Create

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param environmentId
 @param organizationId
 @return ApiAssetCreateRequest
*/
func (a *AssetsApiService) AssetCreate(ctx context.Context, environmentId string, organizationId string) ApiAssetCreateRequest {
	return ApiAssetCreateRequest{
		ApiService: a,
		ctx: ctx,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return AssetOutput
func (a *AssetsApiService) AssetCreateExecute(r ApiAssetCreateRequest) (*AssetOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *AssetOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "AssetsApiService.AssetCreate")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets"
	localVarPath = strings.Replace(localVarPath, "{"+"environment_id"+"}", url.PathEscape(parameterToString(r.environmentId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"organization_id"+"}", url.PathEscape(parameterToString(r.organizationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.assetInput == nil {
		return localVarReturnValue, nil, reportError("assetInput is required and must be specified")
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
	localVarPostBody = r.assetInput
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

type ApiAssetDeleteRequest struct {
	ctx context.Context
	ApiService AssetsApi
	assetId string
	environmentId string
	organizationId string
}

func (r ApiAssetDeleteRequest) Execute() (*AssetOutput, *http.Response, error) {
	return r.ApiService.AssetDeleteExecute(r)
}

/*
AssetDelete Asset Delete

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param assetId
 @param environmentId
 @param organizationId
 @return ApiAssetDeleteRequest
*/
func (a *AssetsApiService) AssetDelete(ctx context.Context, assetId string, environmentId string, organizationId string) ApiAssetDeleteRequest {
	return ApiAssetDeleteRequest{
		ApiService: a,
		ctx: ctx,
		assetId: assetId,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return AssetOutput
func (a *AssetsApiService) AssetDeleteExecute(r ApiAssetDeleteRequest) (*AssetOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodDelete
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *AssetOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "AssetsApiService.AssetDelete")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}"
	localVarPath = strings.Replace(localVarPath, "{"+"asset_id"+"}", url.PathEscape(parameterToString(r.assetId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"environment_id"+"}", url.PathEscape(parameterToString(r.environmentId, "")), -1)
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

type ApiAssetGetRequest struct {
	ctx context.Context
	ApiService AssetsApi
	assetId string
	environmentId string
	organizationId string
}

func (r ApiAssetGetRequest) Execute() (*AssetOutput, *http.Response, error) {
	return r.ApiService.AssetGetExecute(r)
}

/*
AssetGet Asset Get

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param assetId
 @param environmentId
 @param organizationId
 @return ApiAssetGetRequest
*/
func (a *AssetsApiService) AssetGet(ctx context.Context, assetId string, environmentId string, organizationId string) ApiAssetGetRequest {
	return ApiAssetGetRequest{
		ApiService: a,
		ctx: ctx,
		assetId: assetId,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return AssetOutput
func (a *AssetsApiService) AssetGetExecute(r ApiAssetGetRequest) (*AssetOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *AssetOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "AssetsApiService.AssetGet")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}"
	localVarPath = strings.Replace(localVarPath, "{"+"asset_id"+"}", url.PathEscape(parameterToString(r.assetId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"environment_id"+"}", url.PathEscape(parameterToString(r.environmentId, "")), -1)
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

type ApiAssetUpdateRequest struct {
	ctx context.Context
	ApiService AssetsApi
	assetId string
	environmentId string
	organizationId string
	assetInput *AssetInput
}

func (r ApiAssetUpdateRequest) AssetInput(assetInput AssetInput) ApiAssetUpdateRequest {
	r.assetInput = &assetInput
	return r
}

func (r ApiAssetUpdateRequest) Execute() (*AssetOutput, *http.Response, error) {
	return r.ApiService.AssetUpdateExecute(r)
}

/*
AssetUpdate Asset Update

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param assetId
 @param environmentId
 @param organizationId
 @return ApiAssetUpdateRequest
*/
func (a *AssetsApiService) AssetUpdate(ctx context.Context, assetId string, environmentId string, organizationId string) ApiAssetUpdateRequest {
	return ApiAssetUpdateRequest{
		ApiService: a,
		ctx: ctx,
		assetId: assetId,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return AssetOutput
func (a *AssetsApiService) AssetUpdateExecute(r ApiAssetUpdateRequest) (*AssetOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *AssetOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "AssetsApiService.AssetUpdate")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}"
	localVarPath = strings.Replace(localVarPath, "{"+"asset_id"+"}", url.PathEscape(parameterToString(r.assetId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"environment_id"+"}", url.PathEscape(parameterToString(r.environmentId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"organization_id"+"}", url.PathEscape(parameterToString(r.organizationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.assetInput == nil {
		return localVarReturnValue, nil, reportError("assetInput is required and must be specified")
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
	localVarPostBody = r.assetInput
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
