# AssetOutput


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** |  | 
**asset_version** | **str** |  | 
**id** | **str** |  | 
**current_asset_parameters** | [**AssetParametersOutput**](AssetParametersOutput.md) |  | 
**environment** | [**EnvironmentOutput**](EnvironmentOutput.md) |  | 
**status** | [**AssetStatus**](AssetStatus.md) |  | 
**user_defined** | **bool** |  | 
**connections** | [**[ConnectionOutput]**](ConnectionOutput.md) |  | [optional]  if omitted the server will use the default value of []
**outputs** | [**{str: (AssetTerraformOutput,)}**](AssetTerraformOutput.md) |  | [optional]  if omitted the server will use the default value of {}
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


