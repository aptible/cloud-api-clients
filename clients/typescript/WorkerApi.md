# .WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operationUpdate**](WorkerApi.md#operationUpdate) | **PUT** /api/v1/operations/{operation_id} | Operation Update
[**workerHealthCheck**](WorkerApi.md#workerHealthCheck) | **POST** /api/v1/worker/health-check | Worker Health Check


# **operationUpdate**
> any operationUpdate(operationUpdate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkerApi(configuration);

let body:.WorkerApiOperationUpdateRequest = {
  // string
  operationId: "operation_id_example",
  // OperationUpdate
  operationUpdate: {
    id: "id_example",
    status: "FAILED",
    data: null,
  },
};

apiInstance.operationUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationUpdate** | **OperationUpdate**|  |
 **operationId** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **workerHealthCheck**
> any workerHealthCheck(healthCheckFromWorker)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkerApi(configuration);

let body:.WorkerApiWorkerHealthCheckRequest = {
  // HealthCheckFromWorker
  healthCheckFromWorker: {
    environmentId: "environmentId_example",
    messageId: "messageId_example",
    executionId: "executionId_example",
    message: "message_example",
  },
};

apiInstance.workerHealthCheck(body).then((data:any) => {
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


