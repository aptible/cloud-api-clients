# \OrganizationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteApiV1OrganizationsOrganizationIdDelete**](OrganizationsApi.md#DeleteApiV1OrganizationsOrganizationIdDelete) | **Delete** /api/v1/organizations/{organization_id} | Delete
[**GetOrganizationByIdApiV1OrganizationsOrganizationIdGet**](OrganizationsApi.md#GetOrganizationByIdApiV1OrganizationsOrganizationIdGet) | **Get** /api/v1/organizations/{organization_id} | Get Organization By Id
[**GetOrganizationsApiV1OrganizationsGet**](OrganizationsApi.md#GetOrganizationsApiV1OrganizationsGet) | **Get** /api/v1/organizations/ | Get Organizations
[**PutOrganizationApiV1OrganizationsOrganizationIdPut**](OrganizationsApi.md#PutOrganizationApiV1OrganizationsOrganizationIdPut) | **Put** /api/v1/organizations/{organization_id} | Put Organization



## DeleteApiV1OrganizationsOrganizationIdDelete

> interface{} DeleteApiV1OrganizationsOrganizationIdDelete(ctx, organizationId).Execute()

Delete

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
    resp, r, err := apiClient.OrganizationsApi.DeleteApiV1OrganizationsOrganizationIdDelete(context.Background(), organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsApi.DeleteApiV1OrganizationsOrganizationIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteApiV1OrganizationsOrganizationIdDelete`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `OrganizationsApi.DeleteApiV1OrganizationsOrganizationIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApiV1OrganizationsOrganizationIdDeleteRequest struct via the builder pattern


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


## GetOrganizationByIdApiV1OrganizationsOrganizationIdGet

> OrganizationOutput GetOrganizationByIdApiV1OrganizationsOrganizationIdGet(ctx, organizationId).Execute()

Get Organization By Id

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
    resp, r, err := apiClient.OrganizationsApi.GetOrganizationByIdApiV1OrganizationsOrganizationIdGet(context.Background(), organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsApi.GetOrganizationByIdApiV1OrganizationsOrganizationIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOrganizationByIdApiV1OrganizationsOrganizationIdGet`: OrganizationOutput
    fmt.Fprintf(os.Stdout, "Response from `OrganizationsApi.GetOrganizationByIdApiV1OrganizationsOrganizationIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationByIdApiV1OrganizationsOrganizationIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**OrganizationOutput**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOrganizationsApiV1OrganizationsGet

> []OrganizationOutput GetOrganizationsApiV1OrganizationsGet(ctx).Execute()

Get Organizations

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
    resp, r, err := apiClient.OrganizationsApi.GetOrganizationsApiV1OrganizationsGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsApi.GetOrganizationsApiV1OrganizationsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOrganizationsApiV1OrganizationsGet`: []OrganizationOutput
    fmt.Fprintf(os.Stdout, "Response from `OrganizationsApi.GetOrganizationsApiV1OrganizationsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationsApiV1OrganizationsGetRequest struct via the builder pattern


### Return type

[**[]OrganizationOutput**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutOrganizationApiV1OrganizationsOrganizationIdPut

> OrganizationOutput PutOrganizationApiV1OrganizationsOrganizationIdPut(ctx, organizationId).OrganizationInput(organizationInput).Execute()

Put Organization

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
    organizationInput := *openapiclient.NewOrganizationInput("Name_example", "BaaStatus_example", map[string]interface{}(123)) // OrganizationInput | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OrganizationsApi.PutOrganizationApiV1OrganizationsOrganizationIdPut(context.Background(), organizationId).OrganizationInput(organizationInput).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsApi.PutOrganizationApiV1OrganizationsOrganizationIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutOrganizationApiV1OrganizationsOrganizationIdPut`: OrganizationOutput
    fmt.Fprintf(os.Stdout, "Response from `OrganizationsApi.PutOrganizationApiV1OrganizationsOrganizationIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutOrganizationApiV1OrganizationsOrganizationIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **organizationInput** | [**OrganizationInput**](OrganizationInput.md) |  | 

### Return type

[**OrganizationOutput**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

