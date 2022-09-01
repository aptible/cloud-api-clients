# CloudApiClient::AssetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**asset_create**](AssetsApi.md#asset_create) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Asset Create |
| [**asset_delete**](AssetsApi.md#asset_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Delete |
| [**asset_get**](AssetsApi.md#asset_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Get |
| [**asset_update**](AssetsApi.md#asset_update) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Update |


## asset_create

> <AssetOutput> asset_create(environment_id, organization_id, asset_input)

Asset Create

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::AssetsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
asset_input = CloudApiClient::AssetInput.new({asset: 'asset_example', asset_version: 'asset_version_example', asset_parameters: 3.56}) # AssetInput | 

begin
  # Asset Create
  result = api_instance.asset_create(environment_id, organization_id, asset_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_create: #{e}"
end
```

#### Using the asset_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AssetOutput>, Integer, Hash)> asset_create_with_http_info(environment_id, organization_id, asset_input)

```ruby
begin
  # Asset Create
  data, status_code, headers = api_instance.asset_create_with_http_info(environment_id, organization_id, asset_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AssetOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |
| **asset_input** | [**AssetInput**](AssetInput.md) |  |  |

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## asset_delete

> Object asset_delete(asset_id, environment_id, organization_id)

Asset Delete

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::AssetsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Asset Delete
  result = api_instance.asset_delete(asset_id, environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_delete: #{e}"
end
```

#### Using the asset_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> asset_delete_with_http_info(asset_id, environment_id, organization_id)

```ruby
begin
  # Asset Delete
  data, status_code, headers = api_instance.asset_delete_with_http_info(asset_id, environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## asset_get

> <AssetOutput> asset_get(asset_id, environment_id, organization_id)

Asset Get

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::AssetsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Asset Get
  result = api_instance.asset_get(asset_id, environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_get: #{e}"
end
```

#### Using the asset_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AssetOutput>, Integer, Hash)> asset_get_with_http_info(asset_id, environment_id, organization_id)

```ruby
begin
  # Asset Get
  data, status_code, headers = api_instance.asset_get_with_http_info(asset_id, environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AssetOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## asset_update

> <AssetOutput> asset_update(asset_id, environment_id, organization_id, asset_input)

Asset Update

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::AssetsApi.new
asset_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
asset_input = CloudApiClient::AssetInput.new({asset: 'asset_example', asset_version: 'asset_version_example', asset_parameters: 3.56}) # AssetInput | 

begin
  # Asset Update
  result = api_instance.asset_update(asset_id, environment_id, organization_id, asset_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_update: #{e}"
end
```

#### Using the asset_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AssetOutput>, Integer, Hash)> asset_update_with_http_info(asset_id, environment_id, organization_id, asset_input)

```ruby
begin
  # Asset Update
  data, status_code, headers = api_instance.asset_update_with_http_info(asset_id, environment_id, organization_id, asset_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AssetOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->asset_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |
| **asset_input** | [**AssetInput**](AssetInput.md) |  |  |

### Return type

[**AssetOutput**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

