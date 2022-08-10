# OperationUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Status** | [**OperationStatus**](OperationStatus.md) |  | 
**Data** | Pointer to [**Data**](Data.md) |  | [optional] 

## Methods

### NewOperationUpdate

`func NewOperationUpdate(id string, status OperationStatus, ) *OperationUpdate`

NewOperationUpdate instantiates a new OperationUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperationUpdateWithDefaults

`func NewOperationUpdateWithDefaults() *OperationUpdate`

NewOperationUpdateWithDefaults instantiates a new OperationUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OperationUpdate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OperationUpdate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OperationUpdate) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *OperationUpdate) GetStatus() OperationStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OperationUpdate) GetStatusOk() (*OperationStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OperationUpdate) SetStatus(v OperationStatus)`

SetStatus sets Status field to given value.


### GetData

`func (o *OperationUpdate) GetData() Data`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *OperationUpdate) GetDataOk() (*Data, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *OperationUpdate) SetData(v Data)`

SetData sets Data field to given value.

### HasData

`func (o *OperationUpdate) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


