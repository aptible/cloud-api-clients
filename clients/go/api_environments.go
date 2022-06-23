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


type EnvironmentsApi interface {

	/*
	CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost Create Environment

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param organizationId
	@return ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest
	*/
	CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(ctx context.Context, organizationId string) ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest

	// CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostExecute executes the request
	//  @return EnvironmentOutput
	CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostExecute(r ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest) (*EnvironmentOutput, *http.Response, error)

	/*
	DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete Delete Environment By Id

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param environmentId
	@param organizationId
	@return ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest
	*/
	DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(ctx context.Context, environmentId string, organizationId string) ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest

	// DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteExecute executes the request
	//  @return int32
	DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteExecute(r ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest) (int32, *http.Response, error)

	/*
	GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet Get Environment By Id

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param environmentId
	@param organizationId
	@return ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest
	*/
	GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(ctx context.Context, environmentId string, organizationId string) ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest

	// GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetExecute executes the request
	//  @return EnvironmentOutput
	GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetExecute(r ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest) (*EnvironmentOutput, *http.Response, error)

	/*
	GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet Get Environments

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param organizationId
	@return ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest
	*/
	GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(ctx context.Context, organizationId string) ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest

	// GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetExecute executes the request
	//  @return []EnvironmentOutput
	GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetExecute(r ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest) ([]EnvironmentOutput, *http.Response, error)

	/*
	UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut Update Environment

	@param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
	@param environmentId
	@param organizationId
	@return ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest
	*/
	UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(ctx context.Context, environmentId string, organizationId string) ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest

	// UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutExecute executes the request
	//  @return EnvironmentOutput
	UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutExecute(r ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest) (*EnvironmentOutput, *http.Response, error)
}

// EnvironmentsApiService EnvironmentsApi service
type EnvironmentsApiService service

type ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest struct {
	ctx context.Context
	ApiService EnvironmentsApi
	organizationId string
	environmentInput *EnvironmentInput
}

func (r ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest) EnvironmentInput(environmentInput EnvironmentInput) ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest {
	r.environmentInput = &environmentInput
	return r
}

func (r ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest) Execute() (*EnvironmentOutput, *http.Response, error) {
	return r.ApiService.CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostExecute(r)
}

/*
CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost Create Environment

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param organizationId
 @return ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest
*/
func (a *EnvironmentsApiService) CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(ctx context.Context, organizationId string) ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest {
	return ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest{
		ApiService: a,
		ctx: ctx,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return EnvironmentOutput
func (a *EnvironmentsApiService) CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostExecute(r ApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest) (*EnvironmentOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *EnvironmentOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "EnvironmentsApiService.CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments"
	localVarPath = strings.Replace(localVarPath, "{"+"organization_id"+"}", url.PathEscape(parameterToString(r.organizationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.environmentInput == nil {
		return localVarReturnValue, nil, reportError("environmentInput is required and must be specified")
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
	localVarPostBody = r.environmentInput
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

type ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest struct {
	ctx context.Context
	ApiService EnvironmentsApi
	environmentId string
	organizationId string
}

func (r ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest) Execute() (int32, *http.Response, error) {
	return r.ApiService.DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteExecute(r)
}

/*
DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete Delete Environment By Id

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param environmentId
 @param organizationId
 @return ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest
*/
func (a *EnvironmentsApiService) DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(ctx context.Context, environmentId string, organizationId string) ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest {
	return ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest{
		ApiService: a,
		ctx: ctx,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return int32
func (a *EnvironmentsApiService) DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteExecute(r ApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest) (int32, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodDelete
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  int32
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "EnvironmentsApiService.DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}"
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

type ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest struct {
	ctx context.Context
	ApiService EnvironmentsApi
	environmentId string
	organizationId string
}

func (r ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest) Execute() (*EnvironmentOutput, *http.Response, error) {
	return r.ApiService.GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetExecute(r)
}

/*
GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet Get Environment By Id

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param environmentId
 @param organizationId
 @return ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest
*/
func (a *EnvironmentsApiService) GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(ctx context.Context, environmentId string, organizationId string) ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest {
	return ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest{
		ApiService: a,
		ctx: ctx,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return EnvironmentOutput
func (a *EnvironmentsApiService) GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetExecute(r ApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest) (*EnvironmentOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *EnvironmentOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "EnvironmentsApiService.GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}"
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

type ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest struct {
	ctx context.Context
	ApiService EnvironmentsApi
	organizationId string
}

func (r ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest) Execute() ([]EnvironmentOutput, *http.Response, error) {
	return r.ApiService.GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetExecute(r)
}

/*
GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet Get Environments

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param organizationId
 @return ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest
*/
func (a *EnvironmentsApiService) GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(ctx context.Context, organizationId string) ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest {
	return ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest{
		ApiService: a,
		ctx: ctx,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return []EnvironmentOutput
func (a *EnvironmentsApiService) GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetExecute(r ApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest) ([]EnvironmentOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  []EnvironmentOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "EnvironmentsApiService.GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments"
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

type ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest struct {
	ctx context.Context
	ApiService EnvironmentsApi
	environmentId string
	organizationId string
	environmentInput *EnvironmentInput
}

func (r ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest) EnvironmentInput(environmentInput EnvironmentInput) ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest {
	r.environmentInput = &environmentInput
	return r
}

func (r ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest) Execute() (*EnvironmentOutput, *http.Response, error) {
	return r.ApiService.UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutExecute(r)
}

/*
UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut Update Environment

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param environmentId
 @param organizationId
 @return ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest
*/
func (a *EnvironmentsApiService) UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(ctx context.Context, environmentId string, organizationId string) ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest {
	return ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest{
		ApiService: a,
		ctx: ctx,
		environmentId: environmentId,
		organizationId: organizationId,
	}
}

// Execute executes the request
//  @return EnvironmentOutput
func (a *EnvironmentsApiService) UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutExecute(r ApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest) (*EnvironmentOutput, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *EnvironmentOutput
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "EnvironmentsApiService.UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v1/organizations/{organization_id}/environments/{environment_id}"
	localVarPath = strings.Replace(localVarPath, "{"+"environment_id"+"}", url.PathEscape(parameterToString(r.environmentId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"organization_id"+"}", url.PathEscape(parameterToString(r.organizationId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.environmentInput == nil {
		return localVarReturnValue, nil, reportError("environmentInput is required and must be specified")
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
	localVarPostBody = r.environmentInput
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
