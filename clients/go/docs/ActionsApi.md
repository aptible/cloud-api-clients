# \ActionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost**](ActionsApi.md#CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost) | **Post** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Create Action
[**GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet**](ActionsApi.md#GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet) | **Get** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Get Action



## CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost

> ActionOutput CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(ctx, assetId, environmentId, organizationId).ActionRequest(actionRequest).Execute()

Create Action

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    assetId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    environmentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    actionRequest := *openapiclient.NewActionRequest("ActionName_example") // ActionRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActionsApi.CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(context.Background(), assetId, environmentId, organizationId).ActionRequest(actionRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActionsApi.CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost`: ActionOutput
    fmt.Fprintf(os.Stdout, "Response from `ActionsApi.CreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **string** |  | 
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **actionRequest** | [**ActionRequest**](ActionRequest.md) |  | 

### Return type

[**ActionOutput**](ActionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet

> ActionOutput GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(ctx, assetId, environmentId, actionId, organizationId).Execute()

Get Action

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    assetId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    environmentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    actionId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActionsApi.GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(context.Background(), assetId, environmentId, actionId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActionsApi.GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet`: ActionOutput
    fmt.Fprintf(os.Stdout, "Response from `ActionsApi.GetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **string** |  | 
**environmentId** | **string** |  | 
**actionId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





### Return type

[**ActionOutput**](ActionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

