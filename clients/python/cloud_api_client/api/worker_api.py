"""
    Cloud API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 0.1.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from cloud_api_client.api_client import ApiClient, Endpoint as _Endpoint
from cloud_api_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from cloud_api_client.model.http_validation_error import HTTPValidationError
from cloud_api_client.model.health_check_from_worker import HealthCheckFromWorker
from cloud_api_client.model.operation_status import OperationStatus


class WorkerApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.update_operation_api_v1_operations_operation_id_operation_status_put_endpoint = _Endpoint(
            settings={
                'response_type': (bool, date, datetime, dict, float, int, list, str, none_type,),
                'auth': [
                    'HTTPBearer'
                ],
                'endpoint_path': '/api/v1/operations/{operation_id}/{operation_status}',
                'operation_id': 'update_operation_api_v1_operations_operation_id_operation_status_put',
                'http_method': 'PUT',
                'servers': None,
            },
            params_map={
                'all': [
                    'operation_id',
                    'operation_status',
                ],
                'required': [
                    'operation_id',
                    'operation_status',
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
                    'operation_id':
                        (str,),
                    'operation_status':
                        (OperationStatus,),
                },
                'attribute_map': {
                    'operation_id': 'operation_id',
                    'operation_status': 'operation_status',
                },
                'location_map': {
                    'operation_id': 'path',
                    'operation_status': 'path',
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
        self.worker_health_check_api_v1_worker_health_check_post_endpoint = _Endpoint(
            settings={
                'response_type': (bool, date, datetime, dict, float, int, list, str, none_type,),
                'auth': [],
                'endpoint_path': '/api/v1/worker/health-check',
                'operation_id': 'worker_health_check_api_v1_worker_health_check_post',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'health_check_from_worker',
                ],
                'required': [
                    'health_check_from_worker',
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
                    'health_check_from_worker':
                        (HealthCheckFromWorker,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'health_check_from_worker': 'body',
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

    def update_operation_api_v1_operations_operation_id_operation_status_put(
        self,
        operation_id,
        operation_status,
        **kwargs
    ):
        """Update Operation  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.update_operation_api_v1_operations_operation_id_operation_status_put(operation_id, operation_status, async_req=True)
        >>> result = thread.get()

        Args:
            operation_id (str):
            operation_status (OperationStatus):

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
        kwargs['operation_id'] = \
            operation_id
        kwargs['operation_status'] = \
            operation_status
        return self.update_operation_api_v1_operations_operation_id_operation_status_put_endpoint.call_with_http_info(**kwargs)

    def worker_health_check_api_v1_worker_health_check_post(
        self,
        health_check_from_worker,
        **kwargs
    ):
        """Worker Health Check  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.worker_health_check_api_v1_worker_health_check_post(health_check_from_worker, async_req=True)
        >>> result = thread.get()

        Args:
            health_check_from_worker (HealthCheckFromWorker):

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
        kwargs['health_check_from_worker'] = \
            health_check_from_worker
        return self.worker_health_check_api_v1_worker_health_check_post_endpoint.call_with_http_info(**kwargs)

