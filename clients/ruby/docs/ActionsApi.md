# CloudApiClient::ActionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post**](ActionsApi.md#create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Create Action |
| [**get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get**](ActionsApi.md#get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Get Action |


## create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post

> <ActionResponse> create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post(asset_id, environment_id, organization_id, action_request)

Create Action

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::ActionsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
action_request = CloudApiClient::ActionRequest.new({action_name: 'action_name_example'}) # ActionRequest | 

begin
  # Create Action
  result = api_instance.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post(asset_id, environment_id, organization_id, action_request)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post: #{e}"
end
```

#### Using the create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ActionResponse>, Integer, Hash)> create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post_with_http_info(asset_id, environment_id, organization_id, action_request)

```ruby
begin
  # Create Action
  data, status_code, headers = api_instance.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post_with_http_info(asset_id, environment_id, organization_id, action_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ActionResponse>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |
| **action_request** | [**ActionRequest**](ActionRequest.md) |  |  |

### Return type

[**ActionResponse**](ActionResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get

> <ActionResponse> get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get(asset_id, environment_id, action_id, organization_id)

Get Action

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::ActionsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
action_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get Action
  result = api_instance.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get(asset_id, environment_id, action_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get: #{e}"
end
```

#### Using the get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ActionResponse>, Integer, Hash)> get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get_with_http_info(asset_id, environment_id, action_id, organization_id)

```ruby
begin
  # Get Action
  data, status_code, headers = api_instance.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get_with_http_info(asset_id, environment_id, action_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ActionResponse>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **action_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**ActionResponse**](ActionResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

