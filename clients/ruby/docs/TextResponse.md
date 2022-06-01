# CloudApiClient::TextResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **error** | **String** | error message payload to bubble up to end user | [optional] |
| **payload** | **String** | simple text response payload |  |

## Example

```ruby
require 'cloud_api_client'

instance = CloudApiClient::TextResponse.new(
  error: null,
  payload: null
)
```

