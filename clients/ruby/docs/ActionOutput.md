# CloudApiClient::ActionOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **action_name** | **String** |  |  |
| **asset** | [**AssetOutput**](AssetOutput.md) |  |  |
| **operation** | [**OperationOutput**](OperationOutput.md) |  |  |
| **parameters** | **Object** |  | [optional] |
| **output** | **Object** |  | [optional] |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::ActionOutput.new(
  id: null,
  action_name: null,
  asset: null,
  operation: null,
  parameters: null,
  output: null
)
```

