"""
    Cloud API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 0.1.0
    Generated by: https://openapi-generator.tech
"""


import unittest

import aptible_client
from aptible_client.api.organizations_api import OrganizationsApi  # noqa: E501


class TestOrganizationsApi(unittest.TestCase):
    """OrganizationsApi unit test stubs"""

    def setUp(self):
        self.api = OrganizationsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_organization_delete(self):
        """Test case for organization_delete

        Organization Delete  # noqa: E501
        """
        pass

    def test_organization_get(self):
        """Test case for organization_get

        Organization Get  # noqa: E501
        """
        pass

    def test_organization_get_environments(self):
        """Test case for organization_get_environments

        Organization Get Environments  # noqa: E501
        """
        pass

    def test_organization_get_operations(self):
        """Test case for organization_get_operations

        Organization Get Operations  # noqa: E501
        """
        pass

    def test_organization_list(self):
        """Test case for organization_list

        Organization List  # noqa: E501
        """
        pass

    def test_organization_update(self):
        """Test case for organization_update

        Organization Update  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
