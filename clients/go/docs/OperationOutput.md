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
**AssetParameters** | Pointer to **map[string]interface{}** |  | [optional] 
**Id** | **string** |  | 
**ExecutionId** | Pointer to **string** |  | [optional] 
**RequestId** | **string** |  | 
**ClientIp** | Pointer to **string** |  | [optional] 
**TokenData** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewOperationOutput

`func NewOperationOutput(environmentId string, userId string, organizationId string, assetName string, assetId string, assetVersion string, id string, requestId string, ) *OperationOutput`

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


### GetAssetParameters

`func (o *OperationOutput) GetAssetParameters() map[string]interface{}`

GetAssetParameters returns the AssetParameters field if non-nil, zero value otherwise.

### GetAssetParametersOk

`func (o *OperationOutput) GetAssetParametersOk() (*map[string]interface{}, bool)`

GetAssetParametersOk returns a tuple with the AssetParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetParameters

`func (o *OperationOutput) SetAssetParameters(v map[string]interface{})`

SetAssetParameters sets AssetParameters field to given value.

### HasAssetParameters

`func (o *OperationOutput) HasAssetParameters() bool`

HasAssetParameters returns a boolean if a field has been set.

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


### GetExecutionId

`func (o *OperationOutput) GetExecutionId() string`

GetExecutionId returns the ExecutionId field if non-nil, zero value otherwise.

### GetExecutionIdOk

`func (o *OperationOutput) GetExecutionIdOk() (*string, bool)`

GetExecutionIdOk returns a tuple with the ExecutionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionId

`func (o *OperationOutput) SetExecutionId(v string)`

SetExecutionId sets ExecutionId field to given value.

### HasExecutionId

`func (o *OperationOutput) HasExecutionId() bool`

HasExecutionId returns a boolean if a field has been set.

### GetRequestId

`func (o *OperationOutput) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OperationOutput) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OperationOutput) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetClientIp

`func (o *OperationOutput) GetClientIp() string`

GetClientIp returns the ClientIp field if non-nil, zero value otherwise.

### GetClientIpOk

`func (o *OperationOutput) GetClientIpOk() (*string, bool)`

GetClientIpOk returns a tuple with the ClientIp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientIp

`func (o *OperationOutput) SetClientIp(v string)`

SetClientIp sets ClientIp field to given value.

### HasClientIp

`func (o *OperationOutput) HasClientIp() bool`

HasClientIp returns a boolean if a field has been set.

### GetTokenData

`func (o *OperationOutput) GetTokenData() interface{}`

GetTokenData returns the TokenData field if non-nil, zero value otherwise.

### GetTokenDataOk

`func (o *OperationOutput) GetTokenDataOk() (*interface{}, bool)`

GetTokenDataOk returns a tuple with the TokenData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenData

`func (o *OperationOutput) SetTokenData(v interface{})`

SetTokenData sets TokenData field to given value.

### HasTokenData

`func (o *OperationOutput) HasTokenData() bool`

HasTokenData returns a boolean if a field has been set.

### SetTokenDataNil

`func (o *OperationOutput) SetTokenDataNil(b bool)`

 SetTokenDataNil sets the value for TokenData to be an explicit nil

### UnsetTokenData
`func (o *OperationOutput) UnsetTokenData()`

UnsetTokenData ensures that no value is present for TokenData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


