# ConnectionOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**IncomingConnectionAsset** | Pointer to [**AssetOutput**](AssetOutput.md) |  | [optional] 
**Operations** | Pointer to [**[]OperationOutput**](OperationOutput.md) |  | [optional] 
**OutgoingConnectionAsset** | Pointer to [**AssetOutput**](AssetOutput.md) |  | [optional] 
**Status** | [**ConnectionStatus**](ConnectionStatus.md) |  | 

## Methods

### NewConnectionOutput

`func NewConnectionOutput(id string, status ConnectionStatus, ) *ConnectionOutput`

NewConnectionOutput instantiates a new ConnectionOutput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectionOutputWithDefaults

`func NewConnectionOutputWithDefaults() *ConnectionOutput`

NewConnectionOutputWithDefaults instantiates a new ConnectionOutput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ConnectionOutput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectionOutput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectionOutput) SetId(v string)`

SetId sets Id field to given value.


### GetIncomingConnectionAsset

`func (o *ConnectionOutput) GetIncomingConnectionAsset() AssetOutput`

GetIncomingConnectionAsset returns the IncomingConnectionAsset field if non-nil, zero value otherwise.

### GetIncomingConnectionAssetOk

`func (o *ConnectionOutput) GetIncomingConnectionAssetOk() (*AssetOutput, bool)`

GetIncomingConnectionAssetOk returns a tuple with the IncomingConnectionAsset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomingConnectionAsset

`func (o *ConnectionOutput) SetIncomingConnectionAsset(v AssetOutput)`

SetIncomingConnectionAsset sets IncomingConnectionAsset field to given value.

### HasIncomingConnectionAsset

`func (o *ConnectionOutput) HasIncomingConnectionAsset() bool`

HasIncomingConnectionAsset returns a boolean if a field has been set.

### GetOperations

`func (o *ConnectionOutput) GetOperations() []OperationOutput`

GetOperations returns the Operations field if non-nil, zero value otherwise.

### GetOperationsOk

`func (o *ConnectionOutput) GetOperationsOk() (*[]OperationOutput, bool)`

GetOperationsOk returns a tuple with the Operations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperations

`func (o *ConnectionOutput) SetOperations(v []OperationOutput)`

SetOperations sets Operations field to given value.

### HasOperations

`func (o *ConnectionOutput) HasOperations() bool`

HasOperations returns a boolean if a field has been set.

### GetOutgoingConnectionAsset

`func (o *ConnectionOutput) GetOutgoingConnectionAsset() AssetOutput`

GetOutgoingConnectionAsset returns the OutgoingConnectionAsset field if non-nil, zero value otherwise.

### GetOutgoingConnectionAssetOk

`func (o *ConnectionOutput) GetOutgoingConnectionAssetOk() (*AssetOutput, bool)`

GetOutgoingConnectionAssetOk returns a tuple with the OutgoingConnectionAsset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutgoingConnectionAsset

`func (o *ConnectionOutput) SetOutgoingConnectionAsset(v AssetOutput)`

SetOutgoingConnectionAsset sets OutgoingConnectionAsset field to given value.

### HasOutgoingConnectionAsset

`func (o *ConnectionOutput) HasOutgoingConnectionAsset() bool`

HasOutgoingConnectionAsset returns a boolean if a field has been set.

### GetStatus

`func (o *ConnectionOutput) GetStatus() ConnectionStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ConnectionOutput) GetStatusOk() (*ConnectionStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ConnectionOutput) SetStatus(v ConnectionStatus)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


