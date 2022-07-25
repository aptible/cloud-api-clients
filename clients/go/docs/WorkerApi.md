# \WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UpdateOperationApiV1OperationsOperationIdPut**](WorkerApi.md#UpdateOperationApiV1OperationsOperationIdPut) | **Put** /api/v1/operations/{operation_id} | Update Operation
[**WorkerHealthCheckApiV1WorkerHealthCheckPost**](WorkerApi.md#WorkerHealthCheckApiV1WorkerHealthCheckPost) | **Post** /api/v1/worker/health-check | Worker Health Check



## UpdateOperationApiV1OperationsOperationIdPut

> interface{} UpdateOperationApiV1OperationsOperationIdPut(ctx, operationId).OperationUpdate(operationUpdate).Execute()

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
    operationUpdate := *openapiclient.NewOperationUpdate("Id_example", openapiclient.OperationStatus("FAILED")) // OperationUpdate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkerApi.UpdateOperationApiV1OperationsOperationIdPut(context.Background(), operationId).OperationUpdate(operationUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WorkerApi.UpdateOperationApiV1OperationsOperationIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateOperationApiV1OperationsOperationIdPut`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `WorkerApi.UpdateOperationApiV1OperationsOperationIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**operationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateOperationApiV1OperationsOperationIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **operationUpdate** | [**OperationUpdate**](OperationUpdate.md) |  | 

### Return type

**interface{}**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## WorkerHealthCheckApiV1WorkerHealthCheckPost

> interface{} WorkerHealthCheckApiV1WorkerHealthCheckPost(ctx).HealthCheckFromWorker(healthCheckFromWorker).Execute()

Worker Health Check

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
    healthCheckFromWorker := *openapiclient.NewHealthCheckFromWorker("EnvironmentId_example", "ExecutionId_example", "Message_example") // HealthCheckFromWorker | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkerApi.WorkerHealthCheckApiV1WorkerHealthCheckPost(context.Background()).HealthCheckFromWorker(healthCheckFromWorker).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WorkerApi.WorkerHealthCheckApiV1WorkerHealthCheckPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `WorkerHealthCheckApiV1WorkerHealthCheckPost`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `WorkerApi.WorkerHealthCheckApiV1WorkerHealthCheckPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiWorkerHealthCheckApiV1WorkerHealthCheckPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthCheckFromWorker** | [**HealthCheckFromWorker**](HealthCheckFromWorker.md) |  | 

### Return type

**interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

