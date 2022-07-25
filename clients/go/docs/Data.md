# Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionOutput** | Pointer to **interface{}** |  | [optional] 
**ActionErrors** | Pointer to **string** |  | [optional] 
**TerraformStdout** | **[]map[string]interface{}** |  | 
**TerraformStdin** | **[]map[string]interface{}** |  | 
**TerraformReturnCode** | **int32** |  | 

## Methods

### NewData

`func NewData(terraformStdout []map[string]interface{}, terraformStdin []map[string]interface{}, terraformReturnCode int32, ) *Data`

NewData instantiates a new Data object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataWithDefaults

`func NewDataWithDefaults() *Data`

NewDataWithDefaults instantiates a new Data object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionOutput

`func (o *Data) GetActionOutput() interface{}`

GetActionOutput returns the ActionOutput field if non-nil, zero value otherwise.

### GetActionOutputOk

`func (o *Data) GetActionOutputOk() (*interface{}, bool)`

GetActionOutputOk returns a tuple with the ActionOutput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionOutput

`func (o *Data) SetActionOutput(v interface{})`

SetActionOutput sets ActionOutput field to given value.

### HasActionOutput

`func (o *Data) HasActionOutput() bool`

HasActionOutput returns a boolean if a field has been set.

### SetActionOutputNil

`func (o *Data) SetActionOutputNil(b bool)`

 SetActionOutputNil sets the value for ActionOutput to be an explicit nil

### UnsetActionOutput
`func (o *Data) UnsetActionOutput()`

UnsetActionOutput ensures that no value is present for ActionOutput, not even an explicit nil
### GetActionErrors

`func (o *Data) GetActionErrors() string`

GetActionErrors returns the ActionErrors field if non-nil, zero value otherwise.

### GetActionErrorsOk

`func (o *Data) GetActionErrorsOk() (*string, bool)`

GetActionErrorsOk returns a tuple with the ActionErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionErrors

`func (o *Data) SetActionErrors(v string)`

SetActionErrors sets ActionErrors field to given value.

### HasActionErrors

`func (o *Data) HasActionErrors() bool`

HasActionErrors returns a boolean if a field has been set.

### GetTerraformStdout

`func (o *Data) GetTerraformStdout() []map[string]interface{}`

GetTerraformStdout returns the TerraformStdout field if non-nil, zero value otherwise.

### GetTerraformStdoutOk

`func (o *Data) GetTerraformStdoutOk() (*[]map[string]interface{}, bool)`

GetTerraformStdoutOk returns a tuple with the TerraformStdout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformStdout

`func (o *Data) SetTerraformStdout(v []map[string]interface{})`

SetTerraformStdout sets TerraformStdout field to given value.


### GetTerraformStdin

`func (o *Data) GetTerraformStdin() []map[string]interface{}`

GetTerraformStdin returns the TerraformStdin field if non-nil, zero value otherwise.

### GetTerraformStdinOk

`func (o *Data) GetTerraformStdinOk() (*[]map[string]interface{}, bool)`

GetTerraformStdinOk returns a tuple with the TerraformStdin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformStdin

`func (o *Data) SetTerraformStdin(v []map[string]interface{})`

SetTerraformStdin sets TerraformStdin field to given value.


### GetTerraformReturnCode

`func (o *Data) GetTerraformReturnCode() int32`

GetTerraformReturnCode returns the TerraformReturnCode field if non-nil, zero value otherwise.

### GetTerraformReturnCodeOk

`func (o *Data) GetTerraformReturnCodeOk() (*int32, bool)`

GetTerraformReturnCodeOk returns a tuple with the TerraformReturnCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformReturnCode

`func (o *Data) SetTerraformReturnCode(v int32)`

SetTerraformReturnCode sets TerraformReturnCode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


