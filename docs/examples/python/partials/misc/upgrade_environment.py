import typing


# below is done to enable testing outside the scope of the project with ease
import sys

import typer

sys.path.insert(1, '../../../clients/python')
from aptible_client.helpers import misc, logger_utils, waiters  # NOQA

if typing.TYPE_CHECKING:
    from clients.python.aptible_client.helpers import misc, logger_utils, waiters


logger = logger_utils.setup_logger("upgrade_environment")

VPC_NAME: str = "testing-aptible-client"


def main(
    environment_id: str,
    organization_id: str,
):
    logger.info("Starting the environment request")
    # Initialize the API and create a session
    waiter = waiters.Waiter(
        configuration=misc.get_client_configuration(),
        environment_id=environment_id,
        logger=logger,
        organization_id=organization_id,
        force_new=False
    )

    misc.update_environment(waiter.environments_api_instance, environment_id, organization_id, logger)


if __name__ == "__main__":
    typer.run(main)

