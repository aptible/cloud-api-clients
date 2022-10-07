# CloudApiClient::OperationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**operation_get**](OperationsApi.md#operation_get) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Operation Get |
| [**operation_update**](OperationsApi.md#operation_update) | **PUT** /api/v1/operations/{operation_id} | Operation Update |


## operation_get

> <OperationOutput> operation_get(operation_id, organization_id)

Operation Get

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OperationsApi.new
operation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Operation Get
  result = api_instance.operation_get(operation_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->operation_get: #{e}"
end
```

#### Using the operation_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OperationOutput>, Integer, Hash)> operation_get_with_http_info(operation_id, organization_id)

```ruby
begin
  # Operation Get
  data, status_code, headers = api_instance.operation_get_with_http_info(operation_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OperationOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->operation_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **operation_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**OperationOutput**](OperationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## operation_update

> Object operation_update(operation_id, operation_update)

Operation Update

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OperationsApi.new
operation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
operation_update = CloudApiClient::OperationUpdate.new({id: 'id_example', status: CloudApiClient::OperationStatus::FAILED}) # OperationUpdate | 

begin
  # Operation Update
  result = api_instance.operation_update(operation_id, operation_update)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->operation_update: #{e}"
end
```

#### Using the operation_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> operation_update_with_http_info(operation_id, operation_update)

```ruby
begin
  # Operation Update
  data, status_code, headers = api_instance.operation_update_with_http_info(operation_id, operation_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->operation_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **operation_id** | **String** |  |  |
| **operation_update** | [**OperationUpdate**](OperationUpdate.md) |  |  |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

