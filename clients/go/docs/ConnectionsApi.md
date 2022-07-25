# \ConnectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost**](ConnectionsApi.md#CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost) | **Post** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Create Connection
[**DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete**](ConnectionsApi.md#DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete) | **Delete** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Delete Connection
[**GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet**](ConnectionsApi.md#GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet) | **Get** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Get Connection By Id



## CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost

> ConnectionOutput CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(ctx, assetId, environmentId, organizationId).ConnectionInput(connectionInput).Execute()

Create Connection

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
    connectionInput := *openapiclient.NewConnectionInput("OutgoingAssetId_example") // ConnectionInput | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectionsApi.CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(context.Background(), assetId, environmentId, organizationId).ConnectionInput(connectionInput).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsApi.CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost`: ConnectionOutput
    fmt.Fprintf(os.Stdout, "Response from `ConnectionsApi.CreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiCreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **connectionInput** | [**ConnectionInput**](ConnectionInput.md) |  | 

### Return type

[**ConnectionOutput**](ConnectionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete

> interface{} DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(ctx, assetId, connectionId, environmentId, organizationId).Execute()

Delete Connection

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
    connectionId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    environmentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectionsApi.DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(context.Background(), assetId, connectionId, environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsApi.DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `ConnectionsApi.DeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **string** |  | 
**connectionId** | **string** |  | 
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





### Return type

**interface{}**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet

> ConnectionOutput GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(ctx, assetId, environmentId, connectionId, organizationId).Execute()

Get Connection By Id

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
    connectionId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectionsApi.GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(context.Background(), assetId, environmentId, connectionId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsApi.GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet`: ConnectionOutput
    fmt.Fprintf(os.Stdout, "Response from `ConnectionsApi.GetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **string** |  | 
**environmentId** | **string** |  | 
**connectionId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





### Return type

[**ConnectionOutput**](ConnectionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

