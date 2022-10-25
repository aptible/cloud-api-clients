# aptible_client.ActionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**action_create**](ActionsApi.md#action_create) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Action Create
[**action_get**](ActionsApi.md#action_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Action Get


# **action_create**
> ActionResponse action_create(asset_id, environment_id, organization_id, action_request)

Action Create

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import actions_api
from aptible_client.model.action_request import ActionRequest
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.action_response import ActionResponse
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
    api_instance = actions_api.ActionsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 
    action_request = ActionRequest(
        action_name="action_name_example",
        parameters=None,
    ) # ActionRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Action Create
        api_response = api_instance.action_create(asset_id, environment_id, organization_id, action_request)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling ActionsApi->action_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |
 **action_request** | [**ActionRequest**](ActionRequest.md)|  |

### Return type

[**ActionResponse**](ActionResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_get**
> ActionResponse action_get(asset_id, environment_id, action_id, organization_id)

Action Get

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import aptible_client
from aptible_client.api import actions_api
from aptible_client.model.http_validation_error import HTTPValidationError
from aptible_client.model.action_response import ActionResponse
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
    api_instance = actions_api.ActionsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    action_id = "action_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Action Get
        api_response = api_instance.action_get(asset_id, environment_id, action_id, organization_id)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling ActionsApi->action_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **environment_id** | **str**|  |
 **action_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**ActionResponse**](ActionResponse.md)

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

