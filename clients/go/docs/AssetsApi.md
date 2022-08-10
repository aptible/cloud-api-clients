# \AssetsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost**](AssetsApi.md#CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost) | **Post** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Create Asset
[**DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete**](AssetsApi.md#DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete) | **Delete** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Delete Asset By Id
[**GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet**](AssetsApi.md#GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet) | **Get** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Get Asset By Id
[**UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut**](AssetsApi.md#UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut) | **Put** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Update Asset By Id



## CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost

> AssetOutput CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(ctx, environmentId, organizationId).AssetInput(assetInput).Execute()

Create Asset

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
    environmentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    assetInput := *openapiclient.NewAssetInput("Asset_example", "AssetVersion_example", map[string]interface{}(123)) // AssetInput | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AssetsApi.CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(context.Background(), environmentId, organizationId).AssetInput(assetInput).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AssetsApi.CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost`: AssetOutput
    fmt.Fprintf(os.Stdout, "Response from `AssetsApi.CreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **assetInput** | [**AssetInput**](AssetInput.md) |  | 

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete

> int32 DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(ctx, assetId, environmentId, organizationId).Execute()

Delete Asset By Id

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AssetsApi.DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(context.Background(), assetId, environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AssetsApi.DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete`: int32
    fmt.Fprintf(os.Stdout, "Response from `AssetsApi.DeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiDeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

**int32**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet

> AssetOutput GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(ctx, assetId, environmentId, organizationId).Execute()

Get Asset By Id

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AssetsApi.GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(context.Background(), assetId, environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AssetsApi.GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet`: AssetOutput
    fmt.Fprintf(os.Stdout, "Response from `AssetsApi.GetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiGetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut

> AssetOutput UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(ctx, assetId, environmentId, organizationId).AssetInput(assetInput).Execute()

Update Asset By Id

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
    assetInput := *openapiclient.NewAssetInput("Asset_example", "AssetVersion_example", map[string]interface{}(123)) // AssetInput | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AssetsApi.UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(context.Background(), assetId, environmentId, organizationId).AssetInput(assetInput).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AssetsApi.UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut`: AssetOutput
    fmt.Fprintf(os.Stdout, "Response from `AssetsApi.UpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiUpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **assetInput** | [**AssetInput**](AssetInput.md) |  | 

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

