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

// EnvironmentOutput struct for EnvironmentOutput
type EnvironmentOutput struct {
	Name string `json:"name"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Organization OrganizationOutput `json:"organization"`
	AwsAccountId *string `json:"aws_account_id,omitempty"`
}

// NewEnvironmentOutput instantiates a new EnvironmentOutput object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnvironmentOutput(name string, id string, organization OrganizationOutput) *EnvironmentOutput {
	this := EnvironmentOutput{}
	this.Name = name
	this.Id = id
	this.Organization = organization
	return &this
}

// NewEnvironmentOutputWithDefaults instantiates a new EnvironmentOutput object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnvironmentOutputWithDefaults() *EnvironmentOutput {
	this := EnvironmentOutput{}
	return &this
}

// GetName returns the Name field value
func (o *EnvironmentOutput) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *EnvironmentOutput) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *EnvironmentOutput) SetName(v string) {
	o.Name = v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *EnvironmentOutput) GetDescription() string {
	if o == nil || o.Description == nil {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentOutput) GetDescriptionOk() (*string, bool) {
	if o == nil || o.Description == nil {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *EnvironmentOutput) HasDescription() bool {
	if o != nil && o.Description != nil {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *EnvironmentOutput) SetDescription(v string) {
	o.Description = &v
}

// GetId returns the Id field value
func (o *EnvironmentOutput) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *EnvironmentOutput) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *EnvironmentOutput) SetId(v string) {
	o.Id = v
}

// GetOrganization returns the Organization field value
func (o *EnvironmentOutput) GetOrganization() OrganizationOutput {
	if o == nil {
		var ret OrganizationOutput
		return ret
	}

	return o.Organization
}

// GetOrganizationOk returns a tuple with the Organization field value
// and a boolean to check if the value has been set.
func (o *EnvironmentOutput) GetOrganizationOk() (*OrganizationOutput, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Organization, true
}

// SetOrganization sets field value
func (o *EnvironmentOutput) SetOrganization(v OrganizationOutput) {
	o.Organization = v
}

// GetAwsAccountId returns the AwsAccountId field value if set, zero value otherwise.
func (o *EnvironmentOutput) GetAwsAccountId() string {
	if o == nil || o.AwsAccountId == nil {
		var ret string
		return ret
	}
	return *o.AwsAccountId
}

// GetAwsAccountIdOk returns a tuple with the AwsAccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentOutput) GetAwsAccountIdOk() (*string, bool) {
	if o == nil || o.AwsAccountId == nil {
		return nil, false
	}
	return o.AwsAccountId, true
}

// HasAwsAccountId returns a boolean if a field has been set.
func (o *EnvironmentOutput) HasAwsAccountId() bool {
	if o != nil && o.AwsAccountId != nil {
		return true
	}

	return false
}

// SetAwsAccountId gets a reference to the given string and assigns it to the AwsAccountId field.
func (o *EnvironmentOutput) SetAwsAccountId(v string) {
	o.AwsAccountId = &v
}

func (o EnvironmentOutput) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["name"] = o.Name
	}
	if o.Description != nil {
		toSerialize["description"] = o.Description
	}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["organization"] = o.Organization
	}
	if o.AwsAccountId != nil {
		toSerialize["aws_account_id"] = o.AwsAccountId
	}
	return json.Marshal(toSerialize)
}

type NullableEnvironmentOutput struct {
	value *EnvironmentOutput
	isSet bool
}

func (v NullableEnvironmentOutput) Get() *EnvironmentOutput {
	return v.value
}

func (v *NullableEnvironmentOutput) Set(val *EnvironmentOutput) {
	v.value = val
	v.isSet = true
}

func (v NullableEnvironmentOutput) IsSet() bool {
	return v.isSet
}

func (v *NullableEnvironmentOutput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnvironmentOutput(val *EnvironmentOutput) *NullableEnvironmentOutput {
	return &NullableEnvironmentOutput{value: val, isSet: true}
}

func (v NullableEnvironmentOutput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnvironmentOutput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


