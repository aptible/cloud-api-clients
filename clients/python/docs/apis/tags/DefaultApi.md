<a name="__pageTop"></a>
# cloud_api_client.apis.tags.default_api.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_healthcheck**](#get_healthcheck) | **get** /api/v1/system/health_check | Get Healthcheck

# **get_healthcheck**
<a name="get_healthcheck"></a>
> TextResponse get_healthcheck()

Get Healthcheck

### Example

```python
import cloud_api_client
from cloud_api_client.apis.tags import default_api
from cloud_api_client.model.text_response import TextResponse
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = cloud_api_client.Configuration(
    host = "http://localhost"
)

# Enter a context with an instance of the API client
with cloud_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Healthcheck
        api_response = api_instance.get_healthcheck()
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling DefaultApi->get_healthcheck: %s\n" % e)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#get_healthcheck.ApiResponseFor200) | Successful Response

#### get_healthcheck.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**TextResponse**](../../models/TextResponse.md) |  | 


### Authorization

No authorization required

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

