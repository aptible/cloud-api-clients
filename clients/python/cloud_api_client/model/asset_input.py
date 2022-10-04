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


class AssetInput(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "asset_parameters",
            "asset_version",
            "asset",
        }
        
        class properties:
            asset = schemas.StrSchema
            asset_version = schemas.StrSchema
            asset_parameters = schemas.DictSchema
            __annotations__ = {
                "asset": asset,
                "asset_version": asset_version,
                "asset_parameters": asset_parameters,
            }
    
    asset_parameters: MetaOapg.properties.asset_parameters
    asset_version: MetaOapg.properties.asset_version
    asset: MetaOapg.properties.asset
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["asset"]) -> MetaOapg.properties.asset: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["asset_version"]) -> MetaOapg.properties.asset_version: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["asset_parameters"]) -> MetaOapg.properties.asset_parameters: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["asset", "asset_version", "asset_parameters", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["asset"]) -> MetaOapg.properties.asset: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["asset_version"]) -> MetaOapg.properties.asset_version: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["asset_parameters"]) -> MetaOapg.properties.asset_parameters: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["asset", "asset_version", "asset_parameters", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        asset_parameters: typing.Union[MetaOapg.properties.asset_parameters, dict, frozendict.frozendict, ],
        asset_version: typing.Union[MetaOapg.properties.asset_version, str, ],
        asset: typing.Union[MetaOapg.properties.asset, str, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'AssetInput':
        return super().__new__(
            cls,
            *args,
            asset_parameters=asset_parameters,
            asset_version=asset_version,
            asset=asset,
            _configuration=_configuration,
            **kwargs,
        )
