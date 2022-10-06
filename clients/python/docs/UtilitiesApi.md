# cloud_api_client.UtilitiesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user**](UtilitiesApi.md#get_user) | **GET** /api/v1/debug/user_auth | Get User
[**get_user_role**](UtilitiesApi.md#get_user_role) | **GET** /api/v1/debug/user_role_middleware_check | Get User Role


# **get_user**
> bool, date, datetime, dict, float, int, list, str, none_type get_user()

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
        api_response = api_instance.get_user()
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling UtilitiesApi->get_user: %s\n" % e)
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

# **get_user_role**
> bool, date, datetime, dict, float, int, list, str, none_type get_user_role(organization_id)

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
        api_response = api_instance.get_user_role(organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling UtilitiesApi->get_user_role: %s\n" % e)
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

