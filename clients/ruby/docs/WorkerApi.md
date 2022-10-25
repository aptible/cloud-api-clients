# CloudApiClient::WorkerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**operation_update**](WorkerApi.md#operation_update) | **PUT** /api/v1/operations/{operation_id} | Operation Update |
| [**worker_health_check**](WorkerApi.md#worker_health_check) | **POST** /api/v1/worker/health-check | Worker Health Check |


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

api_instance = CloudApiClient::WorkerApi.new
operation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
operation_update = CloudApiClient::OperationUpdate.new({id: 'id_example', status: CloudApiClient::OperationStatus::FAILED}) # OperationUpdate | 

begin
  # Operation Update
  result = api_instance.operation_update(operation_id, operation_update)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->operation_update: #{e}"
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
  puts "Error when calling WorkerApi->operation_update_with_http_info: #{e}"
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


## worker_health_check

> Object worker_health_check(health_check_from_worker)

Worker Health Check

### Examples

```ruby
require 'time'
require 'cloud_api_client'

api_instance = CloudApiClient::WorkerApi.new
health_check_from_worker = CloudApiClient::HealthCheckFromWorker.new({environment_id: 'environment_id_example', execution_id: 'execution_id_example', message: 'message_example'}) # HealthCheckFromWorker | 

begin
  # Worker Health Check
  result = api_instance.worker_health_check(health_check_from_worker)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->worker_health_check: #{e}"
end
```

#### Using the worker_health_check_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> worker_health_check_with_http_info(health_check_from_worker)

```ruby
begin
  # Worker Health Check
  data, status_code, headers = api_instance.worker_health_check_with_http_info(health_check_from_worker)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling WorkerApi->worker_health_check_with_http_info: #{e}"
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

