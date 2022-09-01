# CloudApiClient::UtilitiesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_ping**](UtilitiesApi.md#get_ping) | **GET** /api/v1/debug/ping | Get Ping |
| [**get_user**](UtilitiesApi.md#get_user) | **GET** /api/v1/debug/user_auth | Get User |
| [**get_user_role**](UtilitiesApi.md#get_user_role) | **GET** /api/v1/debug/user_role_middleware_check | Get User Role |


## get_ping

> <TextResponse> get_ping

Get Ping

### Examples

```ruby
require 'time'
require 'cloud_api_client'

api_instance = CloudApiClient::UtilitiesApi.new

begin
  # Get Ping
  result = api_instance.get_ping
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling UtilitiesApi->get_ping: #{e}"
end
```

#### Using the get_ping_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TextResponse>, Integer, Hash)> get_ping_with_http_info

```ruby
begin
  # Get Ping
  data, status_code, headers = api_instance.get_ping_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TextResponse>
rescue CloudApiClient::ApiError => e
  puts "Error when calling UtilitiesApi->get_ping_with_http_info: #{e}"
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


## get_user

> Object get_user

Get User

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::UtilitiesApi.new

begin
  # Get User
  result = api_instance.get_user
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling UtilitiesApi->get_user: #{e}"
end
```

#### Using the get_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_user_with_http_info

```ruby
begin
  # Get User
  data, status_code, headers = api_instance.get_user_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling UtilitiesApi->get_user_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_role

> Object get_user_role(organization_id)

Get User Role

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::UtilitiesApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get User Role
  result = api_instance.get_user_role(organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling UtilitiesApi->get_user_role: #{e}"
end
```

#### Using the get_user_role_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_user_role_with_http_info(organization_id)

```ruby
begin
  # Get User Role
  data, status_code, headers = api_instance.get_user_role_with_http_info(organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue CloudApiClient::ApiError => e
  puts "Error when calling UtilitiesApi->get_user_role_with_http_info: #{e}"
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

