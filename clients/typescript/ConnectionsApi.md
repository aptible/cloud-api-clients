# .ConnectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectionCreate**](ConnectionsApi.md#connectionCreate) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Connection Create
[**connectionDelete**](ConnectionsApi.md#connectionDelete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Connection Delete
[**connectionGet**](ConnectionsApi.md#connectionGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Connection Get


# **connectionCreate**
> ConnectionOutput connectionCreate(connectionInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionCreateRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
  // ConnectionInput
  connectionInput: {
    description: "description_example",
    outgoingAssetId: "outgoingAssetId_example",
  },
};

apiInstance.connectionCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionInput** | **ConnectionInput**|  |
 **assetId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**ConnectionOutput**

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

# **connectionDelete**
> any connectionDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  connectionId: "connection_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.connectionDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **connectionId** | [**string**] |  | defaults to undefined
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

# **connectionGet**
> ConnectionOutput connectionGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  connectionId: "connection_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.connectionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined
 **connectionId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**ConnectionOutput**

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


