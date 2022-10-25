# .ActionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionCreate**](ActionsApi.md#actionCreate) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Action Create
[**actionGet**](ActionsApi.md#actionGet) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Action Get


# **actionCreate**
> ActionResponse actionCreate(actionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionsApi(configuration);

let body:.ActionsApiActionCreateRequest = {
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

apiInstance.actionCreate(body).then((data:any) => {
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

**ActionResponse**

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

# **actionGet**
> ActionResponse actionGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionsApi(configuration);

let body:.ActionsApiActionGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  environmentId: "environment_id_example",
  // string
  actionId: "action_id_example",
  // string
  organizationId: "organization_id_example",
};

apiInstance.actionGet(body).then((data:any) => {
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

**ActionResponse**

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


