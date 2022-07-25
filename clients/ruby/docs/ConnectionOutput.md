# CloudApiClient::ConnectionOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **incoming_connection_asset** | [**AssetOutput**](AssetOutput.md) |  | [optional] |
| **operations** | [**Array&lt;OperationOutput&gt;**](OperationOutput.md) |  | [optional] |
| **outgoing_connection_asset** | [**AssetOutput**](AssetOutput.md) |  | [optional] |
| **status** | [**ConnectionStatus**](ConnectionStatus.md) |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::ConnectionOutput.new(
  id: null,
  incoming_connection_asset: null,
  operations: null,
  outgoing_connection_asset: null,
  status: null
)
```

