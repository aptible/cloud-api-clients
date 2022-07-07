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

// AssetOutput struct for AssetOutput
type AssetOutput struct {
	Asset string `json:"asset"`
	AssetVersion string `json:"asset_version"`
	Id string `json:"id"`
	Status string `json:"status"`
	Environment EnvironmentOutput `json:"environment"`
	CurrentAssetParameters AssetParametersOutput `json:"current_asset_parameters"`
	UserDefined bool `json:"user_defined"`
}

// NewAssetOutput instantiates a new AssetOutput object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssetOutput(asset string, assetVersion string, id string, status string, environment EnvironmentOutput, currentAssetParameters AssetParametersOutput, userDefined bool) *AssetOutput {
	this := AssetOutput{}
	this.Asset = asset
	this.AssetVersion = assetVersion
	this.Id = id
	this.Status = status
	this.Environment = environment
	this.CurrentAssetParameters = currentAssetParameters
	this.UserDefined = userDefined
	return &this
}

// NewAssetOutputWithDefaults instantiates a new AssetOutput object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssetOutputWithDefaults() *AssetOutput {
	this := AssetOutput{}
	return &this
}

// GetAsset returns the Asset field value
func (o *AssetOutput) GetAsset() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Asset
}

// GetAssetOk returns a tuple with the Asset field value
// and a boolean to check if the value has been set.
func (o *AssetOutput) GetAssetOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Asset, true
}

// SetAsset sets field value
func (o *AssetOutput) SetAsset(v string) {
	o.Asset = v
}

// GetAssetVersion returns the AssetVersion field value
func (o *AssetOutput) GetAssetVersion() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AssetVersion
}

// GetAssetVersionOk returns a tuple with the AssetVersion field value
// and a boolean to check if the value has been set.
func (o *AssetOutput) GetAssetVersionOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AssetVersion, true
}

// SetAssetVersion sets field value
func (o *AssetOutput) SetAssetVersion(v string) {
	o.AssetVersion = v
}

// GetId returns the Id field value
func (o *AssetOutput) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *AssetOutput) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *AssetOutput) SetId(v string) {
	o.Id = v
}

// GetStatus returns the Status field value
func (o *AssetOutput) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *AssetOutput) GetStatusOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *AssetOutput) SetStatus(v string) {
	o.Status = v
}

// GetEnvironment returns the Environment field value
func (o *AssetOutput) GetEnvironment() EnvironmentOutput {
	if o == nil {
		var ret EnvironmentOutput
		return ret
	}

	return o.Environment
}

// GetEnvironmentOk returns a tuple with the Environment field value
// and a boolean to check if the value has been set.
func (o *AssetOutput) GetEnvironmentOk() (*EnvironmentOutput, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Environment, true
}

// SetEnvironment sets field value
func (o *AssetOutput) SetEnvironment(v EnvironmentOutput) {
	o.Environment = v
}

// GetCurrentAssetParameters returns the CurrentAssetParameters field value
func (o *AssetOutput) GetCurrentAssetParameters() AssetParametersOutput {
	if o == nil {
		var ret AssetParametersOutput
		return ret
	}

	return o.CurrentAssetParameters
}

// GetCurrentAssetParametersOk returns a tuple with the CurrentAssetParameters field value
// and a boolean to check if the value has been set.
func (o *AssetOutput) GetCurrentAssetParametersOk() (*AssetParametersOutput, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CurrentAssetParameters, true
}

// SetCurrentAssetParameters sets field value
func (o *AssetOutput) SetCurrentAssetParameters(v AssetParametersOutput) {
	o.CurrentAssetParameters = v
}

// GetUserDefined returns the UserDefined field value
func (o *AssetOutput) GetUserDefined() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.UserDefined
}

// GetUserDefinedOk returns a tuple with the UserDefined field value
// and a boolean to check if the value has been set.
func (o *AssetOutput) GetUserDefinedOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.UserDefined, true
}

// SetUserDefined sets field value
func (o *AssetOutput) SetUserDefined(v bool) {
	o.UserDefined = v
}

func (o AssetOutput) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["asset"] = o.Asset
	}
	if true {
		toSerialize["asset_version"] = o.AssetVersion
	}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["environment"] = o.Environment
	}
	if true {
		toSerialize["current_asset_parameters"] = o.CurrentAssetParameters
	}
	if true {
		toSerialize["user_defined"] = o.UserDefined
	}
	return json.Marshal(toSerialize)
}

type NullableAssetOutput struct {
	value *AssetOutput
	isSet bool
}

func (v NullableAssetOutput) Get() *AssetOutput {
	return v.value
}

func (v *NullableAssetOutput) Set(val *AssetOutput) {
	v.value = val
	v.isSet = true
}

func (v NullableAssetOutput) IsSet() bool {
	return v.isSet
}

func (v *NullableAssetOutput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssetOutput(val *AssetOutput) *NullableAssetOutput {
	return &NullableAssetOutput{value: val, isSet: true}
}

func (v NullableAssetOutput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssetOutput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

