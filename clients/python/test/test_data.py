"""
    Cloud API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 0.1.0
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import aptible_client
from aptible_client.model.action_output import ActionOutput
from aptible_client.model.operation_action_update import OperationActionUpdate
from aptible_client.model.operation_asset_update import OperationAssetUpdate
from aptible_client.model.operation_failure import OperationFailure
from aptible_client.model.operation_terraform_run_update import OperationTerraformRunUpdate
globals()['ActionOutput'] = ActionOutput
globals()['OperationActionUpdate'] = OperationActionUpdate
globals()['OperationAssetUpdate'] = OperationAssetUpdate
globals()['OperationFailure'] = OperationFailure
globals()['OperationTerraformRunUpdate'] = OperationTerraformRunUpdate
from aptible_client.model.data import Data


class TestData(unittest.TestCase):
    """Data unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testData(self):
        """Test Data"""
        # FIXME: construct object with mandatory attributes with example values
        # model = Data()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()
