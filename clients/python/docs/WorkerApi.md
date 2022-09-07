# aptible_client.WorkerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**worker_health_check**](WorkerApi.md#worker_health_check) | **POST** /api/v1/worker/health-check | Worker Health Check


# **worker_health_check**
> bool, date, datetime, dict, float, int, list, str, none_type worker_health_check(health_check_from_worker)

Worker Health Check

### Example


```python
import time
import aptible_client
from aptible_client.api import worker_api
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.health_check_from_worker import HealthCheckFromWorker
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with aptible_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = worker_api.WorkerApi(api_client)
    health_check_from_worker = HealthCheckFromWorker(
        environment_id="environment_id_example",
        message_id="message_id_example",
        execution_id="execution_id_example",
        message="message_example",
    ) # HealthCheckFromWorker | 

    # example passing only required values which don't have defaults set
    try:
        # Worker Health Check
        api_response = api_instance.worker_health_check(health_check_from_worker)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling WorkerApi->worker_health_check: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **health_check_from_worker** | [**HealthCheckFromWorker**](HealthCheckFromWorker.md)|  |

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

