# CloudApiClient::Data

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **action_output** | **Object** |  | [optional] |
| **action_errors** | **String** |  | [optional] |
| **terraform_init** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |
| **terraform_plan** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |
| **terraform_apply** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::Data.new(
  action_output: null,
  action_errors: null,
  terraform_init: null,
  terraform_plan: null,
  terraform_apply: null
)
```

