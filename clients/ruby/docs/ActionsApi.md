# CloudApiClient::ActionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**action_create**](ActionsApi.md#action_create) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Action Create |
| [**action_get**](ActionsApi.md#action_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Action Get |


## action_create

> <ActionResponse> action_create(asset_id, environment_id, organization_id, action_request)

Action Create

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
  # Action Create
  result = api_instance.action_create(asset_id, environment_id, organization_id, action_request)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->action_create: #{e}"
end
```

#### Using the action_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ActionResponse>, Integer, Hash)> action_create_with_http_info(asset_id, environment_id, organization_id, action_request)

```ruby
begin
  # Action Create
  data, status_code, headers = api_instance.action_create_with_http_info(asset_id, environment_id, organization_id, action_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ActionResponse>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->action_create_with_http_info: #{e}"
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


## action_get

> <ActionResponse> action_get(asset_id, environment_id, action_id, organization_id)

Action Get

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
  # Action Get
  result = api_instance.action_get(asset_id, environment_id, action_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->action_get: #{e}"
end
```

#### Using the action_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ActionResponse>, Integer, Hash)> action_get_with_http_info(asset_id, environment_id, action_id, organization_id)

```ruby
begin
  # Action Get
  data, status_code, headers = api_instance.action_get_with_http_info(asset_id, environment_id, action_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ActionResponse>
rescue CloudApiClient::ApiError => e
  puts "Error when calling ActionsApi->action_get_with_http_info: #{e}"
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

