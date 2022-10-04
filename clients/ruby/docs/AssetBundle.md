# CloudApiClient::AssetBundle

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **identifier** | **String** |  |  |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **types** | **Array&lt;String&gt;** |  |  |
| **actions** | [**Hash&lt;String, AssetAction&gt;**](AssetAction.md) |  |  |
| **user_parameters** | **Object** |  | [optional] |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::AssetBundle.new(
  identifier: null,
  name: null,
  description: null,
  types: null,
  actions: null,
  user_parameters: null
)
```

