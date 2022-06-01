# AssetOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asset** | **string** |  | 
**AssetVersion** | **string** |  | 
**Id** | **string** |  | 
**Status** | **string** |  | 
**Environment** | [**EnvironmentOutput**](EnvironmentOutput.md) |  | 
**CurrentAssetVariables** | [**AssetVariablesOutput**](AssetVariablesOutput.md) |  | 
**UserDefined** | **bool** |  | 

## Methods

### NewAssetOutput

`func NewAssetOutput(asset string, assetVersion string, id string, status string, environment EnvironmentOutput, currentAssetVariables AssetVariablesOutput, userDefined bool, ) *AssetOutput`

NewAssetOutput instantiates a new AssetOutput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssetOutputWithDefaults

`func NewAssetOutputWithDefaults() *AssetOutput`

NewAssetOutputWithDefaults instantiates a new AssetOutput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAsset

`func (o *AssetOutput) GetAsset() string`

GetAsset returns the Asset field if non-nil, zero value otherwise.

### GetAssetOk

`func (o *AssetOutput) GetAssetOk() (*string, bool)`

GetAssetOk returns a tuple with the Asset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsset

`func (o *AssetOutput) SetAsset(v string)`

SetAsset sets Asset field to given value.


### GetAssetVersion

`func (o *AssetOutput) GetAssetVersion() string`

GetAssetVersion returns the AssetVersion field if non-nil, zero value otherwise.

### GetAssetVersionOk

`func (o *AssetOutput) GetAssetVersionOk() (*string, bool)`

GetAssetVersionOk returns a tuple with the AssetVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetVersion

`func (o *AssetOutput) SetAssetVersion(v string)`

SetAssetVersion sets AssetVersion field to given value.


### GetId

`func (o *AssetOutput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AssetOutput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AssetOutput) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *AssetOutput) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AssetOutput) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AssetOutput) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetEnvironment

`func (o *AssetOutput) GetEnvironment() EnvironmentOutput`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *AssetOutput) GetEnvironmentOk() (*EnvironmentOutput, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *AssetOutput) SetEnvironment(v EnvironmentOutput)`

SetEnvironment sets Environment field to given value.


### GetCurrentAssetVariables

`func (o *AssetOutput) GetCurrentAssetVariables() AssetVariablesOutput`

GetCurrentAssetVariables returns the CurrentAssetVariables field if non-nil, zero value otherwise.

### GetCurrentAssetVariablesOk

`func (o *AssetOutput) GetCurrentAssetVariablesOk() (*AssetVariablesOutput, bool)`

GetCurrentAssetVariablesOk returns a tuple with the CurrentAssetVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentAssetVariables

`func (o *AssetOutput) SetCurrentAssetVariables(v AssetVariablesOutput)`

SetCurrentAssetVariables sets CurrentAssetVariables field to given value.


### GetUserDefined

`func (o *AssetOutput) GetUserDefined() bool`

GetUserDefined returns the UserDefined field if non-nil, zero value otherwise.

### GetUserDefinedOk

`func (o *AssetOutput) GetUserDefinedOk() (*bool, bool)`

GetUserDefinedOk returns a tuple with the UserDefined field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefined

`func (o *AssetOutput) SetUserDefined(v bool)`

SetUserDefined sets UserDefined field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


