# .AssetsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetCreate**](AssetsApi.md#assetCreate) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Asset Create
[**assetDelete**](AssetsApi.md#assetDelete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Delete
[**assetGet**](AssetsApi.md#assetGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Get
[**assetUpdate**](AssetsApi.md#assetUpdate) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Update


# **assetCreate**
> AssetOutput assetCreate(assetInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetCreateRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
  // AssetInput
  assetInput: {
    asset: "asset_example",
    assetVersion: "assetVersion_example",
    assetParameters: {},
    connectsTo: [
      "connectsTo_example",
    ],
  },
};

apiInstance.assetCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetInput** | **AssetInput**|  |
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**AssetOutput**

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

# **assetDelete**
> AssetOutput assetDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.assetDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**AssetOutput**

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

# **assetGet**
> AssetOutput assetGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.assetGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**AssetOutput**

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

# **assetUpdate**
> AssetOutput assetUpdate(assetInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetUpdateRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
  // AssetInput
  assetInput: {
    asset: "asset_example",
    assetVersion: "assetVersion_example",
    assetParameters: {},
    connectsTo: [
      "connectsTo_example",
    ],
  },
};

apiInstance.assetUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetInput** | **AssetInput**|  |
 **assetId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**AssetOutput**

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


