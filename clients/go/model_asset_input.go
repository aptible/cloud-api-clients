/*
Cloud API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 0.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cloud_api_client

import (
	"encoding/json"
)

// AssetInput struct for AssetInput
type AssetInput struct {
	Asset string `json:"asset"`
	AssetVersion string `json:"asset_version"`
	AssetParameters map[string]interface{} `json:"asset_parameters"`
	ConnectsTo []string `json:"connects_to,omitempty"`
}

// NewAssetInput instantiates a new AssetInput object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssetInput(asset string, assetVersion string, assetParameters map[string]interface{}) *AssetInput {
	this := AssetInput{}
	this.Asset = asset
	this.AssetVersion = assetVersion
	this.AssetParameters = assetParameters
	return &this
}

// NewAssetInputWithDefaults instantiates a new AssetInput object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssetInputWithDefaults() *AssetInput {
	this := AssetInput{}
	return &this
}

// GetAsset returns the Asset field value
func (o *AssetInput) GetAsset() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Asset
}

// GetAssetOk returns a tuple with the Asset field value
// and a boolean to check if the value has been set.
func (o *AssetInput) GetAssetOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Asset, true
}

// SetAsset sets field value
func (o *AssetInput) SetAsset(v string) {
	o.Asset = v
}

// GetAssetVersion returns the AssetVersion field value
func (o *AssetInput) GetAssetVersion() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AssetVersion
}

// GetAssetVersionOk returns a tuple with the AssetVersion field value
// and a boolean to check if the value has been set.
func (o *AssetInput) GetAssetVersionOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AssetVersion, true
}

// SetAssetVersion sets field value
func (o *AssetInput) SetAssetVersion(v string) {
	o.AssetVersion = v
}

// GetAssetParameters returns the AssetParameters field value
func (o *AssetInput) GetAssetParameters() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}

	return o.AssetParameters
}

// GetAssetParametersOk returns a tuple with the AssetParameters field value
// and a boolean to check if the value has been set.
func (o *AssetInput) GetAssetParametersOk() (map[string]interface{}, bool) {
	if o == nil {
		return nil, false
	}
	return o.AssetParameters, true
}

// SetAssetParameters sets field value
func (o *AssetInput) SetAssetParameters(v map[string]interface{}) {
	o.AssetParameters = v
}

// GetConnectsTo returns the ConnectsTo field value if set, zero value otherwise.
func (o *AssetInput) GetConnectsTo() []string {
	if o == nil || o.ConnectsTo == nil {
		var ret []string
		return ret
	}
	return o.ConnectsTo
}

// GetConnectsToOk returns a tuple with the ConnectsTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssetInput) GetConnectsToOk() ([]string, bool) {
	if o == nil || o.ConnectsTo == nil {
		return nil, false
	}
	return o.ConnectsTo, true
}

// HasConnectsTo returns a boolean if a field has been set.
func (o *AssetInput) HasConnectsTo() bool {
	if o != nil && o.ConnectsTo != nil {
		return true
	}

	return false
}

// SetConnectsTo gets a reference to the given []string and assigns it to the ConnectsTo field.
func (o *AssetInput) SetConnectsTo(v []string) {
	o.ConnectsTo = v
}

func (o AssetInput) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["asset"] = o.Asset
	}
	if true {
		toSerialize["asset_version"] = o.AssetVersion
	}
	if true {
		toSerialize["asset_parameters"] = o.AssetParameters
	}
	if o.ConnectsTo != nil {
		toSerialize["connects_to"] = o.ConnectsTo
	}
	return json.Marshal(toSerialize)
}

type NullableAssetInput struct {
	value *AssetInput
	isSet bool
}

func (v NullableAssetInput) Get() *AssetInput {
	return v.value
}

func (v *NullableAssetInput) Set(val *AssetInput) {
	v.value = val
	v.isSet = true
}

func (v NullableAssetInput) IsSet() bool {
	return v.isSet
}

func (v *NullableAssetInput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssetInput(val *AssetInput) *NullableAssetInput {
	return &NullableAssetInput{value: val, isSet: true}
}

func (v NullableAssetInput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssetInput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


