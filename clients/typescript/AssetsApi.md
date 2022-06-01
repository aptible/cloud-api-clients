# .AssetsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost**](AssetsApi.md#createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Create Asset
[**deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete**](AssetsApi.md#deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Delete Asset By Id
[**getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet**](AssetsApi.md#getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Get Asset By Id
[**getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet**](AssetsApi.md#getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Get Assets
[**updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut**](AssetsApi.md#updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Update Asset By Id


# **createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost**
> AssetOutput createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(assetInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiCreateAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPostRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
  // AssetInput
  assetInput: {
    asset: "asset_example",
    assetVersion: "assetVersion_example",
    assetVariables: {},
  },
};

apiInstance.createAssetApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsPost(body).then((data:any) => {
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

# **deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete**
> number deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiDeleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.deleteAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdDelete(body).then((data:any) => {
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

# **getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet**
> AssetOutput getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiGetAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdGet(body).then((data:any) => {
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

# **getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet**
> Array<AssetOutput> getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiGetAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGetRequest = {
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getAssetsApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsGet(body).then((data:any) => {
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

# **updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut**
> AssetOutput updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(assetInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiUpdateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPutRequest = {
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
    assetVariables: {},
  },
};

apiInstance.updateAssetByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdPut(body).then((data:any) => {
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


