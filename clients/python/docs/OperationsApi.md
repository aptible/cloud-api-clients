# cloud_api_client.OperationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_operations_api_v1_organizations_organization_id_operations_get**](OperationsApi.md#get_operations_api_v1_organizations_organization_id_operations_get) | **GET** /api/v1/organizations/{organization_id}/operations/ | Get Operations
[**get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get**](OperationsApi.md#get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Get Operations By Operation Id


# **get_operations_api_v1_organizations_organization_id_operations_get**
> [OperationOutput] get_operations_api_v1_organizations_organization_id_operations_get(organization_id)

Get Operations

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import operations_api
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.operation_output import OperationOutput
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
    api_instance = operations_api.OperationsApi(api_client)
    organization_id = "organization_id_example" # str | 
    asset_id = "asset_id_example" # str |  (optional)
    environment_id = "environment_id_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get Operations
        api_response = api_instance.get_operations_api_v1_organizations_organization_id_operations_get(organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling OperationsApi->get_operations_api_v1_organizations_organization_id_operations_get: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get Operations
        api_response = api_instance.get_operations_api_v1_organizations_organization_id_operations_get(organization_id, asset_id=asset_id, environment_id=environment_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling OperationsApi->get_operations_api_v1_organizations_organization_id_operations_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  |
 **asset_id** | **str**|  | [optional]
 **environment_id** | **str**|  | [optional]

### Return type

[**[OperationOutput]**](OperationOutput.md)

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

# **get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get**
> [OperationOutput] get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get(operation_id, organization_id)

Get Operations By Operation Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import operations_api
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.operation_output import OperationOutput
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
    api_instance = operations_api.OperationsApi(api_client)
    operation_id = "operation_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Operations By Operation Id
        api_response = api_instance.get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get(operation_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling OperationsApi->get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**[OperationOutput]**](OperationOutput.md)

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

