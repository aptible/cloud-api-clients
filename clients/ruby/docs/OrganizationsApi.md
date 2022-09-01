# CloudApiClient::OrganizationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**organization_delete**](OrganizationsApi.md#organization_delete) | **DELETE** /api/v1/organizations/{organization_id} | Organization Delete |
| [**organization_get**](OrganizationsApi.md#organization_get) | **GET** /api/v1/organizations/{organization_id} | Organization Get |
| [**organization_get_environments**](OrganizationsApi.md#organization_get_environments) | **GET** /api/v1/organizations/{organization_id}/environments | Organization Get Environments |
| [**organization_get_operations**](OrganizationsApi.md#organization_get_operations) | **GET** /api/v1/organizations/{organization_id}/operations/ | Organization Get Operations |
| [**organization_list**](OrganizationsApi.md#organization_list) | **GET** /api/v1/organizations/ | Organization List |
| [**organization_update**](OrganizationsApi.md#organization_update) | **PUT** /api/v1/organizations/{organization_id} | Organization Update |


## organization_delete

> Object organization_delete(organization_id)

Organization Delete

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Organization Delete
  result = api_instance.organization_delete(organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_delete: #{e}"
end
```

#### Using the organization_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> organization_delete_with_http_info(organization_id)

```ruby
begin
  # Organization Delete
  data, status_code, headers = api_instance.organization_delete_with_http_info(organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organization_get

> <OrganizationOutput> organization_get(organization_id)

Organization Get

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Organization Get
  result = api_instance.organization_get(organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_get: #{e}"
end
```

#### Using the organization_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OrganizationOutput>, Integer, Hash)> organization_get_with_http_info(organization_id)

```ruby
begin
  # Organization Get
  data, status_code, headers = api_instance.organization_get_with_http_info(organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OrganizationOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |

### Return type

[**OrganizationOutput**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organization_get_environments

> <Array<EnvironmentOutput>> organization_get_environments(organization_id)

Organization Get Environments

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Organization Get Environments
  result = api_instance.organization_get_environments(organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_get_environments: #{e}"
end
```

#### Using the organization_get_environments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<EnvironmentOutput>>, Integer, Hash)> organization_get_environments_with_http_info(organization_id)

```ruby
begin
  # Organization Get Environments
  data, status_code, headers = api_instance.organization_get_environments_with_http_info(organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<EnvironmentOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_get_environments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |

### Return type

[**Array&lt;EnvironmentOutput&gt;**](EnvironmentOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organization_get_operations

> <Array<OperationOutput>> organization_get_operations(organization_id, opts)

Organization Get Operations

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  asset_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  environment_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
}

begin
  # Organization Get Operations
  result = api_instance.organization_get_operations(organization_id, opts)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_get_operations: #{e}"
end
```

#### Using the organization_get_operations_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<OperationOutput>>, Integer, Hash)> organization_get_operations_with_http_info(organization_id, opts)

```ruby
begin
  # Organization Get Operations
  data, status_code, headers = api_instance.organization_get_operations_with_http_info(organization_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<OperationOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_get_operations_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |
| **asset_id** | **String** |  | [optional] |
| **environment_id** | **String** |  | [optional] |

### Return type

[**Array&lt;OperationOutput&gt;**](OperationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organization_list

> <Array<OrganizationOutput>> organization_list

Organization List

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new

begin
  # Organization List
  result = api_instance.organization_list
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_list: #{e}"
end
```

#### Using the organization_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<OrganizationOutput>>, Integer, Hash)> organization_list_with_http_info

```ruby
begin
  # Organization List
  data, status_code, headers = api_instance.organization_list_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<OrganizationOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_list_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;OrganizationOutput&gt;**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organization_update

> <OrganizationOutput> organization_update(organization_id, organization_input)

Organization Update

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_input = CloudApiClient::OrganizationInput.new({name: 'name_example', baa_status: 'baa_status_example', contact_details: 3.56}) # OrganizationInput | 

begin
  # Organization Update
  result = api_instance.organization_update(organization_id, organization_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_update: #{e}"
end
```

#### Using the organization_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OrganizationOutput>, Integer, Hash)> organization_update_with_http_info(organization_id, organization_input)

```ruby
begin
  # Organization Update
  data, status_code, headers = api_instance.organization_update_with_http_info(organization_id, organization_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OrganizationOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->organization_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |
| **organization_input** | [**OrganizationInput**](OrganizationInput.md) |  |  |

### Return type

[**OrganizationOutput**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

