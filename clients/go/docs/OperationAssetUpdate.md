# OperationAssetUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TerraformInit** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | 
**TerraformPlan** | Pointer to [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] 
**TerraformApply** | Pointer to [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] 
**TerraformPlanFailures** | Pointer to **string** |  | [optional] 
**TerraformApplyFailures** | Pointer to **string** |  | [optional] 

## Methods

### NewOperationAssetUpdate

`func NewOperationAssetUpdate(terraformInit OperationTerraformRunUpdate, ) *OperationAssetUpdate`

NewOperationAssetUpdate instantiates a new OperationAssetUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperationAssetUpdateWithDefaults

`func NewOperationAssetUpdateWithDefaults() *OperationAssetUpdate`

NewOperationAssetUpdateWithDefaults instantiates a new OperationAssetUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerraformInit

`func (o *OperationAssetUpdate) GetTerraformInit() OperationTerraformRunUpdate`

GetTerraformInit returns the TerraformInit field if non-nil, zero value otherwise.

### GetTerraformInitOk

`func (o *OperationAssetUpdate) GetTerraformInitOk() (*OperationTerraformRunUpdate, bool)`

GetTerraformInitOk returns a tuple with the TerraformInit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformInit

`func (o *OperationAssetUpdate) SetTerraformInit(v OperationTerraformRunUpdate)`

SetTerraformInit sets TerraformInit field to given value.


### GetTerraformPlan

`func (o *OperationAssetUpdate) GetTerraformPlan() OperationTerraformRunUpdate`

GetTerraformPlan returns the TerraformPlan field if non-nil, zero value otherwise.

### GetTerraformPlanOk

`func (o *OperationAssetUpdate) GetTerraformPlanOk() (*OperationTerraformRunUpdate, bool)`

GetTerraformPlanOk returns a tuple with the TerraformPlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformPlan

`func (o *OperationAssetUpdate) SetTerraformPlan(v OperationTerraformRunUpdate)`

SetTerraformPlan sets TerraformPlan field to given value.

### HasTerraformPlan

`func (o *OperationAssetUpdate) HasTerraformPlan() bool`

HasTerraformPlan returns a boolean if a field has been set.

### GetTerraformApply

`func (o *OperationAssetUpdate) GetTerraformApply() OperationTerraformRunUpdate`

GetTerraformApply returns the TerraformApply field if non-nil, zero value otherwise.

### GetTerraformApplyOk

`func (o *OperationAssetUpdate) GetTerraformApplyOk() (*OperationTerraformRunUpdate, bool)`

GetTerraformApplyOk returns a tuple with the TerraformApply field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformApply

`func (o *OperationAssetUpdate) SetTerraformApply(v OperationTerraformRunUpdate)`

SetTerraformApply sets TerraformApply field to given value.

### HasTerraformApply

`func (o *OperationAssetUpdate) HasTerraformApply() bool`

HasTerraformApply returns a boolean if a field has been set.

### GetTerraformPlanFailures

`func (o *OperationAssetUpdate) GetTerraformPlanFailures() string`

GetTerraformPlanFailures returns the TerraformPlanFailures field if non-nil, zero value otherwise.

### GetTerraformPlanFailuresOk

`func (o *OperationAssetUpdate) GetTerraformPlanFailuresOk() (*string, bool)`

GetTerraformPlanFailuresOk returns a tuple with the TerraformPlanFailures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformPlanFailures

`func (o *OperationAssetUpdate) SetTerraformPlanFailures(v string)`

SetTerraformPlanFailures sets TerraformPlanFailures field to given value.

### HasTerraformPlanFailures

`func (o *OperationAssetUpdate) HasTerraformPlanFailures() bool`

HasTerraformPlanFailures returns a boolean if a field has been set.

### GetTerraformApplyFailures

`func (o *OperationAssetUpdate) GetTerraformApplyFailures() string`

GetTerraformApplyFailures returns the TerraformApplyFailures field if non-nil, zero value otherwise.

### GetTerraformApplyFailuresOk

`func (o *OperationAssetUpdate) GetTerraformApplyFailuresOk() (*string, bool)`

GetTerraformApplyFailuresOk returns a tuple with the TerraformApplyFailures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerraformApplyFailures

`func (o *OperationAssetUpdate) SetTerraformApplyFailures(v string)`

SetTerraformApplyFailures sets TerraformApplyFailures field to given value.

### HasTerraformApplyFailures

`func (o *OperationAssetUpdate) HasTerraformApplyFailures() bool`

HasTerraformApplyFailures returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


