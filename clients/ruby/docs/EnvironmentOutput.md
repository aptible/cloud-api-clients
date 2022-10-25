# CloudApiClient::EnvironmentOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **id** | **String** |  |  |
| **organization** | [**OrganizationOutput**](OrganizationOutput.md) |  |  |
| **aws_account_id** | **String** |  | [optional] |
| **deleted** | **Boolean** |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::EnvironmentOutput.new(
  name: null,
  description: null,
  id: null,
  organization: null,
  aws_account_id: null,
  deleted: null
)
```

