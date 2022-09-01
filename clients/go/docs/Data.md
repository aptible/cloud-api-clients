# Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | **string** |  | 
**TerraformInit** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | 
**TerraformPlan** | Pointer to [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] 
**TerraformApply** | Pointer to [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] 
**TerraformPlanFailures** | Pointer to **string** |  | [optional] 
**TerraformApplyFailures** | Pointer to **string** |  | [optional] 
**ActionOutput** | Pointer to **interface{}** |  | [optional] 
**ActionErrors** | Pointer to **string** |  | [optional] 

## Methods

### NewData

`func NewData(error_ string, terraformInit OperationTerraformRunUpdate, ) *Data`

NewData instantiates a new Data object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataWithDefaults

`func NewDataWithDefaults() *Data`

NewDataWithDefaults instantiates a new Data object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *Data) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *Data) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *Data) SetError(v string)`

SetError sets Error field to given value.


### GetTerraformInit

`func (o *Data) GetTerraformInit() OperationTerraformRunUpdate`

GetTerraformInit returns the TerraformInit field if non-nil, zero value otherwise.

### GetTerraformInitOk

`func (o *Data) GetTerraformInitOk() (*OperationTerraformRunUpdate, bool)`

GetTerraformInitOk returns a tuple with the TerraformInit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformInit

`func (o *Data) SetTerraformInit(v OperationTerraformRunUpdate)`

SetTerraformInit sets TerraformInit field to given value.


### GetTerraformPlan

`func (o *Data) GetTerraformPlan() OperationTerraformRunUpdate`

GetTerraformPlan returns the TerraformPlan field if non-nil, zero value otherwise.

### GetTerraformPlanOk

`func (o *Data) GetTerraformPlanOk() (*OperationTerraformRunUpdate, bool)`

GetTerraformPlanOk returns a tuple with the TerraformPlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformPlan

`func (o *Data) SetTerraformPlan(v OperationTerraformRunUpdate)`

SetTerraformPlan sets TerraformPlan field to given value.

### HasTerraformPlan

`func (o *Data) HasTerraformPlan() bool`

HasTerraformPlan returns a boolean if a field has been set.

### GetTerraformApply

`func (o *Data) GetTerraformApply() OperationTerraformRunUpdate`

GetTerraformApply returns the TerraformApply field if non-nil, zero value otherwise.

### GetTerraformApplyOk

`func (o *Data) GetTerraformApplyOk() (*OperationTerraformRunUpdate, bool)`

GetTerraformApplyOk returns a tuple with the TerraformApply field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformApply

`func (o *Data) SetTerraformApply(v OperationTerraformRunUpdate)`

SetTerraformApply sets TerraformApply field to given value.

### HasTerraformApply

`func (o *Data) HasTerraformApply() bool`

HasTerraformApply returns a boolean if a field has been set.

### GetTerraformPlanFailures

`func (o *Data) GetTerraformPlanFailures() string`

GetTerraformPlanFailures returns the TerraformPlanFailures field if non-nil, zero value otherwise.

### GetTerraformPlanFailuresOk

`func (o *Data) GetTerraformPlanFailuresOk() (*string, bool)`

GetTerraformPlanFailuresOk returns a tuple with the TerraformPlanFailures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformPlanFailures

`func (o *Data) SetTerraformPlanFailures(v string)`

SetTerraformPlanFailures sets TerraformPlanFailures field to given value.

### HasTerraformPlanFailures

`func (o *Data) HasTerraformPlanFailures() bool`

HasTerraformPlanFailures returns a boolean if a field has been set.

### GetTerraformApplyFailures

`func (o *Data) GetTerraformApplyFailures() string`

GetTerraformApplyFailures returns the TerraformApplyFailures field if non-nil, zero value otherwise.

### GetTerraformApplyFailuresOk

`func (o *Data) GetTerraformApplyFailuresOk() (*string, bool)`

GetTerraformApplyFailuresOk returns a tuple with the TerraformApplyFailures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformApplyFailures

`func (o *Data) SetTerraformApplyFailures(v string)`

SetTerraformApplyFailures sets TerraformApplyFailures field to given value.

### HasTerraformApplyFailures

`func (o *Data) HasTerraformApplyFailures() bool`

HasTerraformApplyFailures returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


