# CloudApiClient::DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_healthcheck**](DefaultApi.md#get_healthcheck) | **GET** /api/v1/system/health_check | Get Healthcheck |


## get_healthcheck

> <TextResponse> get_healthcheck

Get Healthcheck

### Examples

```ruby
require 'time'
require 'cloud_api_client'

api_instance = CloudApiClient::DefaultApi.new

begin
  # Get Healthcheck
  result = api_instance.get_healthcheck
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling DefaultApi->get_healthcheck: #{e}"
end
```

#### Using the get_healthcheck_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TextResponse>, Integer, Hash)> get_healthcheck_with_http_info

```ruby
begin
  # Get Healthcheck
  data, status_code, headers = api_instance.get_healthcheck_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TextResponse>
rescue CloudApiClient::ApiError => e
  puts "Error when calling DefaultApi->get_healthcheck_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TextResponse**](TextResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

