# ConnectionInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**OutgoingAssetId** | **string** |  | 

## Methods

### NewConnectionInput

`func NewConnectionInput(outgoingAssetId string, ) *ConnectionInput`

NewConnectionInput instantiates a new ConnectionInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectionInputWithDefaults

`func NewConnectionInputWithDefaults() *ConnectionInput`

NewConnectionInputWithDefaults instantiates a new ConnectionInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ConnectionInput) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConnectionInput) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConnectionInput) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConnectionInput) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOutgoingAssetId

`func (o *ConnectionInput) GetOutgoingAssetId() string`

GetOutgoingAssetId returns the OutgoingAssetId field if non-nil, zero value otherwise.

### GetOutgoingAssetIdOk

`func (o *ConnectionInput) GetOutgoingAssetIdOk() (*string, bool)`

GetOutgoingAssetIdOk returns a tuple with the OutgoingAssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutgoingAssetId

`func (o *ConnectionInput) SetOutgoingAssetId(v string)`

SetOutgoingAssetId sets OutgoingAssetId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


