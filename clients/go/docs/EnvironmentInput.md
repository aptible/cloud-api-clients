# EnvironmentInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**AwsAccountId** | **string** |  | 
**Data** | **map[string]interface{}** |  | 

## Methods

### NewEnvironmentInput

`func NewEnvironmentInput(name string, awsAccountId string, data map[string]interface{}, ) *EnvironmentInput`

NewEnvironmentInput instantiates a new EnvironmentInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnvironmentInputWithDefaults

`func NewEnvironmentInputWithDefaults() *EnvironmentInput`

NewEnvironmentInputWithDefaults instantiates a new EnvironmentInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *EnvironmentInput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EnvironmentInput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EnvironmentInput) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *EnvironmentInput) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EnvironmentInput) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EnvironmentInput) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EnvironmentInput) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAwsAccountId

`func (o *EnvironmentInput) GetAwsAccountId() string`

GetAwsAccountId returns the AwsAccountId field if non-nil, zero value otherwise.

### GetAwsAccountIdOk

`func (o *EnvironmentInput) GetAwsAccountIdOk() (*string, bool)`

GetAwsAccountIdOk returns a tuple with the AwsAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAccountId

`func (o *EnvironmentInput) SetAwsAccountId(v string)`

SetAwsAccountId sets AwsAccountId field to given value.


### GetData

`func (o *EnvironmentInput) GetData() map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *EnvironmentInput) GetDataOk() (*map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *EnvironmentInput) SetData(v map[string]interface{})`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


