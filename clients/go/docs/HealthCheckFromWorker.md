# HealthCheckFromWorker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnvironmentId** | **string** |  | 
**MessageId** | Pointer to **string** |  | [optional] 
**ExecutionId** | **string** |  | 
**Message** | **string** |  | 

## Methods

### NewHealthCheckFromWorker

`func NewHealthCheckFromWorker(environmentId string, executionId string, message string, ) *HealthCheckFromWorker`

NewHealthCheckFromWorker instantiates a new HealthCheckFromWorker object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHealthCheckFromWorkerWithDefaults

`func NewHealthCheckFromWorkerWithDefaults() *HealthCheckFromWorker`

NewHealthCheckFromWorkerWithDefaults instantiates a new HealthCheckFromWorker object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnvironmentId

`func (o *HealthCheckFromWorker) GetEnvironmentId() string`

GetEnvironmentId returns the EnvironmentId field if non-nil, zero value otherwise.

### GetEnvironmentIdOk

`func (o *HealthCheckFromWorker) GetEnvironmentIdOk() (*string, bool)`

GetEnvironmentIdOk returns a tuple with the EnvironmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironmentId

`func (o *HealthCheckFromWorker) SetEnvironmentId(v string)`

SetEnvironmentId sets EnvironmentId field to given value.


### GetMessageId

`func (o *HealthCheckFromWorker) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *HealthCheckFromWorker) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *HealthCheckFromWorker) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *HealthCheckFromWorker) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetExecutionId

`func (o *HealthCheckFromWorker) GetExecutionId() string`

GetExecutionId returns the ExecutionId field if non-nil, zero value otherwise.

### GetExecutionIdOk

`func (o *HealthCheckFromWorker) GetExecutionIdOk() (*string, bool)`

GetExecutionIdOk returns a tuple with the ExecutionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionId

`func (o *HealthCheckFromWorker) SetExecutionId(v string)`

SetExecutionId sets ExecutionId field to given value.


### GetMessage

`func (o *HealthCheckFromWorker) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *HealthCheckFromWorker) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *HealthCheckFromWorker) SetMessage(v string)`

SetMessage sets Message field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


