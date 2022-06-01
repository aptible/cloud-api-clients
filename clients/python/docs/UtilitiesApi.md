# cloud_api_client.UtilitiesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_ping_api_v1_debug_ping_get**](UtilitiesApi.md#get_ping_api_v1_debug_ping_get) | **GET** /api/v1/debug/ping | Get Ping
[**get_user_api_v1_debug_user_auth_get**](UtilitiesApi.md#get_user_api_v1_debug_user_auth_get) | **GET** /api/v1/debug/user_auth | Get User
[**get_user_role_api_v1_debug_user_role_middleware_check_get**](UtilitiesApi.md#get_user_role_api_v1_debug_user_role_middleware_check_get) | **GET** /api/v1/debug/user_role_middleware_check | Get User Role


# **get_ping_api_v1_debug_ping_get**
> TextResponse get_ping_api_v1_debug_ping_get()

Get Ping

### Example


```python
import time
import cloud_api_client
from cloud_api_client.api import utilities_api
from cloud_api_client.model.text_response import TextResponse
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = cloud_api_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with cloud_api_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = utilities_api.UtilitiesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Ping
        api_response = api_instance.get_ping_api_v1_debug_ping_get()
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling UtilitiesApi->get_ping_api_v1_debug_ping_get: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**TextResponse**](TextResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_api_v1_debug_user_auth_get**
> bool, date, datetime, dict, float, int, list, str, none_type get_user_api_v1_debug_user_auth_get()

Get User

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import utilities_api
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
    api_instance = utilities_api.UtilitiesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get User
        api_response = api_instance.get_user_api_v1_debug_user_auth_get()
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling UtilitiesApi->get_user_api_v1_debug_user_auth_get: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_role_api_v1_debug_user_role_middleware_check_get**
> bool, date, datetime, dict, float, int, list, str, none_type get_user_role_api_v1_debug_user_role_middleware_check_get(organization_id)

Get User Role

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import utilities_api
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
    api_instance = utilities_api.UtilitiesApi(api_client)
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get User Role
        api_response = api_instance.get_user_role_api_v1_debug_user_role_middleware_check_get(organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling UtilitiesApi->get_user_role_api_v1_debug_user_role_middleware_check_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

