# CloudApiClient::OperationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_operations_api_v1_organizations_organization_id_operations_get**](OperationsApi.md#get_operations_api_v1_organizations_organization_id_operations_get) | **GET** /api/v1/organizations/{organization_id}/operations/ | Get Operations |
| [**get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get**](OperationsApi.md#get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Get Operations By Operation Id |


## get_operations_api_v1_organizations_organization_id_operations_get

> <Array<OperationOutput>> get_operations_api_v1_organizations_organization_id_operations_get(organization_id, opts)

Get Operations

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
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  asset_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  environment_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
}

begin
  # Get Operations
  result = api_instance.get_operations_api_v1_organizations_organization_id_operations_get(organization_id, opts)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->get_operations_api_v1_organizations_organization_id_operations_get: #{e}"
end
```

#### Using the get_operations_api_v1_organizations_organization_id_operations_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<OperationOutput>>, Integer, Hash)> get_operations_api_v1_organizations_organization_id_operations_get_with_http_info(organization_id, opts)

```ruby
begin
  # Get Operations
  data, status_code, headers = api_instance.get_operations_api_v1_organizations_organization_id_operations_get_with_http_info(organization_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<OperationOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->get_operations_api_v1_organizations_organization_id_operations_get_with_http_info: #{e}"
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


## get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get

> <Array<OperationOutput>> get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get(operation_id, organization_id)

Get Operations By Operation Id

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
  # Get Operations By Operation Id
  result = api_instance.get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get(operation_id, organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get: #{e}"
end
```

#### Using the get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<OperationOutput>>, Integer, Hash)> get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get_with_http_info(operation_id, organization_id)

```ruby
begin
  # Get Operations By Operation Id
  data, status_code, headers = api_instance.get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get_with_http_info(operation_id, organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<OperationOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OperationsApi->get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **operation_id** | **String** |  |  |
| **organization_id** | **String** |  |  |

### Return type

[**Array&lt;OperationOutput&gt;**](OperationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

