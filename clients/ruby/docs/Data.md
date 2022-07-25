# CloudApiClient::Data

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **action_output** | **Object** |  | [optional] |
| **action_errors** | **String** |  | [optional] |
| **terraform_stdout** | **Array&lt;Object&gt;** |  |  |
| **terraform_stdin** | **Array&lt;Object&gt;** |  |  |
| **terraform_return_code** | **Integer** |  |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::Data.new(
  action_output: null,
  action_errors: null,
  terraform_stdout: null,
  terraform_stdin: null,
  terraform_return_code: null
)
```

