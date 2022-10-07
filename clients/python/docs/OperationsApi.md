# aptible_client.OperationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operation_get**](OperationsApi.md#operation_get) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Operation Get
[**operation_update**](OperationsApi.md#operation_update) | **PUT** /api/v1/operations/{operation_id} | Operation Update


# **operation_get**
> OperationOutput operation_get(operation_id, organization_id)

Operation Get

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import operations_api
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.operation_output import OperationOutput
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
    api_instance = operations_api.OperationsApi(api_client)
    operation_id = "operation_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Operation Get
        api_response = api_instance.operation_get(operation_id, organization_id)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OperationsApi->operation_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**OperationOutput**](OperationOutput.md)

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

# **operation_update**
> bool, date, datetime, dict, float, int, list, str, none_type operation_update(operation_id, operation_update)

Operation Update

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import operations_api
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.operation_update import OperationUpdate
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
    api_instance = operations_api.OperationsApi(api_client)
    operation_id = "operation_id_example" # str | 
    operation_update = OperationUpdate(
        id="id_example",
        status=OperationStatus("FAILED"),
        data=Data(None),
    ) # OperationUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Operation Update
        api_response = api_instance.operation_update(operation_id, operation_update)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling OperationsApi->operation_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**|  |
 **operation_update** | [**OperationUpdate**](OperationUpdate.md)|  |

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

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

