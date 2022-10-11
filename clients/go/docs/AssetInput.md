# AssetInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asset** | **string** |  | 
**AssetVersion** | **string** |  | 
**AssetParameters** | **map[string]interface{}** |  | 
**ConnectsTo** | Pointer to **[]string** |  | [optional] 

## Methods

### NewAssetInput

`func NewAssetInput(asset string, assetVersion string, assetParameters map[string]interface{}, ) *AssetInput`

NewAssetInput instantiates a new AssetInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssetInputWithDefaults

`func NewAssetInputWithDefaults() *AssetInput`

NewAssetInputWithDefaults instantiates a new AssetInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAsset

`func (o *AssetInput) GetAsset() string`

GetAsset returns the Asset field if non-nil, zero value otherwise.

### GetAssetOk

`func (o *AssetInput) GetAssetOk() (*string, bool)`

GetAssetOk returns a tuple with the Asset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsset

`func (o *AssetInput) SetAsset(v string)`

SetAsset sets Asset field to given value.


### GetAssetVersion

`func (o *AssetInput) GetAssetVersion() string`

GetAssetVersion returns the AssetVersion field if non-nil, zero value otherwise.

### GetAssetVersionOk

`func (o *AssetInput) GetAssetVersionOk() (*string, bool)`

GetAssetVersionOk returns a tuple with the AssetVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetVersion

`func (o *AssetInput) SetAssetVersion(v string)`

SetAssetVersion sets AssetVersion field to given value.


### GetAssetParameters

`func (o *AssetInput) GetAssetParameters() map[string]interface{}`

GetAssetParameters returns the AssetParameters field if non-nil, zero value otherwise.

### GetAssetParametersOk

`func (o *AssetInput) GetAssetParametersOk() (*map[string]interface{}, bool)`

GetAssetParametersOk returns a tuple with the AssetParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetParameters

`func (o *AssetInput) SetAssetParameters(v map[string]interface{})`

SetAssetParameters sets AssetParameters field to given value.


### GetConnectsTo

`func (o *AssetInput) GetConnectsTo() []string`

GetConnectsTo returns the ConnectsTo field if non-nil, zero value otherwise.

### GetConnectsToOk

`func (o *AssetInput) GetConnectsToOk() (*[]string, bool)`

GetConnectsToOk returns a tuple with the ConnectsTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectsTo

`func (o *AssetInput) SetConnectsTo(v []string)`

SetConnectsTo sets ConnectsTo field to given value.

### HasConnectsTo

`func (o *AssetInput) HasConnectsTo() bool`

HasConnectsTo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


