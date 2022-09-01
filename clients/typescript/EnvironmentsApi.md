# .EnvironmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentCreate**](EnvironmentsApi.md#environmentCreate) | **POST** /api/v1/organizations/{organization_id}/environments | Environment Create
[**environmentDelete**](EnvironmentsApi.md#environmentDelete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Delete
[**environmentGet**](EnvironmentsApi.md#environmentGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Get
[**environmentGetAllowedAssetBundles**](EnvironmentsApi.md#environmentGetAllowedAssetBundles) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Environment Get Allowed Asset Bundles
[**environmentGetAssets**](EnvironmentsApi.md#environmentGetAssets) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Environment Get Assets
[**environmentGetConnections**](EnvironmentsApi.md#environmentGetConnections) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Environment Get Connections
[**environmentUpdate**](EnvironmentsApi.md#environmentUpdate) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Update


# **environmentCreate**
> EnvironmentOutput environmentCreate(environmentInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiEnvironmentCreateRequest = {
  // string
  organizationId: "organization_id_example",
  // EnvironmentInput
  environmentInput: {
    name: "name_example",
    description: "description_example",
    data: {},
  },
};

apiInstance.environmentCreate(body).then((data:any) => {
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

# **environmentDelete**
> any environmentDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiEnvironmentDeleteRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.environmentDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] |  | defaults to undefined
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

# **environmentGet**
> EnvironmentOutput environmentGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiEnvironmentGetRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.environmentGet(body).then((data:any) => {
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

# **environmentGetAllowedAssetBundles**
> Array<AssetBundle> environmentGetAllowedAssetBundles()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiEnvironmentGetAllowedAssetBundlesRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.environmentGetAllowedAssetBundles(body).then((data:any) => {
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

# **environmentGetAssets**
> Array<AssetOutput> environmentGetAssets()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiEnvironmentGetAssetsRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.environmentGetAssets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**Array<AssetOutput>**

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

# **environmentGetConnections**
> Array<ConnectionOutput> environmentGetConnections()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiEnvironmentGetConnectionsRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.environmentGetConnections(body).then((data:any) => {
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

# **environmentUpdate**
> EnvironmentOutput environmentUpdate(environmentInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiEnvironmentUpdateRequest = {
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

apiInstance.environmentUpdate(body).then((data:any) => {
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


