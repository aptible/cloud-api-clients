# .OrganizationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApiV1OrganizationsOrganizationIdDelete**](OrganizationsApi.md#deleteApiV1OrganizationsOrganizationIdDelete) | **DELETE** /api/v1/organizations/{organization_id} | Delete
[**getOrganizationByIdApiV1OrganizationsOrganizationIdGet**](OrganizationsApi.md#getOrganizationByIdApiV1OrganizationsOrganizationIdGet) | **GET** /api/v1/organizations/{organization_id} | Get Organization By Id
[**getOrganizationsApiV1OrganizationsGet**](OrganizationsApi.md#getOrganizationsApiV1OrganizationsGet) | **GET** /api/v1/organizations/ | Get Organizations
[**putOrganizationApiV1OrganizationsOrganizationIdPut**](OrganizationsApi.md#putOrganizationApiV1OrganizationsOrganizationIdPut) | **PUT** /api/v1/organizations/{organization_id} | Put Organization


# **deleteApiV1OrganizationsOrganizationIdDelete**
> any deleteApiV1OrganizationsOrganizationIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiDeleteApiV1OrganizationsOrganizationIdDeleteRequest = {
  // string
  organizationId: "organization_id_example",
};

apiInstance.deleteApiV1OrganizationsOrganizationIdDelete(body).then((data:any) => {
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

# **getOrganizationByIdApiV1OrganizationsOrganizationIdGet**
> OrganizationOutput getOrganizationByIdApiV1OrganizationsOrganizationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiGetOrganizationByIdApiV1OrganizationsOrganizationIdGetRequest = {
  // string
  organizationId: "organization_id_example",
};

apiInstance.getOrganizationByIdApiV1OrganizationsOrganizationIdGet(body).then((data:any) => {
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

# **getOrganizationsApiV1OrganizationsGet**
> Array<OrganizationOutput> getOrganizationsApiV1OrganizationsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:any = {};

apiInstance.getOrganizationsApiV1OrganizationsGet(body).then((data:any) => {
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

# **putOrganizationApiV1OrganizationsOrganizationIdPut**
> OrganizationOutput putOrganizationApiV1OrganizationsOrganizationIdPut(organizationInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiPutOrganizationApiV1OrganizationsOrganizationIdPutRequest = {
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

apiInstance.putOrganizationApiV1OrganizationsOrganizationIdPut(body).then((data:any) => {
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


