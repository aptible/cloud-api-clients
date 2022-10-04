# cloud_api_client.model.operation_asset_update.OperationAssetUpdate

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
dict, frozendict.frozendict,  | frozendict.frozendict,  |  | 

### Dictionary Keys
Key | Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | ------------- | -------------
**terraform_init** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | 
**terraform_plan** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] 
**terraform_apply** | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) | [**OperationTerraformRunUpdate**](OperationTerraformRunUpdate.md) |  | [optional] 
**terraform_plan_failures** | str,  | str,  |  | [optional] 
**terraform_apply_failures** | str,  | str,  |  | [optional] 
**any_string_name** | dict, frozendict.frozendict, str, date, datetime, int, float, bool, decimal.Decimal, None, list, tuple, bytes, io.FileIO, io.BufferedReader | frozendict.frozendict, str, BoolClass, decimal.Decimal, NoneClass, tuple, bytes, FileIO | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

