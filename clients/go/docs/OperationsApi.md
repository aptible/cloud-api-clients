# \OperationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetOperationsApiV1OrganizationsOrganizationIdOperationsGet**](OperationsApi.md#GetOperationsApiV1OrganizationsOrganizationIdOperationsGet) | **Get** /api/v1/organizations/{organization_id}/operations/ | Get Operations
[**GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet**](OperationsApi.md#GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet) | **Get** /api/v1/organizations/{organization_id}/operations/{operation_id} | Get Operations By Operation Id



## GetOperationsApiV1OrganizationsOrganizationIdOperationsGet

> []OperationOutput GetOperationsApiV1OrganizationsOrganizationIdOperationsGet(ctx, organizationId).AssetId(assetId).EnvironmentId(environmentId).Execute()

Get Operations

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
    assetId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
    environmentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperationsApi.GetOperationsApiV1OrganizationsOrganizationIdOperationsGet(context.Background(), organizationId).AssetId(assetId).EnvironmentId(environmentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperationsApi.GetOperationsApiV1OrganizationsOrganizationIdOperationsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOperationsApiV1OrganizationsOrganizationIdOperationsGet`: []OperationOutput
    fmt.Fprintf(os.Stdout, "Response from `OperationsApi.GetOperationsApiV1OrganizationsOrganizationIdOperationsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **assetId** | **string** |  | 
 **environmentId** | **string** |  | 

### Return type

[**[]OperationOutput**](OperationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet

> []OperationOutput GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(ctx, operationId, organizationId).Execute()

Get Operations By Operation Id

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
    operationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperationsApi.GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(context.Background(), operationId, organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperationsApi.GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet`: []OperationOutput
    fmt.Fprintf(os.Stdout, "Response from `OperationsApi.GetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**operationId** | **string** |  | 
**organizationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]OperationOutput**](OperationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

