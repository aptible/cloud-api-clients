# CloudApiClient::OrganizationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_organization_by_id_api_v1_organizations_organization_id_get**](OrganizationsApi.md#get_organization_by_id_api_v1_organizations_organization_id_get) | **GET** /api/v1/organizations/{organization_id} | Get Organization By Id |
| [**get_organizations_api_v1_organizations_get**](OrganizationsApi.md#get_organizations_api_v1_organizations_get) | **GET** /api/v1/organizations/ | Get Organizations |
| [**put_organization_api_v1_organizations_organization_id_put**](OrganizationsApi.md#put_organization_api_v1_organizations_organization_id_put) | **PUT** /api/v1/organizations/{organization_id} | Put Organization |


## get_organization_by_id_api_v1_organizations_organization_id_get

> <OrganizationOutput> get_organization_by_id_api_v1_organizations_organization_id_get(organization_id)

Get Organization By Id

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get Organization By Id
  result = api_instance.get_organization_by_id_api_v1_organizations_organization_id_get(organization_id)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->get_organization_by_id_api_v1_organizations_organization_id_get: #{e}"
end
```

#### Using the get_organization_by_id_api_v1_organizations_organization_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OrganizationOutput>, Integer, Hash)> get_organization_by_id_api_v1_organizations_organization_id_get_with_http_info(organization_id)

```ruby
begin
  # Get Organization By Id
  data, status_code, headers = api_instance.get_organization_by_id_api_v1_organizations_organization_id_get_with_http_info(organization_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OrganizationOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->get_organization_by_id_api_v1_organizations_organization_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |

### Return type

[**OrganizationOutput**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_organizations_api_v1_organizations_get

> <Array<OrganizationOutput>> get_organizations_api_v1_organizations_get

Get Organizations

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new

begin
  # Get Organizations
  result = api_instance.get_organizations_api_v1_organizations_get
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->get_organizations_api_v1_organizations_get: #{e}"
end
```

#### Using the get_organizations_api_v1_organizations_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<OrganizationOutput>>, Integer, Hash)> get_organizations_api_v1_organizations_get_with_http_info

```ruby
begin
  # Get Organizations
  data, status_code, headers = api_instance.get_organizations_api_v1_organizations_get_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<OrganizationOutput>>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->get_organizations_api_v1_organizations_get_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;OrganizationOutput&gt;**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## put_organization_api_v1_organizations_organization_id_put

> <OrganizationOutput> put_organization_api_v1_organizations_organization_id_put(organization_id, organization_input)

Put Organization

### Examples

```ruby
require 'time'
require 'cloud_api_client'
# setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::OrganizationsApi.new
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_input = CloudApiClient::OrganizationInput.new({name: 'name_example', baa_status: 'baa_status_example', aws_ou: 'aws_ou_example', contact_details: 3.56}) # OrganizationInput | 

begin
  # Put Organization
  result = api_instance.put_organization_api_v1_organizations_organization_id_put(organization_id, organization_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->put_organization_api_v1_organizations_organization_id_put: #{e}"
end
```

#### Using the put_organization_api_v1_organizations_organization_id_put_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OrganizationOutput>, Integer, Hash)> put_organization_api_v1_organizations_organization_id_put_with_http_info(organization_id, organization_input)

```ruby
begin
  # Put Organization
  data, status_code, headers = api_instance.put_organization_api_v1_organizations_organization_id_put_with_http_info(organization_id, organization_input)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OrganizationOutput>
rescue CloudApiClient::ApiError => e
  puts "Error when calling OrganizationsApi->put_organization_api_v1_organizations_organization_id_put_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** |  |  |
| **organization_input** | [**OrganizationInput**](OrganizationInput.md) |  |  |

### Return type

[**OrganizationOutput**](OrganizationOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

