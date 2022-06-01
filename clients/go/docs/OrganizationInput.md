# OrganizationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**BaaStatus** | **string** |  | 
**AwsOu** | **string** |  | 
**ContactDetails** | **map[string]interface{}** |  | 

## Methods

### NewOrganizationInput

`func NewOrganizationInput(name string, baaStatus string, awsOu string, contactDetails map[string]interface{}, ) *OrganizationInput`

NewOrganizationInput instantiates a new OrganizationInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationInputWithDefaults

`func NewOrganizationInputWithDefaults() *OrganizationInput`

NewOrganizationInputWithDefaults instantiates a new OrganizationInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *OrganizationInput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OrganizationInput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OrganizationInput) SetName(v string)`

SetName sets Name field to given value.


### GetBaaStatus

`func (o *OrganizationInput) GetBaaStatus() string`

GetBaaStatus returns the BaaStatus field if non-nil, zero value otherwise.

### GetBaaStatusOk

`func (o *OrganizationInput) GetBaaStatusOk() (*string, bool)`

GetBaaStatusOk returns a tuple with the BaaStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaaStatus

`func (o *OrganizationInput) SetBaaStatus(v string)`

SetBaaStatus sets BaaStatus field to given value.


### GetAwsOu

`func (o *OrganizationInput) GetAwsOu() string`

GetAwsOu returns the AwsOu field if non-nil, zero value otherwise.

### GetAwsOuOk

`func (o *OrganizationInput) GetAwsOuOk() (*string, bool)`

GetAwsOuOk returns a tuple with the AwsOu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsOu

`func (o *OrganizationInput) SetAwsOu(v string)`

SetAwsOu sets AwsOu field to given value.


### GetContactDetails

`func (o *OrganizationInput) GetContactDetails() map[string]interface{}`

GetContactDetails returns the ContactDetails field if non-nil, zero value otherwise.

### GetContactDetailsOk

`func (o *OrganizationInput) GetContactDetailsOk() (*map[string]interface{}, bool)`

GetContactDetailsOk returns a tuple with the ContactDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactDetails

`func (o *OrganizationInput) SetContactDetails(v map[string]interface{})`

SetContactDetails sets ContactDetails field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


