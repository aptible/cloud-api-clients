# \WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WorkerHealthCheckApiV1WorkerHealthCheckPost**](WorkerApi.md#WorkerHealthCheckApiV1WorkerHealthCheckPost) | **Post** /api/v1/worker/health-check | Worker Health Check



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

