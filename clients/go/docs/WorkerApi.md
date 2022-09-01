# \WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WorkerHealthCheck**](WorkerApi.md#WorkerHealthCheck) | **Post** /api/v1/worker/health-check | Worker Health Check



## WorkerHealthCheck

> interface{} WorkerHealthCheck(ctx).HealthCheckFromWorker(healthCheckFromWorker).Execute()

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
    resp, r, err := apiClient.WorkerApi.WorkerHealthCheck(context.Background()).HealthCheckFromWorker(healthCheckFromWorker).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WorkerApi.WorkerHealthCheck``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `WorkerHealthCheck`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `WorkerApi.WorkerHealthCheck`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiWorkerHealthCheckRequest struct via the builder pattern


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

