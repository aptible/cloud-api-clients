# .OperationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operationGet**](OperationsApi.md#operationGet) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Operation Get
[**operationUpdate**](OperationsApi.md#operationUpdate) | **PUT** /api/v1/operations/{operation_id} | Operation Update


# **operationGet**
> OperationOutput operationGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OperationsApi(configuration);

let body:.OperationsApiOperationGetRequest = {
  // string
  operationId: "operation_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.operationGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**OperationOutput**

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

# **operationUpdate**
> any operationUpdate(operationUpdate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OperationsApi(configuration);

let body:.OperationsApiOperationUpdateRequest = {
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


