# ConnectionOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**IncomingAsset** | [**AssetOutput**](AssetOutput.md) |  | 
**OutgoingAsset** | [**AssetOutput**](AssetOutput.md) |  | 
**Status** | [**ConnectionStatus**](ConnectionStatus.md) |  | 

## Methods

### NewConnectionOutput

`func NewConnectionOutput(id string, incomingAsset AssetOutput, outgoingAsset AssetOutput, status ConnectionStatus, ) *ConnectionOutput`

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


### GetIncomingAsset

`func (o *ConnectionOutput) GetIncomingAsset() AssetOutput`

GetIncomingAsset returns the IncomingAsset field if non-nil, zero value otherwise.

### GetIncomingAssetOk

`func (o *ConnectionOutput) GetIncomingAssetOk() (*AssetOutput, bool)`

GetIncomingAssetOk returns a tuple with the IncomingAsset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomingAsset

`func (o *ConnectionOutput) SetIncomingAsset(v AssetOutput)`

SetIncomingAsset sets IncomingAsset field to given value.


### GetOutgoingAsset

`func (o *ConnectionOutput) GetOutgoingAsset() AssetOutput`

GetOutgoingAsset returns the OutgoingAsset field if non-nil, zero value otherwise.

### GetOutgoingAssetOk

`func (o *ConnectionOutput) GetOutgoingAssetOk() (*AssetOutput, bool)`

GetOutgoingAssetOk returns a tuple with the OutgoingAsset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutgoingAsset

`func (o *ConnectionOutput) SetOutgoingAsset(v AssetOutput)`

SetOutgoingAsset sets OutgoingAsset field to given value.


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


