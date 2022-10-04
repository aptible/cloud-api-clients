# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

import unittest
from unittest.mock import patch

import urllib3

import cloud_api_client
from cloud_api_client.paths.api_v1_organizations_organization_id_environments_environment_id import get  # noqa: E501
from cloud_api_client import configuration, schemas, api_client

from .. import ApiTestMixin


class TestApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentId(ApiTestMixin, unittest.TestCase):
    """
    ApiV1OrganizationsOrganizationIdEnvironmentsEnvironmentId unit test stubs
        Environment Get  # noqa: E501
    """
    _configuration = configuration.Configuration()

    def setUp(self):
        used_api_client = api_client.ApiClient(configuration=self._configuration)
        self.api = get.ApiForget(api_client=used_api_client)  # noqa: E501

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
