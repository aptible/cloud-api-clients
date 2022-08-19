# CloudApiClient::WorkerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**worker_health_check_api_v1_worker_health_check_post**](WorkerApi.md#worker_health_check_api_v1_worker_health_check_post) | **POST** /api/v1/worker/health-check | Worker Health Check |


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

