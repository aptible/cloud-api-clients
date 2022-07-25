# .ConnectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost**](ConnectionsApi.md#createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Create Connection
[**deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete**](ConnectionsApi.md#deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Delete Connection
[**getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet**](ConnectionsApi.md#getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Get Connection By Id


# **createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost**
> ConnectionOutput createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(connectionInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiCreateConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPostRequest = {
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

apiInstance.createConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsPost(body).then((data:any) => {
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

# **deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete**
> any deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiDeleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  connectionId: "connection_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.deleteConnectionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdDelete(body).then((data:any) => {
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

# **getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet**
> ConnectionOutput getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiGetConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  connectionId: "connection_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getConnectionByIdApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdConnectionsConnectionIdGet(body).then((data:any) => {
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


