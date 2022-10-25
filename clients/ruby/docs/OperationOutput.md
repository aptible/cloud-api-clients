# CloudApiClient::OperationOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **environment_id** | **String** |  |  |
| **user_id** | **String** |  |  |
| **organization_id** | **String** |  |  |
| **operation_type** | [**OperationType**](OperationType.md) |  | [optional] |
| **status** | [**OperationStatus**](OperationStatus.md) |  | [optional] |
| **asset_name** | **String** |  |  |
| **asset_id** | **String** |  |  |
| **asset_version** | **String** |  |  |
| **asset_parameters** | **Object** |  | [optional] |
| **id** | **String** |  |  |
| **execution_id** | **String** |  | [optional] |
| **request_id** | **String** |  |  |
| **client_ip** | **String** |  | [optional] |
| **token_data** | **Object** |  | [optional] |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::OperationOutput.new(
  environment_id: null,
  user_id: null,
  organization_id: null,
  operation_type: null,
  status: null,
  asset_name: null,
  asset_id: null,
  asset_version: null,
  asset_parameters: null,
  id: null,
  execution_id: null,
  request_id: null,
  client_ip: null,
  token_data: null
)
```

