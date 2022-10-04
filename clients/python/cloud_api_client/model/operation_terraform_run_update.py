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


class OperationTerraformRunUpdate(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "terraform_return_code",
            "terraform_success",
        }
        
        class properties:
            terraform_return_code = schemas.IntSchema
            terraform_success = schemas.BoolSchema
            terraform_stdout = schemas.AnyTypeSchema
            terraform_stderr = schemas.AnyTypeSchema
            __annotations__ = {
                "terraform_return_code": terraform_return_code,
                "terraform_success": terraform_success,
                "terraform_stdout": terraform_stdout,
                "terraform_stderr": terraform_stderr,
            }
    
    terraform_return_code: MetaOapg.properties.terraform_return_code
    terraform_success: MetaOapg.properties.terraform_success
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["terraform_return_code"]) -> MetaOapg.properties.terraform_return_code: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["terraform_success"]) -> MetaOapg.properties.terraform_success: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["terraform_stdout"]) -> MetaOapg.properties.terraform_stdout: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["terraform_stderr"]) -> MetaOapg.properties.terraform_stderr: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["terraform_return_code", "terraform_success", "terraform_stdout", "terraform_stderr", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["terraform_return_code"]) -> MetaOapg.properties.terraform_return_code: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["terraform_success"]) -> MetaOapg.properties.terraform_success: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["terraform_stdout"]) -> typing.Union[MetaOapg.properties.terraform_stdout, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["terraform_stderr"]) -> typing.Union[MetaOapg.properties.terraform_stderr, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["terraform_return_code", "terraform_success", "terraform_stdout", "terraform_stderr", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        terraform_return_code: typing.Union[MetaOapg.properties.terraform_return_code, decimal.Decimal, int, ],
        terraform_success: typing.Union[MetaOapg.properties.terraform_success, bool, ],
        terraform_stdout: typing.Union[MetaOapg.properties.terraform_stdout, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, schemas.Unset] = schemas.unset,
        terraform_stderr: typing.Union[MetaOapg.properties.terraform_stderr, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'OperationTerraformRunUpdate':
        return super().__new__(
            cls,
            *args,
            terraform_return_code=terraform_return_code,
            terraform_success=terraform_success,
            terraform_stdout=terraform_stdout,
            terraform_stderr=terraform_stderr,
            _configuration=_configuration,
            **kwargs,
        )
