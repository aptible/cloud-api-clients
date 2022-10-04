# cloud_api_client.model.asset_output.AssetOutput

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**environment** | [**EnvironmentOutput**](EnvironmentOutput.md) | [**EnvironmentOutput**](EnvironmentOutput.md) |  | 
**user_defined** | bool,  | BoolClass,  |  | 
**asset_version** | str,  | str,  |  | 
**id** | str, uuid.UUID,  | str,  |  | value must be a uuid
**asset** | str,  | str,  |  | 
**current_asset_parameters** | [**AssetParametersOutput**](AssetParametersOutput.md) | [**AssetParametersOutput**](AssetParametersOutput.md) |  | 
**status** | [**AssetStatus**](AssetStatus.md) | [**AssetStatus**](AssetStatus.md) |  | 
**[connections](#connections)** | list, tuple,  | tuple,  |  | [optional] 
**[outputs](#outputs)** | dict, frozendict.frozendict,  | frozendict.frozendict,  |  | [optional] if omitted the server will use the default value of {}
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

# connections

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**ConnectionOutput**](ConnectionOutput.md) | [**ConnectionOutput**](ConnectionOutput.md) | [**ConnectionOutput**](ConnectionOutput.md) |  | 

# outputs

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | if omitted the server will use the default value of {}

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**any_string_name** | [**AssetTerraformOutput**](AssetTerraformOutput.md) | [**AssetTerraformOutput**](AssetTerraformOutput.md) | any string name can be used but the value must be the correct type | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

