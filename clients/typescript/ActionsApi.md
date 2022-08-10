# .ActionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost**](ActionsApi.md#createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Create Action
[**getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet**](ActionsApi.md#getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Get Action


# **createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost**
> ActionOutput createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(actionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionsApi(configuration);

let body:.ActionsApiCreateActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  organizationId: "organization_id_example",
  // ActionRequest
  actionRequest: {
    actionName: "actionName_example",
    parameters: null,
  },
};

apiInstance.createActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionRequest** | **ActionRequest**|  |
 **assetId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**ActionOutput**

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

# **getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet**
> ActionOutput getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionsApi(configuration);

let body:.ActionsApiGetActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  actionId: "action_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.getActionApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentIdAssetsAssetIdActionActionIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined
 **actionId** | [**string**] |  | defaults to undefined
 **organizationId** | [**string**] |  | defaults to undefined


### Return type

**ActionOutput**

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


