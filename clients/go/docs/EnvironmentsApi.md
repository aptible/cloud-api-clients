# \EnvironmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost**](EnvironmentsApi.md#CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost) | **Post** /api/v1/organizations/{organization_id}/environments | Create Environment
[**DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete**](EnvironmentsApi.md#DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete) | **Delete** /api/v1/organizations/{organization_id}/environments/{environment_id} | Delete Environment By Id
[**GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet**](EnvironmentsApi.md#GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet) | **Get** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Get Assets
[**GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet**](EnvironmentsApi.md#GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet) | **Get** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Get Environment Allowed Assets
[**GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet**](EnvironmentsApi.md#GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet) | **Get** /api/v1/organizations/{organization_id}/environments/{environment_id} | Get Environment By Id
[**GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet**](EnvironmentsApi.md#GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet) | **Get** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Get Environment Connections
[**GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet**](EnvironmentsApi.md#GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet) | **Get** /api/v1/organizations/{organization_id}/environments | Get Environments
[**UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut**](EnvironmentsApi.md#UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut) | **Put** /api/v1/organizations/{organization_id}/environments/{environment_id} | Update Environment



## CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost

> EnvironmentOutput CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(ctx, organizationId).EnvironmentInput(environmentInput).Execute()

Create Environment

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
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    environmentInput := *openapiclient.NewEnvironmentInput("Name_example", map[string]interface{}(123)) // EnvironmentInput | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(context.Background(), organizationId).EnvironmentInput(environmentInput).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost`: EnvironmentOutput
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.CreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **environmentInput** | [**EnvironmentInput**](EnvironmentInput.md) |  | 

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete

> int32 DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(ctx, environmentId, organizationId).Execute()

Delete Environment By Id

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(context.Background(), environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete`: int32
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.DeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest struct via the builder pattern


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


## GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet

> []AssetOutput GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(ctx, environmentId, organizationId).Execute()

Get Assets

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(context.Background(), environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet`: []AssetOutput
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.GetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet

> []AssetBundle GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(ctx, environmentId, organizationId).Execute()

Get Environment Allowed Assets

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(context.Background(), environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet`: []AssetBundle
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.GetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]AssetBundle**](AssetBundle.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet

> EnvironmentOutput GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(ctx, environmentId, organizationId).Execute()

Get Environment By Id

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(context.Background(), environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet`: EnvironmentOutput
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.GetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet

> []ConnectionOutput GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet(ctx, environmentId, organizationId).Execute()

Get Environment Connections

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet(context.Background(), environmentId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet`: []ConnectionOutput
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.GetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]ConnectionOutput**](ConnectionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet

> []EnvironmentOutput GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(ctx, organizationId).Execute()

Get Environments

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
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(context.Background(), organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet`: []EnvironmentOutput
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.GetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]EnvironmentOutput**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut

> EnvironmentOutput UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(ctx, environmentId, organizationId).EnvironmentInput(environmentInput).Execute()

Update Environment

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
    environmentInput := *openapiclient.NewEnvironmentInput("Name_example", map[string]interface{}(123)) // EnvironmentInput | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EnvironmentsApi.UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(context.Background(), environmentId, organizationId).EnvironmentInput(environmentInput).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EnvironmentsApi.UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut`: EnvironmentOutput
    fmt.Fprintf(os.Stdout, "Response from `EnvironmentsApi.UpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**environmentId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **environmentInput** | [**EnvironmentInput**](EnvironmentInput.md) |  | 

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

