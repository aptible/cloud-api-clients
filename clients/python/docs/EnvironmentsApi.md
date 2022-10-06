# cloud_api_client.EnvironmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environment_create**](EnvironmentsApi.md#environment_create) | **POST** /api/v1/organizations/{organization_id}/environments | Environment Create
[**environment_delete**](EnvironmentsApi.md#environment_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Delete
[**environment_get**](EnvironmentsApi.md#environment_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Get
[**environment_get_allowed_asset_bundles**](EnvironmentsApi.md#environment_get_allowed_asset_bundles) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Environment Get Allowed Asset Bundles
[**environment_get_assets**](EnvironmentsApi.md#environment_get_assets) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Environment Get Assets
[**environment_get_connections**](EnvironmentsApi.md#environment_get_connections) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Environment Get Connections
[**environment_update**](EnvironmentsApi.md#environment_update) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Update


# **environment_create**
> EnvironmentOutput environment_create(organization_id, environment_input)

Environment Create

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
        # Environment Create
        api_response = api_instance.environment_create(organization_id, environment_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->environment_create: %s\n" % e)
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

# **environment_delete**
> bool, date, datetime, dict, float, int, list, str, none_type environment_delete(environment_id, organization_id)

Environment Delete

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
        # Environment Delete
        api_response = api_instance.environment_delete(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->environment_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

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

# **environment_get**
> EnvironmentOutput environment_get(environment_id, organization_id)

Environment Get

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
        # Environment Get
        api_response = api_instance.environment_get(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->environment_get: %s\n" % e)
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

# **environment_get_allowed_asset_bundles**
> [AssetBundle] environment_get_allowed_asset_bundles(environment_id, organization_id)

Environment Get Allowed Asset Bundles

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
        # Environment Get Allowed Asset Bundles
        api_response = api_instance.environment_get_allowed_asset_bundles(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->environment_get_allowed_asset_bundles: %s\n" % e)
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

# **environment_get_assets**
> [AssetOutput] environment_get_assets(environment_id, organization_id)

Environment Get Assets

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
        # Environment Get Assets
        api_response = api_instance.environment_get_assets(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->environment_get_assets: %s\n" % e)
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

# **environment_get_connections**
> [ConnectionOutput] environment_get_connections(environment_id, organization_id)

Environment Get Connections

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
        # Environment Get Connections
        api_response = api_instance.environment_get_connections(environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->environment_get_connections: %s\n" % e)
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

# **environment_update**
> EnvironmentOutput environment_update(environment_id, organization_id, environment_input)

Environment Update

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
        # Environment Update
        api_response = api_instance.environment_update(environment_id, organization_id, environment_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling EnvironmentsApi->environment_update: %s\n" % e)
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

