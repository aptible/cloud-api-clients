# CloudApiClient::Data

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **action_output** | **Object** |  | [optional] |
| **action_errors** | **String** |  | [optional] |
| **terraform_init** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  |  |
| **terraform_plan** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |
| **terraform_apply** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |
| **terraform_plan_failures** | **String** |  | [optional] |
| **terraform_apply_failures** | **String** |  | [optional] |
| **error** | **String** |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::Data.new(
  action_output: null,
  action_errors: null,
  terraform_init: null,
  terraform_plan: null,
  terraform_apply: null,
  terraform_plan_failures: null,
  terraform_apply_failures: null,
  error: null
)
```

