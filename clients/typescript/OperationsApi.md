# .OperationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOperationsApiV1OrganizationsOrganizationIdOperationsGet**](OperationsApi.md#getOperationsApiV1OrganizationsOrganizationIdOperationsGet) | **GET** /api/v1/organizations/{organization_id}/operations/ | Get Operations
[**getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet**](OperationsApi.md#getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Get Operations By Operation Id


# **getOperationsApiV1OrganizationsOrganizationIdOperationsGet**
> Array<OperationOutput> getOperationsApiV1OrganizationsOrganizationIdOperationsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OperationsApi(configuration);

let body:.OperationsApiGetOperationsApiV1OrganizationsOrganizationIdOperationsGetRequest = {
  // string
  organizationId: "organization_id_example",
  // string (optional)
  assetId: "asset_id_example",
  // string (optional)
  environmentId: "environment_id_example",
};

apiInstance.getOperationsApiV1OrganizationsOrganizationIdOperationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | (optional) defaults to undefined
 **environmentId** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<OperationOutput>**

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

# **getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet**
> Array<OperationOutput> getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OperationsApi(configuration);

let body:.OperationsApiGetOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGetRequest = {
  // string
  operationId: "operation_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getOperationsByOperationIdApiV1OrganizationsOrganizationIdOperationsOperationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**Array<OperationOutput>**

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


