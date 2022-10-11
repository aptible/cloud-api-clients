# CloudApiClient::AssetOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **asset** | **String** |  |  |
| **asset_version** | **String** |  |  |
| **id** | **String** |  |  |
| **connections** | [**Array&lt;ConnectionOutput&gt;**](ConnectionOutput.md) |  | [optional] |
| **connects_to** | **Array&lt;String&gt;** |  | [optional] |
| **current_asset_parameters** | [**AssetParametersOutput**](AssetParametersOutput.md) |  |  |
| **environment** | [**EnvironmentOutput**](EnvironmentOutput.md) |  |  |
| **status** | [**AssetStatus**](AssetStatus.md) |  |  |
| **user_defined** | **Boolean** |  |  |
| **outputs** | [**Hash&lt;String, AssetTerraformOutput&gt;**](AssetTerraformOutput.md) |  | [optional] |
| **operation_id** | **String** |  | [optional] |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::AssetOutput.new(
  asset: null,
  asset_version: null,
  id: null,
  connections: null,
  connects_to: null,
  current_asset_parameters: null,
  environment: null,
  status: null,
  user_defined: null,
  outputs: null,
  operation_id: null
)
```

