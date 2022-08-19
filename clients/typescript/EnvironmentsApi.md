# .EnvironmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost**](EnvironmentsApi.md#createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost) | **POST** /api/v1/organizations/{organization_id}/environments | Create Environment
[**deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete**](EnvironmentsApi.md#deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Delete Environment By Id
[**getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet**](EnvironmentsApi.md#getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Get Environment Allowed Assets
[**getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet**](EnvironmentsApi.md#getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Get Environment By Id
[**getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet**](EnvironmentsApi.md#getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Get Environment Connections
[**getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet**](EnvironmentsApi.md#getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet) | **GET** /api/v1/organizations/{organization_id}/environments | Get Environments
[**updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut**](EnvironmentsApi.md#updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Update Environment


# **createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost**
> EnvironmentOutput createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(environmentInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiCreateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPostRequest = {
  // string
  organizationId: "organization_id_example",
  // EnvironmentInput
  environmentInput: {
    name: "name_example",
    description: "description_example",
    data: {},
  },
};

apiInstance.createEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentInput** | **EnvironmentInput**|  |
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**EnvironmentOutput**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete**
> number deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiDeleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDeleteRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.deleteEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**number**

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

# **getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet**
> Array<AssetBundle> getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiGetEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGetRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getEnvironmentAllowedAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetBundlesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**Array<AssetBundle>**

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

# **getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet**
> EnvironmentOutput getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiGetEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGetRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getEnvironmentByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**EnvironmentOutput**

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

# **getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet**
> Array<ConnectionOutput> getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiGetEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGetRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getEnvironmentConnectionsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdConnectionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**Array<ConnectionOutput>**

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

# **getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet**
> Array<EnvironmentOutput> getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiGetEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGetRequest = {
  // string
  organizationId: "organization_id_example",
};

apiInstance.getEnvironmentsApiV1OrganizationsOrganizationIdEnvironmentsGet(body).then((data:any) => {
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

# **updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut**
> EnvironmentOutput updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(environmentInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiUpdateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPutRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
  // EnvironmentInput
  environmentInput: {
    name: "name_example",
    description: "description_example",
    data: {},
  },
};

apiInstance.updateEnvironmentApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentInput** | **EnvironmentInput**|  |
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**EnvironmentOutput**

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


