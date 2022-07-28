# CloudApiClient::AssetOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset** | **String** |  |  |
| **asset_version** | **String** |  |  |
| **id** | **String** |  |  |
| **connections** | [**Array&lt;ConnectionOutput&gt;**](ConnectionOutput.md) |  | [optional] |
| **current_asset_parameters** | [**AssetParametersOutput**](AssetParametersOutput.md) |  |  |
| **environment** | [**EnvironmentOutput**](EnvironmentOutput.md) |  |  |
| **status** | [**AssetStatus**](AssetStatus.md) |  |  |
| **user_defined** | **Boolean** |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::AssetOutput.new(
  asset: null,
  asset_version: null,
  id: null,
  connections: null,
  current_asset_parameters: null,
  environment: null,
  status: null,
  user_defined: null
)
```

