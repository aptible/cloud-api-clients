# CloudApiClient::ConnectionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**connection_create**](ConnectionsApi.md#connection_create) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Connection Create |
| [**connection_delete**](ConnectionsApi.md#connection_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Connection Delete |
| [**connection_get**](ConnectionsApi.md#connection_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Connection Get |


## connection_create

> <ConnectionOutput> connection_create(asset_id, environment_id, organization_id, connection_input)

Connection Create

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
  # Connection Create
  result = api_instance.connection_create(asset_id, environment_id, organization_id, connection_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->connection_create: #{e}"
end
```

#### Using the connection_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConnectionOutput>, Integer, Hash)> connection_create_with_http_info(asset_id, environment_id, organization_id, connection_input)

```ruby
begin
  # Connection Create
  data, status_code, headers = api_instance.connection_create_with_http_info(asset_id, environment_id, organization_id, connection_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConnectionOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->connection_create_with_http_info: #{e}"
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


## connection_delete

> Object connection_delete(asset_id, connection_id, environment_id, organization_id)

Connection Delete

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
  # Connection Delete
  result = api_instance.connection_delete(asset_id, connection_id, environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->connection_delete: #{e}"
end
```

#### Using the connection_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> connection_delete_with_http_info(asset_id, connection_id, environment_id, organization_id)

```ruby
begin
  # Connection Delete
  data, status_code, headers = api_instance.connection_delete_with_http_info(asset_id, connection_id, environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->connection_delete_with_http_info: #{e}"
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


## connection_get

> <ConnectionOutput> connection_get(asset_id, environment_id, connection_id, organization_id)

Connection Get

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
connection_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Connection Get
  result = api_instance.connection_get(asset_id, environment_id, connection_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->connection_get: #{e}"
end
```

#### Using the connection_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConnectionOutput>, Integer, Hash)> connection_get_with_http_info(asset_id, environment_id, connection_id, organization_id)

```ruby
begin
  # Connection Get
  data, status_code, headers = api_instance.connection_get_with_http_info(asset_id, environment_id, connection_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConnectionOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ConnectionsApi->connection_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **connection_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**ConnectionOutput**](ConnectionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

