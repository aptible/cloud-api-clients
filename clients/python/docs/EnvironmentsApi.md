# cloud_api_client.EnvironmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_environment_api_v1_organizations_organization_id_environments_post**](EnvironmentsApi.md#create_environment_api_v1_organizations_organization_id_environments_post) | **POST** /api/v1/organizations/{organization_id}/environments | Create Environment
[**delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete**](EnvironmentsApi.md#delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Delete Environment By Id
[**get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get**](EnvironmentsApi.md#get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Get Assets
[**get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get**](EnvironmentsApi.md#get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Get Environment Allowed Assets
[**get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get**](EnvironmentsApi.md#get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Get Environment By Id
[**get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get**](EnvironmentsApi.md#get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Get Environment Connections
[**get_environments_api_v1_organizations_organization_id_environments_get**](EnvironmentsApi.md#get_environments_api_v1_organizations_organization_id_environments_get) | **GET** /api/v1/organizations/{organization_id}/environments | Get Environments
[**update_environment_api_v1_organizations_organization_id_environments_environment_id_put**](EnvironmentsApi.md#update_environment_api_v1_organizations_organization_id_environments_environment_id_put) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Update Environment


# **create_environment_api_v1_organizations_organization_id_environments_post**
> EnvironmentOutput create_environment_api_v1_organizations_organization_id_environments_post(organization_id, environment_input)

Create Environment

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
from cloud_api_client.model.environment_input import EnvironmentInput
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.environment_output import EnvironmentOutput
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    organization_id = "organization_id_example" # str | 
    environment_input = EnvironmentInput(
        name="name_example",
        description="description_example",
        data={},
    ) # EnvironmentInput | 

    # example passing only required values which don't have defaults set
    try:
        # Create Environment
        api_response = api_instance.create_environment_api_v1_organizations_organization_id_environments_post(organization_id, environment_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->create_environment_api_v1_organizations_organization_id_environments_post: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  |
 **environment_input** | [**EnvironmentInput**](EnvironmentInput.md)|  |

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

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

# **delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete**
> int delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete(environment_id, organization_id)

Delete Environment By Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Environment By Id
        api_response = api_instance.delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get**
> [AssetOutput] get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get(environment_id, organization_id)

Get Assets

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Assets
        api_response = api_instance.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get: %s\n" % e)
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

# **get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get**
> [AssetBundle] get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get(environment_id, organization_id)

Get Environment Allowed Assets

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
from cloud_api_client.model.asset_bundle import AssetBundle
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Environment Allowed Assets
        api_response = api_instance.get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**[AssetBundle]**](AssetBundle.md)

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

# **get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get**
> EnvironmentOutput get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get(environment_id, organization_id)

Get Environment By Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.environment_output import EnvironmentOutput
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Environment By Id
        api_response = api_instance.get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

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

# **get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get**
> [ConnectionOutput] get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get(environment_id, organization_id)

Get Environment Connections

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
from cloud_api_client.model.connection_output import ConnectionOutput
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Environment Connections
        api_response = api_instance.get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**[ConnectionOutput]**](ConnectionOutput.md)

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

# **get_environments_api_v1_organizations_organization_id_environments_get**
> [EnvironmentOutput] get_environments_api_v1_organizations_organization_id_environments_get(organization_id)

Get Environments

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.environment_output import EnvironmentOutput
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Environments
        api_response = api_instance.get_environments_api_v1_organizations_organization_id_environments_get(organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->get_environments_api_v1_organizations_organization_id_environments_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  |

### Return type

[**[EnvironmentOutput]**](EnvironmentOutput.md)

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

# **update_environment_api_v1_organizations_organization_id_environments_environment_id_put**
> EnvironmentOutput update_environment_api_v1_organizations_organization_id_environments_environment_id_put(environment_id, organization_id, environment_input)

Update Environment

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import environments_api
from cloud_api_client.model.environment_input import EnvironmentInput
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.environment_output import EnvironmentOutput
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
    api_instance = environments_api.EnvironmentsApi(api_client)
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 
    environment_input = EnvironmentInput(
        name="name_example",
        description="description_example",
        data={},
    ) # EnvironmentInput | 

    # example passing only required values which don't have defaults set
    try:
        # Update Environment
        api_response = api_instance.update_environment_api_v1_organizations_organization_id_environments_environment_id_put(environment_id, organization_id, environment_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->update_environment_api_v1_organizations_organization_id_environments_environment_id_put: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |
 **environment_input** | [**EnvironmentInput**](EnvironmentInput.md)|  |

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

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

