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

// OperationFailure struct for OperationFailure
type OperationFailure struct {
	Error string `json:"error"`
}

// NewOperationFailure instantiates a new OperationFailure object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOperationFailure(error_ string) *OperationFailure {
	this := OperationFailure{}
	this.Error = error_
	return &this
}

// NewOperationFailureWithDefaults instantiates a new OperationFailure object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOperationFailureWithDefaults() *OperationFailure {
	this := OperationFailure{}
	return &this
}

// GetError returns the Error field value
func (o *OperationFailure) GetError() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Error
}

// GetErrorOk returns a tuple with the Error field value
// and a boolean to check if the value has been set.
func (o *OperationFailure) GetErrorOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Error, true
}

// SetError sets field value
func (o *OperationFailure) SetError(v string) {
	o.Error = v
}

func (o OperationFailure) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["error"] = o.Error
	}
	return json.Marshal(toSerialize)
}

type NullableOperationFailure struct {
	value *OperationFailure
	isSet bool
}

func (v NullableOperationFailure) Get() *OperationFailure {
	return v.value
}

func (v *NullableOperationFailure) Set(val *OperationFailure) {
	v.value = val
	v.isSet = true
}

func (v NullableOperationFailure) IsSet() bool {
	return v.isSet
}

func (v *NullableOperationFailure) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOperationFailure(val *OperationFailure) *NullableOperationFailure {
	return &NullableOperationFailure{value: val, isSet: true}
}

func (v NullableOperationFailure) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOperationFailure) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


