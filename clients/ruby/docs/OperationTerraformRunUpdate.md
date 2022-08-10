# CloudApiClient::OperationTerraformRunUpdate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **terraform_stdout** | **Object** |  | [optional] |
| **terraform_stderr** | **Object** |  | [optional] |
| **terraform_return_code** | **Integer** |  |  |
| **terraform_success** | **Boolean** |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::OperationTerraformRunUpdate.new(
  terraform_stdout: null,
  terraform_stderr: null,
  terraform_return_code: null,
  terraform_success: null
)
```

