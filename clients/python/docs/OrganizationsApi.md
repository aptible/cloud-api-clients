# cloud_api_client.OrganizationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_by_id_api_v1_organizations_organization_id_get**](OrganizationsApi.md#get_organization_by_id_api_v1_organizations_organization_id_get) | **GET** /api/v1/organizations/{organization_id} | Get Organization By Id
[**get_organizations_api_v1_organizations_get**](OrganizationsApi.md#get_organizations_api_v1_organizations_get) | **GET** /api/v1/organizations/ | Get Organizations
[**put_organization_api_v1_organizations_organization_id_put**](OrganizationsApi.md#put_organization_api_v1_organizations_organization_id_put) | **PUT** /api/v1/organizations/{organization_id} | Put Organization


# **get_organization_by_id_api_v1_organizations_organization_id_get**
> OrganizationOutput get_organization_by_id_api_v1_organizations_organization_id_get(organization_id)

Get Organization By Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import organizations_api
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.organization_output import OrganizationOutput
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
    api_instance = organizations_api.OrganizationsApi(api_client)
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Organization By Id
        api_response = api_instance.get_organization_by_id_api_v1_organizations_organization_id_get(organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling OrganizationsApi->get_organization_by_id_api_v1_organizations_organization_id_get: %s\n" % e)
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

# **get_organizations_api_v1_organizations_get**
> [OrganizationOutput] get_organizations_api_v1_organizations_get()

Get Organizations

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import organizations_api
from cloud_api_client.model.organization_output import OrganizationOutput
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
    api_instance = organizations_api.OrganizationsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Organizations
        api_response = api_instance.get_organizations_api_v1_organizations_get()
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling OrganizationsApi->get_organizations_api_v1_organizations_get: %s\n" % e)
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

# **put_organization_api_v1_organizations_organization_id_put**
> OrganizationOutput put_organization_api_v1_organizations_organization_id_put(organization_id, organization_input)

Put Organization

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import organizations_api
from cloud_api_client.model.organization_input import OrganizationInput
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.organization_output import OrganizationOutput
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
        # Put Organization
        api_response = api_instance.put_organization_api_v1_organizations_organization_id_put(organization_id, organization_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling OrganizationsApi->put_organization_api_v1_organizations_organization_id_put: %s\n" % e)
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

