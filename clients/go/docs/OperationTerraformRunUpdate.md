# OperationTerraformRunUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TerraformStdout** | Pointer to **interface{}** |  | [optional] 
**TerraformStderr** | Pointer to **interface{}** |  | [optional] 
**TerraformReturnCode** | **int32** |  | 
**TerraformSuccess** | **bool** |  | 

## Methods

### NewOperationTerraformRunUpdate

`func NewOperationTerraformRunUpdate(terraformReturnCode int32, terraformSuccess bool, ) *OperationTerraformRunUpdate`

NewOperationTerraformRunUpdate instantiates a new OperationTerraformRunUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperationTerraformRunUpdateWithDefaults

`func NewOperationTerraformRunUpdateWithDefaults() *OperationTerraformRunUpdate`

NewOperationTerraformRunUpdateWithDefaults instantiates a new OperationTerraformRunUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerraformStdout

`func (o *OperationTerraformRunUpdate) GetTerraformStdout() interface{}`

GetTerraformStdout returns the TerraformStdout field if non-nil, zero value otherwise.

### GetTerraformStdoutOk

`func (o *OperationTerraformRunUpdate) GetTerraformStdoutOk() (*interface{}, bool)`

GetTerraformStdoutOk returns a tuple with the TerraformStdout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformStdout

`func (o *OperationTerraformRunUpdate) SetTerraformStdout(v interface{})`

SetTerraformStdout sets TerraformStdout field to given value.

### HasTerraformStdout

`func (o *OperationTerraformRunUpdate) HasTerraformStdout() bool`

HasTerraformStdout returns a boolean if a field has been set.

### SetTerraformStdoutNil

`func (o *OperationTerraformRunUpdate) SetTerraformStdoutNil(b bool)`

 SetTerraformStdoutNil sets the value for TerraformStdout to be an explicit nil

### UnsetTerraformStdout
`func (o *OperationTerraformRunUpdate) UnsetTerraformStdout()`

UnsetTerraformStdout ensures that no value is present for TerraformStdout, not even an explicit nil
### GetTerraformStderr

`func (o *OperationTerraformRunUpdate) GetTerraformStderr() interface{}`

GetTerraformStderr returns the TerraformStderr field if non-nil, zero value otherwise.

### GetTerraformStderrOk

`func (o *OperationTerraformRunUpdate) GetTerraformStderrOk() (*interface{}, bool)`

GetTerraformStderrOk returns a tuple with the TerraformStderr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformStderr

`func (o *OperationTerraformRunUpdate) SetTerraformStderr(v interface{})`

SetTerraformStderr sets TerraformStderr field to given value.

### HasTerraformStderr

`func (o *OperationTerraformRunUpdate) HasTerraformStderr() bool`

HasTerraformStderr returns a boolean if a field has been set.

### SetTerraformStderrNil

`func (o *OperationTerraformRunUpdate) SetTerraformStderrNil(b bool)`

 SetTerraformStderrNil sets the value for TerraformStderr to be an explicit nil

### UnsetTerraformStderr
`func (o *OperationTerraformRunUpdate) UnsetTerraformStderr()`

UnsetTerraformStderr ensures that no value is present for TerraformStderr, not even an explicit nil
### GetTerraformReturnCode

`func (o *OperationTerraformRunUpdate) GetTerraformReturnCode() int32`

GetTerraformReturnCode returns the TerraformReturnCode field if non-nil, zero value otherwise.

### GetTerraformReturnCodeOk

`func (o *OperationTerraformRunUpdate) GetTerraformReturnCodeOk() (*int32, bool)`

GetTerraformReturnCodeOk returns a tuple with the TerraformReturnCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformReturnCode

`func (o *OperationTerraformRunUpdate) SetTerraformReturnCode(v int32)`

SetTerraformReturnCode sets TerraformReturnCode field to given value.


### GetTerraformSuccess

`func (o *OperationTerraformRunUpdate) GetTerraformSuccess() bool`

GetTerraformSuccess returns the TerraformSuccess field if non-nil, zero value otherwise.

### GetTerraformSuccessOk

`func (o *OperationTerraformRunUpdate) GetTerraformSuccessOk() (*bool, bool)`

GetTerraformSuccessOk returns a tuple with the TerraformSuccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformSuccess

`func (o *OperationTerraformRunUpdate) SetTerraformSuccess(v bool)`

SetTerraformSuccess sets TerraformSuccess field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


