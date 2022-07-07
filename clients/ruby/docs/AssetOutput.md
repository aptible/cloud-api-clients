# CloudApiClient::AssetOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset** | **String** |  |  |
| **asset_version** | **String** |  |  |
| **id** | **String** |  |  |
| **status** | **String** |  |  |
| **environment** | [**EnvironmentOutput**](EnvironmentOutput.md) |  |  |
| **current_asset_parameters** | [**AssetParametersOutput**](AssetParametersOutput.md) |  |  |
| **user_defined** | **Boolean** |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::AssetOutput.new(
  asset: null,
  asset_version: null,
  id: null,
  status: null,
  environment: null,
  current_asset_parameters: null,
  user_defined: null
)
```

