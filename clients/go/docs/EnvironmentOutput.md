# EnvironmentOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Id** | **string** |  | 
**Organization** | [**OrganizationOutput**](OrganizationOutput.md) |  | 
**AwsAccountId** | Pointer to **string** |  | [optional] 
**Deleted** | **bool** |  | 

## Methods

### NewEnvironmentOutput

`func NewEnvironmentOutput(name string, id string, organization OrganizationOutput, deleted bool, ) *EnvironmentOutput`

NewEnvironmentOutput instantiates a new EnvironmentOutput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnvironmentOutputWithDefaults

`func NewEnvironmentOutputWithDefaults() *EnvironmentOutput`

NewEnvironmentOutputWithDefaults instantiates a new EnvironmentOutput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *EnvironmentOutput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EnvironmentOutput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EnvironmentOutput) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *EnvironmentOutput) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EnvironmentOutput) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EnvironmentOutput) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EnvironmentOutput) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *EnvironmentOutput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EnvironmentOutput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EnvironmentOutput) SetId(v string)`

SetId sets Id field to given value.


### GetOrganization

`func (o *EnvironmentOutput) GetOrganization() OrganizationOutput`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *EnvironmentOutput) GetOrganizationOk() (*OrganizationOutput, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *EnvironmentOutput) SetOrganization(v OrganizationOutput)`

SetOrganization sets Organization field to given value.


### GetAwsAccountId

`func (o *EnvironmentOutput) GetAwsAccountId() string`

GetAwsAccountId returns the AwsAccountId field if non-nil, zero value otherwise.

### GetAwsAccountIdOk

`func (o *EnvironmentOutput) GetAwsAccountIdOk() (*string, bool)`

GetAwsAccountIdOk returns a tuple with the AwsAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAccountId

`func (o *EnvironmentOutput) SetAwsAccountId(v string)`

SetAwsAccountId sets AwsAccountId field to given value.

### HasAwsAccountId

`func (o *EnvironmentOutput) HasAwsAccountId() bool`

HasAwsAccountId returns a boolean if a field has been set.

### GetDeleted

`func (o *EnvironmentOutput) GetDeleted() bool`

GetDeleted returns the Deleted field if non-nil, zero value otherwise.

### GetDeletedOk

`func (o *EnvironmentOutput) GetDeletedOk() (*bool, bool)`

GetDeletedOk returns a tuple with the Deleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleted

`func (o *EnvironmentOutput) SetDeleted(v bool)`

SetDeleted sets Deleted field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


