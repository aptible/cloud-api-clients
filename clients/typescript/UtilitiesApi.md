# .UtilitiesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPingApiV1DebugPingGet**](UtilitiesApi.md#getPingApiV1DebugPingGet) | **GET** /api/v1/debug/ping | Get Ping
[**getUserApiV1DebugUserAuthGet**](UtilitiesApi.md#getUserApiV1DebugUserAuthGet) | **GET** /api/v1/debug/user_auth | Get User
[**getUserRoleApiV1DebugUserRoleMiddlewareCheckGet**](UtilitiesApi.md#getUserRoleApiV1DebugUserRoleMiddlewareCheckGet) | **GET** /api/v1/debug/user_role_middleware_check | Get User Role


# **getPingApiV1DebugPingGet**
> TextResponse getPingApiV1DebugPingGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UtilitiesApi(configuration);

let body:any = {};

apiInstance.getPingApiV1DebugPingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TextResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserApiV1DebugUserAuthGet**
> any getUserApiV1DebugUserAuthGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UtilitiesApi(configuration);

let body:any = {};

apiInstance.getUserApiV1DebugUserAuthGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserRoleApiV1DebugUserRoleMiddlewareCheckGet**
> any getUserRoleApiV1DebugUserRoleMiddlewareCheckGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UtilitiesApi(configuration);

let body:.UtilitiesApiGetUserRoleApiV1DebugUserRoleMiddlewareCheckGetRequest = {
  // string
  organizationId: "organization_id_example",
};

apiInstance.getUserRoleApiV1DebugUserRoleMiddlewareCheckGet(body).then((data:any) => {
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


