# CloudApiClient::EnvironmentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**environment_create**](EnvironmentsApi.md#environment_create) | **POST** /api/v1/organizations/{organization_id}/environments | Environment Create |
| [**environment_delete**](EnvironmentsApi.md#environment_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Delete |
| [**environment_get**](EnvironmentsApi.md#environment_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Get |
| [**environment_get_allowed_asset_bundles**](EnvironmentsApi.md#environment_get_allowed_asset_bundles) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Environment Get Allowed Asset Bundles |
| [**environment_get_assets**](EnvironmentsApi.md#environment_get_assets) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Environment Get Assets |
| [**environment_get_connections**](EnvironmentsApi.md#environment_get_connections) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Environment Get Connections |
| [**environment_update**](EnvironmentsApi.md#environment_update) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Update |


## environment_create

> <EnvironmentOutput> environment_create(organization_id, environment_input)

Environment Create

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::EnvironmentsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_input = CloudApiClient::EnvironmentInput.new({name: 'name_example', data: 3.56}) # EnvironmentInput | 

begin
  # Environment Create
  result = api_instance.environment_create(organization_id, environment_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_create: #{e}"
end
```

#### Using the environment_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnvironmentOutput>, Integer, Hash)> environment_create_with_http_info(organization_id, environment_input)

```ruby
begin
  # Environment Create
  data, status_code, headers = api_instance.environment_create_with_http_info(organization_id, environment_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnvironmentOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |
| **environment_input** | [**EnvironmentInput**](EnvironmentInput.md) |  |  |

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environment_delete

> Object environment_delete(environment_id, organization_id)

Environment Delete

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::EnvironmentsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Environment Delete
  result = api_instance.environment_delete(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_delete: #{e}"
end
```

#### Using the environment_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> environment_delete_with_http_info(environment_id, organization_id)

```ruby
begin
  # Environment Delete
  data, status_code, headers = api_instance.environment_delete_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environment_get

> <EnvironmentOutput> environment_get(environment_id, organization_id)

Environment Get

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::EnvironmentsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Environment Get
  result = api_instance.environment_get(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get: #{e}"
end
```

#### Using the environment_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnvironmentOutput>, Integer, Hash)> environment_get_with_http_info(environment_id, organization_id)

```ruby
begin
  # Environment Get
  data, status_code, headers = api_instance.environment_get_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnvironmentOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environment_get_allowed_asset_bundles

> <Array<AssetBundle>> environment_get_allowed_asset_bundles(environment_id, organization_id)

Environment Get Allowed Asset Bundles

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::EnvironmentsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Environment Get Allowed Asset Bundles
  result = api_instance.environment_get_allowed_asset_bundles(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get_allowed_asset_bundles: #{e}"
end
```

#### Using the environment_get_allowed_asset_bundles_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<AssetBundle>>, Integer, Hash)> environment_get_allowed_asset_bundles_with_http_info(environment_id, organization_id)

```ruby
begin
  # Environment Get Allowed Asset Bundles
  data, status_code, headers = api_instance.environment_get_allowed_asset_bundles_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<AssetBundle>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get_allowed_asset_bundles_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**Array&lt;AssetBundle&gt;**](AssetBundle.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environment_get_assets

> <Array<AssetOutput>> environment_get_assets(environment_id, organization_id)

Environment Get Assets

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::EnvironmentsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Environment Get Assets
  result = api_instance.environment_get_assets(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get_assets: #{e}"
end
```

#### Using the environment_get_assets_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<AssetOutput>>, Integer, Hash)> environment_get_assets_with_http_info(environment_id, organization_id)

```ruby
begin
  # Environment Get Assets
  data, status_code, headers = api_instance.environment_get_assets_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<AssetOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get_assets_with_http_info: #{e}"
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


## environment_get_connections

> <Array<ConnectionOutput>> environment_get_connections(environment_id, organization_id)

Environment Get Connections

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::EnvironmentsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Environment Get Connections
  result = api_instance.environment_get_connections(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get_connections: #{e}"
end
```

#### Using the environment_get_connections_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<ConnectionOutput>>, Integer, Hash)> environment_get_connections_with_http_info(environment_id, organization_id)

```ruby
begin
  # Environment Get Connections
  data, status_code, headers = api_instance.environment_get_connections_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<ConnectionOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_get_connections_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**Array&lt;ConnectionOutput&gt;**](ConnectionOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environment_update

> <EnvironmentOutput> environment_update(environment_id, organization_id, environment_input)

Environment Update

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::EnvironmentsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
environment_input = CloudApiClient::EnvironmentInput.new({name: 'name_example', data: 3.56}) # EnvironmentInput | 

begin
  # Environment Update
  result = api_instance.environment_update(environment_id, organization_id, environment_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_update: #{e}"
end
```

#### Using the environment_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnvironmentOutput>, Integer, Hash)> environment_update_with_http_info(environment_id, organization_id, environment_input)

```ruby
begin
  # Environment Update
  data, status_code, headers = api_instance.environment_update_with_http_info(environment_id, organization_id, environment_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnvironmentOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->environment_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |
| **environment_input** | [**EnvironmentInput**](EnvironmentInput.md) |  |  |

### Return type

[**EnvironmentOutput**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

