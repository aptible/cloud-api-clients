# aptible_client.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_healthcheck**](DefaultApi.md#get_healthcheck) | **GET** /api/v1/system/health_check | Get Healthcheck


# **get_healthcheck**
> TextResponse get_healthcheck()

Get Healthcheck

### Example


```python
import time
import aptible_client
from aptible_client.api import default_api
from aptible_client.model.text_response import TextResponse
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with aptible_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Healthcheck
        api_response = api_instance.get_healthcheck()
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling DefaultApi->get_healthcheck: %s\n" % e)
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

