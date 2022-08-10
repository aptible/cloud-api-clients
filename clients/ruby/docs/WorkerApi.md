# CloudApiClient::WorkerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**update_operation_api_v1_operations_operation_id_put**](WorkerApi.md#update_operation_api_v1_operations_operation_id_put) | **PUT** /api/v1/operations/{operation_id} | Update Operation |
| [**worker_health_check_api_v1_worker_health_check_post**](WorkerApi.md#worker_health_check_api_v1_worker_health_check_post) | **POST** /api/v1/worker/health-check | Worker Health Check |


## update_operation_api_v1_operations_operation_id_put

> Object update_operation_api_v1_operations_operation_id_put(operation_id, operation_update)

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
operation_update = CloudApiClient::OperationUpdate.new({id: 'id_example', status: CloudApiClient::OperationStatus::FAILED}) # OperationUpdate | 

begin
  # Update Operation
  result = api_instance.update_operation_api_v1_operations_operation_id_put(operation_id, operation_update)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->update_operation_api_v1_operations_operation_id_put: #{e}"
end
```

#### Using the update_operation_api_v1_operations_operation_id_put_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_operation_api_v1_operations_operation_id_put_with_http_info(operation_id, operation_update)

```ruby
begin
  # Update Operation
  data, status_code, headers = api_instance.update_operation_api_v1_operations_operation_id_put_with_http_info(operation_id, operation_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->update_operation_api_v1_operations_operation_id_put_with_http_info: #{e}"
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


## worker_health_check_api_v1_worker_health_check_post

> Object worker_health_check_api_v1_worker_health_check_post(health_check_from_worker)

Worker Health Check

### Examples

```ruby
require 'time'
require 'cloud_api_client'

api_instance = CloudApiClient::WorkerApi.new
health_check_from_worker = CloudApiClient::HealthCheckFromWorker.new({environment_id: 'environment_id_example', execution_id: 'execution_id_example', message: 'message_example'}) # HealthCheckFromWorker | 

begin
  # Worker Health Check
  result = api_instance.worker_health_check_api_v1_worker_health_check_post(health_check_from_worker)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->worker_health_check_api_v1_worker_health_check_post: #{e}"
end
```

#### Using the worker_health_check_api_v1_worker_health_check_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> worker_health_check_api_v1_worker_health_check_post_with_http_info(health_check_from_worker)

```ruby
begin
  # Worker Health Check
  data, status_code, headers = api_instance.worker_health_check_api_v1_worker_health_check_post_with_http_info(health_check_from_worker)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->worker_health_check_api_v1_worker_health_check_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **health_check_from_worker** | [**HealthCheckFromWorker**](HealthCheckFromWorker.md) |  |  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

