# CloudApiClient::EnvironmentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_environment_api_v1_organizations_organization_id_environments_post**](EnvironmentsApi.md#create_environment_api_v1_organizations_organization_id_environments_post) | **POST** /api/v1/organizations/{organization_id}/environments | Create Environment |
| [**delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete**](EnvironmentsApi.md#delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Delete Environment By Id |
| [**get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get**](EnvironmentsApi.md#get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Get Environment By Id |
| [**get_environments_api_v1_organizations_organization_id_environments_get**](EnvironmentsApi.md#get_environments_api_v1_organizations_organization_id_environments_get) | **GET** /api/v1/organizations/{organization_id}/environments | Get Environments |
| [**update_environment_api_v1_organizations_organization_id_environments_environment_id_put**](EnvironmentsApi.md#update_environment_api_v1_organizations_organization_id_environments_environment_id_put) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Update Environment |


## create_environment_api_v1_organizations_organization_id_environments_post

> <EnvironmentOutput> create_environment_api_v1_organizations_organization_id_environments_post(organization_id, environment_input)

Create Environment

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
  # Create Environment
  result = api_instance.create_environment_api_v1_organizations_organization_id_environments_post(organization_id, environment_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->create_environment_api_v1_organizations_organization_id_environments_post: #{e}"
end
```

#### Using the create_environment_api_v1_organizations_organization_id_environments_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnvironmentOutput>, Integer, Hash)> create_environment_api_v1_organizations_organization_id_environments_post_with_http_info(organization_id, environment_input)

```ruby
begin
  # Create Environment
  data, status_code, headers = api_instance.create_environment_api_v1_organizations_organization_id_environments_post_with_http_info(organization_id, environment_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnvironmentOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->create_environment_api_v1_organizations_organization_id_environments_post_with_http_info: #{e}"
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


## delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete

> Integer delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete(environment_id, organization_id)

Delete Environment By Id

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
  # Delete Environment By Id
  result = api_instance.delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete: #{e}"
end
```

#### Using the delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Integer, Integer, Hash)> delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete_with_http_info(environment_id, organization_id)

```ruby
begin
  # Delete Environment By Id
  data, status_code, headers = api_instance.delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Integer
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

**Integer**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get

> <EnvironmentOutput> get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get(environment_id, organization_id)

Get Environment By Id

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
  # Get Environment By Id
  result = api_instance.get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get(environment_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get: #{e}"
end
```

#### Using the get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnvironmentOutput>, Integer, Hash)> get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get_with_http_info(environment_id, organization_id)

```ruby
begin
  # Get Environment By Id
  data, status_code, headers = api_instance.get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get_with_http_info(environment_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnvironmentOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get_with_http_info: #{e}"
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


## get_environments_api_v1_organizations_organization_id_environments_get

> <Array<EnvironmentOutput>> get_environments_api_v1_organizations_organization_id_environments_get(organization_id)

Get Environments

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

begin
  # Get Environments
  result = api_instance.get_environments_api_v1_organizations_organization_id_environments_get(organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->get_environments_api_v1_organizations_organization_id_environments_get: #{e}"
end
```

#### Using the get_environments_api_v1_organizations_organization_id_environments_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<EnvironmentOutput>>, Integer, Hash)> get_environments_api_v1_organizations_organization_id_environments_get_with_http_info(organization_id)

```ruby
begin
  # Get Environments
  data, status_code, headers = api_instance.get_environments_api_v1_organizations_organization_id_environments_get_with_http_info(organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<EnvironmentOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->get_environments_api_v1_organizations_organization_id_environments_get_with_http_info: #{e}"
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


## update_environment_api_v1_organizations_organization_id_environments_environment_id_put

> <EnvironmentOutput> update_environment_api_v1_organizations_organization_id_environments_environment_id_put(environment_id, organization_id, environment_input)

Update Environment

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
  # Update Environment
  result = api_instance.update_environment_api_v1_organizations_organization_id_environments_environment_id_put(environment_id, organization_id, environment_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->update_environment_api_v1_organizations_organization_id_environments_environment_id_put: #{e}"
end
```

#### Using the update_environment_api_v1_organizations_organization_id_environments_environment_id_put_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnvironmentOutput>, Integer, Hash)> update_environment_api_v1_organizations_organization_id_environments_environment_id_put_with_http_info(environment_id, organization_id, environment_input)

```ruby
begin
  # Update Environment
  data, status_code, headers = api_instance.update_environment_api_v1_organizations_organization_id_environments_environment_id_put_with_http_info(environment_id, organization_id, environment_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnvironmentOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling EnvironmentsApi->update_environment_api_v1_organizations_organization_id_environments_environment_id_put_with_http_info: #{e}"
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

