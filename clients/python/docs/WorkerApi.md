# cloud_api_client.WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_operation_api_v1_operations_operation_id_operation_status_put**](WorkerApi.md#update_operation_api_v1_operations_operation_id_operation_status_put) | **PUT** /api/v1/operations/{operation_id}/{operation_status} | Update Operation


# **update_operation_api_v1_operations_operation_id_operation_status_put**
> bool, date, datetime, dict, float, int, list, str, none_type update_operation_api_v1_operations_operation_id_operation_status_put(operation_id, operation_status)

Update Operation

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import worker_api
from cloud_api_client.model.operation_status import OperationStatus
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
    api_instance = worker_api.WorkerApi(api_client)
    operation_id = "operation_id_example" # str | 
    operation_status = OperationStatus("FAILED") # OperationStatus | 

    # example passing only required values which don't have defaults set
    try:
        # Update Operation
        api_response = api_instance.update_operation_api_v1_operations_operation_id_operation_status_put(operation_id, operation_status)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling WorkerApi->update_operation_api_v1_operations_operation_id_operation_status_put: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**|  |
 **operation_status** | **OperationStatus**|  |

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

