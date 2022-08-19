# .WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workerHealthCheckApiV1WorkerHealthCheckPost**](WorkerApi.md#workerHealthCheckApiV1WorkerHealthCheckPost) | **POST** /api/v1/worker/health-check | Worker Health Check


# **workerHealthCheckApiV1WorkerHealthCheckPost**
> any workerHealthCheckApiV1WorkerHealthCheckPost(healthCheckFromWorker)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkerApi(configuration);

let body:.WorkerApiWorkerHealthCheckApiV1WorkerHealthCheckPostRequest = {
  // HealthCheckFromWorker
  healthCheckFromWorker: {
    environmentId: "environmentId_example",
    messageId: "messageId_example",
    executionId: "executionId_example",
    message: "message_example",
  },
};

apiInstance.workerHealthCheckApiV1WorkerHealthCheckPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthCheckFromWorker** | **HealthCheckFromWorker**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


