import typing
from typing import Optional


# below is done to enable testing outside the scope of the project with ease
import sys
sys.path.insert(1, '../../../clients/python')
from aptible_client.helpers import misc, logger_utils, waiters  # NOQA

if typing.TYPE_CHECKING:
    from clients.python.aptible_client.helpers import misc, logger_utils, waiters


logger = logger_utils.setup_logger("vpc")

VPC_NAME: str = "testing-aptible-client"



def main(
    environment_id: str,
    organization_id: str,
    vpc_name: Optional[str] = VPC_NAME,
    force_new: Optional[bool] = True,
    cleanup: Optional[bool] = False,
):
    logger.info("Starting the create vpc flow")
    # Initialize the API and create a session
    waiter = waiters.Waiter(
        configuration=misc.get_client_configuration(),
        environment_id=environment_id,
        logger=logger,
        organization_id=organization_id,
        force_new=force_new
    )

    if cleanup:
        cleanup_flow(waiter, vpc_name)
        return

    # Launch VPC
    waiter.get_or_launch_asset_and_wait(
        asset="aws__vpc__latest",
        asset_parameters={
            "name": vpc_name
        }
    )


def cleanup_flow(waiter: waiters.Waiter, vpc_name: str):
    # same as above, but backwards!
    waiter.find_destroy_asset_and_wait(
        asset="aws__vpc__latest",
        asset_parameters={
            "name": vpc_name
        }
    )
