# AssetBundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identifier** | **string** |  | 
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Types** | **[]string** |  | 
**Actions** | [**map[string]AssetAction**](AssetAction.md) |  | 
**UserParameters** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewAssetBundle

`func NewAssetBundle(identifier string, name string, types []string, actions map[string]AssetAction, ) *AssetBundle`

NewAssetBundle instantiates a new AssetBundle object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssetBundleWithDefaults

`func NewAssetBundleWithDefaults() *AssetBundle`

NewAssetBundleWithDefaults instantiates a new AssetBundle object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentifier

`func (o *AssetBundle) GetIdentifier() string`

GetIdentifier returns the Identifier field if non-nil, zero value otherwise.

### GetIdentifierOk

`func (o *AssetBundle) GetIdentifierOk() (*string, bool)`

GetIdentifierOk returns a tuple with the Identifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifier

`func (o *AssetBundle) SetIdentifier(v string)`

SetIdentifier sets Identifier field to given value.


### GetName

`func (o *AssetBundle) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AssetBundle) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AssetBundle) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AssetBundle) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AssetBundle) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AssetBundle) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AssetBundle) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTypes

`func (o *AssetBundle) GetTypes() []string`

GetTypes returns the Types field if non-nil, zero value otherwise.

### GetTypesOk

`func (o *AssetBundle) GetTypesOk() (*[]string, bool)`

GetTypesOk returns a tuple with the Types field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypes

`func (o *AssetBundle) SetTypes(v []string)`

SetTypes sets Types field to given value.


### GetActions

`func (o *AssetBundle) GetActions() map[string]AssetAction`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *AssetBundle) GetActionsOk() (*map[string]AssetAction, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *AssetBundle) SetActions(v map[string]AssetAction)`

SetActions sets Actions field to given value.


### GetUserParameters

`func (o *AssetBundle) GetUserParameters() interface{}`

GetUserParameters returns the UserParameters field if non-nil, zero value otherwise.

### GetUserParametersOk

`func (o *AssetBundle) GetUserParametersOk() (*interface{}, bool)`

GetUserParametersOk returns a tuple with the UserParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserParameters

`func (o *AssetBundle) SetUserParameters(v interface{})`

SetUserParameters sets UserParameters field to given value.

### HasUserParameters

`func (o *AssetBundle) HasUserParameters() bool`

HasUserParameters returns a boolean if a field has been set.

### SetUserParametersNil

`func (o *AssetBundle) SetUserParametersNil(b bool)`

 SetUserParametersNil sets the value for UserParameters to be an explicit nil

### UnsetUserParameters
`func (o *AssetBundle) UnsetUserParameters()`

UnsetUserParameters ensures that no value is present for UserParameters, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


