# \UtilitiesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPingApiV1DebugPingGet**](UtilitiesApi.md#GetPingApiV1DebugPingGet) | **Get** /api/v1/debug/ping | Get Ping
[**GetUserApiV1DebugUserAuthGet**](UtilitiesApi.md#GetUserApiV1DebugUserAuthGet) | **Get** /api/v1/debug/user_auth | Get User
[**GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet**](UtilitiesApi.md#GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet) | **Get** /api/v1/debug/user_role_middleware_check | Get User Role



## GetPingApiV1DebugPingGet

> TextResponse GetPingApiV1DebugPingGet(ctx).Execute()

Get Ping

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UtilitiesApi.GetPingApiV1DebugPingGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.GetPingApiV1DebugPingGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPingApiV1DebugPingGet`: TextResponse
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.GetPingApiV1DebugPingGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPingApiV1DebugPingGetRequest struct via the builder pattern


### Return type

[**TextResponse**](TextResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserApiV1DebugUserAuthGet

> interface{} GetUserApiV1DebugUserAuthGet(ctx).Execute()

Get User

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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UtilitiesApi.GetUserApiV1DebugUserAuthGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.GetUserApiV1DebugUserAuthGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUserApiV1DebugUserAuthGet`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.GetUserApiV1DebugUserAuthGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserApiV1DebugUserAuthGetRequest struct via the builder pattern


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


## GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet

> interface{} GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet(ctx).OrganizationId(organizationId).Execute()

Get User Role

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
    resp, r, err := apiClient.UtilitiesApi.GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet(context.Background()).OrganizationId(organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.GetUserRoleApiV1DebugUserRoleMiddlewareCheckGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserRoleApiV1DebugUserRoleMiddlewareCheckGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string** |  | 

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

