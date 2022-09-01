# .OrganizationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationDelete**](OrganizationsApi.md#organizationDelete) | **DELETE** /api/v1/organizations/{organization_id} | Organization Delete
[**organizationGet**](OrganizationsApi.md#organizationGet) | **GET** /api/v1/organizations/{organization_id} | Organization Get
[**organizationGetEnvironments**](OrganizationsApi.md#organizationGetEnvironments) | **GET** /api/v1/organizations/{organization_id}/environments | Organization Get Environments
[**organizationGetOperations**](OrganizationsApi.md#organizationGetOperations) | **GET** /api/v1/organizations/{organization_id}/operations/ | Organization Get Operations
[**organizationList**](OrganizationsApi.md#organizationList) | **GET** /api/v1/organizations/ | Organization List
[**organizationUpdate**](OrganizationsApi.md#organizationUpdate) | **PUT** /api/v1/organizations/{organization_id} | Organization Update


# **organizationDelete**
> any organizationDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiOrganizationDeleteRequest = {
  // string
  organizationId: "organization_id_example",
};

apiInstance.organizationDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] |  | defaults to undefined


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

# **organizationGet**
> OrganizationOutput organizationGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiOrganizationGetRequest = {
  // string
  organizationId: "organization_id_example",
};

apiInstance.organizationGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**OrganizationOutput**

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

# **organizationGetEnvironments**
> Array<EnvironmentOutput> organizationGetEnvironments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiOrganizationGetEnvironmentsRequest = {
  // string
  organizationId: "organization_id_example",
};

apiInstance.organizationGetEnvironments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**Array<EnvironmentOutput>**

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

# **organizationGetOperations**
> Array<OperationOutput> organizationGetOperations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiOrganizationGetOperationsRequest = {
  // string
  organizationId: "organization_id_example",
  // string (optional)
  assetId: "asset_id_example",
  // string (optional)
  environmentId: "environment_id_example",
};

apiInstance.organizationGetOperations(body).then((data:any) => {
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

# **organizationList**
> Array<OrganizationOutput> organizationList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:any = {};

apiInstance.organizationList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<OrganizationOutput>**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organizationUpdate**
> OrganizationOutput organizationUpdate(organizationInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiOrganizationUpdateRequest = {
  // string
  organizationId: "organization_id_example",
  // OrganizationInput
  organizationInput: {
    name: "name_example",
    baaStatus: "baaStatus_example",
    awsOu: "awsOu_example",
    contactDetails: {},
  },
};

apiInstance.organizationUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationInput** | **OrganizationInput**|  |
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**OrganizationOutput**

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


