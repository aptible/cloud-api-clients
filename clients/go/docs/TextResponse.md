# TextResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **string** | error message payload to bubble up to end user | [optional] 
**Payload** | **string** | simple text response payload | 

## Methods

### NewTextResponse

`func NewTextResponse(payload string, ) *TextResponse`

NewTextResponse instantiates a new TextResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTextResponseWithDefaults

`func NewTextResponseWithDefaults() *TextResponse`

NewTextResponseWithDefaults instantiates a new TextResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *TextResponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *TextResponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *TextResponse) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *TextResponse) HasError() bool`

HasError returns a boolean if a field has been set.

### GetPayload

`func (o *TextResponse) GetPayload() string`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *TextResponse) GetPayloadOk() (*string, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *TextResponse) SetPayload(v string)`

SetPayload sets Payload field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


