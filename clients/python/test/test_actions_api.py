"""
    Cloud API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 0.1.0
    Generated by: https://openapi-generator.tech
"""


import unittest

import cloud_api_client
from cloud_api_client.api.actions_api import ActionsApi  # noqa: E501


class TestActionsApi(unittest.TestCase):
    """ActionsApi unit test stubs"""

    def setUp(self):
        self.api = ActionsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post(self):
        """Test case for create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post

        Create Action  # noqa: E501
        """
        pass

    def test_get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get(self):
        """Test case for get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get

        Get Action  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()