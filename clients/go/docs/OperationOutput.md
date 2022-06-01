# OperationOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnvironmentId** | **string** |  | 
**UserId** | **string** |  | 
**OrganizationId** | **string** |  | 
**OperationType** | Pointer to [**NullableOperationType**](OperationType.md) |  | [optional] 
**Status** | Pointer to [**NullableOperationStatus**](OperationStatus.md) |  | [optional] 
**AssetName** | **string** |  | 
**AssetId** | **string** |  | 
**AssetVersion** | **string** |  | 
**AssetVariables** | Pointer to **map[string]interface{}** |  | [optional] 
**Id** | **string** |  | 
**RunId** | Pointer to **string** |  | [optional] 

## Methods

### NewOperationOutput

`func NewOperationOutput(environmentId string, userId string, organizationId string, assetName string, assetId string, assetVersion string, id string, ) *OperationOutput`

NewOperationOutput instantiates a new OperationOutput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperationOutputWithDefaults

`func NewOperationOutputWithDefaults() *OperationOutput`

NewOperationOutputWithDefaults instantiates a new OperationOutput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnvironmentId

`func (o *OperationOutput) GetEnvironmentId() string`

GetEnvironmentId returns the EnvironmentId field if non-nil, zero value otherwise.

### GetEnvironmentIdOk

`func (o *OperationOutput) GetEnvironmentIdOk() (*string, bool)`

GetEnvironmentIdOk returns a tuple with the EnvironmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironmentId

`func (o *OperationOutput) SetEnvironmentId(v string)`

SetEnvironmentId sets EnvironmentId field to given value.


### GetUserId

`func (o *OperationOutput) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *OperationOutput) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *OperationOutput) SetUserId(v string)`

SetUserId sets UserId field to given value.


### GetOrganizationId

`func (o *OperationOutput) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *OperationOutput) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *OperationOutput) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.


### GetOperationType

`func (o *OperationOutput) GetOperationType() OperationType`

GetOperationType returns the OperationType field if non-nil, zero value otherwise.

### GetOperationTypeOk

`func (o *OperationOutput) GetOperationTypeOk() (*OperationType, bool)`

GetOperationTypeOk returns a tuple with the OperationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationType

`func (o *OperationOutput) SetOperationType(v OperationType)`

SetOperationType sets OperationType field to given value.

### HasOperationType

`func (o *OperationOutput) HasOperationType() bool`

HasOperationType returns a boolean if a field has been set.

### SetOperationTypeNil

`func (o *OperationOutput) SetOperationTypeNil(b bool)`

 SetOperationTypeNil sets the value for OperationType to be an explicit nil

### UnsetOperationType
`func (o *OperationOutput) UnsetOperationType()`

UnsetOperationType ensures that no value is present for OperationType, not even an explicit nil
### GetStatus

`func (o *OperationOutput) GetStatus() OperationStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OperationOutput) GetStatusOk() (*OperationStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OperationOutput) SetStatus(v OperationStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *OperationOutput) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *OperationOutput) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *OperationOutput) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetAssetName

`func (o *OperationOutput) GetAssetName() string`

GetAssetName returns the AssetName field if non-nil, zero value otherwise.

### GetAssetNameOk

`func (o *OperationOutput) GetAssetNameOk() (*string, bool)`

GetAssetNameOk returns a tuple with the AssetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetName

`func (o *OperationOutput) SetAssetName(v string)`

SetAssetName sets AssetName field to given value.


### GetAssetId

`func (o *OperationOutput) GetAssetId() string`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *OperationOutput) GetAssetIdOk() (*string, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *OperationOutput) SetAssetId(v string)`

SetAssetId sets AssetId field to given value.


### GetAssetVersion

`func (o *OperationOutput) GetAssetVersion() string`

GetAssetVersion returns the AssetVersion field if non-nil, zero value otherwise.

### GetAssetVersionOk

`func (o *OperationOutput) GetAssetVersionOk() (*string, bool)`

GetAssetVersionOk returns a tuple with the AssetVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetVersion

`func (o *OperationOutput) SetAssetVersion(v string)`

SetAssetVersion sets AssetVersion field to given value.


### GetAssetVariables

`func (o *OperationOutput) GetAssetVariables() map[string]interface{}`

GetAssetVariables returns the AssetVariables field if non-nil, zero value otherwise.

### GetAssetVariablesOk

`func (o *OperationOutput) GetAssetVariablesOk() (*map[string]interface{}, bool)`

GetAssetVariablesOk returns a tuple with the AssetVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetVariables

`func (o *OperationOutput) SetAssetVariables(v map[string]interface{})`

SetAssetVariables sets AssetVariables field to given value.

### HasAssetVariables

`func (o *OperationOutput) HasAssetVariables() bool`

HasAssetVariables returns a boolean if a field has been set.

### GetId

`func (o *OperationOutput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OperationOutput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OperationOutput) SetId(v string)`

SetId sets Id field to given value.


### GetRunId

`func (o *OperationOutput) GetRunId() string`

GetRunId returns the RunId field if non-nil, zero value otherwise.

### GetRunIdOk

`func (o *OperationOutput) GetRunIdOk() (*string, bool)`

GetRunIdOk returns a tuple with the RunId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunId

`func (o *OperationOutput) SetRunId(v string)`

SetRunId sets RunId field to given value.

### HasRunId

`func (o *OperationOutput) HasRunId() bool`

HasRunId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


