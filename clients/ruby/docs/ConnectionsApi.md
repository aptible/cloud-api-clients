# CloudApiClient::ConnectionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post**](ConnectionsApi.md#create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Create Connection |
| [**delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete**](ConnectionsApi.md#delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Delete Connection |
| [**get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get**](ConnectionsApi.md#get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Get Connection By Id |


## create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post

> <ConnectionOutput> create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post(asset_id, environment_id, organization_id, connection_input)

Create Connection

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::ConnectionsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
connection_input = CloudApiClient::ConnectionInput.new({outgoing_asset_id: 'outgoing_asset_id_example'}) # ConnectionInput | 

begin
  # Create Connection
  result = api_instance.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post(asset_id, environment_id, organization_id, connection_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post: #{e}"
end
```

#### Using the create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConnectionOutput>, Integer, Hash)> create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post_with_http_info(asset_id, environment_id, organization_id, connection_input)

```ruby
begin
  # Create Connection
  data, status_code, headers = api_instance.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post_with_http_info(asset_id, environment_id, organization_id, connection_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConnectionOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |
| **connection_input** | [**ConnectionInput**](ConnectionInput.md) |  |  |

### Return type

[**ConnectionOutput**](ConnectionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete

> Object delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete(asset_id, connection_id, environment_id, organization_id)

Delete Connection

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::ConnectionsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
connection_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete Connection
  result = api_instance.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete(asset_id, connection_id, environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete: #{e}"
end
```

#### Using the delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete_with_http_info(asset_id, connection_id, environment_id, organization_id)

```ruby
begin
  # Delete Connection
  data, status_code, headers = api_instance.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete_with_http_info(asset_id, connection_id, environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **connection_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get

> <ConnectionOutput> get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get(asset_id, environment_id, organization_id)

Get Connection By Id

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::ConnectionsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get Connection By Id
  result = api_instance.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get(asset_id, environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get: #{e}"
end
```

#### Using the get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConnectionOutput>, Integer, Hash)> get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get_with_http_info(asset_id, environment_id, organization_id)

```ruby
begin
  # Get Connection By Id
  data, status_code, headers = api_instance.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get_with_http_info(asset_id, environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConnectionOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**ConnectionOutput**](ConnectionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

