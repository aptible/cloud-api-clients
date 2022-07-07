# CloudApiClient::WorkerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**update_operation_api_v1_operations_operation_id_operation_status_put**](WorkerApi.md#update_operation_api_v1_operations_operation_id_operation_status_put) | **PUT** /api/v1/operations/{operation_id}/{operation_status} | Update Operation |


## update_operation_api_v1_operations_operation_id_operation_status_put

> Object update_operation_api_v1_operations_operation_id_operation_status_put(operation_id, operation_status)

Update Operation

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::WorkerApi.new
operation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
operation_status = CloudApiClient::OperationStatus::FAILED # OperationStatus | 

begin
  # Update Operation
  result = api_instance.update_operation_api_v1_operations_operation_id_operation_status_put(operation_id, operation_status)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->update_operation_api_v1_operations_operation_id_operation_status_put: #{e}"
end
```

#### Using the update_operation_api_v1_operations_operation_id_operation_status_put_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_operation_api_v1_operations_operation_id_operation_status_put_with_http_info(operation_id, operation_status)

```ruby
begin
  # Update Operation
  data, status_code, headers = api_instance.update_operation_api_v1_operations_operation_id_operation_status_put_with_http_info(operation_id, operation_status)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->update_operation_api_v1_operations_operation_id_operation_status_put_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **operation_id** | **String** |  |  |
| **operation_status** | [**OperationStatus**](.md) |  |  |

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

