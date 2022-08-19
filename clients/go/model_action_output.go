/*
Cloud API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 0.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cloud_api_client

import (
	"encoding/json"
	"fmt"
)

// ActionOutput struct for ActionOutput
type ActionOutput struct {
	[]interface{} *[]interface{}
	map[string]interface{} *map[string]interface{}
}

// Unmarshal JSON data into any of the pointers in the struct
func (dst *ActionOutput) UnmarshalJSON(data []byte) error {
	var err error
	// try to unmarshal JSON data into []interface{}
	err = json.Unmarshal(data, &dst.[]interface{});
	if err == nil {
		json[]interface{}, _ := json.Marshal(dst.[]interface{})
		if string(json[]interface{}) == "{}" { // empty struct
			dst.[]interface{} = nil
		} else {
			return nil // data stored in dst.[]interface{}, return on the first match
		}
	} else {
		dst.[]interface{} = nil
	}

	// try to unmarshal JSON data into map[string]interface{}
	err = json.Unmarshal(data, &dst.map[string]interface{});
	if err == nil {
		jsonmap[string]interface{}, _ := json.Marshal(dst.map[string]interface{})
		if string(jsonmap[string]interface{}) == "{}" { // empty struct
			dst.map[string]interface{} = nil
		} else {
			return nil // data stored in dst.map[string]interface{}, return on the first match
		}
	} else {
		dst.map[string]interface{} = nil
	}

	return fmt.Errorf("Data failed to match schemas in anyOf(ActionOutput)")
}

// Marshal data from the first non-nil pointers in the struct to JSON
func (src *ActionOutput) MarshalJSON() ([]byte, error) {
	if src.[]interface{} != nil {
		return json.Marshal(&src.[]interface{})
	}

	if src.map[string]interface{} != nil {
		return json.Marshal(&src.map[string]interface{})
	}

	return nil, nil // no data in anyOf schemas
}

type NullableActionOutput struct {
	value *ActionOutput
	isSet bool
}

func (v NullableActionOutput) Get() *ActionOutput {
	return v.value
}

func (v *NullableActionOutput) Set(val *ActionOutput) {
	v.value = val
	v.isSet = true
}

func (v NullableActionOutput) IsSet() bool {
	return v.isSet
}

func (v *NullableActionOutput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActionOutput(val *ActionOutput) *NullableActionOutput {
	return &NullableActionOutput{value: val, isSet: true}
}

func (v NullableActionOutput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActionOutput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


