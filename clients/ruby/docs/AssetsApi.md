# CloudApiClient::AssetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post**](AssetsApi.md#create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Create Asset |
| [**delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete**](AssetsApi.md#delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Delete Asset By Id |
| [**get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get**](AssetsApi.md#get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Get Asset By Id |
| [**get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get**](AssetsApi.md#get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Get Assets |
| [**update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put**](AssetsApi.md#update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Update Asset By Id |


## create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post

> <AssetOutput> create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post(environment_id, organization_id, asset_input)

Create Asset

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
asset_input = CloudApiClient::AssetInput.new({asset: 'asset_example', asset_version: 'asset_version_example', asset_variables: 3.56}) # AssetInput | 

begin
  # Create Asset
  result = api_instance.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post(environment_id, organization_id, asset_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post: #{e}"
end
```

#### Using the create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AssetOutput>, Integer, Hash)> create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post_with_http_info(environment_id, organization_id, asset_input)

```ruby
begin
  # Create Asset
  data, status_code, headers = api_instance.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post_with_http_info(environment_id, organization_id, asset_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AssetOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post_with_http_info: #{e}"
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


## delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete

> Integer delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete(asset_id, environment_id, organization_id)

Delete Asset By Id

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
  # Delete Asset By Id
  result = api_instance.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete(asset_id, environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete: #{e}"
end
```

#### Using the delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Integer, Integer, Hash)> delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete_with_http_info(asset_id, environment_id, organization_id)

```ruby
begin
  # Delete Asset By Id
  data, status_code, headers = api_instance.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete_with_http_info(asset_id, environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Integer
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset_id** | **String** |  |  |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

**Integer**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get

> <AssetOutput> get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get(asset_id, environment_id, organization_id)

Get Asset By Id

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
  # Get Asset By Id
  result = api_instance.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get(asset_id, environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get: #{e}"
end
```

#### Using the get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AssetOutput>, Integer, Hash)> get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get_with_http_info(asset_id, environment_id, organization_id)

```ruby
begin
  # Get Asset By Id
  data, status_code, headers = api_instance.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get_with_http_info(asset_id, environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AssetOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get_with_http_info: #{e}"
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


## get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get

> <Array<AssetOutput>> get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get(environment_id, organization_id)

Get Assets

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

begin
  # Get Assets
  result = api_instance.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get: #{e}"
end
```

#### Using the get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<AssetOutput>>, Integer, Hash)> get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get_with_http_info(environment_id, organization_id)

```ruby
begin
  # Get Assets
  data, status_code, headers = api_instance.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<AssetOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**Array&lt;AssetOutput&gt;**](AssetOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put

> <AssetOutput> update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put(asset_id, environment_id, organization_id, asset_input)

Update Asset By Id

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
asset_input = CloudApiClient::AssetInput.new({asset: 'asset_example', asset_version: 'asset_version_example', asset_variables: 3.56}) # AssetInput | 

begin
  # Update Asset By Id
  result = api_instance.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put(asset_id, environment_id, organization_id, asset_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put: #{e}"
end
```

#### Using the update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AssetOutput>, Integer, Hash)> update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put_with_http_info(asset_id, environment_id, organization_id, asset_input)

```ruby
begin
  # Update Asset By Id
  data, status_code, headers = api_instance.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put_with_http_info(asset_id, environment_id, organization_id, asset_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AssetOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling AssetsApi->update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put_with_http_info: #{e}"
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

