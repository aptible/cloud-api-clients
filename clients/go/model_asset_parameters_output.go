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

// AssetParametersOutput struct for AssetParametersOutput
type AssetParametersOutput struct {
	Data map[string]interface{} `json:"data"`
	Iteration int32 `json:"iteration"`
	Id string `json:"id"`
}

// NewAssetParametersOutput instantiates a new AssetParametersOutput object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssetParametersOutput(data map[string]interface{}, iteration int32, id string) *AssetParametersOutput {
	this := AssetParametersOutput{}
	this.Data = data
	this.Iteration = iteration
	this.Id = id
	return &this
}

// NewAssetParametersOutputWithDefaults instantiates a new AssetParametersOutput object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssetParametersOutputWithDefaults() *AssetParametersOutput {
	this := AssetParametersOutput{}
	return &this
}

// GetData returns the Data field value
func (o *AssetParametersOutput) GetData() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}

	return o.Data
}

// GetDataOk returns a tuple with the Data field value
// and a boolean to check if the value has been set.
func (o *AssetParametersOutput) GetDataOk() (map[string]interface{}, bool) {
	if o == nil {
		return nil, false
	}
	return o.Data, true
}

// SetData sets field value
func (o *AssetParametersOutput) SetData(v map[string]interface{}) {
	o.Data = v
}

// GetIteration returns the Iteration field value
func (o *AssetParametersOutput) GetIteration() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Iteration
}

// GetIterationOk returns a tuple with the Iteration field value
// and a boolean to check if the value has been set.
func (o *AssetParametersOutput) GetIterationOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Iteration, true
}

// SetIteration sets field value
func (o *AssetParametersOutput) SetIteration(v int32) {
	o.Iteration = v
}

// GetId returns the Id field value
func (o *AssetParametersOutput) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *AssetParametersOutput) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *AssetParametersOutput) SetId(v string) {
	o.Id = v
}

func (o AssetParametersOutput) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["data"] = o.Data
	}
	if true {
		toSerialize["iteration"] = o.Iteration
	}
	if true {
		toSerialize["id"] = o.Id
	}
	return json.Marshal(toSerialize)
}

type NullableAssetParametersOutput struct {
	value *AssetParametersOutput
	isSet bool
}

func (v NullableAssetParametersOutput) Get() *AssetParametersOutput {
	return v.value
}

func (v *NullableAssetParametersOutput) Set(val *AssetParametersOutput) {
	v.value = val
	v.isSet = true
}

func (v NullableAssetParametersOutput) IsSet() bool {
	return v.isSet
}

func (v *NullableAssetParametersOutput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssetParametersOutput(val *AssetParametersOutput) *NullableAssetParametersOutput {
	return &NullableAssetParametersOutput{value: val, isSet: true}
}

func (v NullableAssetParametersOutput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssetParametersOutput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

