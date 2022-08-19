# cloud_api_client.ActionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post**](ActionsApi.md#create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Create Action
[**get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get**](ActionsApi.md#get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Get Action


# **create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post**
> ActionResponse create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post(asset_id, environment_id, organization_id, action_request)

Create Action

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import actions_api
from cloud_api_client.model.action_request import ActionRequest
from cloud_api_client.model.action_response import ActionResponse
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
        # Create Action
        api_response = api_instance.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post(asset_id, environment_id, organization_id, action_request)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling ActionsApi->create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post: %s\n" % e)
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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get**
> ActionResponse get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get(asset_id, environment_id, action_id, organization_id)

Get Action

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import actions_api
from cloud_api_client.model.action_response import ActionResponse
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
    api_instance = actions_api.ActionsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    action_id = "action_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Action
        api_response = api_instance.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get(asset_id, environment_id, action_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling ActionsApi->get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get: %s\n" % e)
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

