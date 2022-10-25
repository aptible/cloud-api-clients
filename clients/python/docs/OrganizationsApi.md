# aptible_client.OrganizationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organization_delete**](OrganizationsApi.md#organization_delete) | **DELETE** /api/v1/organizations/{organization_id} | Organization Delete
[**organization_get**](OrganizationsApi.md#organization_get) | **GET** /api/v1/organizations/{organization_id} | Organization Get
[**organization_get_environments**](OrganizationsApi.md#organization_get_environments) | **GET** /api/v1/organizations/{organization_id}/environments | Organization Get Environments
[**organization_get_operations**](OrganizationsApi.md#organization_get_operations) | **GET** /api/v1/organizations/{organization_id}/operations/ | Organization Get Operations
[**organization_list**](OrganizationsApi.md#organization_list) | **GET** /api/v1/organizations/ | Organization List
[**organization_update**](OrganizationsApi.md#organization_update) | **PUT** /api/v1/organizations/{organization_id} | Organization Update


# **organization_delete**
> bool, date, datetime, dict, float, int, list, str, none_type organization_delete(organization_id)

Organization Delete

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import organizations_api
from aptible_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = aptible_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with aptible_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = organizations_api.OrganizationsApi(api_client)
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Organization Delete
        api_response = api_instance.organization_delete(organization_id)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OrganizationsApi->organization_delete: %s\n" % e)
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

# **organization_get**
> OrganizationOutput organization_get(organization_id)

Organization Get

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import organizations_api
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.organization_output import OrganizationOutput
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = aptible_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with aptible_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = organizations_api.OrganizationsApi(api_client)
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Organization Get
        api_response = api_instance.organization_get(organization_id)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OrganizationsApi->organization_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  |

### Return type

[**OrganizationOutput**](OrganizationOutput.md)

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

# **organization_get_environments**
> [EnvironmentOutput] organization_get_environments(organization_id)

Organization Get Environments

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import organizations_api
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.environment_output import EnvironmentOutput
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = aptible_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with aptible_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = organizations_api.OrganizationsApi(api_client)
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Organization Get Environments
        api_response = api_instance.organization_get_environments(organization_id)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OrganizationsApi->organization_get_environments: %s\n" % e)
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

# **organization_get_operations**
> bool, date, datetime, dict, float, int, list, str, none_type organization_get_operations(organization_id)

Organization Get Operations

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import organizations_api
from aptible_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = aptible_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with aptible_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = organizations_api.OrganizationsApi(api_client)
    organization_id = "organization_id_example" # str | 
    asset_id = "asset_id_example" # str |  (optional)
    environment_id = "environment_id_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Organization Get Operations
        api_response = api_instance.organization_get_operations(organization_id)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OrganizationsApi->organization_get_operations: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Organization Get Operations
        api_response = api_instance.organization_get_operations(organization_id, asset_id=asset_id, environment_id=environment_id)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OrganizationsApi->organization_get_operations: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  |
 **asset_id** | **str**|  | [optional]
 **environment_id** | **str**|  | [optional]

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

# **organization_list**
> [OrganizationOutput] organization_list()

Organization List

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import organizations_api
from aptible_client.model.organization_output import OrganizationOutput
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = aptible_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with aptible_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = organizations_api.OrganizationsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Organization List
        api_response = api_instance.organization_list()
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OrganizationsApi->organization_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[OrganizationOutput]**](OrganizationOutput.md)

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

# **organization_update**
> OrganizationOutput organization_update(organization_id, organization_input)

Organization Update

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import organizations_api
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.organization_input import OrganizationInput
from aptible_client.model.organization_output import OrganizationOutput
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = aptible_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with aptible_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = organizations_api.OrganizationsApi(api_client)
    organization_id = "organization_id_example" # str | 
    organization_input = OrganizationInput(
        name="name_example",
        baa_status="baa_status_example",
        aws_ou="aws_ou_example",
        contact_details={},
    ) # OrganizationInput | 

    # example passing only required values which don't have defaults set
    try:
        # Organization Update
        api_response = api_instance.organization_update(organization_id, organization_input)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OrganizationsApi->organization_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  |
 **organization_input** | [**OrganizationInput**](OrganizationInput.md)|  |

### Return type

[**OrganizationOutput**](OrganizationOutput.md)

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

