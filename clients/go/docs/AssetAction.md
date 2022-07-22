# AssetAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**UserParameters** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewAssetAction

`func NewAssetAction(name string, ) *AssetAction`

NewAssetAction instantiates a new AssetAction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssetActionWithDefaults

`func NewAssetActionWithDefaults() *AssetAction`

NewAssetActionWithDefaults instantiates a new AssetAction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AssetAction) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AssetAction) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AssetAction) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AssetAction) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AssetAction) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AssetAction) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AssetAction) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUserParameters

`func (o *AssetAction) GetUserParameters() interface{}`

GetUserParameters returns the UserParameters field if non-nil, zero value otherwise.

### GetUserParametersOk

`func (o *AssetAction) GetUserParametersOk() (*interface{}, bool)`

GetUserParametersOk returns a tuple with the UserParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserParameters

`func (o *AssetAction) SetUserParameters(v interface{})`

SetUserParameters sets UserParameters field to given value.

### HasUserParameters

`func (o *AssetAction) HasUserParameters() bool`

HasUserParameters returns a boolean if a field has been set.

### SetUserParametersNil

`func (o *AssetAction) SetUserParametersNil(b bool)`

 SetUserParametersNil sets the value for UserParameters to be an explicit nil

### UnsetUserParameters
`func (o *AssetAction) UnsetUserParameters()`

UnsetUserParameters ensures that no value is present for UserParameters, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


