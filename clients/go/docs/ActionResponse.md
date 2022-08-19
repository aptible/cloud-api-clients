# ActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**ActionName** | **string** |  | 
**Asset** | [**AssetOutput**](AssetOutput.md) |  | 
**Operation** | [**OperationOutput**](OperationOutput.md) |  | 
**Parameters** | Pointer to **map[string]interface{}** |  | [optional] 
**Output** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewActionResponse

`func NewActionResponse(id string, actionName string, asset AssetOutput, operation OperationOutput, ) *ActionResponse`

NewActionResponse instantiates a new ActionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActionResponseWithDefaults

`func NewActionResponseWithDefaults() *ActionResponse`

NewActionResponseWithDefaults instantiates a new ActionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ActionResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ActionResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ActionResponse) SetId(v string)`

SetId sets Id field to given value.


### GetActionName

`func (o *ActionResponse) GetActionName() string`

GetActionName returns the ActionName field if non-nil, zero value otherwise.

### GetActionNameOk

`func (o *ActionResponse) GetActionNameOk() (*string, bool)`

GetActionNameOk returns a tuple with the ActionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionName

`func (o *ActionResponse) SetActionName(v string)`

SetActionName sets ActionName field to given value.


### GetAsset

`func (o *ActionResponse) GetAsset() AssetOutput`

GetAsset returns the Asset field if non-nil, zero value otherwise.

### GetAssetOk

`func (o *ActionResponse) GetAssetOk() (*AssetOutput, bool)`

GetAssetOk returns a tuple with the Asset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsset

`func (o *ActionResponse) SetAsset(v AssetOutput)`

SetAsset sets Asset field to given value.


### GetOperation

`func (o *ActionResponse) GetOperation() OperationOutput`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *ActionResponse) GetOperationOk() (*OperationOutput, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *ActionResponse) SetOperation(v OperationOutput)`

SetOperation sets Operation field to given value.


### GetParameters

`func (o *ActionResponse) GetParameters() map[string]interface{}`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *ActionResponse) GetParametersOk() (*map[string]interface{}, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *ActionResponse) SetParameters(v map[string]interface{})`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *ActionResponse) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetOutput

`func (o *ActionResponse) GetOutput() map[string]interface{}`

GetOutput returns the Output field if non-nil, zero value otherwise.

### GetOutputOk

`func (o *ActionResponse) GetOutputOk() (*map[string]interface{}, bool)`

GetOutputOk returns a tuple with the Output field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutput

`func (o *ActionResponse) SetOutput(v map[string]interface{})`

SetOutput sets Output field to given value.

### HasOutput

`func (o *ActionResponse) HasOutput() bool`

HasOutput returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


