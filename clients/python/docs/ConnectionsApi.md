# cloud_api_client.ConnectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post**](ConnectionsApi.md#create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Create Connection
[**delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete**](ConnectionsApi.md#delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Delete Connection
[**get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get**](ConnectionsApi.md#get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Get Connection By Id


# **create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post**
> ConnectionOutput create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post(asset_id, environment_id, organization_id, connection_input)

Create Connection

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import connections_api
from cloud_api_client.model.connection_output import ConnectionOutput
from cloud_api_client.model.connection_input import ConnectionInput
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
    api_instance = connections_api.ConnectionsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 
    connection_input = ConnectionInput(
        description="description_example",
        outgoing_asset_id="outgoing_asset_id_example",
    ) # ConnectionInput | 

    # example passing only required values which don't have defaults set
    try:
        # Create Connection
        api_response = api_instance.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post(asset_id, environment_id, organization_id, connection_input)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling ConnectionsApi->create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |
 **connection_input** | [**ConnectionInput**](ConnectionInput.md)|  |

### Return type

[**ConnectionOutput**](ConnectionOutput.md)

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

# **delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete**
> bool, date, datetime, dict, float, int, list, str, none_type delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete(asset_id, connection_id, environment_id, organization_id)

Delete Connection

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import connections_api
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
    api_instance = connections_api.ConnectionsApi(api_client)
    asset_id = "asset_id_example" # str | 
    connection_id = "connection_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Connection
        api_response = api_instance.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete(asset_id, connection_id, environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling ConnectionsApi->delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **connection_id** | **str**|  |
 **environment_id** | **str**|  |
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

# **get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get**
> ConnectionOutput get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get(asset_id, environment_id, organization_id)

Get Connection By Id

### Example

* Bearer Authentication (HTTPBearer):

```python
import time
import cloud_api_client
from cloud_api_client.api import connections_api
from cloud_api_client.model.connection_output import ConnectionOutput
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
    api_instance = connections_api.ConnectionsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Connection By Id
        api_response = api_instance.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get(asset_id, environment_id, organization_id)
        pprint(api_response)
    except cloud_api_client.ApiException as e:
        print("Exception when calling ConnectionsApi->get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **str**|  |
 **environment_id** | **str**|  |
 **organization_id** | **str**|  |

### Return type

[**ConnectionOutput**](ConnectionOutput.md)

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

