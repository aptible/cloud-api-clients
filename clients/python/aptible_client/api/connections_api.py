"""
    Cloud API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 0.1.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from aptible_client.api_client import ApiClient, Endpoint as _Endpoint
from aptible_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from aptible_client.model.connection_input import ConnectionInput
from aptible_client.model.connection_output import ConnectionOutput
from aptible_client.model.http_validation_error import HTTPValidationError


class ConnectionsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.connection_create_endpoint = _Endpoint(
            settings={
                'response_type': (ConnectionOutput,),
                'auth': [
                    'HTTPBearer'
                ],
                'endpoint_path': '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/',
                'operation_id': 'connection_create',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'asset_id',
                    'environment_id',
                    'organization_id',
                    'connection_input',
                ],
                'required': [
                    'asset_id',
                    'environment_id',
                    'organization_id',
                    'connection_input',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'asset_id':
                        (str,),
                    'environment_id':
                        (str,),
                    'organization_id':
                        (str,),
                    'connection_input':
                        (ConnectionInput,),
                },
                'attribute_map': {
                    'asset_id': 'asset_id',
                    'environment_id': 'environment_id',
                    'organization_id': 'organization_id',
                },
                'location_map': {
                    'asset_id': 'path',
                    'environment_id': 'path',
                    'organization_id': 'path',
                    'connection_input': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client
        )
        self.connection_delete_endpoint = _Endpoint(
            settings={
                'response_type': (bool, date, datetime, dict, float, int, list, str, none_type,),
                'auth': [
                    'HTTPBearer'
                ],
                'endpoint_path': '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id}',
                'operation_id': 'connection_delete',
                'http_method': 'DELETE',
                'servers': None,
            },
            params_map={
                'all': [
                    'asset_id',
                    'connection_id',
                    'environment_id',
                    'organization_id',
                ],
                'required': [
                    'asset_id',
                    'connection_id',
                    'environment_id',
                    'organization_id',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'asset_id':
                        (str,),
                    'connection_id':
                        (str,),
                    'environment_id':
                        (str,),
                    'organization_id':
                        (str,),
                },
                'attribute_map': {
                    'asset_id': 'asset_id',
                    'connection_id': 'connection_id',
                    'environment_id': 'environment_id',
                    'organization_id': 'organization_id',
                },
                'location_map': {
                    'asset_id': 'path',
                    'connection_id': 'path',
                    'environment_id': 'path',
                    'organization_id': 'path',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )
        self.connection_get_endpoint = _Endpoint(
            settings={
                'response_type': (ConnectionOutput,),
                'auth': [
                    'HTTPBearer'
                ],
                'endpoint_path': '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id}',
                'operation_id': 'connection_get',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'asset_id',
                    'environment_id',
                    'connection_id',
                    'organization_id',
                ],
                'required': [
                    'asset_id',
                    'environment_id',
                    'connection_id',
                    'organization_id',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'asset_id':
                        (str,),
                    'environment_id':
                        (str,),
                    'connection_id':
                        (str,),
                    'organization_id':
                        (str,),
                },
                'attribute_map': {
                    'asset_id': 'asset_id',
                    'environment_id': 'environment_id',
                    'connection_id': 'connection_id',
                    'organization_id': 'organization_id',
                },
                'location_map': {
                    'asset_id': 'path',
                    'environment_id': 'path',
                    'connection_id': 'path',
                    'organization_id': 'path',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )

    def connection_create(
        self,
        asset_id,
        environment_id,
        organization_id,
        connection_input,
        **kwargs
    ):
        """Connection Create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.connection_create(asset_id, environment_id, organization_id, connection_input, async_req=True)
        >>> result = thread.get()

        Args:
            asset_id (str):
            environment_id (str):
            organization_id (str):
            connection_input (ConnectionInput):

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            ConnectionOutput
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['asset_id'] = \
            asset_id
        kwargs['environment_id'] = \
            environment_id
        kwargs['organization_id'] = \
            organization_id
        kwargs['connection_input'] = \
            connection_input
        return self.connection_create_endpoint.call_with_http_info(**kwargs)

    def connection_delete(
        self,
        asset_id,
        connection_id,
        environment_id,
        organization_id,
        **kwargs
    ):
        """Connection Delete  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.connection_delete(asset_id, connection_id, environment_id, organization_id, async_req=True)
        >>> result = thread.get()

        Args:
            asset_id (str):
            connection_id (str):
            environment_id (str):
            organization_id (str):

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            bool, date, datetime, dict, float, int, list, str, none_type
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['asset_id'] = \
            asset_id
        kwargs['connection_id'] = \
            connection_id
        kwargs['environment_id'] = \
            environment_id
        kwargs['organization_id'] = \
            organization_id
        return self.connection_delete_endpoint.call_with_http_info(**kwargs)

    def connection_get(
        self,
        asset_id,
        environment_id,
        connection_id,
        organization_id,
        **kwargs
    ):
        """Connection Get  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.connection_get(asset_id, environment_id, connection_id, organization_id, async_req=True)
        >>> result = thread.get()

        Args:
            asset_id (str):
            environment_id (str):
            connection_id (str):
            organization_id (str):

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            ConnectionOutput
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['asset_id'] = \
            asset_id
        kwargs['environment_id'] = \
            environment_id
        kwargs['connection_id'] = \
            connection_id
        kwargs['organization_id'] = \
            organization_id
        return self.connection_get_endpoint.call_with_http_info(**kwargs)

