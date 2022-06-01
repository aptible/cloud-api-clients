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

// LocationInner struct for LocationInner
type LocationInner struct {
	int32 *int32
	string *string
}

// Unmarshal JSON data into any of the pointers in the struct
func (dst *LocationInner) UnmarshalJSON(data []byte) error {
	var err error
	// try to unmarshal JSON data into int32
	err = json.Unmarshal(data, &dst.int32);
	if err == nil {
		jsonint32, _ := json.Marshal(dst.int32)
		if string(jsonint32) == "{}" { // empty struct
			dst.int32 = nil
		} else {
			return nil // data stored in dst.int32, return on the first match
		}
	} else {
		dst.int32 = nil
	}

	// try to unmarshal JSON data into string
	err = json.Unmarshal(data, &dst.string);
	if err == nil {
		jsonstring, _ := json.Marshal(dst.string)
		if string(jsonstring) == "{}" { // empty struct
			dst.string = nil
		} else {
			return nil // data stored in dst.string, return on the first match
		}
	} else {
		dst.string = nil
	}

	return fmt.Errorf("Data failed to match schemas in anyOf(LocationInner)")
}

// Marshal data from the first non-nil pointers in the struct to JSON
func (src *LocationInner) MarshalJSON() ([]byte, error) {
	if src.int32 != nil {
		return json.Marshal(&src.int32)
	}

	if src.string != nil {
		return json.Marshal(&src.string)
	}

	return nil, nil // no data in anyOf schemas
}

type NullableLocationInner struct {
	value *LocationInner
	isSet bool
}

func (v NullableLocationInner) Get() *LocationInner {
	return v.value
}

func (v *NullableLocationInner) Set(val *LocationInner) {
	v.value = val
	v.isSet = true
}

func (v NullableLocationInner) IsSet() bool {
	return v.isSet
}

func (v *NullableLocationInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLocationInner(val *LocationInner) *NullableLocationInner {
	return &NullableLocationInner{value: val, isSet: true}
}

func (v NullableLocationInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLocationInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


