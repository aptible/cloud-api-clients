import typing
from typing import List, Optional

from glom import glom

# below is done to enable testing outside the scope of the project with ease
import sys
sys.path.insert(1, '../../../clients/python')
from aptible_client.helpers import getters, logger_utils, waiters  # NOQA

if typing.TYPE_CHECKING:
    from clients.python.aptible_client.helpers import getters, logger_utils, waiters


logger = logger_utils.setup_logger()

VPC_NAME: str = "testing-aptible-client"


def main(
    environment_id: str,
    organization_id: str,
    vpc_name: Optional[str] = VPC_NAME,
    do_unique_checks: Optional[bool] = True
):
    logger.info("Starting the create rds flow")
    configuration = getters.get_client_configuration()
    # Initialize the API and create a session
    waiter = waiters.Waiter(
        configuration=configuration,
        environment_id=environment_id,
        logger=logger,
        organization_id=organization_id,
        do_unique_checks=do_unique_checks
    )

    # Launch VPC
    waiter.get_or_launch_asset_and_wait(
        asset="aws__vpc__latest",
        asset_parameters={
            "name": vpc_name
        }
    )

    # Launch RDS database
    waiter.get_or_launch_asset_and_wait(
        asset="aws__rds__latest",
        asset_parameters={
            "name": "app-database",
            "engine": "postgres",
            "engine_version": "13",
            "vpc_name": vpc_name
        },
    )

