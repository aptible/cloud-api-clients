# CloudApiClient::ConnectionOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **incoming_asset** | [**AssetOutput**](AssetOutput.md) |  |  |
| **outgoing_asset** | [**AssetOutput**](AssetOutput.md) |  |  |
| **status** | [**ConnectionStatus**](ConnectionStatus.md) |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::ConnectionOutput.new(
  id: null,
  incoming_asset: null,
  outgoing_asset: null,
  status: null
)
```

