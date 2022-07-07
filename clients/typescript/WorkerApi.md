# .WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateOperationApiV1OperationsOperationIdOperationStatusPut**](WorkerApi.md#updateOperationApiV1OperationsOperationIdOperationStatusPut) | **PUT** /api/v1/operations/{operation_id}/{operation_status} | Update Operation


# **updateOperationApiV1OperationsOperationIdOperationStatusPut**
> any updateOperationApiV1OperationsOperationIdOperationStatusPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkerApi(configuration);

let body:.WorkerApiUpdateOperationApiV1OperationsOperationIdOperationStatusPutRequest = {
  // string
  operationId: "operation_id_example",
  // OperationStatus
  operationStatus: "FAILED",
};

apiInstance.updateOperationApiV1OperationsOperationIdOperationStatusPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationId** | [**string**] |  | defaults to undefined
 **operationStatus** | **OperationStatus** |  | defaults to undefined


### Return type

**any**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


