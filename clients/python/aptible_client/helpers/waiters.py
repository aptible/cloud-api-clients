import logging
import time
import os
from typing import Any, Dict

from .exceptions import AssetFailedException, AssetTimeoutException, EnvironmentNotFound
from ..api.assets_api import AssetsApi
from ..api.environments_api import EnvironmentsApi
from ..api_client import ApiClient
from ..configuration import Configuration
from ..model.asset_input import AssetInput

ORGANIZATION_ID = os.getenv("ORGANIZATION_ID")
ENVIRONMENT_ID = os.getenv("ENVIRONMENT_ID")


class Waiter:
    assets_api_instance: AssetsApi
    environments_api_instance: EnvironmentsApi
    environment_id: str
    organization_id: str
    do_unique_checks: bool

    def __init__(
        self,
        configuration: Configuration,
        environment_id: str = ENVIRONMENT_ID,
        organization_id: str = ORGANIZATION_ID,
        do_unique_checks: bool = True,
        logger: logging.Logger = logging.getLogger(),
    ):
        self.environment_id = environment_id
        self.organization_id = organization_id
        self.do_unique_checks = do_unique_checks
        self.logger = logger
        self.assets_api_instance = AssetsApi(ApiClient(configuration))
        self.environments_api_instance = EnvironmentsApi(ApiClient(configuration))
        self._validate_environment_access()

    def _validate_environment_access(self):
        try:
            environment = self.environments_api_instance.environment_get(self.environment_id, self.organization_id)
            if not environment:
                raise EnvironmentNotFound(f"Unable to find environment id ({self.environment_id})"
                                          f"or cannot access it on organization {self.organization_id}")
        except Exception:
            self.logger.exception("Unable to validate environment with error")
            raise

    def get_or_launch_asset_and_wait(
        self,
        asset: str,
        asset_parameters: Dict[str, Any]
    ):
        # get if found
        # launch and wait if not
        if self.do_unique_checks:
            environment_assets = self.environments_api_instance.environment_get_assets(
                self.environment_id,
                self.organization_id
            )
            self.logger.debug("querying environment assets if created previously")
            for environment_asset in environment_assets:
                if environment_asset.asset == asset and environment_asset.asset_parameters.data == asset_parameters:
                    self.logger.info(f"found asset ({environment_asset.asset}) being searched: {environment_asset.id}")
                    return environment_asset
        return self.always_launch_asset_and_wait(asset, asset_parameters)

    def wait_for_asset_to_be_deployed(
        self,
        asset_id: str,
        environment_id: str = ENVIRONMENT_ID,
        organization_id: str = ORGANIZATION_ID,
    ) -> Dict[str, Any]:
        # Automatically break after 25 mins no matter what
        breakout_time = time.time() + (25 * 60)
        retries = 0
        max_retries = 3

        while time.time() < breakout_time and retries < max_retries:
            try:
                asset_data = self.assets_api_instance.asset_get(asset_id, environment_id, organization_id, _check_return_type=False)
                if str(asset_data['status']) == "DEPLOYED":
                    self.logger.info(f"Asset is deployed ({asset_id})")
                    return asset_data
                if str(asset_data['status']) == "FAILED":
                    raise AssetFailedException(f"Unable to create asset with ID ({asset_id}) in environment ({environment_id})")
            except Exception:
                self.logger.exception(f"Unable to create asset on environment id ({environment_id}) with exception")
                retries += 1
            time.sleep(10)
            self.logger.info(f"Still waiting for asset to be deployed: {asset_id}")

        raise AssetTimeoutException(f"Waited for asset ({asset_id}) to deploy and it took too long! (25 mins)")

    def always_launch_asset_and_wait(
        self,
        asset: str,
        asset_parameters: Dict[str, Any],
    ):
        # Launch Asset
        asset_input = AssetInput(
            asset=asset,
            asset_parameters=asset_parameters,
            asset_version=asset.split("__")[-1],
        )
        api_response = self.assets_api_instance.asset_create(
            self.environment_id,
            self.organization_id,
            asset_input,
            _check_return_type=False
        )
        asset_id = api_response.id

        # Wait until asset is ready so we can use data from it
        self.logger.info(f"Creating asset of type {asset}")
        asset_data = self.wait_for_asset_to_be_deployed(asset_id)
        return asset_data
