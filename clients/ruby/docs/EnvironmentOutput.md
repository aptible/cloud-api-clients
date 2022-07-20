# CloudApiClient::EnvironmentOutput

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **data** | **Object** |  |  |
| **id** | **String** |  |  |
| **organization** | [**OrganizationOutput**](OrganizationOutput.md) |  |  |
| **aws_account_id** | **String** |  | [optional] |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::EnvironmentOutput.new(
  name: null,
  description: null,
  data: null,
  id: null,
  organization: null,
  aws_account_id: null
)
```

