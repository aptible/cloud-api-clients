# cloud_api_client.AssetsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post**](AssetsApi.md#create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Create Asset
[**delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete**](AssetsApi.md#delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Delete Asset By Id
[**get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get**](AssetsApi.md#get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Get Asset By Id
[**get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get**](AssetsApi.md#get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Get Assets
[**update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put**](AssetsApi.md#update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Update Asset By Id


# **create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post**
> AssetOutput create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post(environment_id, organization_id, asset_input)

Create Asset

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import assets_api
from cloud_api_client.model.asset_output import AssetOutput
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.asset_input import AssetInput
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = cloud_api_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = cloud_api_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with cloud_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = assets_api.AssetsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 
    asset_input = AssetInput(
        asset="asset_example",
        asset_version="asset_version_example",
        asset_parameters={},
    ) # AssetInput | 

    # example passing only required values which don't have defaults set
    try:
        # Create Asset
        api_response = api_instance.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post(environment_id, organization_id, asset_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling AssetsApi->create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |
 **asset_input** | [**AssetInput**](AssetInput.md)|  |

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete**
> int delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete(asset_id, environment_id, organization_id)

Delete Asset By Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import assets_api
from cloud_api_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = cloud_api_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = cloud_api_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with cloud_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = assets_api.AssetsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Asset By Id
        api_response = api_instance.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete(asset_id, environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling AssetsApi->delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

**int**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get**
> AssetOutput get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get(asset_id, environment_id, organization_id)

Get Asset By Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import assets_api
from cloud_api_client.model.asset_output import AssetOutput
from cloud_api_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = cloud_api_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = cloud_api_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with cloud_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = assets_api.AssetsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Asset By Id
        api_response = api_instance.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get(asset_id, environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling AssetsApi->get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get**
> [AssetOutput] get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get(environment_id, organization_id)

Get Assets

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import assets_api
from cloud_api_client.model.asset_output import AssetOutput
from cloud_api_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = cloud_api_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = cloud_api_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with cloud_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = assets_api.AssetsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Assets
        api_response = api_instance.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling AssetsApi->get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**[AssetOutput]**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put**
> AssetOutput update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put(asset_id, environment_id, organization_id, asset_input)

Update Asset By Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import assets_api
from cloud_api_client.model.asset_output import AssetOutput
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.asset_input import AssetInput
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = cloud_api_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = cloud_api_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with cloud_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = assets_api.AssetsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 
    asset_input = AssetInput(
        asset="asset_example",
        asset_version="asset_version_example",
        asset_parameters={},
    ) # AssetInput | 

    # example passing only required values which don't have defaults set
    try:
        # Update Asset By Id
        api_response = api_instance.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put(asset_id, environment_id, organization_id, asset_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling AssetsApi->update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |
 **asset_input** | [**AssetInput**](AssetInput.md)|  |

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

