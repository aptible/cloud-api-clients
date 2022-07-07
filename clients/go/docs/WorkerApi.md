# \WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UpdateOperationApiV1OperationsOperationIdOperationStatusPut**](WorkerApi.md#UpdateOperationApiV1OperationsOperationIdOperationStatusPut) | **Put** /api/v1/operations/{operation_id}/{operation_status} | Update Operation



## UpdateOperationApiV1OperationsOperationIdOperationStatusPut

> interface{} UpdateOperationApiV1OperationsOperationIdOperationStatusPut(ctx, operationId, operationStatus).Execute()

Update Operation

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
    operationStatus := openapiclient.OperationStatus("FAILED") // OperationStatus | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkerApi.UpdateOperationApiV1OperationsOperationIdOperationStatusPut(context.Background(), operationId, operationStatus).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WorkerApi.UpdateOperationApiV1OperationsOperationIdOperationStatusPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateOperationApiV1OperationsOperationIdOperationStatusPut`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `WorkerApi.UpdateOperationApiV1OperationsOperationIdOperationStatusPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**operationId** | **string** |  | 
**operationStatus** | [**OperationStatus**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateOperationApiV1OperationsOperationIdOperationStatusPutRequest struct via the builder pattern


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

