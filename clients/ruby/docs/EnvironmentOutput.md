# CloudApiClient::EnvironmentOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **aws_account_id** | **String** |  |  |
| **data** | **Object** |  |  |
| **id** | **String** |  |  |
| **organization** | [**OrganizationOutput**](OrganizationOutput.md) |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::EnvironmentOutput.new(
  name: null,
  description: null,
  aws_account_id: null,
  data: null,
  id: null,
  organization: null
)
```

