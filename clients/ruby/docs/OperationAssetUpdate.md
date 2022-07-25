# CloudApiClient::OperationAssetUpdate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **terraform_init** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |
| **terraform_plan** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |
| **terraform_apply** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::OperationAssetUpdate.new(
  terraform_init: null,
  terraform_plan: null,
  terraform_apply: null
)
```

