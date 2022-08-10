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

// OperationUpdate struct for OperationUpdate
type OperationUpdate struct {
	Id string `json:"id"`
	Status OperationStatus `json:"status"`
	Data *Data `json:"data,omitempty"`
}

// NewOperationUpdate instantiates a new OperationUpdate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOperationUpdate(id string, status OperationStatus) *OperationUpdate {
	this := OperationUpdate{}
	this.Id = id
	this.Status = status
	return &this
}

// NewOperationUpdateWithDefaults instantiates a new OperationUpdate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOperationUpdateWithDefaults() *OperationUpdate {
	this := OperationUpdate{}
	return &this
}

// GetId returns the Id field value
func (o *OperationUpdate) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *OperationUpdate) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *OperationUpdate) SetId(v string) {
	o.Id = v
}

// GetStatus returns the Status field value
func (o *OperationUpdate) GetStatus() OperationStatus {
	if o == nil {
		var ret OperationStatus
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *OperationUpdate) GetStatusOk() (*OperationStatus, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *OperationUpdate) SetStatus(v OperationStatus) {
	o.Status = v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *OperationUpdate) GetData() Data {
	if o == nil || o.Data == nil {
		var ret Data
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OperationUpdate) GetDataOk() (*Data, bool) {
	if o == nil || o.Data == nil {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *OperationUpdate) HasData() bool {
	if o != nil && o.Data != nil {
		return true
	}

	return false
}

// SetData gets a reference to the given Data and assigns it to the Data field.
func (o *OperationUpdate) SetData(v Data) {
	o.Data = &v
}

func (o OperationUpdate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if o.Data != nil {
		toSerialize["data"] = o.Data
	}
	return json.Marshal(toSerialize)
}

type NullableOperationUpdate struct {
	value *OperationUpdate
	isSet bool
}

func (v NullableOperationUpdate) Get() *OperationUpdate {
	return v.value
}

func (v *NullableOperationUpdate) Set(val *OperationUpdate) {
	v.value = val
	v.isSet = true
}

func (v NullableOperationUpdate) IsSet() bool {
	return v.isSet
}

func (v *NullableOperationUpdate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOperationUpdate(val *OperationUpdate) *NullableOperationUpdate {
	return &NullableOperationUpdate{value: val, isSet: true}
}

func (v NullableOperationUpdate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOperationUpdate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


