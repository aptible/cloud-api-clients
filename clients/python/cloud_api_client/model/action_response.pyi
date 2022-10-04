# coding: utf-8

"""
    Cloud API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 0.1.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from cloud_api_client import schemas  # noqa: F401


class ActionResponse(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "action_name",
            "id",
            "asset",
            "operation",
        }
        
        class properties:
            id = schemas.UUIDSchema
            action_name = schemas.StrSchema
        
            @staticmethod
            def asset() -> typing.Type['AssetOutput']:
                return AssetOutput
        
            @staticmethod
            def operation() -> typing.Type['OperationOutput']:
                return OperationOutput
            parameters = schemas.DictSchema
            output = schemas.DictSchema
            __annotations__ = {
                "id": id,
                "action_name": action_name,
                "asset": asset,
                "operation": operation,
                "parameters": parameters,
                "output": output,
            }
    
    action_name: MetaOapg.properties.action_name
    id: MetaOapg.properties.id
    asset: 'AssetOutput'
    operation: 'OperationOutput'
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["action_name"]) -> MetaOapg.properties.action_name: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["asset"]) -> 'AssetOutput': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["operation"]) -> 'OperationOutput': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["parameters"]) -> MetaOapg.properties.parameters: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["output"]) -> MetaOapg.properties.output: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "action_name", "asset", "operation", "parameters", "output", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["action_name"]) -> MetaOapg.properties.action_name: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["asset"]) -> 'AssetOutput': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["operation"]) -> 'OperationOutput': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["parameters"]) -> typing.Union[MetaOapg.properties.parameters, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["output"]) -> typing.Union[MetaOapg.properties.output, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "action_name", "asset", "operation", "parameters", "output", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        action_name: typing.Union[MetaOapg.properties.action_name, str, ],
        id: typing.Union[MetaOapg.properties.id, str, uuid.UUID, ],
        asset: 'AssetOutput',
        operation: 'OperationOutput',
        parameters: typing.Union[MetaOapg.properties.parameters, dict, frozendict.frozendict, schemas.Unset] = schemas.unset,
        output: typing.Union[MetaOapg.properties.output, dict, frozendict.frozendict, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'ActionResponse':
        return super().__new__(
            cls,
            *args,
            action_name=action_name,
            id=id,
            asset=asset,
            operation=operation,
            parameters=parameters,
            output=output,
            _configuration=_configuration,
            **kwargs,
        )

from cloud_api_client.model.asset_output import AssetOutput
from cloud_api_client.model.operation_output import OperationOutput
