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

// ActionRequest struct for ActionRequest
type ActionRequest struct {
	ActionName string `json:"action_name"`
	Parameters interface{} `json:"parameters,omitempty"`
}

// NewActionRequest instantiates a new ActionRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActionRequest(actionName string) *ActionRequest {
	this := ActionRequest{}
	this.ActionName = actionName
	return &this
}

// NewActionRequestWithDefaults instantiates a new ActionRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActionRequestWithDefaults() *ActionRequest {
	this := ActionRequest{}
	return &this
}

// GetActionName returns the ActionName field value
func (o *ActionRequest) GetActionName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ActionName
}

// GetActionNameOk returns a tuple with the ActionName field value
// and a boolean to check if the value has been set.
func (o *ActionRequest) GetActionNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ActionName, true
}

// SetActionName sets field value
func (o *ActionRequest) SetActionName(v string) {
	o.ActionName = v
}

// GetParameters returns the Parameters field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ActionRequest) GetParameters() interface{} {
	if o == nil {
		var ret interface{}
		return ret
	}
	return o.Parameters
}

// GetParametersOk returns a tuple with the Parameters field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ActionRequest) GetParametersOk() (*interface{}, bool) {
	if o == nil || o.Parameters == nil {
		return nil, false
	}
	return &o.Parameters, true
}

// HasParameters returns a boolean if a field has been set.
func (o *ActionRequest) HasParameters() bool {
	if o != nil && o.Parameters != nil {
		return true
	}

	return false
}

// SetParameters gets a reference to the given interface{} and assigns it to the Parameters field.
func (o *ActionRequest) SetParameters(v interface{}) {
	o.Parameters = v
}

func (o ActionRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["action_name"] = o.ActionName
	}
	if o.Parameters != nil {
		toSerialize["parameters"] = o.Parameters
	}
	return json.Marshal(toSerialize)
}

type NullableActionRequest struct {
	value *ActionRequest
	isSet bool
}

func (v NullableActionRequest) Get() *ActionRequest {
	return v.value
}

func (v *NullableActionRequest) Set(val *ActionRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableActionRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableActionRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActionRequest(val *ActionRequest) *NullableActionRequest {
	return &NullableActionRequest{value: val, isSet: true}
}

func (v NullableActionRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActionRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

